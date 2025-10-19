<script lang="ts">
  import type { PageData } from './$types';
  import type { TimedEntry, SimpleEntry } from '$lib/types/about';
  import { formatDate } from '$lib/utils/general';
  import Icon from '$lib/components/Icon.svelte';

  let { data }: { data: PageData } = $props();
  const { contact, info } = data.about;
  const { certifications, awards, skills, education, experiences, research } =
    info;

  async function handleSubmit(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      await fetch('https://formsubmit.co/delossantospol001@gmail.com', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      alert('Message sent successfully! ✓');
      form.reset();
    } catch {
      alert('Failed to send message. Please try again.');
    }
  }
</script>

{#snippet renderEntry(entry: SimpleEntry | TimedEntry)}
  <article class="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0 flex-1">
        <h3 class="mb-1 text-xl font-medium text-gray-900">{entry.title}</h3>
        <p class="mb-1 text-base text-gray-600">{entry.organization}</p>
        {#if entry.location}
          <p class="text-sm text-gray-500">{entry.location}</p>
        {/if}
        <p class="mt-1 text-sm text-gray-500">
          {'date' in entry
            ? formatDate(entry.date)
            : `${formatDate(entry.duration.start)} - ${entry.duration.end instanceof Date ? formatDate(entry.duration.end) : entry.duration.end}`}
        </p>
      </div>
      {#if entry.logo}
        <img
          src={entry.logo}
          alt={`${entry.organization} logo`}
          class="h-12 w-12 flex-shrink-0 object-contain"
        />
      {/if}
    </div>
    {#if entry.description}
      <p class="mt-3 leading-relaxed text-gray-700">{entry.description}</p>
    {/if}
    {#if 'details' in entry && entry.details?.length}
      <ul class="mt-3 space-y-2">
        {#each entry.details as detail}
          <li
            class="relative pl-4 text-sm text-gray-600 before:absolute before:left-0 before:text-gray-400 before:content-['•']"
          >
            {detail}
          </li>
        {/each}
      </ul>
    {/if}
  </article>
{/snippet}

<div class="space-y-16 px-6 py-12">
  <section id="contact" class="space-y-12">
    <article id="me" class="border-b border-gray-200 pb-8">
      <h1 class="mb-2 text-4xl font-bold text-gray-900">{contact.name}</h1>
      <h2 class="mb-1 text-xl text-gray-600">{contact.role}</h2>
      <p class="mb-4 text-gray-500">{contact.titles}</p>
      <div class="flex flex-wrap gap-6">
        {#each Object.entries(contact.socialLinks) as [platform, url]}
          <a
            href={url}
            class="border-b border-gray-300 text-gray-900 transition-colors hover:border-gray-900 hover:text-gray-600"
            >{platform}</a
          >
        {/each}
      </div>
    </article>

    <article id="form">
      <h2 class="mb-6 text-2xl font-semibold text-gray-900">Get in Touch</h2>
      <form onsubmit={handleSubmit} class="space-y-4">
        <input type="hidden" name="_captcha" value="false" />
        <div class="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            class="border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            class="border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          required
          placeholder="Message"
          rows="6"
          class="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </article>
  </section>

  <section id="research">
    <h2 class="mb-6 text-2xl font-semibold text-gray-900">
      Research Interests
    </h2>
    <div class="flex flex-wrap gap-2">
      {#each research as topic}
        <span class="rounded-full bg-gray-100 px-2 text-gray-700">{topic}</span>
      {/each}
    </div>
  </section>

  <section id="skills">
    <h2 class="mb-6 text-2xl font-semibold text-gray-900">Skills</h2>
    <div class="grid w-1/2 grid-cols-5 gap-6">
      {#each skills as skill}
        <div class="flex flex-col items-center gap-1">
          <Icon
            iconName={skill.name}
            iconUrl={skill.icon}
            level={skill.level}
            class="h-8 w-8"
          />
          <span class="text-center text-sm">{skill.name}</span>
        </div>
      {/each}
    </div>
  </section>

  <section id="experiences" class="border border-gray-200 p-8">
    <h2 class="mb-8 text-2xl font-semibold text-gray-900">Experience</h2>
    <div class="space-y-6">
      {#each experiences as exp}
        {@render renderEntry(exp)}
      {/each}
    </div>
  </section>

  <section id="education" class="border border-gray-200 p-8">
    <h2 class="mb-8 text-2xl font-semibold text-gray-900">Education</h2>
    <div class="space-y-6">
      {#each education as edu}
        {@render renderEntry(edu)}
      {/each}
    </div>
  </section>

  {#if certifications}
    <section id="certifications" class="border border-gray-200 p-8">
      <h2 class="mb-8 text-2xl font-semibold text-gray-900">Certifications</h2>
      <div class="space-y-6">
        {#each certifications as cert}
          {@render renderEntry(cert)}
        {/each}
      </div>
    </section>
  {/if}

  {#if awards}
    <section id="awards" class="border border-gray-200 p-8">
      <h2 class="mb-8 text-2xl font-semibold text-gray-900">Awards</h2>
      <div class="space-y-6">
        {#each awards as award}
          {@render renderEntry(award)}
        {/each}
      </div>
    </section>
  {/if}
</div>
