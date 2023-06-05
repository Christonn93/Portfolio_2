<!-- SCRIPT -->
<script>
	import { Heading } from 'flowbite-svelte';
	import ContactForm from '$lib/components/form/contactForm.svelte';
</script>

<!-- HTML -->
<section class="w-full" id="contact">
	<div class="flex container flex-col gap-10 mx-auto">
		<div class="mx-4">
			<div class="flex container flex-col gap-10">
				<div class="flex flex-col gap-4">
					<Heading tag="h2" customSize="text-5xl font-extrabold text-center"><i class="fa-solid fa-envelope" /> Contact</Heading>
					<p class="text-center">Have a website dream? Contact me and lets make that dream come true</p>
				</div>
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<!-- STYLE -->
<style>
</style>
