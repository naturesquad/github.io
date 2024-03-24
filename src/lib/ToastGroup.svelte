<script>
	import Toast from './Toast.svelte';

	let toasts = [];

	export function add(toast) {
		toasts = [...toasts, toast];
		setTimeout(() => {
			toasts = toasts.filter(t => t !== toast);
		}, 3000);
	}
</script>

<section class="gui-toast-group">
	{#each toasts as toast}
		<Toast>{toast}</Toast>
	{/each}
</section>

<style>
	.gui-toast-group {
			position: fixed;
			bottom: 0;
			right: 0;
			display: flex;
      flex-direction: column;
			align-items: flex-end;
			padding: 1rem;
			pointer-events: none;
	}
</style>