<script>
	import '../app.postcss';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<!-- Header -->
<Header />

<!-- Main -->
<main>
	<slot />
</main>

<!-- Footer -->
<Footer />