const { FrameworkObject } = require("../framework-object");
const { mixable } = require("../mixin");
const { Widget } = require("../widgets/widget");
const $$$ = require("../selenium/3xdollar");
const { Download } = require("../widgets/download");
const fs = require("fs");
const { Upload } = require("../widgets/upload");
``;
const { _ } = require("lodash");

class WidgetMenuItem extends FrameworkObject {
	_getWidgetMenuItem() {
		return $$$(this.webElement.selector);
	}

	click() {
		this._getWidgetMenuItem().click();
	}

	scroll() {
		this._getWidgetMenuItem().scrollIntoView(true);
	}

	getTooltipText() {
		return this._getWidgetMenuItem().getAttribute("title");
	}

	hasIcon(icon) {
		return this._getWidgetMenuItem()
			.find("i")
			.hasClass(icon);
	}

	getTitleText() {
		return this._getWidgetMenuItem()
			.find(".title")
			.getText();
	}

	hover() {
		this._getWidgetMenuItem().moveTo();
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}
}

const WithWidgetMenu = mixable(
	Widget,
	(__) =>
		class Mixin extends __ {
			getwidegtMenuButton() {
				const widgetMenuButton = this.webElement.findIfAny(".widget-menu-button:isVisible");
				let widgetMenu;
				if (widgetMenuButton.any()) {
					widgetMenu = _.extend({}, widgetMenuButton, {
						click() {
							this.webElement.click();
						},

						_getCSSStyleProperty(property) {
							return this.webElement.getCSSStyleProperty(property);
						},
					});
				}
				return widgetMenu;
			}

			isWidgetMenuOpened() {
				return $$$("body").exists(".widget-menu__items-wrapper");
			}

			isWidgetMenuButtonDisplayed() {
				let isWidgetActionDisplayed = true;
				const widgetActionLoc = this.getwidegtMenuButton();
				if (widgetActionLoc === undefined) {
					isWidgetActionDisplayed = false;
				}
				return isWidgetActionDisplayed;
			}

			isWidgetMenuOptionDisplayed(index) {
				let isWidgetMenuOptionDisplayed = true;
				const widgetMenuOption = $$$(
					`.widget-menu__items-wrapper .widget-menu__item:eq(${index})`
				);
				if (widgetMenuOption === undefined) {
					isWidgetMenuOptionDisplayed = false;
				}
				return isWidgetMenuOptionDisplayed;
			}

			openWidgetMenuOptionDialog(index) {
				this.getWidgetMenu().click();
				if (this.isWidgetMenuOptionDisplayed(index)) {
					$$$(`.widget-menu__items-wrapper .widget-menu__item:eq(${index})`).click();
				} else {
					throw new Error(`Could not find the widget menu option.`);
				}
			}

			getWidgetMenuDetails() {
				let widgetMenuActions = null;

				const widgetMenuContainer = $$$(".widget-menu__items-wrapper:isVisible");

				if (widgetMenuContainer.any()) {
					const widgetMenuElements = widgetMenuContainer.findIfAny(
						`.widget-menu__item:not(.widget-action)`
					);
					const titles = [].concat(widgetMenuElements.getAttribute("title"));
					const icons = [].concat(widgetMenuElements.find("i").getAttribute("class"));
					const widgetMenuClasses = [].concat(widgetMenuElements.getAttribute("class"));

					// eslint-disable-next-line no-confusing-arrow
					const states = widgetMenuClasses.map((ai) =>
						ai.includes("szh-menu__item--disabled") ? "inactive" : "active"
					);

					widgetMenuActions = _.zipWith(titles, icons, states, (title, icon, state) => ({
						title,
						icon,
						state,
					}));
				}

				return widgetMenuActions;
			}

			getWidgetMenuItem(index) {
				const widgetMenu = $$$(
					`.widget-menu__items-wrapper .widget-menu__item:eq(${index})`
				);

				if (!widgetMenu.any()) {
					throw new Error(`Could not find the ${index} widget menu item.`);
				}

				return new WidgetMenuItem(widgetMenu);
			}

			getWidgetMenu() {
				const widgetMenu = this.webElement.findIfAny(`.widget-menu-button`);

				if (!widgetMenu.any()) {
					throw new Error(`Could not find the widget menu.`);
				}

				return new WidgetMenuItem(widgetMenu);
			}

			_getDownloadButton(downloadButtonWebElement) {
				let downloadButton = "None";
				if (downloadButtonWebElement.any()) {
					const downloadClass = new Download(downloadButtonWebElement);
					downloadButton = downloadButtonWebElement;
					downloadButton = _.extend({}, downloadButtonWebElement, {
						click(xOffset = 0, yOffset = 0) {
							// Before clicking on the download button. Get the current TimeStamp and current state of file system.
							downloadClass.t0 = Date.now();
							downloadClass.dirBefore = fs.readdirSync(global.wdioDownloadDir, {
								encoding: "utf8",
							});

							this.webElement.moveTo();
							this.webElement.click({ button: "left", x: xOffset, y: yOffset });

							// Pause for 2 seconds for the file to be downloaded
							browser.pause(2000);
							return this;
						},
						getDownloadedFile() {
							return downloadClass.getDownloadedFile();
						},
						getCSSStyleProperty(property = "opacity") {
							return this._getCSSStyleProperty(this.webElement, property);
						},
					});
				}

				return downloadButton;
			}

			getExcelDownloadButton() {
				if (!this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}
				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");
				const excelDownloadButtonWebElement = widgetActionsContainer.findIfAny(
					`.widget-menu__item--download-xlsx:isVisible`
				);

				return this._getDownloadButton(excelDownloadButtonWebElement);
			}

			getWidgetDownloadButton() {
				if (!this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}
				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");
				const downloadButtonWebElement = widgetActionsContainer.findIfAny(
					`.widget-menu__item--download-csv:isVisible`
				);

				return this._getDownloadButton(downloadButtonWebElement);
			}

			getExcelUploadButton() {
				if (!this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}
				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");
				const uploadButtonWebElement = widgetActionsContainer.findIfAny(
					`.widget-menu__item--upload-xlsx:isVisible`
				);
				const actualUploadButtonWebElement = this.webElement.findIfAny(
					".chrome-button.upload-excel-button"
				);

				let uploadButton = "None";
				if (uploadButtonWebElement.any()) {
					uploadButton = new Upload(actualUploadButtonWebElement);
				}

				if (this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}

				return uploadButton;
			}
		}
);

module.exports = { WithWidgetMenu };
