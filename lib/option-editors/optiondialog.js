const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");

class OptionDialog extends FrameworkObject {
	getOptionEditorDetails() {
		const optionEditorInfo = [];
		const optionEditorNavDetails = jQuery(this.webElement.find(`.optiondialog-nav`).getHTML());

		// Loop through each of the toolbar-button element and extract its details.
		const noOfTabs = optionEditorNavDetails.find(".toolbar-button").length;
		//let tabOrder = 0;

		for (let index = 0; index < noOfTabs; index++) {
			// Get the toolbar-button WebElement
			const toolbarButtonWebElement = optionEditorNavDetails.find(
				`.toolbar-button:eq(${index})`
			);

			// Is Toolbar-Button Visible
			const isToolbarButton_Visible = browser.execute((tabIndex) => {
				const $ = window.jQuery;
				let isTabVisible = false;
				if ($) {
					isTabVisible = $(
						`.awf-optiondialog.open .optiondialog-nav .toolbar-button:eq(${tabIndex})`
					).isVisible();
				}
				return isTabVisible;
			}, index);

			if (isToolbarButton_Visible) {
				// Name
				const name = toolbarButtonWebElement.text();

				// Tooltip
				const title = toolbarButtonWebElement.attr("title");

				// IsHighlighted
				const isHighlighted =
					toolbarButtonWebElement.attr("class").split("open").length > 1;

				// WebElementID
				const toolbarButton_WebElement_ID = this.webElement
					.find(`.optiondialog-nav .toolbar-button:eq(${index})`)
					.webElement.getAttribute("id");

				// Icon
				const icon =
					"0x" +
					this._getComputedStyle(toolbarButton_WebElement_ID, "content")
						.charCodeAt(1)
						.toString(16);

				// Icon
				const color = this._getComputedStyle(toolbarButton_WebElement_ID, "color");

				optionEditorInfo.push({
					Name: name,
					//Index: tabOrder++,
					Tooltip: title,
					IsHighlighted: isHighlighted,
					Icon: icon,
					Color: color,
				});
			}
		}

		return optionEditorInfo;
	}

	getOptionEditorHeaderDetails() {
		const optionDialog = jQuery(this.webElement.getHTML());
		const optionDialog_Headertext = optionDialog.find(`.optiondialog-title`)[0].childNodes[0]
			.nodeValue;

		// Check for OptionDialog Sub Header
		const optionDialog_SubHeader = optionDialog.find(`.optiondialog-sub-title`);
		let optionDialog_SubHeadertext = null;
		if (optionDialog_SubHeader.length > 0) {
			optionDialog_SubHeadertext = optionDialog_SubHeader[0].childNodes[0].nodeValue;
		}

		// Is no-permission-message Displayed on toolbar?
		const noPermissionMessageDisplayed = browser.execute(() => {
			const $ = window.jQuery;
			let noPermissionMessageVisible = false;
			if ($) {
				noPermissionMessageVisible = $(
					`.no-options-message-container.open .no-permission-message`
				).isVisible();
			}
			return noPermissionMessageVisible;
		});

		let returnData;
		if (noPermissionMessageDisplayed) {
			const noPermissionMessageText = optionDialog
				.find(`.no-options-message-container.open .no-permission-message`)[0]
				.childNodes[0].data.replace(/\n\t\t\t\t\t/g, "");
			returnData = {
				"OptionDialog Header": optionDialog_Headertext,
				"No-Permission-Message Shown": true,
				"No-Permission-Message Text": noPermissionMessageText,
			};
		} else {
			const OptionEditorTab_Titletext = optionDialog.find(`.open .toolbar-button`).text();
			returnData = {
				"OptionDialog Header": optionDialog_Headertext,
				"OptionEditorTab Title": OptionEditorTab_Titletext,
			};
		}

		// Add the subheader to the return data only if it exists
		if (optionDialog_SubHeadertext) {
			returnData["OptionDialog Sub Header"] = optionDialog_SubHeadertext;
		}

		return returnData;
	}

	_getComputedStyle(elementID, cssProperty) {
		return browser.execute(
			({ elementId, property }) => {
				const iconContentAsString16 = window
					.getComputedStyle(document.querySelector(`#${elementId}`), `:before`)
					.getPropertyValue(`${property}`);

				return iconContentAsString16;
			},
			{ elementId: elementID, property: cssProperty }
		);
	}

