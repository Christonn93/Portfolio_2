<script>
	// Sections
	import About from '$lib/components/sections/about.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import Process from "$lib/components/sections/process.svelte"
	import Service from '$lib/components/sections/service.svelte';
	import Contact from '$lib/components/sections/contact.svelte';

	// Importing components
	import Divider from '$lib/components/divider/sectionDivider.svelte';
</script>

<div class="flex flex-col h-full">
	<About />
	<Process />
	<Projects />
	<Service />
	<Contact />
</div>
