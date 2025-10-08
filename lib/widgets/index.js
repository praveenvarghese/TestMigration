const { bus } = require("yemen");

const indexify = require("../indexify");
const widgets = indexify();

module.exports = {
	subscribeAll() {
		widgets.forEach((widget) => {
			bus.subscribe(widget);
		});
	},
};
