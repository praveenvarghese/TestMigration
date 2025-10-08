const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const { _ } = require("lodash");
const $$$ = require("../selenium/3xdollar");
const jQuery = require("jquery-node");

jQuery.fn.any = function() {
	return this.length > 0;
};

class StatusBar extends FrameworkObject {
	getStatusBarMessagesCount() {
		const statusBarMessages = this.webElement.findIfAny(".status-message:isVisible");
		return statusBarMessages.any() ? statusBarMessages.webElements.length : 0;
	}

	getClickableStatusBarMessagesCount() {
		const clickable_statusBarMessages = this.webElement.findIfAny(
			".status-message.clickable:isVisible"
		);
		return clickable_statusBarMessages.any()
			? clickable_statusBarMessages.webElements.length
			: 0;
	}

	getNonClickableStatusBarMessagesCount() {
		const nonClickable_statusBarMessages = this.webElement.findIfAny(
			".status-message:not(.clickable):isVisible"
		);
		return nonClickable_statusBarMessages.any()
			? nonClickable_statusBarMessages.webElements.length
			: 0;
	}

	getStatusBarMessagesState() {
		const states = []
			.concat(this.webElement.find(".status-message").getAttribute("class"))
			.map((ai) => (ai.includes("clickable") ? "active" : "inactive"));

		const itemActions = _.zipWith(states, (state) => ({
			state,
		}));

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

	getStatusBarMessages() {
		const statusBarMessagesDetails = [];

		const getDom = jQuery(this.webElement.getHTML());
		const statusBarWebElementCount = getDom.find(`.status-message`).length;

		for (let index = 0; index < statusBarWebElementCount; index++) {
			const statusBarWebElement = getDom.find(`.status-message:eq(${index})`);
			const statusBar_HeaderTexts = statusBarWebElement.find(".status-header");
			const HeaderTexts = statusBar_HeaderTexts.any() ? statusBar_HeaderTexts.text() : null;

			const statusBar_Icons = statusBarWebElement.find("i");
			const Icons = statusBar_Icons.any() ? statusBar_Icons.attr("class") : null;

			const statusBar_MessageTexts = statusBarWebElement.find(".status-display-text");
			const MessageTexts = statusBar_MessageTexts.any()
				? statusBar_MessageTexts.text()
				: null;

			const statusBarActionClasses = statusBarWebElement.attr("class");

			const States =
				statusBarActionClasses.split(" ").filter((e) => /clickable/.test(e)).length > 0
					? "active"
					: "inactive";

			statusBarMessagesDetails.push({
				HeaderText: HeaderTexts,
				Icon: Icons,
				MessageText: MessageTexts,
				State: States,
			});
		}
		return statusBarMessagesDetails;
	}

	getStatusBarMessageStyles() {
		const statusBarMessagesStyles = [];
		const getDom = jQuery(this.webElement.getHTML());
		const statusBarWebElementCount = getDom.find(`.status-message`).length;
		for (let index = 0; index < statusBarWebElementCount; index++) {
			const statusBarWebElement = getDom.find(`.status-message:eq(${index})`);
			const statusBarMessageBackground = this._getStyles(
				statusBarWebElement.selector,
				"background-color"
			);
			const statusBarMessageCursorStyle = this._getStyles(
				statusBarWebElement.selector,
				"cursor"
			);
			const statusBarMessage_Header = statusBarWebElement.find(".status-header");
			const headerTextColor = statusBarMessage_Header.any()
				? this._getStyles(statusBarMessage_Header.selector, "color")
				: null;
			const statusBarMessage_Icon = statusBarWebElement.find(".status-icon i");
			const iconColor = statusBarMessage_Icon.any()
				? this._getStyles(statusBarMessage_Icon.selector, "color")
				: null;
			const displayMessageTextColor = this._getStyles(
				statusBarWebElement.find(".status-display-text").selector,
				"color"
			);
			statusBarMessagesStyles.push({
				MessageBackground: statusBarMessageBackground,
				HeaderTextColor: headerTextColor,
				IconColor: iconColor,
				MessageTextColor: displayMessageTextColor,
				CursorStyle: statusBarMessageCursorStyle,
			});
		}
		return statusBarMessagesStyles;
	}

	getStatusBarMessageDetails(messageIndex = 0) {
		const statusBarMessageElement = this.webElement.findIfAny(
			`.status-message:eq(${messageIndex}):isVisible`
		);
		let statusBarMessage = null;
		if (statusBarMessageElement.any()) {
			statusBarMessage = statusBarMessageElement;
			statusBarMessage = _.extend({}, statusBarMessageElement, {
				click(xOffset = 0, yOffset = 0) {
					this.webElement.click({ button: "left", x: xOffset, y: yOffset });
				},
				getHeader() {
					const headerElement = statusBarMessageElement.findIfAny(".status-header");
					return headerElement.any() ? headerElement : "None";
				},
				getMessage() {
					const MessageElement = statusBarMessageElement.findIfAny(
						".status-display-text"
					);
					return MessageElement.any() ? MessageElement : "None";
				},
				getIcon() {
					const iconElement = statusBarMessageElement.findIfAny(".status-icon i");
					return iconElement.any() ? iconElement : "None";
				},
				hover(xOffset = 0, yOffset = 0) {
					this.webElement.moveTo({ xOffset, yOffset });
					browser.pause(500);
					return this;
				},
				hoverOnIcon(xOffset = 0, yOffset = 0) {
					this.getIcon().moveTo({ xOffset, yOffset });
					browser.pause(500);
					return this;
				},
				hoverOnHeader(xOffset = 0, yOffset = 0) {
					this.getHeader().moveTo({ xOffset, yOffset });
					browser.pause(500);
					return this;
				},
				hoverOnDisplayText(xOffset = 0, yOffset = 0) {
					this.getMessage().moveTo({ xOffset, yOffset });
					browser.pause(500);
					return this;
				},
			});
		} else {
			throw new Error(`Could not locate ${messageIndex} indexed Status Bar Message.`);
		}
		return statusBarMessage;
	}

	doubleClickStatusBarMessage(messageIndex = 0) {
		const statusBarMessageElement = this.webElement.findIfAny(
			`.status-message:eq(${messageIndex}):isVisible`
		);
		if (statusBarMessageElement.any()) {
			this.webElement.doubleClick();
			return this;
		}
		throw new Error(`Could not locate ${messageIndex} indexed Status Bar Message.`);
	}
}

function _getStatusBar() {
	const statusBarContainer = $$$("footer").findIfAny(".status-message-container");
	return statusBarContainer.any() ? new StatusBar(statusBarContainer) : "None";
}

const getStatusBar = new RootAction("getStatusBar", _getStatusBar);

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getStatusBar);
	},
};
