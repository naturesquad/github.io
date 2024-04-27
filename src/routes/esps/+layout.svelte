<script>
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';
	import GoogleAnalytics from '$lib/GoogleAnalytics.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta charset="UTF-8">
	<meta name="keywords" content="ESPS, Evergreen Student Problem Solvers, Evergreen School District, Vancouver, Washington, WA, school, levy, budget, reduction, community, support, join, mission">
	<meta name="robots" content="index, follow">
</svelte:head>

<GoogleAnalytics measurementID="G-MBZNY2G82T" />
<header>
	<div class="top-header">
		<h1>Evergreen Student Problem Solvers</h1>
		<a href="/esps/home">
			<div id="icon">
				<span>E</span>
				<span>S</span>
				<span>P</span>
				<span>S</span>
			</div>
		</a>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.route.id === '/esps/budget' ? 'page' : undefined}><a href="/esps/budget">Budget</a></li>
			<li aria-current={$page.route.id === '/esps/levy' ? 'page' : undefined}><a href="/esps/levy">Levy</a></li>
			<li aria-current={$page.route.id === '/esps/about-us' ? 'page' : undefined}><a href="/esps/about-us">About&nbsp;Us</a></li>
			<li aria-current={$page.route.id === '/esps/join-us' ? 'page' : undefined}><a href="/esps/join-us">Join&nbsp;Us</a></li>
		</ul>
	</nav>
</header>
<main>
	<slot/>
</main>

<style>
    :root:not([data-theme=dark]), [data-theme=light] {
        --color: black;
        --primary: hsl(201, 61%, 54%);
        --accordion-border-color: black;
        view-transition-name: none;
    }

    div.top-header {
				display: flex;
        justify-content: space-around;
				padding: 1rem 3rem;
				align-items: center;
				background: #37a237;
		}

    h1 {
        flex-basis: 90%;
				font-size: min(1rem + 5vw, 3rem);
        vertical-align: middle;
				padding:0;
				margin: 0;
				text-wrap: balance;
				letter-spacing: 0.1rem;
    }

    #icon {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				text-align: center;
				line-height: 90px;
				font-size: 1.5rem;
				font-weight: bold;
				letter-spacing: -.075em;
				background: #b0b0b0;
				border: 2px solid darkgreen;
				--blue: hsl(210, 75%, 43%);
				--green: hsl(120, 85%, 30%);

				& span:nth-child(1) {
            color: var(--blue);
				}

        & span:nth-child(2) {
            color: var(--green);
        }

				& span:nth-child(3) {
            color: var(--blue);
				}

				& span:nth-child(4) {
						color: var(--green);
				}
		}

    nav {
				border-top: 2px solid darkgreen;
				border-bottom: 2px solid darkblue;
				background: var(--primary);
        display: flex;
				gap: 1rem;
        justify-content: space-around;
				margin-bottom: 2rem;
    }

    nav ul {
        display: flex;
        justify-content: space-around;
				gap: 1rem;
				width: min(36rem, 100%);
    }

    nav ul li {
        list-style: none;
				width: 9rem;
				font-size: min(5vw, 1.5rem);
				text-align: center;
				position: relative;
    }

    [aria-current='page']::after {
        --size: 8px;
        content: '';
				position: absolute;
				display:block;
				inset: auto 0;
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--primary-hover);
				border-radius: 50%;
        view-transition-name: active-page;
    }

    nav ul li a {
        text-decoration: none;
				color: black;
        font-weight: 700;
    }

    nav ul li a:hover {
				color: var(--primary-hover);
    }
    main {
        max-width: 36rem;
        margin: 1rem auto 10rem;
				padding-inline: 1rem;
    }

    :global(details[open]>summary:not([role]):not(:focus)) {
				color: unset;
		}

    :global(a) {
        font-weight: 700;
    }

		:global(html) {
				overflow-y: scroll;
    }
</style>