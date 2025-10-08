const autoLogia = require("./auto-logia");

const { bus } = require("yemen");
const proxyMethodMissing = require("proxy-method-missing");
const callsite = require("callsite");
const uuidV4 = require("uuid/v4");

let scenarioId = "none";
const createFrameworkLogger = (logiaLogger) =>
	proxyMethodMissing({}, (name, ...args) => {
		const stack = callsite();
		const functionName = stack[2].getFunctionName() || "anonymous";
		const lineNum = stack[2].getLineNumber() || "???";

		logiaLogger[name](
			`${functionName}@${lineNum} ${args[0]} (scen@${scenarioId})`,
			...args.slice(1)
		);
	});

const log = createFrameworkLogger(autoLogia());
bus.subscribe({
	onExecutingScenario() {
		scenarioId = uuidV4().slice(0, 8);
		log.debug(`setting scenarioId to ${scenarioId}`);
	},
	onScenarioExecuted() {
		scenarioId = "none";
		log.debug(`setting scenarioId to ${scenarioId}`);
	},
});

module.exports = createFrameworkLogger;
