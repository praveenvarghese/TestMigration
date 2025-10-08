module.exports = (object) => {
	Object.keys(object).forEach((key) => {
		global[key] = object[key];
	});
};
