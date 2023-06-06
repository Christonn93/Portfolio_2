<!-- SCRIPT -->
<script>
	import { Heading, P, Span } from 'flowbite-svelte';

	import ProfileImage from '$lib/components/image/profileImage.svelte';
	import WorkTimeline from '$lib/components/timeline/workTimeline.svelte';
</script>

<!-- HTML -->
<section class="w-full" id="about">
	<div class="flex container flex-col gap-10 mx-auto"> 
		<div class="h-fit flex gap-12 items-center flex-wrap lg:flex-nowrap mx-4">
			<div class="p-5">
				<Heading tag="h1" customSize="text-4xl font-extrabold  md:text-4xl lg:text-6xl text-center">
					<Span class="gradient-text">Hello.</Span> I'm Christopher.
				</Heading>
				<Heading tag="h2" customSize="text-3xl font-extrabold  md:text-3xl lg:text-5xl text-center">
					I'm a front end developer from Norway.
				</Heading>
				<Heading tag="h3" customSize="text-2xl md:text-2xl lg:text-4xl text-center">
					I <Span class="gradient-text">build</Span> custom website solutions that help your business grow
				</Heading>
			</div>
			<div>
				<ProfileImage />
			</div>
		</div>
	</div>

</section>
