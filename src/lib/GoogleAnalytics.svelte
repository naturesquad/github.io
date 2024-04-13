<script lang="ts">
	import { page } from '$app/stores';

	export let measurementID: string;

	$: if (typeof gtag !== 'undefined') {
		gtag('config', measurementID, {
			page_title: document.title,
			page_path: $page.url.pathname
		});
	}

</script>

<svelte:head>
	<script
		async
		src={"https://www.googletagmanager.com/gtag/js?id=" + measurementID}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
	</script>
</svelte:head>
