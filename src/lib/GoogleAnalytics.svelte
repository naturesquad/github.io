<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	export let measurementID;

	export function gtag() {
		window.dataLayer?.push(arguments);
	}

	$: if (browser) {
		window.gtag = gtag;
		gtag('js', new Date());
		gtag('config', measurementID, {
			page_title: $page.url.pathname,
			page_path: $page.url.pathname,
			cookie_flags: 'SameSite=None; Secure'
		});
	}
</script>

<svelte:head>
	<script async src={"https://www.googletagmanager.com/gtag/js?id=" + measurementID} />
</svelte:head>
