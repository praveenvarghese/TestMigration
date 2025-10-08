module.exports = {
	hasClass(cssClassName) {
		return this.getAttribute("class")
			.split(" ")
			.some((s) => s === cssClassName);
	},
};
