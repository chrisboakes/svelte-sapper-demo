<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`https://my-json-server.typicode.com/chrisboakes/svelte-sapper-demo/${params.slug}`).catch(error => {
			console.log(error);
		});
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<h2>This page is server-side rendered</h2>

<p>{post.standfirst}</p>

<div class='content'>
	{@html post.content}
</div>
