const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const { Button } = require("../misc/button");
const { Download } = require("../widgets/download");
const { _ } = require("lodash");
const fs = require("fs");

class HeaderButtons extends FrameworkObject {
	// Page Manager Button
	getPageManager() {
		const pageManagerButton = this.webElement.findIfAny(
			".page-navigator-addon-btn.page-navigator-addon"
		);
		const pageManagerElement = pageManagerButton.any() ? pageManagerButton : "None";
		return new Button(pageManagerElement);
	}

	// Page Settings Button
	getPageSettings() {
		const pageSettingsButton = this.webElement.findIfAny(
			".page-section .tools .optiondialog-nib.chrome-button"
		);
		const pageSettingsElement = pageSettingsButton.any() ? pageSettingsButton : null;
		return new Button(pageSettingsElement);
	}

	// Export-To-Image Button
	getExportToImageButton() {
		const exportToImageButtonWebElement = this.webElement.findIfAny(
			".application-screenshot-button.chrome-button:isVisible"
		);
		let exportToImageButton = null;
		if (exportToImageButtonWebElement.any()) {
			const downloadClass = new Download(exportToImageButtonWebElement);
			exportToImageButton = exportToImageButtonWebElement;
			exportToImageButton = _.extend({}, exportToImageButtonWebElement, {
				click(xOffset = 0, yOffset = 0) {
					// Before clicking on the download button. Get the current TimeStamp and current state of file system.
					downloadClass.t0 = Date.now();
					downloadClass.dirBefore = fs.readdirSync(global.wdioDownloadDir, {
						encoding: "utf8",
					});

					exportToImageButtonWebElement.moveTo();
					exportToImageButtonWebElement.click({ button: "left", x: xOffset, y: yOffset });

					// Pause for 2 seconds for the file to be downloaded
					browser.pause(2000);
					return this;
				},
				getDownloadedFile() {
					return downloadClass.getDownloadedFile();
				},
			});
		}

		return exportToImageButton;
	}

	// Features Manager Button
	getFeatureManager() {
		const featureManagerButton = this.webElement.findIfAny(
			".page-section .tools .sidebar-view-button.feature-toggle-addon"
		);
		const featureManagerElement = featureManagerButton.any() ? featureManagerButton : null;
		return new Button(featureManagerElement);
	}

	//Widget Manager Button
	getWidgetManager() {
		const widgetManagerButton = this.webElement.findIfAny(
			".page-section .tools .sidebar-view-button.widget-manager-addon"
		);
		const widgetManagerElement = widgetManagerButton.any() ? widgetManagerButton : null;
		return new Button(widgetManagerElement);
	}

	// Data Manager Button
	getDataManager() {
		const dataManagerButton = this.webElement.findIfAny(
			".page-section .tools .sidebar-view-button.data-management-addon:isVisible"
		);
		const dataManagerElement = dataManagerButton.any() ? dataManagerButton : null;
		return new Button(dataManagerElement);
	}

	// Toggle Hidden Widgets Button
	getToggleHiddenWidgets() {
		const toggleHiddenWidgetsButton = this.webElement.findIfAny(
			".page-section .tools .show-hidden-widgets-button"
		);
		const toggleHiddenWidgetsElement = toggleHiddenWidgetsButton.any()
			? toggleHiddenWidgetsButton
			: null;
		return new Button(toggleHiddenWidgetsElement);
	}

	showHiddenWidgets() {
		if (!$$$(".page-section .tools .show-hidden-widgets-button").hasClass("open")) {
			$$$(".page-section .tools .show-hidden-widgets-button").click();
		}
	}

	hideHiddenWidgets() {
		if ($$$(".page-section .tools .show-hidden-widgets-button").hasClass("open")) {
			$$$(".page-section .tools .show-hidden-widgets-button").click();
		}
	}

	// Show/ Hide Widget Control Button
	getWidgetControl() {
		const widgetControlButton = this.webElement.findIfAny(
			".page-section .tools .toggle-controls-visibility-button"
		);
		const widgetControlElement = widgetControlButton.any() ? widgetControlButton : null;
		return new Button(widgetControlElement);
	}

	// Application Settings Button
	getApplicationSettings() {
		const applicationSettingsButton = this.webElement.findIfAny(
			".settings-area .optiondialog-nib.chrome-button"
		);
		const applicationSettingsElement = applicationSettingsButton.any()
			? applicationSettingsButton
			: null;
		return new Button(applicationSettingsElement);
	}

