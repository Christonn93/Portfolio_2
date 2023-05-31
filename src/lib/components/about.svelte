<script lang="ts">
	import { onMount } from 'svelte';
	import ProfileImage from './profileImage.svelte';

	let PROJECT_ID = 'xg9lz9f7';
	let DATASET = 'production';
	let QUERY = encodeURIComponent('*[_type == "about"]');

	// Compose the URL for your project's endpoint and add the query
	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	let name: undefined;

	onMount(async () => {
		const response = await fetch(URL);
		const data = await response.json();
		const results = data.result;
		// console.log('About results', results);

		name = results[0].name;

		return;
	});
</script>

<div class="page-container">
	<div class="flex justify-between flex-wrap">
		<div>
			<h1 class="h1 hero-heading">Web dev</h1>
			<article class="p-5">
				<p class="leading-relaxed">Hi, My name is Christopher.</p>
				<p class="leading-relaxed">I'm a web developer from Norway.</p>
			</article>
		</div>
		<ProfileImage />
	</div>
</div>

<style>

.hero-heading {
	font-size: calc(70px + (50 - 40) * ((100vw - 300px) / (1600 - 300)));
}

</style>