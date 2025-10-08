const { Assertion } = require("chai");

const indexify = require("../indexify");
const customAssertionModules = indexify();

module.exports = {
	includeAll() {
		customAssertionModules.forEach((module) => {
			Object.keys(module).forEach((assertionName) => {
				const assertion = module[assertionName];

				if (typeof assertion === "function") {
					Assertion.addMethod(assertionName, assertion);
				} else {
					Assertion.addChainableMethod(assertionName, ...assertion);
				}
			});
		});
	},
};
