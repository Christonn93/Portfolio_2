<!-- SCRIPT -->
<script>
	import { Input, Label, Textarea, Button } from 'flowbite-svelte';
</script>

<!-- HTML -->
<section class="h-fit flex flex-col gap-5 mx-2">
	<form class="flex flex-col gap-5">
		<div>
			<Label for="name" class="mb-2">Name</Label>
			<Input type="text" id="name" placeholder="Name" size="md" />
		</div>

		<div>
			<Label for="email" class="mb-2">Email</Label>
			<Input type="email" id="email" placeholder="Email" size="md" />
		</div>

		<div>
			<Label for="message" class="mb-2">Your message</Label>
			<Textarea id="message" placeholder="Your message" rows="4" name="message" />
		</div>

		<div>
			<Button type="submit">Submit</Button>
		</div>
	</form>
</section>

<!-- STYLE -->
<style>
</style>
