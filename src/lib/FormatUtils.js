class PhoneFormatter {
	format(value) {
		if (value) {
			let cleanValue = value.replace(/\D/g, "");
			if (cleanValue.length > 10) {
				cleanValue = cleanValue.substring(1);
			}
			let digits = cleanValue.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
			let formattedValue = "";
			if (digits[1]) {
				formattedValue += "(" + digits[1];
			}
			if (digits[2]) {
				formattedValue += ") " + digits[2];
			}
			if (digits[3]) {
				formattedValue += "-" + digits[3];
			}
			return formattedValue;
		}
		return "";
	}
}

export const PhoneFormat = new PhoneFormatter();