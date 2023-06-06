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
					<P>I bring expertise and proficiency to deliver robust and efficient solutions tailored to your specific requirements. I create clean and well-structured code that ensures the functionality, interactivity, and responsiveness of your website or application. Whether it's custom development, bug fixes, or performance optimization, I adhere to industry best practices and coding standards to ensure the highest quality outcome.</P>
				</div>
			</div>
	
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-layer-group" />
					<Heading tag="h5">Content management systems & Database</Heading>
				</div>
				<div class="mt-2">
					<P>I specialize in working with content management systems (CMS) to empower you with the ability to effortlessly manage and update your website's content. I provide seamless integration, customization, and training to enable you to easily maintain your website without technical expertise. I have expertise in database management, ensuring efficient organization, retrieval, and storage of data to support your website's dynamic content needs.</P>
				</div>
			</div>
	
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-hands-holding-circle" />
					<Heading tag="h5">SEO</Heading>
				</div>
				<div class="mt-2">
					<P>Search Engine Optimization (SEO) plays a crucial role in improving your website's visibility and driving organic traffic. I employ a holistic approach to optimize your website's content, structure, and technical elements to enhance its search engine rankings. I continuously refine and adapt your SEO strategy to keep pace with evolving search engine algorithms.</P>
				</div>
			</div>
	
			<div class="card p-4 mx-4">
				<div class="flex gap-x-3 items-center">
					<i class="fa-solid fa-pen-ruler" />
					<Heading tag="h5">Design & prototypes</Heading>
				</div>
				<div class="mt-2">
					<P>The design and prototypes phase is where I transform your vision into a visually captivating and user-centric digital experience. This iterative process allows for feedback and refinement, resulting in a final design that captures the essence of your brand while maximizing user satisfaction.</P>
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
