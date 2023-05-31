<script lang="ts">
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

<div>
	{#if projects === null}
		Loading...
	{:else}
		<div class="inline-flex flex-row gap-x-6 flex-wrap">
			{#each projects as project}
				<div class="card-wrapper">
					<div class="card-image" style="background-image: url({project.image.url})" />
					<div class="card-info">
            {#if project.linkDemo}
						<a href={project.linkDemo} target="_blank" class="btn variant-filled-primary card-text">
							<span>
								<i class="fa-solid fa-link" />
							</span>
							<span> Live demo </span>
						</a>
            {/if}
						<a href={project.linkRepo} target="_blank" class="btn variant-filled-primary card-text">
							<span>
								<i class="fa-brands fa-github" />
							</span>
							<span> Github repo </span>
						</a>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
