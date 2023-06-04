<!-- SCRIPT -->
<script>
	import { Heading, P, Span } from 'flowbite-svelte';
	import ProfileImage from '$lib/components/image/profileImage.svelte';
</script>

<!-- HTML -->
<section class="h-fit grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-0.5 gap-x-0.5 items-center mx-2" id="about">
	<div>
		<Heading tag="h1" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl text-center">
			<Span gradient>Hello</Span>
		</Heading>
		<div>
			<P>I'm a front end developer from Norway</P>
			<p>I build custom website solutions that help your business grow</p>
		</div>
	</div>
	<ProfileImage />
</section>

<!-- STYLE -->
<style>
</style>
