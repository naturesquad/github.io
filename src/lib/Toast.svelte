<script>
	import { fly,fade } from 'svelte/transition';
</script>

<output class="gui-toast" in:fly={{ y: 100 }} out:fade>
	<slot/>
</output>

<style>
	output {
		background-color: #333;
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		margin-top: 0.5rem;
	}

  .gui-toast {
      --_bg-lightness: 90%;
      color: #333;
      background: hsl(0 0% var(--_bg-lightness) / 90%);
  }

  @media (prefers-color-scheme: dark) {
      .gui-toast {
          --_bg-lightness: 20%;
          color: white;
      }
  }
</style>