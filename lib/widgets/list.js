const $$$ = require("../selenium/3xdollar");
const mixin = require("../mixin");
const { Widget } = require("./widget");
const { WithListSettingsOptionEditor } = require("../option-editors/list-settings-option-editor");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { WithWidgetActions } = require("../application/widget-actions");
const { WithWidgetMenu } = require("../application/widget-menu");
const { FrameworkObject } = require("../framework-object");
const { InlineActions } = require("../application/inline-actions");
const { _ } = require("lodash");

class ListItem extends FrameworkObject {
	getItem() {
		const item = this.webElement.findIfAny(`.list-display-text`);
		return item.any() ? item : null;
	}
	getDisplayText() {
		const item = this.getItem();
		return item ? item.getText() : "";
	}
	getExternalLink() {
		const itemExternalLink = this.webElement.findIfAny(`.list-external-link .aimms-share2`);
		return itemExternalLink.any() ? itemExternalLink : "None";
	}
	getIcon() {
		const itemIcon = this.webElement.findIfAny(`.list-icon i`);
		return itemIcon.any() ? itemIcon : "None";
	}
	hasSpecifiedIcon(icon) {
		return (
			this.getIcon()
				.webElement.getAttribute("class")
				.split(" ")
				.indexOf(icon) !== -1
		);
	}
	isAnActiveItem() {
		const iconIsActive =
			this.webElement
				.find(`.list-icon`)
				.getAttribute("class")
				.split(" ")
				.indexOf(`clickable`) !== -1;

		const itemMessageIsActive =
			this.getItem()
				.webElement.getAttribute("class")
				.split(" ")
				.indexOf(`clickable`) !== -1;

		return iconIsActive && itemMessageIsActive;
	}
	getIconColour() {
		const iconStyle = this.webElement.find(`.list-icon`).getAttribute("style");
		return iconStyle ? iconStyle : "";
	}
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
			{ elementId: this.getItem().webElement.getAttribute("id"), propertyIn: property }
		);

		if (value === null) {
			throw new Error(
				"Error while trying to remotely executing 'css style property': " + property
			);
		}
		return value;
	}

	getAnnotations() {
		return (this.webElement.getAttribute("class") || "")
			.split(" ")
			.filter((e) => e.startsWith("annotation-"))
			.map((e) => e.replace(/annotation-/, ""));
	}

	hover() {
		this.webElement.findIfAny(`.list-display-text`).moveTo();
		return new InlineActions();
	}
}
class ListGroup extends FrameworkObject {
	getHeader() {
		const groupHeader = this.webElement.findIfAny(`.list-header`);
		return groupHeader.any() ? groupHeader : "None";
	}
	getHeaderText() {
		const groupHeader = this.getHeader();
		if (!groupHeader) {
			throw new Error("Could not find List group header.");
		}
		return this.getHeader().getText();
	}
	getTooltipText() {
		const titleElement = this.webElement.findIfAny(`title`);

		return titleElement.any() ? titleElement.getText() : "";
	}
	getListItemsCount() {
		const listItems = this.webElement.findIfAny(".list-message");

		return listItems.any() ? listItems.webElements.length : 0;
	}
	getVisibleListItemsCount() {
		const visibleListItems = this.webElement.findIfAny(".list-message:isVisible");

		return visibleListItems.any() ? visibleListItems.webElements.length : 0;
	}
	// gets controls of a specific List group.
	// Index is 0 based.
	getListItem(index = 0) {
		const listItem = this.webElement.findIfAny(`.list-message:eq(${index})`);

		if (!listItem.any()) {
			throw new Error(`Could not find ${index} List item.`);
		}

		return new ListItem($$$(listItem.webElement.selector));
	}

	getAnnotations() {
		return (this.webElement.getAttribute("class") || "")
			.split(" ")
			.filter((e) => e.startsWith("annotation-"))
			.map((e) => e.replace(/annotation-/, ""));
	}
}
class List extends mixin(
	Widget,
	WithListSettingsOptionEditor,
	WithWidgetExtensionsOptionEditor,
	WithWidgetActions,
	WithWidgetMenu
) {
	getListGroupsCount() {
		const listGroups = this.webElement.findIfAny(".list-widget-container .list-group");

		return listGroups.any() ? listGroups.webElements.length : 0;
	}
	getVisibleListGroupsCount() {
		const visibleListGroups = this.webElement.findIfAny(
			".list-widget-container .list-group:isVisible"
		);

		return visibleListGroups.any() ? visibleListGroups.webElements.length : 0;
	}
	// gets controls of a specific List group.
	// Index is 0 based.
	getListGroup(index = 0) {
		const listGroup = this.webElement.findIfAny(
			`.list-widget-container .list-group:eq(${index})`
		);

		if (!listGroup.any()) {
			throw new Error(`Could not find ${index} List group.`);
		}

		return new ListGroup($$$(listGroup.webElement.selector));
	}

	getListData() {
		let listDetails = null;
		const listContainer = this.webElement.find(".list-message-container .list-group");

		if (listContainer.any()) {
			const listIcon = [].concat(
				listContainer.findIfAny(".list-icon i").getAttribute("class")
			);
			const listTitle = [].concat(listContainer.findIfAny(".list-display-text").getText());

			listDetails = _.zipWith(listIcon, listTitle, (icon, title) => ({
				title,
				icon,
			}));
		}

		return listDetails;
	}
}

module.exports = {
	List,
	onRegisterWidgetTypes(registry) {
		registry["list"] = List;
	},
};
