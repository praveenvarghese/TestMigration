const $$$ = require("../selenium/3xdollar");

const indexify = require("../indexify");
const customSeleniumCommandModules = [];
const custom3xDollarCommandModules = [];
indexify((module, moduleName) => {
	if (!/3xdollar/.test(moduleName)) {
		customSeleniumCommandModules.push(module);
	} else if (/3xdollar\./.test(moduleName)) {
		custom3xDollarCommandModules.push(module);
	}
});

module.exports = {
	includeAll() {
		customSeleniumCommandModules.forEach((module) => {
			Object.keys(module).forEach((customCommandName) => {
				browser.addCommand(customCommandName, module[customCommandName]);
			});
		});

		custom3xDollarCommandModules.forEach((module) => {
			Object.keys(module).forEach((customCommandName) => {
				if (!customCommandName.startsWith("static_")) {
					$$$.addCommand(customCommandName, module[customCommandName]);
				}
			});
		});
	},
};
