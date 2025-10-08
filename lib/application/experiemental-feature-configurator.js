const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");

class ExperiementalFeatureConfigurator extends FrameworkObject {
	getAllExperiementalFeatureListNames() {
		let names = [];
		names = this.webElement.find(" span").getText();
		return names;
	}

	getEnabledExperiementalFeatureListNames() {
		let names = [];
		const parLoc = this.webElement.find(" input[checked]").parent();
		names = parLoc.find("span").getText();
		return names;
	}

	enableExperiementalFeature(featureName) {
		const parLoc = this.webElement.find(` span:contains("${featureName}")`).parent();
		parLoc.find(" input[name]").click();
		$$$(".feature-toggle-reload:isVisible").click();
	}

	disableExperiementalFeature(featureName) {
		const parLoc = this.webElement.find(` span:contains("${featureName}")`).parent();
		parLoc.find(" input[name]").click();
		$$$(".feature-toggle-reload:isVisible").click();
	}
}

ExperiementalFeatureConfigurator.open = () => {
	browser.keys([SPECIAL_KEYS.left_control, SPECIAL_KEYS.left_shift, "."]);
	$$$(".icon-tools").click();
	return new ExperiementalFeatureConfigurator($$$(".feature-toggle-list"));
};

ExperiementalFeatureConfigurator.get = () => {
	const experiementalFeatureConfigurator = new ExperiementalFeatureConfigurator(
		$$$(".feature-toggle-list")
	);
	return experiementalFeatureConfigurator;
};

ExperiementalFeatureConfigurator.close = () => {
	const isExperiementalFeatureConfigurator = $$$("body").exists(".sidebar-container.open");
	if (isExperiementalFeatureConfigurator) {
		$$$(".sidebar-container.open .icon-close").click();
	}
};

const openExperiementalFeatureConfigurator = new RootAction(
	"openExperiementalFeatureConfigurator",
	() => ExperiementalFeatureConfigurator.open()
);

const getExperiementalFeatureConfigurator = new RootAction(
	"getExperiementalFeatureConfigurator",
	() => ExperiementalFeatureConfigurator.get()
);

const closeExperiementalFeatureConfigurator = new RootAction(
	"closeExperiementalFeatureConfigurator",
	() => ExperiementalFeatureConfigurator.close()
);

module.exports = {
	ExperiementalFeatureConfigurator,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(
			getExperiementalFeatureConfigurator,
			openExperiementalFeatureConfigurator,
			closeExperiementalFeatureConfigurator
		);
	},
};
