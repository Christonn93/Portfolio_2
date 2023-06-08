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
				<div class="flex gap-6">
					<div class="basis-1/2">
						<ul>
							<li></li>
						</ul>
					</div>
					<div class="basis-1/2">
						<ul>
							<li></li>
						</ul>
					</div>
				</div>
				<div class="flex gap-6 justify-center">
					<a class="socialLinks" href="https://github.com/Christonn93" target="_blank"><i class="fa-brands fa-github" /></a>
					<a class="socialLinks" href="https://www.facebook.com/christonn93" target="_blank"><i class="fa-brands fa-facebook" /></a>
					<a class="socialLinks" href="linkedin.com/in/christopher-tønnesland" target="_blank"><i class="fa-brands fa-linkedin-in" /></a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- STYLE -->
<style>

.socialLinks {
	font-size: 36px;
}

</style>
