<script>
	import Nav from '../../elements/nav/Nav.svelte';
	import Logo from '../../elements/logo/Logo.svelte';

	export let segment;
</script>

<style>
	header {
		border-bottom: 1px solid grey;
		display: grid;
		grid-template-columns: repeat(12,1fr);
		padding: 20px;
	}
</style>

<header>
	<Logo />
	<Nav {segment}/>
</header>
