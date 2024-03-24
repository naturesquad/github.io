<script>
	import { supabase } from '$lib/supabaseClient.js';
	import ToastGroup from '$lib/ToastGroup.svelte';

	function handleSubmit(event) {
		const data = Object.fromEntries(new FormData(event.target).entries());

		Object.keys(data).forEach(key => {
			if (!data[key]) {
				delete data[key];
			}
		});

		// insert a new contact form
		supabase.from('contact_form').insert([data]).then(({ error }) => {
			if (error) {
				/* if error contains "contact_form_email_idx" */
				if (error.message.includes('contact_form_email_idx')) {
					toaster.add('Error submitting form: Email address already exists');
				} else {
					toaster.add('Error submitting form: ' + error.message);
				}
			} else {
				toaster.add('Form submitted successfully!');
				event.target.reset();
			}
		});
	}

	let toaster;
</script>

<ToastGroup bind:this={toaster} />
<form method="POST" on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="name">Name: *</label>
		<input required autocomplete="given-name" type="text" name="name" id="name">
	</div>
	<div>
		<label for="email">Email address: *</label>
		<input required autocomplete="email" type="email" name="email" id="email">
	</div>
	<div>
		<label for="phone">Phone number: (optional)</label>
		<input autocomplete="tel" type="tel" name="phone" id="phone">
	</div>
	<div>
		<label for="occupation">Are you a:</label>
		<select name="occupation" id="occupation" autocomplete="occupation">
			<option value=""></option>
			<option value="STUDENT">Student</option>
			<option value="PARENT">Parent</option>
			<option value="STAFF">Staff / Faculty</option>
			<option value="COMMUNITY_MEMBER">Community Member</option>
		</select>
	</div>
	<div>
		<label for="school">What school(s) (if any) are you connected with?</label>
		<select autocomplete="school" name="school" id="school">
			<option value="">None</option>
			<optgroup label="Specialty Schools">
				<option value="HOLLINGSWORTH">Hollingsworth Academy</option>
				<option value="CASCADIA">Cascadia Tech</option>
				<option value="HOME_CHOICE">Home Choice Academy</option>
				<option value="ARCHWAY">Archway Academy</option>
			</optgroup>
			<optgroup label="High Schools">
				<option value="EVERGREEN">Evergreen</option>
				<option value="HENRIETTA_LACKS">Henrietta Lacks Health and Bioscience</option>
				<option value="HERITAGE">Heritage</option>
				<option value="LEGACY">Legacy</option>
				<option value="MOUNTAIN_VIEW">Mountain View</option>
				<option value="UNION">Union</option>
			</optgroup>
			<optgroup label="Middle Schools">
				<option value="CASCADE">Cascade</option>
				<option value="COVINGTON">Covington</option>
				<option value="FRONTIER">Frontier</option>
				<option value="PACIFIC">Pacific</option>
				<option value="SHAHALA">Shahala</option>
				<option value="WYEAST">Wy'east</option>
			</optgroup>
			<optgroup label="Elementary Schools">
				<option value="BURTON">Burton</option>
				<option value="COLUMBIA_VALLEY">Columbia Valley</option>
				<option value="CRESTLINE">Crestline</option>
				<option value="ELLSWORTH">Ellsworth</option>
				<option value="ENDEAVOUR">Endeavour</option>
				<option value="FIRCREST">Fircrest</option>
				<option value="FISHERS_LANDING">Fisher's Landing</option>
				<option value="HARMONY">Harmony</option>
				<option value="HEARTHWOOD">Hearthwood</option>
				<option value="ILLAHEE">Illahee</option>
				<option value="IMAGE">Image</option>
				<option value="MARRION">Marrion</option>
				<option value="MILL_PLAIN">Mill Plain</option>
				<option value="ORCHARDS">Orchards</option>
				<option value="PIONEER">Pioneer</option>
				<option value="RIVERVIEW">Riverview</option>
				<option value="SIFTON">Sifton</option>
				<option value="SILVER_STAR">Silver Star</option>
			</optgroup>
		</select>
	</div>
	<label for="message">Any other feedback or comments you want to share with us:</label>
	<div>
		<textarea name="message" id="message"></textarea>
	</div>
	<input type="submit" value="Submit">
</form>


<!--
postgreSQL

CREATE TYPE occupation AS ENUM (
	'STUDENT',
	'PARENT',
	'STAFF',
	'COMMUNITY_MEMBER'
);

CREATE TYPE school AS ENUM (
	'NONE',
	'HOLLINGSWORTH',
	'CASCADIA',
	'HOME_CHOICE',
	'ARCHWAY',
	'EVERGREEN',
	'HENRIETTA_LACKS',
	'HERITAGE',
	'LEGACY',
	'MOUNTAIN_VIEW',
	'UNION',
	'CASCADE',
	'COVINGTON',
	'FRONTIER',
	'PACIFIC',
	'SHAHALA',
	'WYEAST',
	'BURTON',
	'COLUMBIA_VALLEY',
	'CRESTLINE',
	'ELLSWORTH',
	'ENDEAVOUR',
	'FIRCREST',
	'FISHERS_LANDING',
	'HARMONY',
	'HEARTHWOOD',
	'ILLAHEE',
	'IMAGE',
	'MARRION',
	'MILL_PLAIN',
	'ORCHARDS',
	'PIONEER',
	'RIVERVIEW',
	'SIFTON',
	'SILVER_STAR'
);

CREATE DOMAIN PHONE_NUMBER AS VARCHAR(10) CHECK(VALUE ~ '^[0-9]{10}$');

CREATE TABLE contact_form (
  contact_form_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone PHONE_NUMBER,
  occupation OCCUPATION,
  school SCHOOL,
  message TEXT
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-->


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
        gap: 1rem;
    }

    /*	Make the labels the same width */
    label {
        width: 200px;
    }

    label[for=message] {
        width: 100%;
    }

    /*	Make the text input and text area full width */
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select,
    textarea {
        flex: 1;
    }

</style>