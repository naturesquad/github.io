<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	export let measurementID;

	function gtag() {
		dataLayer.push(arguments);
	}

	if (browser) {
		window.dataLayer = window.dataLayer || [];
		gtag('js', new Date());
	}
	$: gtag('config', measurementID, {
		page_title: $page.url.pathname,
		page_path: $page.url.pathname
	});
</script>

<svelte:head>
	<script async src={"https://www.googletagmanager.com/gtag/js?id=" + measurementID} />
</svelte:head>
