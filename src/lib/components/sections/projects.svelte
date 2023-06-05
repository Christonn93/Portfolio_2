<!-- SCRIPT -->
<script>
	import { Heading } from 'flowbite-svelte';

	import MediaQuery from '$lib/components/utils/MediaQuery.svelte';
	import Card from '$lib/components/cards/Card.svelte';
	import MobileCard from '$lib/components/cards/mobileCards.svelte';
</script>

<!-- HTML -->
<section class="w-full" id="projects">
	<div class="flex container flex-col gap-10 mx-auto">
		<Heading tag="h2" customSize="text-5xl font-extrabold text-center"><i class="fa-solid fa-layer-group" /> Projects</Heading>
		<MediaQuery query="(min-width: 1281px)" let:matches>
			{#if matches}
				<Card />
			{/if}
		</MediaQuery>

		<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
			{#if matches}
				<MobileCard />
			{/if}
		</MediaQuery>

		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<MobileCard />
			{/if}
		</MediaQuery>
	</div>
</section>

<!-- STYLE -->
<style>
</style>
