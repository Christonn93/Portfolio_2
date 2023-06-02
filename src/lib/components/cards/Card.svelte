<script lang="ts">
	import { Heading } from 'flowbite-svelte';

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
		<div class="flex flex-row gap-x-6 gap-y-6 flex-wrap justify-center mx-2">
			{#each projects as project}
				<div class="card-wrapper h-80">
					<div class="card-image" style="background-image: url({project.image.url})" />
					<div class="card-info">
						<Heading tag="h5" class="text-white">{project.title}</Heading>
						{#if project.description}
							<p class="prose">{project.description}</p>
						{/if}
						<div>
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
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	/* Card */
	.card-wrapper {
		width: 100%;

		max-width: 420px;
		border-radius: 15px;
		padding: 1.5rem;
		background: white;
		position: relative;
		display: flex;
		align-items: flex-end;
		transition: 0.4s ease-out;
		box-shadow: 0 19px 38px rgba(0, 0, 0, 0), 0 15px 12px rgba(0, 0, 0, 0.2);
	}

	.card-wrapper .card-image {
		width: 100%;
		height: 100%;
		background-color: #000;
		background-size: cover;
		background-position: center center;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
	}

	.card-wrapper .card-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-content: center;
		align-items: center;
		gap: 20px;

		width: 100%;

		position: relative;
		z-index: 3;
		color: white;
		opacity: 0;
		transform: translateY(30px);
		transition: 0.9s;
	}

	.card-wrapper:hover:before {
		opacity: 1;
	}

	.card-wrapper:hover .card-info {
		opacity: 1;
		transform: translateY(0px);
	}

	.card-wrapper:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background: rgba(0, 0, 0, 0.7);
		z-index: 2;
		transition: 0.9s;
		opacity: 0.2;
	}
</style>
