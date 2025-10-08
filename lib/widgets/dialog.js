const { RootAction } = require("yemen");
const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const { flatten } = require("lodash");
const jQuery = require("jquery-node");

class Dialog extends FrameworkObject {
	getTitle() {
		return this.webElement.find(".ui-dialog-title").getText();
	}
	getMessage() {
		return this.webElement.find(".ui-dialog-content").getText();
	}
	getButtons() {
		return flatten([
			this.webElement.find(".ui-dialog-buttonset .ui-button:isVisible").getText(),
		]);
	}
	findButton(buttonTitle) {
		return this.webElement.find(
			`.ui-dialog-buttonset .ui-button:textMatches(/${buttonTitle}/i)`
		);
	}

	clickResolveButton(index) {
		const ruleIndex = index - 1;
		return this.webElement
			.find(`.issue-button[title="Resolve"]:eq(${ruleIndex}):isVisible`)
			.click();
	}

	clickNavigateToPageButton(index) {
		const ruleIndex = index - 1;
		return this.webElement
			.find(`.issue-button[title="Navigate to Page"]:eq(${ruleIndex}):isVisible`)
			.click();
	}

	getAttentionDialogDetails() {
		const dialogHTML = this.webElement.getHTML();
		const dialog = jQuery(dialogHTML);

		const details = {};

		const sections = dialog.find(".issue-list-section");
		for (let i = 0; i < sections.length; i++) {
			const section = jQuery(sections[i]);

			const heading = section
				.find("h2")
				.text()
				.trim();
			const issues = [];

			const issueBlocks = section.find(".issue");
			for (let j = 0; j < issueBlocks.length; j++) {
				const issue = jQuery(issueBlocks[j]);

				const title = issue
					.find(".issue-title")
					.text()
					.trim();
				const description = issue
					.find(".issue-description")
					.text()
					.trim();
				const buttonText = issue
					.find(".issue-button")
					.text()
					.trim();

				issues.push({
					title,
					description,
					buttonText,
				});
			}

			// Save based on heading content
			if (heading.includes("Application Level Issues")) {
				details.application = { heading, issues };
			} else if (heading.includes("Page Level Issues")) {
				details.page = { heading, issues };
			}
		}

		return details;
	}

	isWidgetSettingOptionVisibleOnDialog() {
		const widgetSettingIconCount = this.webElement.findIfAny(`.optiondialog-nib:isVisible`); //:isVisible
		const count = widgetSettingIconCount.any() ? widgetSettingIconCount.length : 0;
		return count;
	}

	assertButtonDimensions(buttonTitle, width, height, pixelTolerance) {
		const actualWidth = this.findButton(buttonTitle).getBoundingClientRect().width;
		const actualHeight = this.findButton(buttonTitle).getBoundingClientRect().height;

		return (
			width - pixelTolerance < actualWidth &&
			width + pixelTolerance > actualWidth &&
			height - pixelTolerance < actualHeight &&
			height + pixelTolerance > actualHeight
		);
	}

	assertButtonStyle(buttonTitle, property) {
		return this.findButton(buttonTitle).getComputedStyle()[property];
	}

	getButtonSetStyleProperty(property) {
		return this.webElement.find(".ui-dialog-buttonset").getComputedStyle()[property];
	}
}

// find guarantees to find it or fail
Dialog.find = (dialogName, ...args) => new Dialog($$$("body > .awf-dialog", ...args));

// get does not guarantee to find; can be used with .should(.not).exist
Dialog.get = () => {
	const webElement = $$$.findIfAny("body > .awf-dialog");
	return webElement.any() ? new Dialog(webElement) : "None";
};

const findDialog = new RootAction("findDialog", (...args) => Dialog.find(...args));
const getDialog = new RootAction("getDialog", () => Dialog.get());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(findDialog);
		actionRegistry.push(getDialog);
	},
};
