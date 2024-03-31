<script>
	import { page } from '$app/stores';
</script>

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
			<li><a href="/esps/budget" class:current={$page.route.id === '/esps/budget'}>Budget</a></li>
			<li><a href="/esps/levy" class:current={$page.route.id === '/esps/levy'}>Levy</a></li>
			<li><a href="/esps/about-us" class:current={$page.route.id === '/esps/about-us'}>About&nbsp;Us</a></li>
			<li><a href="/esps/join-us" class:current={$page.route.id === '/esps/join-us'}>Join&nbsp;Us</a></li>
		</ul>
	</nav>
</header>
<main>
	<slot/>
</main>

<style>
		.current {
				text-decoration: underline;
    }
    div.top-header {
				display: flex;
        justify-content: space-around;
				padding: 1rem 3rem;
				align-items: center;
		}

    h1 {
        flex-basis: 90%;
				font-size: min(1rem + 5vw, 3rem);
        vertical-align: middle;
				padding:0;
				margin: 0;
				text-wrap: balance;
    }

    #icon {
				background: lightgray;
				width: 100px;
				height: 100px;
				border-radius: 50%;
				text-align: center;
				line-height: 90px;
				font-size: 1.5rem;
				font-weight: bold;

				& span:nth-child(1) {
					color: blue;
				}

        & span:nth-child(2) {
            color: green;
        }

				& span:nth-child(3) {
						color: blue;
				}

				& span:nth-child(4) {
						color: green;
				}
		}

    nav {
				background: black;
        display: flex;
				gap: 1rem;
        justify-content: space-around;
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
    }

    nav ul li a {
        text-decoration: none;
    }

    nav ul li a:hover {
        text-decoration: underline;
    }
    main {
        max-width: 36rem;
        margin: 1rem auto 0;
				padding-inline: 1rem;
    }
</style>