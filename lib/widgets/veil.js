const { RootAction } = require("yemen");
const $$$ = require("../selenium/3xdollar");
const { Widget } = require("./widget");

class Veil extends Widget {
	getMessage() {
		const msg = this.webElement.findIfAny(".msg-body:isVisible");
		return msg.any() ? msg.getText() : "None";
	}

	getButton() {
		const uiButton = this.webElement.findIfAny(".ui-button:isVisible");
		return uiButton.any() ? uiButton.getText() : "None";
	}

	IsABusyVeil() {
		return this.webElement.hasClass("state-busy");
	}

	IsAModalDialogVeil() {
		return this.webElement.hasClass("state-modal-dialog");
	}
}

Veil._get = () => {
	const pageBodyElement = $$$("body");
	const veilExists = pageBodyElement.hasClass("veiled");
	return veilExists ? new Veil($$$(".veiled .tag-veil .veil-msg")) : "None";
};

const getCollectedVeilMessages = new RootAction("getCollectedVeilMessages", () =>
	browser.execute(() => window.AWF.collectedVeils)
);

const getVeil = new RootAction("getVeil", () => Veil._get());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getVeil);
		actionRegistry.push(getCollectedVeilMessages);
	},
};
