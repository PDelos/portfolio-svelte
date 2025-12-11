<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import gsap from 'gsap';
	import { Flip } from 'gsap/dist/Flip';
	import { tick, onMount } from 'svelte';

	// --- Constants ---
	const ANIMATION_CONFIG = {
		duration: 0.6,
		ease: 'power3.inOut'
	};

	const MENU_ITEMS = [
		{ label: 'HOME', path: '/' },
		{ label: 'WORK', path: '/work' },
		{ label: 'ABOUT', path: '/about' }
	];

	const LANGUAGES = ['CATALAN', 'SPANISH', 'ENGLISH'];

	// --- State & Refs ---
	let isOpen = $state(false);
	let container: HTMLElement;
	let menuContent: HTMLElement;
	let hamburgerIcon: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(Flip);
	});

	// --- Logic ---
	async function toggle(open: boolean) {
		if (isOpen === open) return;

		// 1. Capture State
		gsap.killTweensOf([container, menuContent, hamburgerIcon]);
		const state = Flip.getState(container);

		// 2. Update DOM
		isOpen = open;
		await tick();

		// 3. Animate
		return new Promise<void>((resolve) => {
			if (isOpen) {
				animateOpen(state, resolve);
			} else {
				animateClose(state, resolve);
			}
		});
	}

	function animateOpen(state: Flip.FlipState, resolve: () => void) {
		gsap.set(menuContent, { display: 'flex', opacity: 0 });

		Flip.from(state, {
			...ANIMATION_CONFIG,
			onStart: () => {
				gsap.to(hamburgerIcon, { opacity: 0, duration: 0.2 });
				gsap.to(menuContent, { opacity: 1, duration: 0.4, delay: 0.2 });
			},
			onComplete: () => resolve()
		});
	}

	function animateClose(state: Flip.FlipState, resolve: () => void) {
		// Fade out content first
		gsap.to(menuContent, {
			opacity: 0,
			duration: 0.3,
			onComplete: () => { gsap.set(menuContent, { display: 'none' }); }
		});

		// Flip container back
		Flip.from(state, {
			...ANIMATION_CONFIG,
			delay: 0.1,
			onStart: () => {
				gsap.set(container, { backgroundColor: '#202020', mixBlendMode: 'normal' });
				gsap.to(hamburgerIcon, { opacity: 1, duration: 0.3, delay: 0.5 });
			},
			onComplete: () => {
				gsap.set(container, { clearProps: 'all' });
				resolve();
			}
		});
	}

	async function handleNavigation(e: MouseEvent, path: string) {
		e.stopPropagation();
		await toggle(false);
		if (page.url.pathname !== path) {
			goto(path);
		}
	}

	function handleClose(e: Event) {
		e.stopPropagation();
		toggle(false);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.stopPropagation();
			toggle(false);
		}
	}
</script>

<div
	bind:this={container}
	onclick={() => !isOpen && toggle(true)}
	class="fixed z-50 flex flex-col overflow-hidden cursor-pointer transition-colors duration-500
    {isOpen
		? 'top-0 left-0 h-auto w-auto bg-[#202020]'
		: 'top-[18px] left-[18px] h-6 w-6 bg-transparent mix-blend-difference'}"
	aria-label="Menu"
	aria-expanded={isOpen}
	role="button"
	tabindex="0"
	onkeydown={(e) => !isOpen && e.key === 'Enter' && toggle(true)}
>
	<!-- Hamburger Icon -->
	<img
		bind:this={hamburgerIcon}
		src="/icons/menu.svg"
		alt="Menu"
		class="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 object-contain brightness-0 invert"
	/>

	<!-- Menu Content -->
	<div
		bind:this={menuContent}
		class="relative hidden min-w-[300px] flex-col p-6 text-white"
	>
		<!-- Close Button -->
		<button
			type="button"
			onclick={handleClose}
			onkeydown={handleKeydown}
			class="absolute top-4 left-4 flex h-5 w-5 cursor-pointer items-center justify-center border-none bg-transparent p-0"
			aria-label="Close"
		>
			<img
				src="/icons/close.svg"
				alt="Close"
				class="h-full w-full stroke-2 object-contain invert"
			/>
		</button>

		<!-- Navigation Links -->
		<div class="mt-4 flex w-full flex-1 flex-col items-center justify-center">
			{#each MENU_ITEMS as { label, path }}
				<button
					onclick={(e) => handleNavigation(e, path)}
					class="font-instrument w-full cursor-pointer border-none bg-transparent py-1 text-center text-4xl font-bold transition-all duration-300 hover:bg-white hover:text-black hover:text-5xl"
				>
					{label}
				</button>
				<div class="my-1 h-px w-full max-w-[300px] bg-white/20"></div>
			{/each}
		</div>

		<!-- Language Footer -->
		<div class="font-instrument mt-auto flex justify-center gap-4 text-sm font-bold">
			{#each LANGUAGES as lang}
				<span>{lang}</span>
			{/each}
		</div>
	</div>
</div>