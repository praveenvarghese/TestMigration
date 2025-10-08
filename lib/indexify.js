const fs = require("fs");
const path = require("path");
const callsite = require("callsite");

// Automatically requires all modules in a directory (excluding index.js)
// for generic loading of plugins.
//
// Example index.js:
//		const {Assertion} = require('chai');
//
//		const indexify = require('../indexify');
//		const customAssertionModules = indexify();
//
//		module.exports = {
//			includeAll() {
//				customAssertionModules.forEach((module) => {
//					Object.keys(module).forEach((assertionName) => {
//						Assertion.addMethod(assertionName, module[assertionName]);
//					});
//				});
//			},
//		};

const indexify = (cb) => {
	const stack = callsite();
	const requester = stack[1].getFileName();
	const dirname = path.dirname(requester);

	if (!cb) {
		cb = (module) => module;
	}

	return fs
		.readdirSync(dirname)
		.filter((fileName) => /\.js$/i.test(fileName))
		.filter((fileName) => fileName !== "index.js")
		.map((fileName) => fileName.replace(/\.[^.]*$/, ""))
		.map((moduleName) => cb(require(`${dirname}/${moduleName}`), moduleName));
};

module.exports = indexify;
