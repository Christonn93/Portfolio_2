<!-- SCRIPT -->
<script>
	import { Heading } from 'flowbite-svelte';
	import ProfileImage from '$lib/components/image/profileImage.svelte';
</script>

<!-- HTML -->
<section class="h-fit grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-0.5 gap-x-0.5 items-center mx-2" id="about">
	<Heading tag="h1" customSize="text-5xl font-extrabold text-center">Hello</Heading>
	<ProfileImage />
</section>

<!-- STYLE -->
<style>
</style>
