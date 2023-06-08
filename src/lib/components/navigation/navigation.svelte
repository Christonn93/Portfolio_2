<script>
	import { Navbar, NavBrand, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import { base } from '$app/paths';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="{base}/">
		<img src="./images/logo/png/Black_logo_no_background.png" class="company_logo" alt="CT web logo" />
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<a href="#top" class="navLink" active={true}>Home</a>
		<a href="#about" class="navLink">About</a>
		<a href="#projects" class="navLink">Projects</a>
		<a href="#services" class="navLink">Services</a>
		<Button href="#contact">Contact</Button> 
	</NavUl>
</Navbar>

<style>
	.navLink {
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
	}
</style>

