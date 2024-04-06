<script>
	import pieChart from '$lib/budgetPieChart.png';
	import levyFund from '$lib/whatDoesTheLevyFund.png';
	import taxRates from '$lib/historicProjectedLocalPropertyTaxRates.png';
	import levyEqualization from '$lib/levyEqualization.png';
</script>

<svelte:head>
	<title>ESPS - Levy</title>
	<meta name="description" content="Questions and answer about the Evergreen School District levy">
</svelte:head>

<p>
	Have questions about the levy? We have answers! Here are some frequently asked questions about the levy.
	All information is sourced from the district’s <a href="https://www.evergreenps.org/levy">levy page</a>.
</p>

<details>
	<summary>What is a levy?</summary>
	<p>
		Our district is funded by two different levies: an Operations Levy, and Technology Levy. The Operations Levy funds
		educational programs and day-to-day operations of schools. Things like:
	<ul>
		<li>Teachers and staff support <span class="emoji">👨‍🏫</span>
		<li>Extracurricular activities (music, arts, athletics) <span class="emoji">🎵 🖌️ ⚽</span>
		<li>Classroom textbooks, equipment and supplies <span class="emoji">📖 🎒</span>
		<li>Student transportation <span class="emoji">🚌</span>
	</ul>
	<p>
		The separate Technology Levy funds chromebooks, software, and other technology improvements. Levies do not fund
		building improvements or construction, which are funded through bonds.
</details>

<details>
	<summary>When is the next levy?</summary>
	<p>
		The most recent Operations Levy was approved on April 26, 2022, and funds educational programs from 2023 through
		2025. The next Operations Levy will come to the public for a vote early in 2025.
</details>
<details>
	<summary>How much impact does the levy have on the budget?</summary>
	<p>Local levies and fees make up 14% of the district’s budget. The Operations Levy in particular makes up 11% of the
		district’s budget. Passing the levy has a big impact on whether programs get cut.
		<img alt="budget pie char" src={pieChart}>
</details>

<details>
	<summary>What programs does the levy fund?</summary>
	<p>The Operations Levy funds a huge variety of programs and learning activities for our students. From smaller class
		sizes and extra curricular activities to learning media and transportation, the Operations Levy supports it all.
		<img alt="what does the levy fund" src={levyFund}>
</details>

<details>
	<summary>How does the levy impact my taxes?</summary>
	<p>The Operations Levy is not a new tax. Our current Operations Levy funds educational programs through 2025. The next
		Operations Levy will fund student learning from 2026 through 2028.
	<p>Our current Operations Levy tax rate is $1.70 per $1,000 of assessed property value. When coupled with our existing Bond
		Measure and Technology Levy, the total school tax rate is $3.48 per $1,000 of assessed property value. Our current
		school tax rate is the lowest it has been since 2018.
		<img alt="historic and projected local property tax rates" src={taxRates}>
	<p>Another benefit of passing the levy, is that the state provides matching Equalization Funds for districts with
		passed
		levies. Our district is eligible for a total of $22.9 million in state Equalization Funds between 2022 and 2025,
		because our 2022 Operations Levy passed. See the table below from 2022 for a summary of the equalization funds from
		the 2022 Levy.
	<img alt="levy equalization" src={levyEqualization}>
</details>

<p class="last">Please visit the district’s <a href="https://www.evergreenps.org/levy">levy page</a> for more information.</p>

<style>
    .last {
        padding-block: 2rem;
    }

    summary {
        font-weight: bold;
        font-size: x-large;
        line-height: 3rem;
    }

    .emoji {
        font-size: 1.5rem;
        display: none;
    }

    img {
        padding-top: 2rem;
    }

    details summary::after {
        height: 3rem;
    }

</style>