	hasNoOptionsAvailableMessage() {
		return $(".no-permission-message").isDisplayed();
	}
}

const WithOptionDialog = (_) =>
	class Mixin extends _ {
		findOptionDialogNib() {
			if (this.isOptionDialogButtonPresentinHeader()) {
				this.webElement.find(".optiondialog-nib").moveTo();
				return this.webElement.find(".optiondialog-nib");
			}
			this.webElement.find(`.widget-menu-button`).moveTo();
			this.webElement.find(`.widget-menu-button`).click();
			return $$$(`.widget-menu__items-wrapper .widget-menu__item .aimms-cog`);
		}

		isOptionDialogButtonPresentinHeader() {
			// This code is based very much on getCSSStyleProperty. The idea is that the CSS style of property "display" is "none" if the button is not present
			// (and "block or flex or whatever" otherwise, but that is not important here).
			const value = browser.execute((elementId) => {
				const $ = window.jQuery;
				let propertyValue = null;
				if ($) {
					propertyValue = $(`#${elementId}`).css("display");
				}
				// browser context - you may not access client or console
				return propertyValue;
			}, this.webElement.find(".optiondialog-nib").getAttribute("id"));

			return value !== null && value !== "none";
		}

		isOptionDialogButtonPresentinWidgetMenu() {
			// This code is based very much on getCSSStyleProperty. The idea is that the CSS style of property "display" is "none" if the button is not present
			// (and "block or flex or whatever" otherwise, but that is not important here).

			// has widget menu? open it to show it
			const widgetMenu = this.webElement.findIfAny(`.widget-menu-button`);
			if (widgetMenu.any()) {
				widgetMenu.moveTo();
				widgetMenu.click();
			} else {
				return false;
			}

			// has a optiondialog-nib in there?
			let optionDialogNibId = "";
			if ($$$("body").exists(`.widget-menu__items-wrapper .widget-menu__item .aimms-cog`)) {
				optionDialogNibId = $$$(
					`.widget-menu__items-wrapper .widget-menu__item .aimms-cog`
				).getAttribute("id");
			} else {
				return false;
			}

			// if all of the above is true, look at the display value of the nib
			const value = browser.execute((elementId) => {
				const $ = window.jQuery;
				let propertyValue = null;
				if ($) {
					propertyValue = $(`#${elementId}`).css("display");
				}
				// browser context - you may not access client or console
				return propertyValue;
			}, optionDialogNibId);

			return value !== null && value !== "none";
		}

		getOptionDialog() {
			const awfOptionDialog = $$$.findIfAny(".awf-optiondialog.open");
			return awfOptionDialog.any() ? awfOptionDialog : "None";
		}

		openOptionDialog({ OptionEditorCategory_Title = undefined } = {}) {
			// If an Option editor is open. Assert if it is of our interest. If No, then close the current one and open the required Option Editor.
			if (
				$$$("body").exists(`.awf-optiondialog.open[data-owner-widget-uri="${this.name}"]`)
			) {
				const jQdom = jQuery($$$(`.awf-optiondialog.open`).getHTML());

				// Assert if the Tab opened is of our interest. If No, then click on the required Tab.
				if (
					jQdom.find(`.open .toolbar-button span:first`).text() !==
					`${OptionEditorCategory_Title}`
				) {
					browser.execute((selector) => {
						const $ = window.jQuery;
						$(selector).click();
					}, jQdom.find(`.optiondialog-nav .toolbar-button[title="${OptionEditorCategory_Title}"]`).selector);
				}
			} else {
				if ($$$("body").exists(`.awf-optiondialog.open`)) {
					this.closeOptionDialog();
				}

				// Hover the widget and click on optiondialog nib.
				// this.findOptionDialogNib().moveTo();
				this.findOptionDialogNib().click();
			}

			return new OptionDialog($$$(".awf-optiondialog"));
		}

		closeOptionDialog() {
			const optionDialogCloseButton = $$$.findIfAny(
				".awf-optiondialog .optiondialog-header > .icon-close"
			);
			if (optionDialogCloseButton.any()) {
				optionDialogCloseButton.click();
			}
		}
	};

module.exports = {
	WithOptionDialog,
};
