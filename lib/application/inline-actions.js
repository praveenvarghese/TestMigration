const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const { _ } = require("lodash");

class InlineAction extends FrameworkObject {
	click() {
		this.webElement.click();
		browser.pause(500);
	}
}

class InlineActions extends FrameworkObject {
	_getInlineActionContext() {
		return $$$(".inline-actions-container");
	}

	getInlineActions() {
		return this.getData();
	}

	getData() {
		let InlineActionsInfo = "None";

		// Step 1: Get the container first
		const container = $$$.findIfAny(".inline-actions-container");

		if (container.any()) {
			// Step 2: Find all action items inside it
			const InlineActionElements = container.findIfAny(".inline-action-item");

			if (InlineActionElements.any()) {
				const titles = [].concat(InlineActionElements.getAttribute("title"));
				const icons = [].concat(InlineActionElements.find("i").getAttribute("class"));
				const inlineItemsClasses = [].concat(InlineActionElements.getAttribute("class"));

				// eslint-disable-next-line no-confusing-arrow
				const states = inlineItemsClasses.map((cls) =>
					cls.includes("disabled") ? "inactive" : "active"
				);

				InlineActionsInfo = _.zipWith(titles, icons, states, (title, icon, state) => ({
					title,
					icon,
					state,
				}));
			}
		}

		return InlineActionsInfo;
	}

	_getStyles(webElementSelector, style) {
		return browser.execute(
			({ elementId, propertyIn }) => {
				const $ = window.jQuery;
				let propertyValue;
				if ($) {
					propertyValue = $(`${elementId}`).css(propertyIn);
				}
				return propertyValue;
			},
			{ elementId: webElementSelector, propertyIn: style }
		);
	}

	getInlineActionsStyles() {
		const InlineActionElements = $$$.findIfAny(
			".inline-actions-container .inline-action-item:isVisible"
		);

		const InlineActionsColor = [];
		const iconsColor = [];
		const displayTextsColor = [];
		const cursorStyles = [];

		InlineActionElements.webElements.forEach((webElement) => {
			const InlineActionElement = $$$(webElement.selector);
			InlineActionsColor.push(this._getStyles(webElement.selector, "background-color"));
			iconsColor.push(this._getStyles(InlineActionElement.find("i").selector, "color"));
			displayTextsColor.push(
				this._getStyles(InlineActionElement.find(".title").selector, "color")
			);
			cursorStyles.push(this._getStyles(webElement.selector, "cursor"));
		});

		return _.zipWith(
			InlineActionsColor,
			iconsColor,
			displayTextsColor,
			cursorStyles,
			(InlineActionBackgroundColor, iconColor, displayTextColor, cursorStyle) => ({
				InlineActionBackgroundColor,
				iconColor,
				displayTextColor,
				cursorStyle,
			})
		);
	}

	getInlineActionItem(index) {
		const inlineActionItem = this._getInlineActionContext().findIfAny(
			` .inline-action-item:eq(${index})`
		);
		return new InlineAction(inlineActionItem);
	}
}

module.exports = { InlineActions, InlineAction };
