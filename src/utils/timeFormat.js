export const formatTimeString = (value: String): String => {
	let values = value.match(/(\d+)(?=[HMS])/g) || [];

	let result = values.map((val) => {
		if (val.length < 2) {
			val = "0" + val;
		}
		return val;
	}).join(":")

    return result;
};
