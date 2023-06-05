<script>
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="./static/images/logo/png/Black_logo_no_background.png" class="company_logo" alt="CT web logo" />
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<a href="#top" class="navLink" active={true}>Home</a>
		<a href="#about" class="navLink">About</a>
		<a href="#projects" class="navLink">Projects</a>
		<a href="#services" class="navLink">Services</a>
		<a href="#contact" class="navLink navLinkBtn bg-sky-50">Contact</a>
	</NavUl>
</Navbar>

<style>
	.navLink {
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
	}

	.navLinkBtn {
		border-color: rgba(55 65 81, 0.2);
		border-width: 1px;
		border-radius: 0.5rem;
	}
</style>
