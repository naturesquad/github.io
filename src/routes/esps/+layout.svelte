<script>
	import espsLogo from '$lib/espsLogo.jpg';
</script>

<header>
	<div class="top-header">
		<h1>Evergreen Student Problem Solvers</h1>
		<a href="/esps/home"><img width="100" height="100" src={espsLogo} alt="Logo"></a>
	</div>
	<nav>
		<ul>
			<li><a href="/esps/budget">Budget</a></li>
			<li><a href="/esps/levy">Levy</a></li>
			<li><a href="/esps/about-us">About Us</a></li>
			<li><a href="/esps/join-us">Join Us</a></li>
		</ul>
	</nav>
</header>
<main>
	<slot/>
</main>

<style>
    div.top-header {
				display: flex;
        justify-content: space-around;
				padding: 1rem 3rem;
				align-items: center;
		}

    h1 {
        flex-basis: 90%;
				font-size: xxx-large;
        vertical-align: middle;
				padding:0;
				margin: 0;
				text-wrap: balance;
    }

    img {
        flex-basis: 10%;
        vertical-align: middle;
        mix-blend-mode: multiply;
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
    }

    nav ul li {
        list-style: none;
				width: 9rem;
				font-size: 1.5rem;
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
    }
</style>