	isApplicationSettingsButtonPresent() {
		// This code is based very much on getCSSStyleProperty. The idea is that the CSS style of property "left" is "auto" if the button is not present, "0" if present.
		const value = browser.execute((elementId) => {
			const $ = window.jQuery;
			let propertyValue;
			if ($) {
				propertyValue = $(`#${elementId}`).css("display");
			}
			// browser context - you may not access client or console
			return propertyValue;
		}, this.webElement.find(".settings-area").getAttribute("id"));

		return value !== "none" ? true : false;
	}

	isPageSettingsButtonPresent() {
		// This code is based very much on getCSSStyleProperty. The idea is that the CSS style of property "display" is "none" if the button is not present.
		const value = browser.execute((elementId) => {
			const $ = window.jQuery;
			let propertyValue;
			if ($) {
				propertyValue = $(`#${elementId}`).css("display");
			}
			// browser context - you may not access client or console
			return propertyValue;
		}, this.webElement.find(".page-section .tools .optiondialog-nib.chrome-button").getAttribute("id"));

		return value !== "none" ? true : false;
	}

	isWidgetManagerButtonPresent() {
		// This code is based very much on getCSSStyleProperty. The idea is that the CSS style of property "width" is "0px" if the button is not present.
		const value = browser.execute((elementId) => {
			const $ = window.jQuery;
			let propertyValue;
			if ($) {
				propertyValue = $(`#${elementId}`).css("display");
			}
			// browser context - you may not access client or console
			return propertyValue;
		}, this.webElement.find(".page-section .tools .sidebar-view-button.widget-manager-addon").getAttribute("id"));

		return value !== "none" ? true : false;
	}

	isPageManagerButtonPresent() {
		// This code is based very much on getCSSStyleProperty. The idea is that the CSS style of property "display" is "none" if the button is not present.
		const value = browser.execute((elementId) => {
			const $ = window.jQuery;
			let propertyValue;
			if ($) {
				propertyValue = $(`#${elementId}`).css("display");
			}
			// browser context - you may not access client or console
			return propertyValue;
		}, this.webElement.find(".page-navigator-addon-btn.page-navigator-addon").getAttribute("id"));

		return value !== "none" ? true : false;
	}

	isPreviewButtonPresent() {
		return this.webElement
			.findIfAny(".page-section .tools .sidebar-view-button.preview-server-mode-button")
			.any()
			? true
			: false;
	}

	getAttentionButton() {
		const pageSettingsButton = this.webElement.findIfAny(
			".page-section .tools .show-issues-button.chrome-button"
		);
		const pageSettingsElement = pageSettingsButton.any() ? pageSettingsButton : null;
		return new Button(pageSettingsElement);
	}

	isAttentionButtonPresent() {
		return this.webElement
			.findIfAny(".page-section .tools .show-issues-button.chrome-button")
			.any()
			? true
			: false;
	}

	// Sensai Chat UI Button
	getChatUIButton() {
		const chatUIButton = this.webElement.findIfAny(
			".page-section .tools .sidebar-view-button.chatui-addon:isVisible"
		);
		const chatUIElement = chatUIButton.any() ? chatUIButton : null;
		return new Button(chatUIElement);
	}
}

class PageHeader extends FrameworkObject {
	getButtons() {
		return new HeaderButtons(this.webElement);
	}

	// App Name
	getAppName() {
		const appNameElement = this.webElement.findIfAny(".page-section .pages .app-name");
		if (!appNameElement.any()) {
			throw new Error("Could not find app name in page header.");
		}
		return appNameElement;
	}

	// Page Name
	getPageName() {
		const pageNameElement = this.webElement.findIfAny(".page-section .pages .page-name");
		if (!pageNameElement.any()) {
			throw new Error("Could not find page name in page header.");
		}
		return pageNameElement;
	}
	isPageMenuPresent() {
		return this.webElement.findIfAny(`.menu-btn:isVisible`).any() ? true : false;
	}
}

PageHeader._getPageHeader = () => new PageHeader($$$("body header"));

const getPageHeader = new RootAction("getPageHeader", () => PageHeader._getPageHeader());

module.exports = {
	PageHeader,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getPageHeader);
	},
};
