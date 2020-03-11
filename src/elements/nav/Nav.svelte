<script>
	export let segment;
</script>

<style>
	nav {
		height: 100%;
		grid-column: 5/12;
	}

	ul {
		align-items: center;
		display: flex;
		height: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin-right: 10px;
		padding-right: 10px;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>Home</a></li>
		<li><a aria-current='{segment === "politics" ? "page" : undefined}' href='politics'>Politics</a></li>
		<!-- for the news link, we're using rel=prefetch so that Sapper prefetches
		     the news data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "news" ? "page" : undefined}' href='news'>News</a></li>
	</ul>
</nav>
