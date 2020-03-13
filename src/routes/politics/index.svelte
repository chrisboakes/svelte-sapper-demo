<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch('https://my-json-server.typicode.com/chrisboakes/svelte-sapper-demo/politics-articles')
		const data = await res.json();

		return {
			posts: data
		}
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Politics</title>
</svelte:head>

<h1>Politics</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='{post.section}/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
