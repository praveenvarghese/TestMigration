const { RootAction } = require("yemen");

const orElse = (a, b) => (a !== undefined ? a : b);

class Stopwatch {
	start() {
		delete this.stopTime;
		this.startTime = Date.now();
		return this;
	}
	stop() {
		// A yemen retry may not update the stopTime (restart if you want a new stop):
		if (this.stopTime === undefined) {
			this.stopTime = Date.now();
		}

		return this;
	}
	// elapsed gives the time between a start and a stop; or, if there was no stop, the elapsed time since start.
	// Keep in mind that in the latter case automatic retries will still affect elapsed, while after a stop, the
	// elapsed times will be fixed at that point.
	elapsed(name) {
		console.log(
			`Elapsed time ${name ? 'for "' + name : '"'}: ${(orElse(this.stopTime, Date.now()) -
				this.startTime) /
				1000}`
		);
		return (orElse(this.stopTime, Date.now()) - this.startTime) / 1000;
	}
}
const stopwatch = new Stopwatch();

module.exports = {
	Stopwatch: {
		/* global Stopwatch_start */
		start: () => Stopwatch_start(),
		/* global Stopwatch_stop */
		stop: () => Stopwatch_stop(),
		/* global Stopwatch_elapsed */
		elapsed: (...args) => Stopwatch_elapsed(...args),
	},

	onRegisterActions(actionRegistry) {
		actionRegistry.push(new RootAction("Stopwatch_start", () => stopwatch.start()));
		actionRegistry.push(new RootAction("Stopwatch_stop", () => stopwatch.stop()));
		actionRegistry.push(
			new RootAction("Stopwatch_elapsed", (...args) => stopwatch.elapsed(...args))
		);
	},
};
