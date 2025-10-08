const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { getCurrentPage } = require("./application");

const createWizardAction = (event) =>
	// explicitly use function instead of arrow function in order to use the 'arguments' object
	function() {
		if ($$$("body").exists(".wizardnavigation.active")) {
			$$$(`.wizardnavigation.active .${event}`).click();
		} else {
			throw new Error(`${getCurrentPage()}" is not a workflow page`);
		}
	};

class PageWizard {
	constructor(options) {
		this.options = options;
	}

	exists() {
		return this.options.exists;
	}

	next() {
		createWizardAction("next")();
		return this;
	}

	previous() {
		createWizardAction("previous")();
		return this;
	}

	cancel() {
		createWizardAction("cancel-wizard")();
		$$$(".action-cancel-wizard").click();
		return this;
	}

	startWizard() {
		$$$(`.next:contains("Start wizard")`).click();
	}
}

const getCurrentPageWizard = new RootAction("getCurrentPageWizard", () => {
	const exists = $$$("body").exists(".wizardnavigation.active");
	return new PageWizard({ exists });
});

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getCurrentPageWizard);
	},
};
