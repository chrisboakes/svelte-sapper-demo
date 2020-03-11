<script>
	import Nav from '../../elements/nav/Nav.svelte';
	import Logo from '../../elements/logo/Logo.svelte';

	export let segment;
</script>

<style>
	header {
		
	}
</style>

<header>
	<Logo />
	<Nav {segment}/>
</header>
