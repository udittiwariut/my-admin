const classStringToArray = (
	classString: string | undefined,
	styles: any
): string | undefined => {
	if (!classString) {
		return;
	}
	const classArray = classString.split(" ");

	const stylesArray = classArray.map((ele) => {
		if (styles[ele]) {
			return styles[ele];
		}
		return ele;
	});

	return stylesArray.join(" ");
};

export default classStringToArray;
