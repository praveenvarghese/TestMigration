const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const { Select2 } = require("../misc/select2");

class TimezonePanel extends FrameworkObject {
	getSelectedApplicationTimeZone() {
		const applicationTime = this.webElement.find(`.selectionbox-container .select2-container`);
		return applicationTime.getText();
	}

	getResetToLocalTimeZone() {
		const resetToLocalTimeZone = this.webElement.find(`.resetToLocalTimeZone`);
		return resetToLocalTimeZone;
	}

	selectApplicationTimezone(searchValue) {
		const timezoneSelectionList = this.webElement.find(
			`.selectionbox-container .select2-container.dropdown`
		);
		const select2 = new Select2(timezoneSelectionList);
		select2.select(searchValue, false);

		browser.pause(2000);
		// Wait for background operations to complete and Busy message bar to go off
		browser.waitUntil(() => !$$$("body").exists(".veil-msg.state-busy"));
	}

	getCurrentApplicationTime24HourFormat() {
		const applicationTime24HourFormat = this.webElement.find(".app-time-24-hour");
		return applicationTime24HourFormat.getText();
	}

	getCurrentApplicationTime12HourFormat() {
		const applicationTime12HourFormat = this.webElement.find(".appTime12Hour");
		return applicationTime12HourFormat.getText();
	}

	getLocalTimeZone() {
		const localTimeZone = this.webElement.find(".localTimeZone");
		return localTimeZone.getText();
	}
}

TimezonePanel.find = () => {
	const timezonePanelShown = $$$("body").exists(".timezone-panel.active .timezone-container");
	return timezonePanelShown
		? new TimezonePanel($$$(".timezone-panel.active .timezone-container"))
		: "None";
};
const findTimezonePanel = new RootAction("findTimezonePanel", () => TimezonePanel.find());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(findTimezonePanel);
	},
};
