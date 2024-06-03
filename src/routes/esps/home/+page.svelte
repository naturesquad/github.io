<script>
	import Members from '$lib/espsMembers.png';
</script>
<svelte:head>
	<title>ESPS - Home</title>
	<meta name="description" content="We are the Evergreen Student Problem Solvers (ESPS), and we are trying to help our school district with budget challenges">
</svelte:head>

<div id="body">
	<div class="content">
		<p>
			Welcome! We are the Evergreen Student Problem Solvers (ESPS), and we are trying to help solve problems within our
			school district. We want to help with budget reductions, by encouraging our community to support our school
			levies.
		</p>
		<p>
			We are the future, the leaders and caretakers of tomorrow. We need our community to come together and invest in
			our education, so that we are better prepared to solve the problems of tomorrow.
		</p>
		<p>
			Whether you are a student, parent, teacher, or community member, we need your help. We welcome you to <a href="/esps/join-us">join us</a> in our mission to support our schools.
		</p>


<figure>
	<img alt="members of ESPS" src={Members}>
	</div>
</div>

<style>
    #body {
        display: flex;
        gap: 2rem;
        padding: 1rem;
    }
		figure {
				/*center it*/
				display: flex;
				justify-content: center;
				/*make space above it*/
				margin-top: 3rem;

		}


</style>