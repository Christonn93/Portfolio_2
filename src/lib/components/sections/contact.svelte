<!-- SCRIPT -->
<script>
	import { Heading } from 'flowbite-svelte';
	import ContactForm from '$lib/components/form/contactForm.svelte';
</script>

<!-- HTML -->
<section class="h-fit flex flex-col gap-10 mx-2" id="contact">
	<Heading tag="h2" customSize="text-5xl font-extrabold text-center">Contact</Heading>
	<p class="text-center">Have a website dream? Contact me and lets make that dream come true</p>
	<ContactForm />
</section>

<!-- STYLE -->
<style>
</style>
