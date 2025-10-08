const logia = require("logia");
const path = require("path");
const callsite = require("callsite");

const npmRoot = require("./npm-root-sync").local;
const projectRoot = path.dirname(npmRoot);

const autoLogia = () => {
	const stack = callsite();
	const requester = stack[1].getFileName();

	return logia(path.relative(projectRoot, requester).replace(/\\/g, "/"));
};

module.exports = autoLogia;
