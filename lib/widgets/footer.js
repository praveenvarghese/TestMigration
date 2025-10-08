const { RootAction } = require("yemen");
const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const Breadcrumb = require("../application/breadcrumb");
const { _ } = require("lodash");

class Footer extends FrameworkObject {
	getAboutAIMMS() {
		const aboutAIMMSElement = this.webElement.findIfAny(".about-button:isVisible");
		return aboutAIMMSElement.any() ? aboutAIMMSElement : null;
	}

	getBreadcrumb() {
		return new Breadcrumb(this.webElement.findIfAny(".breadcrumb"));
	}

	getTimezoneButton() {
		const timezoneButtonElement = this.webElement.findIfAny(".timezone-button:isVisible");
		let timezoneButton = "None";

		if (timezoneButtonElement.any()) {
			timezoneButton = timezoneButtonElement;
			timezoneButton = _.extend({}, timezoneButtonElement, {
				click() {
					this.webElement.click();
				},
				hover() {
					return this.webElement.moveTo();
				},
				getTitle() {
					return this.webElement.getAttribute("title");
				},
				hasIcon(iconName) {
					const iconElement = timezoneButtonElement.findIfAny("i.timezone-button-icon");
					return iconElement.any()
						? iconElement
								.getAttribute("class")
								.split(" ")
								.indexOf(iconName) !== -1
						: false;
				},
				isHighlighted() {
					return (
						this.webElement
							.getAttribute("class")
							.split(" ")
							.indexOf("active") !== -1
					);
				},
				getCSSStyleProperty(property) {
					const value = browser.execute(
						({ elementId, propertyIn }) => {
							const $ = window.jQuery;
							let propertyValue;
							if ($) {
								propertyValue = $(`#${elementId}`).css(propertyIn);
							}
							// browser context - you may not access client or console
							return propertyValue;
						},
						{ elementId: this.webElement.getAttribute("id"), propertyIn: property }
					);

					if (value === null) {
						throw new Error(
							"Error while trying to remotely executing 'css style property': " +
								property
						);
					}
					return value;
				},
			});
		}
		return timezoneButton;
	}
}

Footer.get = () => new Footer($$$("footer.tag-footer"));

const getFooter = new RootAction("getFooter", () => Footer.get());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getFooter);
	},
};
