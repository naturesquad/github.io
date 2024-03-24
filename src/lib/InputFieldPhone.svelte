<script>
	import { PhoneFormat } from '$lib/FormatUtils';

	export let pattern = '^\\+?[\\-.\\s\\(][0-9]{3}\\)[\\-.\\s][0-9]{3}[\\-.\\s][0-9]{4}|[0-9]{10}';

	export let value;

	$: value = PhoneFormat.format(value);

</script>

<input type="tel" autocomplete="tel" bind:value={value} {pattern} {...$$restProps}>

<style>
    input {
        flex: 1;
    }
</style>