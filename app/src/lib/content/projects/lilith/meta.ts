import type { Project, ProjectTag } from '$lib/types/project';
import { cover, getTagHtml } from '$lib/utils/general';

const title = 'Lilith Security App';
const tags: ProjectTag[] = ['UX/UI', 'Research', 'Design', 'Technology'];


export default {
  title,
  description:
    'A digital platform designed to enhance safety, build trust, and dignity within a marginalized community.',
  duration: {
    start: new Date('2023-09-25'),
    end: new Date('2023-11-10')
  },
  tags,
  cover: {
    src: 'cover',
    text: `
    ${cover(title, tags)}
    <div class="text-sm">
      ${getTagHtml('Briefing', false)}
      <p class="mt-4">
        The App: a digital platform designed to enhance safety, build trust, and promote dignity within a marginalized community.<br>
        Developed as a university project to create a digital tool for a non-profit organization.<br>
        Following a research trip to Amsterdam, I studied the prostitution system in Europe, focusing on Spain and the Netherlands—two countries with contrasting legal and social frameworks.<br>
        Conducted interviews with sex workers, police officers, legislators, and social agents to gain a comprehensive view of the ecosystem.
      </p>
    </div>
    `
  },
  gallery: [
    {
      src: '01',
      text: `
      <!-- Tools -->
      <div class="text-sm">
        ${getTagHtml('Tools', false)}
        <p class="mt-4">
          Figma · Google Forms · Desk Research · Field Interviews · Affinity Mapping · Personas · User Journey Maps · Low/High-Fidelity Prototyping · Usability Testing
        </p>
      </div>

      <!-- Methods -->
      <div class="text-sm">
        ${getTagHtml('Methods', false)}
        <ul class="list-disc pl-4 mt-4">
          <li><b>Qualitative research</b> (interviews & observation)</li>
          <li><b>Comparative analysis</b> (legal and cultural context)</li>
          <li><b>UX synthesis & insight mapping</b></li>
          <li><b>User-centered ideation and wireframing</b></li>
          <li><b>Iterative design</b> validation with potential users</li>
        </ul>
      </div>

      <!-- Timeline -->
      <div class="text-sm">
        ${getTagHtml('Timeline', false)}
        <p class="mt-4">7 weeks</p>
        <p>25 September · 10 November</p>
      </div>
      `
    },
    {
      src: '02',
      text: `
      <!-- Highlights -->
      <div class="text-sm">
        ${getTagHtml('Highlights', false)}
        <p class="font-bold text-2xl mb-3 mt-4">Aesthetic & Accessibility:</p>
        <ul class="list-disc pl-4 mt-1">
          <li>Clean, readable visual identity designed for clarity and trust.</li>
          <li>Inclusive color palette and high contrast for visibility in all conditions.</li>
          <li>Typography optimized for comprehension and legibility on small screens.</li>
        </ul>
      </div>

      <!-- Information Architecture -->
      <div class="text-sm">
        <p class="font-bold text-2xl">Information Architecture:</p>
        <p class="font-thin text-2xl mb-3">Intuitive and layered navigation, built around a three-tier system:</p>
        <ul class="list-disc pl-4 mt-1">
          <li><b>Top bar:</b> access to Services, Favorites, Alert, and Chat.</li>
          <li class="pl-8"><b>Alert Boton:</b> a distinct “Call for Help” button for emergencies.</li>
          <li><b>Central panel</b> (shortcuts)<b>:</b> browse services by category — Medical, Mental Health, Educational, and Legal.</li>
          <li><b>Bottom bar:</b> access to Home page, Services, Chat and Profile.</li>
        </ul>
      </div>
      `
    },
    {
      src: '03',
      text: `
      <!-- Referral & Validation System -->
      <div class="text-sm">
        <p class="font-bold text-2xl">Referral & Validation System:</p>
        <ul class="list-disc pl-4 mt-1">
          <li>Peer-based referral network ensuring verified professionals and trusted services.</li>
          <li>Rating and feedback features that reinforce community safety.</li>
        </ul>
      </div>
      <!-- Alert -->
      <div class="text-sm">
        <p class="font-bold text-2xl">Emergency CTA:</p>
        <p class="font-thin text-2xl mb-3">Alert Button</p>
        <ul class="list-disc pl-4 mt-1">
          <li>The Call for Help button activates a <b>safety flow</b>: after a 3-second press, the app starts <b>GPS tracking and live audio recording</b>: That detects the safety word.</li>
          <li>It has an stop option</li>
          <li>The safety word is written and known only to the worker. In the wireframe, it is displayed as a coded dot, which can only be unlocked using the worker’s code or facial recognition.</li>
          <li>A discreet activation mode using a keyword allows the app to call for help without drawing attention.</li>
        </ul>
        <p class="text-lg mt-2"> Once it hears it, it calls the police services sends the location and an alarm to the NGO </p>
      </div>
      `
    },
    {
      src: '04',
      text: `
      <div class="text-sm">
        ${getTagHtml('Operation', false)}
        <p class="mt-4">
          Comparing the two reference countries, Spain and the Netherlands, I noticed that although prostitution is legal in both—more openly regulated and socially assimilated in one case, and more marginalised and hidden in the other—the core issue remains the same: social stigmatization.<br>
          For this reason, the app is built around two main pillars: on one hand, community-building and social acceptance, and on the other, safety.<br>
          The first pillar is addressed through the creation of a conscious and self-regulated community. Only a sex worker can endorse the entry of another sex worker into the platform, ensuring that all members of the app are sensitive to and aware of the realities of the profession.<br>
          Through user-to-user recommendations, each sex worker can find doctors, social workers, financial advisors, and other services that have been tested and rated by fellow professionals. This prevents them from having to interact with insensitive providers or people unfamiliar with their specific needs.<br>
          The second pillar is the safety section, designed especially for professionals who do not work in secure indoor spaces but rather on the street or in more isolated areas. With a keyword, the app sends a distress signal and location to the police, allowing them to intervene and assist if the user is in danger. This safety feature can be used by any professional in situations where support cannot be guaranteed, and it can also record sessions to be used as evidence if they face problems afterwards. <br>
        </p>
      </div>
      `
    },
    {
      src: '05',
      text: `
      <div class="text-sm">
        ${getTagHtml('User Flow', false)}
        <p class="mt-4">
          The App is designed to be <b>intuitive, fast, and emotionally safe.</b> <br>
          The user flow prioritizes <b>clarity and minimal cognitive load</b>, allowing users to find help or information under stress.
        </p>
        <ul class="list-disc pl-4 mt-1">
          <li><b>Onboarding:</b> anonymous and privacy-friendly — no personal data required beyond verification.</li>
          <li><b>Dashboard:</b> three main CTAs (Services / Favorites / Alert).</li>
          <li><b>Search:</b> quick filtering by category (Medical, Legal, Mental Health, Education).</li>
          <li><b>Access:</b> instant contact with professionals or peer chat.</li>
          <li><b>Emergency:</b> holding the alert button for 3 seconds starts live recording and location sharing.</li>
        </ul>
        <p class="text-lg">Every interaction was <b>tested to ensure thumb-friendly access, low friction, and fast emergency response.</b></p>
      </div>
      `
    },
    {
      src: '06',
      text: `
      <div class="text-sm mt-16">
        ${getTagHtml('Research', false)}
        <p class="font-bold text-2xl mt-4">Field Research & Interviews:</p>
        <p class="font-thin text-2xl mb-3">I conducted six in-depth interviews with people across the ecosystem.</p>
      </div>
      <ul class="list-disc pl-4 mt-2 text-sm">
        <li>
          <b>Sex Workers</b> (La Jonquera, Spain):<br>
          Two women described how economic pressure, stigma, and lack of alternatives kept them in the industry.<br>
          <br>
          “I couldn't get another job now. Who would hire me if they knew?”<br>
          — Interview 2, La Jonquera<br>
          <br>
          They emphasized constant fear of violence and cash dependency, lack of services sensitive to their situation
        </li>
      </ul>
      `
    },
    {
      src: '07',
      text: `
      <ul class="list-disc pl-4 mt-2 text-sm">
        <li>
          <b>Law Enforcement</b> (Mossos d'Esquadra):<br>
          Interview with Rosa Ramos, a police commander in the Empordà region.<br>
          <br>
          “When you stop seeing prostitution as a concept and meet the women behind it, you realize each has a dream and a story.”<br>
          — Rosa Ramos<br>
          <br>
          Her testimony inspired the app's balance between emergency contact and data protection.
        </li>
      </ul>

      <ul class="list-disc pl-4 mt-2 text-sm">
        <li>
          <b>Legal Framework</b> (Spain):<br>
          Conversation with Montserrat Tura, former Minister of Justice, who clarified the absence of legal regulation.<br>
          <br>
          “Not legislating doesn't stop prostitution, it just makes it more dangerous.”<br>
          — Montserrat Tura<br>
          <br>
          This insight guided the app's <b>neutral and inclusive tone</b>, avoiding judgment while focusing on harm reduction.
        </li>
      </ul>
      <ul class="list-disc pl-4 mt-2 text-sm">
        <li>
          <b>International Context</b> (Amsterdam, Netherlands):<br>
          Despite legalization, many women feared social exposure.<br>
          <br>
          “It's not the job, it's my mother's shame if she finds out.”<br>
          — Interview 5, Amsterdam<br>
          <br>
          A local social worker introduced the idea of panic buttons used in brothels, which directly inspired the digital emergency feature.
        </li>
      </ul>
      `
    },
    {
      src: '08',
      text: `
      <div class="text-sm">
        ${getTagHtml('Problem Definition', false)}
        <p class="font-bold text-2xl mt-4">Sex workers across Europe experience:</p>
      </div>
      <div class="grid grid-cols-3 gap-6 mt-6 text-sm">
        <div class="flex flex-col items-center justify-center text-center aspect-square bg-[var(--color-tag)] rounded-full w-full px-5">
          <b>Physical insecurity</b> No quick, discreet alert system
        </div>
        <div class="flex flex-col items-center justify-center text-center aspect-square bg-[var(--color-tag)] rounded-full w-full px-5">
          <b>Disconnection from public services</b> Distrust due to discrimination
        </div>
        <div class="flex flex-col items-center justify-center text-center aspect-square bg-[var(--color-tag)] rounded-full w-full px-5">
          <b>Social isolation</b> Lack of safe spaces for communication
        </div>
      </div>
      <div class="grid grid-cols-3 gap-6 mt-6 text-sm">
        <div class="flex flex-col items-center justify-center text-center aspect-square bg-[var(--color-tag)] rounded-full w-full px-5">
          <b>Stigma and privacy fear</b> High risk of exposure
        </div>
        <div class="flex flex-col items-center justify-center text-center aspect-square bg-[var(--color-tag)] rounded-full w-full px-5">
          <b>Digital exclusion</b> Few or no inclusive tools designed for them
        </div>
        <div/>
      </div>
      `
    },
    {
      src: '09',
      text: `
      <!-- Solution -->
      <div class="text-sm">
        ${getTagHtml('Solution', false)}
        <p class="font-bold text-2xl mt-4">App</p>
        <p class="font-thin text-2xl mb-3">
          A digital platform designed with and for sex workers, combining <b>security, community, and accessibility</b>.
        </p>
      </div>

      <!-- Core Features -->
      <div class="text-sm">
        <p class="font-bold">Core Features</p>
        <ul class="list-disc pl-4 mt-1 space-y-1">
          <li><b>Service Directory:</b> access to trusted doctors, lawyers, and counselors.</li>
          <li><b>Favorites:</b> personalized list of frequently used contacts.</li>
          <li><b>Security Button:</b> emergency alert that shares location and records evidence.</li>
          <li><b>Community Chat:</b> encrypted space for peer support and information exchange.</li>
        </ul>
      </div>

      <!-- Design Principles -->
      <div class="text-sm mt-6">
        <p class="font-bold">Design Principles</p>
        <ul class="list-disc pl-4 mt-1 space-y-1">
          <li><b>Anonymity:</b> minimal data, encrypted storage.</li>
          <li><b>Empathy:</b> neutral, non-stigmatizing tone and visuals.</li>
          <li><b>Accessibility:</b> large touch targets, simple icons, clear hierarchy.</li>
          <li><b>Safety-first logic:</b> designed for use under stress, one-hand navigation.</li>
        </ul>
      </div>

      <!-- Conclusions -->
      <div class="text-sm mt-12">
        ${getTagHtml('Conclusions', false)}
        <p class="mt-4">
          The App taught me that <b>UX design can become a form of social care</b>.<br>
          When technology listens with empathy, it can protect, include, and empower.
        </p>
        <p class="italic mt-4">“Design isn’t just about usability — it’s about humanity.”</p>
      </div>
      `
    }
  ]
} satisfies Project;
