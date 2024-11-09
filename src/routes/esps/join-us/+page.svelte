<script>
	import ToastGroup from '$lib/ToastGroup.svelte';
	import InputFieldPhone from '$lib/InputFieldPhone.svelte';

	const schools = [
		{ type: 'Specialty Schools', name: 'Archway Academy', value: 'ARCHWAY' },
		{ type: 'Specialty Schools', name: 'Cascadia Tech', value: 'CASCADIA' },
		{ type: 'Specialty Schools', name: 'Hollings&shy;worth Academy', value: 'HOLLINGSWORTH' },
		{ type: 'Specialty Schools', name: 'Home Choice Academy', value: 'HOME_CHOICE' },
		{ type: 'High Schools', name: 'Evergreen', value: 'EVERGREEN' },
		{ type: 'High Schools', name: 'Henrietta Lacks', value: 'HENRIETTA_LACKS' },
		{ type: 'High Schools', name: 'Heritage', value: 'HERITAGE' },
		{ type: 'High Schools', name: 'Legacy', value: 'LEGACY' },
		{ type: 'High Schools', name: 'Mountain View', value: 'MOUNTAIN_VIEW' },
		{ type: 'High Schools', name: 'Union', value: 'UNION' },
		{ type: 'Middle Schools', name: 'Cascade', value: 'CASCADE' },
		{ type: 'Middle Schools', name: 'Covington', value: 'COVINGTON' },
		{ type: 'Middle Schools', name: 'Frontier', value: 'FRONTIER' },
		{ type: 'Middle Schools', name: 'Pacific', value: 'PACIFIC' },
		{ type: 'Middle Schools', name: 'Shahala', value: 'SHAHALA' },
		{ type: 'Middle Schools', name: 'Wy&apos;east', value: 'WYEAST' },
		{ type: 'Elementary Schools', name: 'Burton', value: 'BURTON' },
		{ type: 'Elementary Schools', name: 'Columbia Valley', value: 'COLUMBIA_VALLEY' },
		{ type: 'Elementary Schools', name: 'Crestline', value: 'CRESTLINE' },
		{ type: 'Elementary Schools', name: 'Ellsworth', value: 'ELLSWORTH' },
		{ type: 'Elementary Schools', name: 'Endeavour', value: 'ENDEAVOUR' },
		{ type: 'Elementary Schools', name: 'Fircrest', value: 'FIRCREST' },
		{ type: 'Elementary Schools', name: 'Fisher&apos;s Landing', value: 'FISHERS_LANDING' },
		{ type: 'Elementary Schools', name: 'Harmony', value: 'HARMONY' },
		{ type: 'Elementary Schools', name: 'Hearthwood', value: 'HEARTHWOOD' },
		{ type: 'Elementary Schools', name: 'Illahee', value: 'ILLAHEE' },
		{ type: 'Elementary Schools', name: 'Image', value: 'IMAGE' },
		{ type: 'Elementary Schools', name: 'Marrion', value: 'MARRION' },
		{ type: 'Elementary Schools', name: 'Mill Plain', value: 'MILL_PLAIN' },
		{ type: 'Elementary Schools', name: 'Orchards', value: 'ORCHARDS' },
		{ type: 'Elementary Schools', name: 'Pioneer', value: 'PIONEER' },
		{ type: 'Elementary Schools', name: 'Riverview', value: 'RIVERVIEW' },
		{ type: 'Elementary Schools', name: 'Sifton', value: 'SIFTON' },
		{ type: 'Elementary Schools', name: 'Silver Star', value: 'SILVER_STAR' }
	];
	let selectedSchools = [];

	const formID = '1FAIpQLSehOgPNCY1Ie2s158Rft-f16xH0LhViZPW0XKKuqrh_4Ucpvg';
	let form;
	let toaster;

	function onframeload() {
		gtag("event", "sign_up", { method: "Form" });
		toaster?.add('Form submitted successfully!');
		form?.reset();
		selectedSchools = [];
	}

</script>

<svelte:head>
	<title>ESPS - Join Us</title>
	<meta name="description" content="Join the Evergreen Student Problem Solvers" />
</svelte:head>

<ToastGroup bind:this={toaster} />

<iframe id="gFormsIFrame" name="gFormsIFrame" title="Google Forms" onload={onframeload}></iframe>
<form bind:this={form} method="POST" target="gFormsIFrame" action="https://docs.google.com/forms/u/0/d/e/{formID}/formResponse">
	<div>
		<label for="name">Name: *</label>
		<input required autocomplete="given-name" type="text" name="entry.2005620554" id="name">
	</div>
	<div>
		<label for="email">Email address: *</label>
		<input required autocomplete="email" type="email" name="entry.1045781291" id="email">
	</div>
	<div>
		<label for="phone">Phone (optional):</label>
		<InputFieldPhone name="entry.1166974658" id="phone"/>
	</div>
	<div>
		<label for="occupation">Are you a:</label>
		<select name="entry.1065046570" id="occupation" autocomplete="occupation">
			<option value=""></option>
			<option value="STUDENT">Student</option>
			<option value="PARENT">Parent</option>
			<option value="STAFF">Staff Member</option>
			<option value="COMMUNITY_MEMBER">Community Member</option>
		</select>
	</div>
	<div>
		<label for="schools">What school(s) are you connected with?</label>
		<details id="schools" role="list">
			<summary>{selectedSchools.length === 1 ? schools.find(school => school.value === selectedSchools[0]).name : selectedSchools.length ?  "Multiple selected" : "None"}</summary>
			<ul>
				{#each ['Elementary Schools', 'Middle Schools', 'High Schools', 'Specialty Schools'] as schoolType}
					<optGroup label={schoolType}/>
					{#each schools.filter(school => school.type === schoolType) as {name, value}, i}
						<li>
							<label>
								<input type="checkbox" id={value} name="schools" bind:group={selectedSchools} value={value}>{@html name}
							</label>
						</li>
					{/each}
				{/each}
			</ul>
		</details>
		<input type="hidden" name="entry.297901204" value={selectedSchools.join(', ')}/>
	</div>
	<label for="message">Any other feedback or comments you want to share with us:</label>
	<div>
		<textarea name="entry.839337160" id="message"></textarea>
	</div>
	<input type="submit" value="Submit">
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    /*	Put the labels to the side of the inputs*/
    div {
        display: flex;
        flex-direction: row;
        gap: 0 1rem;
				margin-bottom: .5rem;
    }

    @media (max-width: 540px) {
        form > div {
            flex-direction: column;
        }
    }

    /*	Make the labels the same width */
    label {
        width: 200px;
				font-weight: 500;
    }

    label[for=message] {
        width: 100%;
    }

    input[type="text"],
    input[type="email"],
    select,
    details[role="list"],
    textarea {
        flex: 1;
				box-sizing: border-box;
		}

		select {
				cursor: pointer;
		}

		label:has(input[name="schools"]) {
        text-wrap: unset !important;
				width:100%;
		}

		ul {
        text-wrap: unset !important;
		}

		input[type="submit"] {
			font-weight: bold;
		}

    #gFormsIFrame {
				visibility: hidden;
				position: absolute;
				width: 0;
				height: 0;
		}
</style>