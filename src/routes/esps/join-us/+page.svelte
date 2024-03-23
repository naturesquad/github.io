<form>
	<div>
		<label for="name">Name:</label>
		<input autocomplete="given-name" type="text" name="name" id="name">
	</div>
	<div>
		<label for="email">Email address:</label>
		<input autocomplete="email" type="email" name="email" id="email">
	</div>
	<div>
		<label for="phone">Phone number: (optional)</label>
		<input autocomplete="tel" type="tel" name="phone" id="phone">
	</div>
	<div>
		<label for="occupation">Are you a:</label>
		<select name="occupation" id="occupation" autocomplete="occupation">
			<option value=""></option>
			<option value="student">Student</option>
			<option value="parent">Parent</option>
			<option value="staff">Staff / Faculty</option>
			<option value="community-member">Community Member</option>
		</select>
	</div>
	<div>
		<label for="schools">What school(s) (if any) are you connected with?</label>
		<select autocomplete="school" name="schools" id="schools">
			<option value="none">None</option>
			<optgroup label="Specialty Schools">
				<option value="hollingsworth">Hollingsworth Academy</option>
				<option value="cascadia">Cascadia Tech</option>
				<option value="home-choice">Home Choice Academy</option>
				<option value="archway">Archway Academy</option>
			</optgroup>
			<optgroup label="High Schools">
				<option value="evergreen">Evergreen</option>
				<option value="henrietta-lacks">Henrietta Lacks Health and Bioscience</option>
				<option value="heritage">Heritage</option>
				<option value="legacy">Legacy</option>
				<option value="mountain-view">Mountain View</option>
				<option value="union">Union</option>
			</optgroup>
			<optgroup label="Middle Schools">
				<option value="cascade">Cascade</option>
				<option value="covington">Covington</option>
				<option value="frontier">Frontier</option>
				<option value="pacific">Pacific</option>
				<option value="shahala">Shahala</option>
				<option value="wyeast">Wy'east</option>
			</optgroup>
			<optgroup label="Elementary Schools">
				<option value="burton">Burton</option>
				<option value="columbia-valley">Columbia Valley</option>
				<option value="crestline">Crestline</option>
				<option value="ellsworth">Ellsworth</option>
				<option value="endeavour">Endeavour</option>
				<option value="fircrest">Fircrest</option>
				<option value="fishers-landing">Fisher's Landing</option>
				<option value="harmony">Harmony</option>
				<option value="hearthwood">Hearthwood</option>
				<option value="illahee">Illahee</option>
				<option value="image">Image</option>
				<option value="marrion">Marrion</option>
				<option value="mill-plain">Mill Plain</option>
				<option value="orchards">Orchards</option>
				<option value="pioneer">Pioneer</option>
				<option value="riverview">Riverview</option>
				<option value="sifton">Sifton</option>
				<option value="silver-star">Silver Star</option>
			</optgroup>
		</select>
	</div>
	<label for="message">Any other feedback or comments you want to share with us:</label>
	<div>
		<textarea name="message" id="message"></textarea>
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