<!-- SCRIPT -->
<script lang="ts">
	import { Heading, Spinner, Button, Card } from 'flowbite-svelte';

	import { onMount } from 'svelte';
	let PROJECT_ID = 'xg9lz9f7';
	let DATASET = 'production';
	let QUERY = encodeURIComponent('*[_type == "project"]');

	// Compose the URL for your project's endpoint and add the query
	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	let projects: any[] | null = [];

	onMount(async () => {
		const response = await fetch(URL);
		const data = await response.json();
		const results = data.result;
		console.log('Projects results', results);

		projects = results;
	});
</script>

<!-- HTML -->
<div>
	<div class="flex flex-row gap-x-6 gap-y-6 flex-wrap justify-center mx-4">
		{#each projects as project}
        <Card img={project.image.url}>
            <Heading tag="h5" class="text-black">{project.title}</Heading>
            {#if project.description}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{project.description}</p>
        {/if}
            <div class="flex gap-4">
                {#if project.linkDemo}
                <Button href={project.linkDemo} class="flex gap-2">
                    <span><i class="fa-solid fa-link" /></span>
                    <span> Live demo </span>
                </Button>
                {/if}
                <Button href={project.linkRepo} class="flex gap-2">
                    <span><i class="fa-brands fa-github" /></span>
                    <span> Github repo </span>
                </Button>
            </div>
          </Card>
		{/each}
	</div>
</div>

<!-- STYLE -->
<style>
</style>
