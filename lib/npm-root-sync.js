const execSync = require("child_process").execSync;
const exec = (...args) =>
	execSync(...args)
		.toString()
		.trim();

module.exports = {
	local: exec("npm root"),
	global: exec("npm root -g"),
};
