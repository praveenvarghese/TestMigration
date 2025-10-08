const _ = require("lodash");
const robustify = (cb, options = {}) => {
	let result;

	options = _.extend(
		{
			numRetries: 3,
			pauseBeforeRetry: 0,
		},
		options
	);

	for (let i = 0; i < options.numRetries && result === undefined; i++) {
		if (i < options.numRetries - 1) {
			try {
				result = cb();
			} catch (e) {
				process.stdout.write("\x1b[31;1m!\x1b[0m");
				// @TODO log details somewhere
				// console.error("Robustify had to step in while executing!");
				if (options.pauseBeforeRetry) {
					browser.pause(options.pauseBeforeRetry);
				}
			}
		} else {
			result = cb();
		}
	}

	return result;
};

module.exports = robustify;
