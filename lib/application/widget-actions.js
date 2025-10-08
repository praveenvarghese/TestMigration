const { FrameworkObject } = require("../framework-object");
const { mixable } = require("../mixin");
const { Widget } = require("../widgets/widget");
const $$$ = require("../selenium/3xdollar");
const { Download } = require("../widgets/download");
const fs = require("fs");
const { Upload } = require("../widgets/upload");
``;
const { _ } = require("lodash");

class WidgetAction extends FrameworkObject {
	_getWidgetAction() {
		return $$$(this.webElement.selector);
	}

	click() {
		this._getWidgetAction().click();
	}

	scroll() {
		this._getWidgetAction().scrollIntoView(true);
	}

	getTooltipText() {
		return this._getWidgetAction().getAttribute("title");
	}

	hasIcon(icon) {
		return this._getWidgetAction()
			.find("i")
			.hasClass(icon);
	}

	getTitleText() {
		return this._getWidgetAction()
			.find(".title")
			.getText();
	}

	hover() {
		this._getWidgetAction().moveTo();
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}
}

const WithWidgetActions = mixable(
	Widget,
	(__) =>
		class Mixin extends __ {
			getWidgetActionMenuButton() {
				const widgetActionMenuButton = this.webElement.findIfAny(
					".widget-menu-button:isVisible"
				);
				let widgetAction;
				if (widgetActionMenuButton.any()) {
					widgetAction = _.extend({}, widgetActionMenuButton, {
						click() {
							this.webElement.click();
						},

						_getCSSStyleProperty(property) {
							return this.webElement.getCSSStyleProperty(property);
						},
					});
				}

				return widgetAction;
			}

			isWidgetMenuOpened() {
				return $$$("body").exists(".widget-menu__items-wrapper");
			}

			isWidgetActionMenuButtonDisplayed() {
				let isWidgetActionDisplayed = true;
				const widgetActionLoc = this.getWidgetActionMenuButton();
				if (widgetActionLoc === undefined) {
					isWidgetActionDisplayed = false;
				}
				return isWidgetActionDisplayed;
			}

			getActiveWidgetActionsCount() {
				const activeWidgetActions = $$$(
					".widget-menu__items-wrapper .widget-action:not(.szh-menu__item--disabled):isVisible"
				);

				return activeWidgetActions.any() ? activeWidgetActions.webElements.length : 0;
			}

			getWidgetActionDetails(index, fileName = "") {
				let widgetAction;
				if (fileName === "") {
					widgetAction = $$$(`.widget-menu__items-wrapper .widget-action:eq(${index})`);
				} else {
					const uploadWebElement = $$$(`body`);
					let uploadButton = null;
					if (uploadWebElement.any()) {
						uploadButton = new Upload(uploadWebElement);
						uploadButton.uploadProcedure(fileName);
					}
					widgetAction = $$$(`.widget-menu__items-wrapper .widget-action:eq(${index})`);
				}

				return new WidgetAction(widgetAction);
			}

			getAllWidgetActionListName() {
				const eachWidgetAction = $$$(
					".widget-menu__items-wrapper .widget-action"
				).getText();
				return eachWidgetAction;
			}

			getWidgetActions() {
				let widgetActions = null;

				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");

				if (widgetActionsContainer.any()) {
					const widgetActionElements = widgetActionsContainer.findIfAny(".widget-action");
					const titles = [].concat(widgetActionElements.getAttribute("title"));
					const icons = [].concat(widgetActionElements.find("i").getAttribute("class"));
					const widgetItemsClasses = [].concat(
						widgetActionElements.getAttribute("class")
					);

					// eslint-disable-next-line no-confusing-arrow
					const states = widgetItemsClasses.map((ai) =>
						ai.includes("szh-menu__item--disabled") ? "inactive" : "active"
					);

					widgetActions = _.zipWith(titles, icons, states, (title, icon, state) => ({
						title,
						icon,
						state,
					}));
				}

				return widgetActions;
			}

			getAllKebabMenuItems() {
				let KebabMenuItems = null;

				const KebabMenuItemsContainer = $$$(".widget-menu__items-wrapper:isVisible");

				if (KebabMenuItemsContainer.any()) {
					const KebabMenuItemsElements = KebabMenuItemsContainer.findIfAny(
						".widget-menu__item"
					);
					const titles = [].concat(KebabMenuItemsElements.getAttribute("title"));
					const icons = [].concat(KebabMenuItemsElements.find("i").getAttribute("class"));
					const KebabMenuItemsClasses = [].concat(
						KebabMenuItemsElements.getAttribute("class")
					);

					// eslint-disable-next-line no-confusing-arrow
					const states = KebabMenuItemsClasses.map((ai) =>
						ai.includes("szh-menu__item--disabled") ? "inactive" : "active"
					);

					KebabMenuItems = _.zipWith(titles, icons, states, (title, icon, state) => ({
						title,
						icon,
						state,
					}));
				}

				return KebabMenuItems;
			}

			_getDownloadButton(downloadButtonWebElement) {
				let downloadButton = "None";
				if (downloadButtonWebElement.any()) {
					const downloadClass = new Download(downloadButtonWebElement);
					downloadButton = downloadButtonWebElement;
					downloadButton = _.extend({}, downloadButtonWebElement, {
						click({ xOffset = 0, yOffset = 0, postClickWaitTimeInMs = 5000 } = {}) {
							// Before clicking on the download button. Get the current TimeStamp and current state of file system.
							downloadClass.t0 = Date.now();
							downloadClass.dirBefore = fs.readdirSync(global.wdioDownloadDir, {
								encoding: "utf8",
							});

							downloadButtonWebElement.moveTo();
							downloadButtonWebElement.click({
								button: "left",
								x: xOffset,
								y: yOffset,
							});

							// Pause for few seconds for the file to be downloaded
							browser.pause(postClickWaitTimeInMs);
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

			getProceduralDownloadButton() {
				if (!this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}
				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");
				const excelDownloadButtonWebElement = widgetActionsContainer.findIfAny(
					`[title="WidgetDownload"]:isVisible`
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
				return uploadButton;
			}

			getProceduralUploadWidgetItem() {
				if (!this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}
				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");
				const uploadButtonWebElement = widgetActionsContainer.findIfAny(
					`.upload:isVisible`
				);
				const actualUploadButtonWebElement = this.webElement.findIfAny(
					".chrome-button.upload-excel-button"
				);

				let uploadButton = null;
				if (uploadButtonWebElement.any()) {
					uploadButton = new Upload(actualUploadButtonWebElement);
				}
				return uploadButton;
			}

			getExportToImageButton() {
				if (!this.isWidgetMenuOpened()) {
					this.getWidgetActionMenuButton().click();
				}
				const widgetActionsContainer = $$$(".widget-menu__items-wrapper:isVisible");
				const downloadButtonWebElement = widgetActionsContainer.findIfAny(
					`.widget-menu__item--download-image:isVisible`
				);

				return this._getDownloadButton(downloadButtonWebElement);
			}
		}
);

module.exports = { WithWidgetActions };
