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
							<P>Research is an essential phase where I immerse myself in your unique world to gain a deep understanding of your needs and goals. By exploring your industry, target audience, and
								competitors, I gather valuable insights that inform the entire design and development process. Through interviews, surveys, and market analysis, I uncover your pain points,
								preferences, and aspirations, ensuring that the final product is tailored to your specific requirements..</P>
						</div>
					</div>

					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-pen-ruler" />
							<Heading tag="h5">Design & prototypes</Heading>
						</div>
						<div class="mt-2">
							<P>In the design and prototypes stage, I transform the insights gained from research into tangible visual concepts. By utilizing industry-standard design tools and techniques, I create
								wireframes, mockups, and interactive prototypes that illustrate the overall structure, layout, and user flow of your website or application. This iterative process allows us to refine
								and iterate on the design until we achieve a user-centric and visually captivating representation of your brand.</P>
						</div>
					</div>

					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-hammer" />
							<Heading tag="h5">Build</Heading>
						</div>
						<div class="mt-2">
							<P>Once the design is finalized, I embark on the development phase, bringing your vision to life. With a meticulous approach to coding and adhering to best practices, I craft clean,
								efficient, and scalable code to ensure a high-performing and responsive website. Whether it's front-end development, back-end integration, or database management, I utilize modern
								technologies and frameworks to deliver a seamless and optimized user experience across all devices and platforms.</P>
						</div>
					</div>

					<div class="card p-4">
						<div class="flex gap-x-3 items-center">
							<i class="fa-solid fa-paper-plane" />
							<Heading tag="h5">Launch</Heading>
						</div>
						<div class="mt-2">
							<P>The launch phase marks the culmination of our collaborative efforts. Before going live, I conduct thorough testing and quality assurance to identify and rectify any potential issues
								or bugs. Once the final product meets our stringent standards, I work closely with you to execute a seamless deployment, ensuring a smooth transition from development to production. By
								providing ongoing support and maintenance, I ensure that your website continues to thrive post-launch, adapting to evolving market trends and user needs.</P>
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
