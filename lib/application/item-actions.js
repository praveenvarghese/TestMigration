const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const { _ } = require("lodash");
const { Download } = require("../widgets/download");
const { Upload } = require("../widgets/upload");

class ItemAction extends FrameworkObject {
	isAnActiveAction() {
		const hasInActiveClass = this.webElement.hasClass("react-contextmenu-item--disabled");
		return !hasInActiveClass;
	}

	isAnInactiveAction() {
		const hasInactiveClass = this.webElement.hasClass("react-contextmenu-item--disabled");
		return hasInactiveClass;
	}

	click(xOffset = 5, yOffset = 5) {
		this.webElement.click({ x: xOffset, y: yOffset });
		browser.pause(500);
	}

	getIcon() {
		return this.webElement.find("i");
	}

	hasIcon(icon) {
		return this.webElement.find("i").hasClass(icon);
	}

	getTextElement() {
		return this.webElement.find(".display-text");
	}

	getTitleText() {
		return this.webElement.getText();
	}

	hover() {
		this.webElement.moveTo();
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	getDownloadedFile() {
		const downloadClass = new Download(this.webElement);
		return downloadClass.getDownloadedFile();
	}
}

class ItemActions extends FrameworkObject {
	rightClick(xOffset = 5, yOffset = 5) {
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return this;
	}

	isItemActionDisplayed() {
		return $$$("body").exists(
			".react-contextmenu:not(.empty) .react-contextmenu-item-container"
		);
	}

	_getItemActionContext() {
		return $$$(".react-contextmenu:not(.empty) .react-contextmenu-item-container");
	}

	getItemActionDetails(index, fileName = "") {
		let itemAction;
		if (fileName !== "") {
			const uploadWebElement = $$$(`body`);
			let uploadButton = null;
			if (uploadWebElement.any()) {
				uploadButton = new Upload(uploadWebElement);
				uploadButton.uploadProcedure(fileName);
			}
			itemAction = $$$(`.react-contextmenu-item:eq(${index})`);
		} else {
			itemAction = this._getItemActionContext().findIfAny(
				` .react-contextmenu-item:eq(${index})`
			);
		}
		if (!itemAction.any()) {
			throw new Error(`Could not find the ${index} item action.`);
		}
		return new ItemAction(itemAction);
	}

	getAllItemActionListName() {
		const eachItemAction = this._getItemActionContext()
			.findIfAny(" .display-text")
			.getText();
		return eachItemAction;
	}

	getItemActions() {
		// MKG: This is to be refactored later.
		return this.getData();
	}

	getData() {
		let itemActions = "None";
		const itemActionsContainer = $$$.findIfAny(
			".react-contextmenu:not(.empty) .react-contextmenu-item-container"
		);

		if (itemActionsContainer.any()) {
			const itemActionElements = itemActionsContainer.findIfAny(".react-contextmenu-item");
			const titles = [].concat(itemActionElements.getAttribute("title"));
			const icons = [].concat(itemActionElements.find("i").getAttribute("class"));
			const actionItemsClasses = [].concat(itemActionElements.getAttribute("class"));

			// eslint-disable-next-line no-confusing-arrow
			const states = actionItemsClasses.map((ai) =>
				ai.includes("react-contextmenu-item--disabled") ? "inactive" : "active"
			);

			itemActions = _.zipWith(titles, icons, states, (title, icon, state) => ({
				title,
				icon,
				state,
			}));
		}

		return itemActions;
	}

	_getStyles(webElementSelector, style) {
		return browser.execute(
			({ elementId, propertyIn }) => {
				const $ = window.jQuery;
				let propertyValue;
				if ($) {
					propertyValue = $(`${elementId}`).css(propertyIn);
				}
				// browser context - you may not access client or console
				return propertyValue;
			},
			{ elementId: webElementSelector, propertyIn: style }
		);
	}

	getItemActionsStyles() {
		const itemActionElements = $$$.findIfAny(
			".react-contextmenu:not(.empty) .react-contextmenu-item-container:isVisible .react-contextmenu-item:isVisible"
		);

		const itemActionsColor = [];
		const iconsColor = [];
		const displayTextsColor = [];
		const cursorStyles = [];
		itemActionElements.webElements.forEach((webElement) => {
			const itemActionElement = $$$(webElement.selector);
			itemActionsColor.push(this._getStyles(webElement.selector, "background-color"));
			iconsColor.push(this._getStyles(itemActionElement.find("i").selector, "color"));
			displayTextsColor.push(
				this._getStyles(itemActionElement.find(".display-text").selector, "color")
			);
			cursorStyles.push(this._getStyles(webElement.selector, "cursor"));
		});

		return _.zipWith(
			itemActionsColor,
			iconsColor,
			displayTextsColor,
			cursorStyles,
			(itemActionBackgroundColor, iconColor, displayTextColor, cursorStyle) => ({
				itemActionBackgroundColor,
				iconColor,
				displayTextColor,
				cursorStyle,
			})
		);
	}
}

module.exports = { ItemActions, ItemAction };
