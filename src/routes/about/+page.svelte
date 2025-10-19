<script lang="ts">
  import type { PageData } from './$types';
  import type { TimedEntry, SimpleEntry } from '$lib/types/about';
  import { formatDate } from '$lib/utils/general';
  import Icon from '$lib/components/Icon.svelte';

  let { data }: { data: PageData } = $props();
  let { contact, info } = data.about;
  let { certifications, awards, skills, education, experiences, research } = info;

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      await fetch('https://formsubmit.co/delossantospol001@gmail.com', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      alert('Message sent successfully! ✓');
    } catch {
      alert('Failed to send message. Please try again.');
    }
  }
</script>

{#snippet renderEntry(entry: SimpleEntry | TimedEntry)}
  <article class="flex mb-4">
    <div class="flex-1">
      <h3 class="text-2xl font-semibold">{entry.title}</h3>
      <p class="text-lg text-gray-700">{entry.organization}</p>
      {#if entry.location}
        <p class="text-sm text-gray-500">{entry.location}</p>
      {/if}
      <p class="text-sm text-gray-600">
        {'date' in entry 
          ? formatDate(entry.date)
          : `${formatDate(entry.duration.start)} - ${entry.duration.end instanceof Date ? formatDate(entry.duration.end) : entry.duration.end}`
        }
      </p>
    </div>
    {#if entry.logo}
      <img src={entry.logo} alt={`${entry.organization} logo`} class="w-12 h-12 object-contain ml-4" />
    {/if}
  </article>
  {#if entry.description}
    <p class="mt-2">{entry.description}</p>
  {/if}
  {#if 'details' in entry && entry.details?.length}
    <ul class="mt-2 list-disc list-inside space-y-1">
      {#each entry.details as detail}
        <li class="text-gray-700">{detail}</li>
      {/each}
    </ul>
  {/if}
{/snippet}

<section id="contact" class="flex flex-col mb-12">
  <article id="me" class="flex flex-col mb-8">
    <h2 class="text-3xl font-bold mb-6">{contact.name}</h2>
    <h3 class="text-lg text-gray-700">{contact.role}</h3>
    <p>{contact.titles}</p>
    <div class="flex gap-4 mt-4">
      {#each Object.entries(contact.socialLinks) as [platform, url]}
        <a href={url} class="text-blue-500 underline">{platform}</a>
      {/each}
    </div>
  </article>

  <article id="form" class="flex flex-col">
    <h2 class="text-3xl font-bold mb-6">Contact</h2>
    <form onsubmit={handleSubmit} class="flex flex-col gap-4">
      <input type="hidden" name="_captcha" value="false" />
      <div class="flex gap-4">
        <input type="text" name="name" required placeholder="Your Name" class="flex-1 bg-gray-100 p-2 rounded border border-gray-300" />
        <input type="email" name="email" required placeholder="Your Email" class="flex-1 bg-gray-100 p-2 rounded border border-gray-300" />
      </div>
      <textarea name="message" required placeholder="Your Message" class="bg-gray-100 p-2 rounded border border-gray-300 resize-none min-h-32"></textarea>
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded">Contact Me</button>
    </form>
  </article>
</section>

<section id="research" class="flex flex-col mb-12">
  <h2 class="text-3xl font-bold mb-6">Research Interests</h2>
  <ul class="list-disc list-inside">
    {#each research as topic}
      <li>{topic}</li>
    {/each}
  </ul>
</section>

<section id="skills" class="grid grid-cols-5 gap-4 mb-12">
  {#each skills as skill}
    <div class="flex flex-col items-center gap-2 p-2">
      <Icon iconName={skill.name} iconUrl={skill.icon} level={skill.level} class="w-16 h-16"/>
      <div>{skill.name}</div>
    </div>
  {/each}
</section>

<section id="experiences" class="mb-12">
  <h2 class="text-3xl font-bold mb-6">Experience</h2>
  {#each experiences as exp}
    {@render renderEntry(exp)}
  {/each}
</section>

<section id="education" class="mb-12">
  <h2 class="text-3xl font-bold mb-6">Education</h2>
  {#each education as edu}
    {@render renderEntry(edu)}
  {/each}
</section>

{#if certifications}
  <section id="certifications" class="mb-12">
    <h2 class="text-3xl font-bold mb-6">Certifications</h2>
    {#each certifications as cert}
      {@render renderEntry(cert)}
    {/each}
  </section>
{/if}

{#if awards}
  <section id="awards" class="mb-12">
    <h2 class="text-3xl font-bold mb-6">Awards</h2>
    {#each awards as award}
      {@render renderEntry(award)}
    {/each}
  </section>
{/if}