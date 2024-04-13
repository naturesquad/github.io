<script>
	import { page } from '$app/stores';

	export let measurementID;

	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}

	gtag('js', new Date());
	$: gtag('config', measurementID, {
		page_title: $page.url.pathname,
		page_path: $page.url.pathname
	});
</script>

<svelte:head>
	<script async src={"https://www.googletagmanager.com/gtag/js?id=" + measurementID} />
</svelte:head>
