<!-- SCRIPT -->
<script>
	import { Heading, P, Card } from 'flowbite-svelte';
</script>

<!-- HTML -->
<section class="w-full" id="services">
	<div class="flex container flex-col gap-10 mx-auto">
		<div>
			<Heading tag="h3" customSize="text-5xl font-extrabold text-center"><i class="fa-solid fa-clipboard" /> Services</Heading>
		</div>
		<div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-5 gap-y-5">
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-terminal" />
					<Heading tag="h5">Code</Heading>
				</div>
				<div class="mt-2">
					<P>I can create your site from nothing. Build it line by line.</P>
				</div>
			</div>
	
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-layer-group" />
					<Heading tag="h5">Content management systems & Database</Heading>
				</div>
				<div class="mt-2">
					<P>I'm well known with using wordpress, github and Azure.</P>
				</div>
			</div>
	
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-hands-holding-circle" />
					<Heading tag="h5">SEO</Heading>
				</div>
				<div class="mt-2">
					<P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
				</div>
			</div>
	
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-pen-ruler" />
					<Heading tag="h5">Design & prototypes</Heading>
				</div>
				<div class="mt-2">
					<P>You have a design in mind, or maybe you come with blank paper. I can create and design it how ever you want.</P>
				</div>
			</div>
		</div>
	</div>

</section>

<!-- STYLE -->

<style>
	.card:hover {
		-webkit-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
		box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
	}
</style>
