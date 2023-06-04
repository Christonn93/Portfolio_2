<!-- SCRIPT -->
<script>
	import { Heading, Card } from 'flowbite-svelte';
</script>

<!-- HTML -->
<section class="h-fit flex flex-col gap-10 flex-wrap mx-2" id="services">
	<div>
		<Heading tag="h3" customSize="text-5xl font-extrabold text-center">Services</Heading>
	</div>
	<div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-5 gap-y-5">
		<div class="card p-4">
			<div class="flex gap-x-3">
				<i class="fa-solid fa-terminal" />
				<h2 class="h3">Code</h2>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea praesentium quos tenetur esse optio similique non dicta asperiores vero a laboriosam eveniet quis natus, molestiae veniam
				cumque temporibus neque!
			</p>
		</div>

		<div class="card p-4">
			<div class="flex gap-x-3">
				<i class="fa-regular fa-images" />
				<h2 class="h3">Images</h2>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea praesentium quos tenetur esse optio similique non dicta asperiores vero a laboriosam eveniet quis natus, molestiae veniam
				cumque temporibus neque!
			</p>
		</div>

		<div class="card p-4">
			<div class="flex gap-x-3">
				<i class="fa-solid fa-pen-ruler" />
				<h2 class="h3">Design</h2>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea praesentium quos tenetur esse optio similique non dicta asperiores vero a laboriosam eveniet quis natus, molestiae veniam
				cumque temporibus neque!
			</p>
		</div>

		<div class="card p-4">
			<div class="flex gap-x-3">
				<i class="fa-solid fa-list-check" />
				<h2 class="h3">Header</h2>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea praesentium quos tenetur esse optio similique non dicta asperiores vero a laboriosam eveniet quis natus, molestiae veniam
				cumque temporibus neque!
			</p>
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
