#!/bin/bash
set -euo pipefail

DROPLET_IP="164.92.158.30"
REMOTE_DIR="/home/dev/Portfolio"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Check prerequisites
log_info "Checking prerequisites..."
if ! command -v docker &> /dev/null; then
    log_error "Docker is not installed"
    exit 1
fi

if ! command -v ssh &> /dev/null; then
    log_error "SSH is not installed"
    exit 1
fi

if [ ! -f "docker-compose.yml" ]; then
    log_error "docker-compose.yml not found in current directory"
    exit 1
fi

# Test SSH connection
log_info "Testing SSH connection to droplet..."
if ! ssh -o ConnectTimeout=5 -o BatchMode=yes root@$DROPLET_IP exit 2>/dev/null; then
    log_error "Cannot connect to droplet at $DROPLET_IP"
    exit 1
fi
log_success "SSH connection successful"

# Get list of services that have a 'build' directive (excluding external images)
log_info "Detecting services to build..."
SERVICES_TO_BUILD=$(docker compose config --services | while read service; do
    if docker compose config | grep -A 5 "^  $service:" | grep -q "build:"; then
        echo "$service"
    fi
done)

if [ -z "$SERVICES_TO_BUILD" ]; then
    log_warning "No services found with build configurations"
else
    log_info "Services to build: $(echo $SERVICES_TO_BUILD | tr '\n' ' ')"
fi

# Build all services that need building
if [ -n "$SERVICES_TO_BUILD" ]; then
    log_info "Building Docker images locally..."
    if docker compose build $SERVICES_TO_BUILD; then
        log_success "Docker build completed"
    else
        log_error "Docker build failed"
        exit 1
    fi

    # Get the actual image names for each built service
    log_info "Collecting built image names..."
    IMAGES_TO_TRANSFER=()
    for service in $SERVICES_TO_BUILD; do
        IMAGE_NAME=$(docker compose config | grep -A 10 "^  $service:" | grep "image:" | head -1 | awk '{print $2}')
        if [ -z "$IMAGE_NAME" ]; then
            # If no explicit image name, use the default compose naming
            IMAGE_NAME="$(basename $(pwd) | tr '[:upper:]' '[:lower:]')-${service}"
        fi
        IMAGES_TO_TRANSFER+=("$IMAGE_NAME")
        log_info "  - $service → $IMAGE_NAME"
    done

    # Transfer each image
    for IMAGE_NAME in "${IMAGES_TO_TRANSFER[@]}"; do
        log_info "Transferring $IMAGE_NAME to droplet..."
        if command -v pv &> /dev/null; then
            docker save "$IMAGE_NAME" | gzip | pv -W | ssh root@$DROPLET_IP 'gunzip | docker load'
        else
            docker save "$IMAGE_NAME" | gzip | ssh root@$DROPLET_IP 'gunzip | docker load'
        fi
        log_success "Transferred $IMAGE_NAME"
    done
fi

# Stop existing services and clean up
log_info "Stopping existing services on droplet..."
ssh root@$DROPLET_IP << EOF
    cd $REMOTE_DIR 2>/dev/null && docker compose down || true
EOF
log_success "Services stopped"

log_info "Cleaning up remote directory..."
ssh root@$DROPLET_IP << EOF
    rm -rf $REMOTE_DIR
    mkdir -p $REMOTE_DIR
EOF
log_success "Remote directory cleaned"

# Copy configuration files
log_info "Copying configuration files to droplet..."
FILES_TO_COPY="docker-compose.yml"
[ -f "Caddyfile" ] && FILES_TO_COPY="$FILES_TO_COPY Caddyfile"
[ -f ".env" ] && FILES_TO_COPY="$FILES_TO_COPY .env"

if scp $FILES_TO_COPY root@$DROPLET_IP:$REMOTE_DIR/; then
    log_success "Configuration files copied"
else
    log_error "Failed to copy configuration files"
    exit 1
fi

# Pull external images and start services
log_info "Pulling external images and starting services on droplet..."
ssh root@$DROPLET_IP << EOF
    cd $REMOTE_DIR
    docker compose pull
    docker compose up -d
    echo ""
    echo "Container status:"
    docker compose ps
EOF

log_success "Deployment complete!"
echo ""
echo "🌐 Your app is available at:"
echo "   http://$DROPLET_IP"
echo ""
log_info "To view logs, run: ssh root@$DROPLET_IP 'cd $REMOTE_DIR && docker compose logs -f'"