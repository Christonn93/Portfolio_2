<script>
	// Importing components
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import About from '$lib/components/about.svelte';
	import Connect from '$lib/components/connect.svelte';
	import Services from '$lib/components/services.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Socials from '$lib/components/socials.svelte';
	import Slider from '$lib/components/slider.svelte';

</script>

<div id="start">
	<Header />
</div>

<main class="page-container main-container">
	<section class="container" id="about">
		<About />
	</section>
	<section class="container" id="projects">
		<h3 class="h2 text-center mb-5">Projects</h3>
		<Projects />
	</section>
	<section class="container" id="stack">
		<h3 class="h2 text-center mb-5">Stack</h3>
		<Slider />
	</section>
	<section class="container" id="services">
		<h3 class="h2 text-center mb-5">Services</h3>
		<Services />
	</section>
	<section class="container" id="contact">
		<h3 class="h2 text-center mb-5">Connect</h3>
		<Connect />
		<Socials />
	</section>
	<section class="container" id="contact">
		<h3 class="h2 text-center mb-5">Testimonials</h3>
	</section>

</main>

<Footer />
