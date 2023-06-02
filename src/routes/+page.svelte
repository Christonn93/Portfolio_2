<script>
	import { Heading } from 'flowbite-svelte';

	import ProfileImage from '$lib/components/image/profileImage.svelte';
</script>

<div class="h-fit flex gap-x-4 gap-y-4 p-5 border">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Hello</Heading>
	<ProfileImage />
</div>
