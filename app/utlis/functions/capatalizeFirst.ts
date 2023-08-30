function capitalizeFirst(val: string) {
	return val.charAt(0).toUpperCase() + val.slice(1).replace("_", " ");
}
export default capitalizeFirst;
