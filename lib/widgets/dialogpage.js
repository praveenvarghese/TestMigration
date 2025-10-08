const mixin = require("../mixin");
const { Page } = require("./page");
const $$$ = require("../selenium/3xdollar");
const { _ } = require("lodash");
const jQuery = require("jquery-node");
const { makeArray } = jQuery;
const { WithMiscellaneousOptionEditor } = require("../option-editors/misc-option-editor");

class DialogPage extends mixin(Page, WithMiscellaneousOptionEditor) {
	getDialogPageSizes() {
		let dialogPageSizes = [];
		const dialogPageSizeElements = this.webElement.findIfAny(".page-size-container");
		dialogPageSizes = dialogPageSizeElements.find("span").getAttribute("id");
		return dialogPageSizes;
	}

	getSelectedDialogPageSize() {
		const dialogPageSizes = this.webElement.find(".page-size-container .active").getText();
		return dialogPageSizes;
	}

	selectSizeOfDialogPage(size) {
		const getSize = ".page-size-container #" + size;
		const dialogPageSizeElements = this.webElement.findIfAny(getSize);
		dialogPageSizeElements.click();
	}

	checkPlaceHolderButtonText() {
		let footerButtons = [];

		const footerButtonsElements = this.webElement.findIfAny(".footer .button-placeholder");
		const titles = [].concat(footerButtonsElements.getAttribute("title"));
		const texts = [].concat(footerButtonsElements.getText());

		footerButtons = _.zipWith(texts, titles, (text, title) => ({
			text,
			title,
		}));
		return footerButtons;
	}

	clickDialogPageButton(button) {
		$$$(`.action-${button?.toLowerCase()}`).click();
	}

	getDialogPageTitle() {
		const getText = $$$(".ui-dialog-title").getText();
		return getText;
	}

	getDialogPageButtonDisplayedList() {
		let getText = [];
		getText = $$$(".ui-dialog-buttonset").getText();
		return getText;
	}
}

class DialogPageV2 extends DialogPage {
	getWidgetAreas() {
		const widgetAreaListConfiguratorStub = jQuery(
			this.webElement.find(".pagev2__grid-container").getHTML()
		);

		const widgetAreas = makeArray(
			widgetAreaListConfiguratorStub.find(".pagev2__widget-area")
		).map((elem) => {
			const elQ = jQuery(elem);
			const widgets = makeArray(elQ.find(".widgetdiv .aimms-widget")).map((elem2) =>
				jQuery(elem2).attr("data-widget.uri")
			);

			return {
				areaName: elQ.find("> .pagev2__widget-area-name").text(),
				widgets,
			};
		});

		return widgetAreas;
	}
}

module.exports = {
	DialogPage,
	onRegisterWidgetTypes(registry) {
		registry["dialog"] = DialogPage;
		registry["pagev2-grid-dialog"] = DialogPageV2; // should be functionally the same, for now
	},
};
