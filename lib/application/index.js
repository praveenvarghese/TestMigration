const { bus } = require("yemen");

const modules = [];
modules.push(require("./application"));
modules.push(require("./widget-manager"));
modules.push(require("./data-manager"));
modules.push(require("./page-manager"));
modules.push(require("./app-manager"));
modules.push(require("./page-configurator"));
modules.push(require("./page-menu"));
modules.push(require("./page-header"));
modules.push(require("./page-wizard"));
modules.push(require("./page-actions"));
modules.push(require("./messages"));
modules.push(require("./utils"));
modules.push(require("./sidebar"));
modules.push(require("./webui-json"));
modules.push(require("./timezone-panel"));
modules.push(require("../misc/getDateTime"));
modules.push(require("./experiemental-feature-configurator"));
modules.push(require("../resources/keys"));
modules.push(require("../resources/chrome-buttons"));
modules.push(require("../resources/colors"));

module.exports = {
	subscribeAll() {
		modules.forEach((module) => {
			bus.subscribe(module);
		});
	},
};
