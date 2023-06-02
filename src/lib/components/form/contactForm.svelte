<!-- SCRIPT -->
<script>
	import { Input, Label, Helper, Textarea, Button, Checkbox } from 'flowbite-svelte';
</script>

<!-- HTML -->
<section class="h-fit flex flex-col gap-5 mx-2">
	<form class="flex flex-col gap-5">
		<div>
			<Label for="textarea-id" class="mb-2">Email</Label>
			<Input type="email" placeholder="Email" size="md" />
		</div>

		<div>
			<Label for="textarea-id" class="mb-2">Your message</Label>
			<Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />
		</div>

		<div>
			<Button type="submit">Submit</Button>
		</div>
	</form>
</section>

<!-- STYLE -->
<style>
</style>
