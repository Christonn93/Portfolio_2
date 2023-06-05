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
					<Span gradient>Hello.</Span> I'm Christopher.
				</Heading>
				<Heading tag="h2" customSize="text-3xl font-extrabold  md:text-3xl lg:text-5xl text-center">
					I'm a front end developer from <span class="norwegian_span">Norway</span>.
				</Heading>
				<Heading tag="h3" customSize="text-2xl md:text-2xl lg:text-4xl text-center">
					I <Span gradient>build</Span> custom website solutions that help your business grow
				</Heading>
			</div>
			<div>
				<ProfileImage />
			</div>
		</div>
	</div>

</section>

<!-- STYLE -->
<style>
	.card {
		border-radius: 8px;
		border: 1px solid black;
	}

	.card:hover {
		-webkit-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
		box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
	}
</style>
