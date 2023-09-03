export const themes = {
	LIGHT: "light",
	Dark: "dark",
};
const classHelperFn = (base: string, theme: string, style: any) => {
	if (theme === themes.LIGHT) return `${base} ${style.light}`;
	if (theme === themes.Dark) return `${base} ${style.dark}`;
};

export default classHelperFn;
