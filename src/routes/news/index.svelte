<script>
	let posts = [];

	// Process client-side
	if (process.browser) {
		async function getLists() {
			const res = await fetch('https://my-json-server.typicode.com/chrisboakes/svelte-sapper-demo/news-articles')
			const data = await res.json();

			return {
				posts: data
			}
		}
		
		getLists().then((results) => {
			posts = results.posts;
		});
	}
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<h1>News</h1>

<h2>This is a static page with a call for content client-side</h2>

<ul>
	{#if posts}
		{#each posts as post}
			<li><a href='{post.section}/{post.slug}'>{post.title}</a></li>
		{/each}
	{/if}
</ul>
