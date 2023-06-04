<script>
	// Sections
	import About from '$lib/components/sections/about.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import Service from '$lib/components/sections/service.svelte';
	import Contact from '$lib/components/sections/contact.svelte';

	// Importing components
	import ScrollToTop from './../lib/components/buttons/scrollToTop.svelte';
</script>

<div class="flex flex-col gap-40 h-full">
	<About />
	<Projects />
	<Service />
	<Contact />
</div>
