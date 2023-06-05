<!-- SCRIPT -->
<script>
	import { Heading, P, Span } from 'flowbite-svelte';
</script>

<!-- HTML -->
<section class="w-full" id="process">
	<div class="flex container flex-col gap-10 mx-auto">
		<div class="flex flex-col gap-16 justify-center mx-4">
			<div class="flex gap-16 flex-wrap lg:flex-nowrap justify-center">
				<div class="w-3/5">
					<Heading tag="h3" customSize="text-5xl font-extrabold text-center"><i class="fa-solid fa-road" /> My process</Heading>
				</div>
				<div class="flex flex-col gap-3 mx-2">
					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-glasses" />
							<Heading tag="h6">Research</Heading>
						</div>
						<div class="mt-2">
							<P>This is the phase where I dive deep into your world and get to know you.</P>
							<P>Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</P>
						</div>
					</div>

					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-pen-ruler" />
							<Heading tag="h5">Design & prototypes</Heading>
						</div>
						<div class="mt-2">
							<P
								>I take what I’ve learned about you & craft a bespoke website that’s tailored to meet your unique needs, all while accurately representing your brand & keeping things aesthetically
								pleasing & useable for your audience.</P
							>
						</div>
					</div>

					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-hammer" />
							<Heading tag="h5">Build</Heading>
						</div>
						<div class="mt-2">
							<P>Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</P>
						</div>
					</div>

					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-paper-plane" />
							<Heading tag="h5">Launch</Heading>
						</div>
						<div class="mt-2">
							<P
								>After I’ve completed the build and double checked everything alongside your approval, it’s time to launch your website. In this phase I will also provide some training videos on how
								you can add content to your website so you can do it yourself.</P
							>
						</div>
					</div>
				</div>
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
