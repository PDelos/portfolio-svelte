<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { contact, info } = data.about;
	let { skills, education, certifications, experiences, awards } = info;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		
		try {
			await fetch('https://formsubmit.co/delossantospol001@gmail.com', {
				method: 'POST',
				body: new FormData(form),
				headers: { 'Accept': 'application/json' }
			});
			alert('Message sent successfully! ✓');
		} catch {
			alert('Failed to send message. Please try again.');
		}
	}
</script>

<section id="contact">
	<h2>{contact.name}</h2>
	{#each Object.entries(contact.socialLinks) as [platform, url]}
		<p><a href={url} target="_blank" rel="noopener">{platform}</a></p>
	{/each}
</section>

<section id="contact">
	<h2>Contact</h2>
	<form onsubmit={handleSubmit}>
		<input type="hidden" name="_captcha" value="false">
		<label>
			Your name:
			<input type="text" name="name" required>
		</label>
		<label>
			Your email:
			<input type="email" name="email" required>
		</label>
		<label>
			Message:
			<textarea name="message" required></textarea>
		</label>
		<button type="submit">Send</button>
	</form>
</section>

<section id="education"></section>

<section id="experiences"></section>

<section id="skills"></section>

{#if certifications}
<section id="certifications"></section>
{/if}

{#if awards}
<section id="awards"></section>
{/if}
