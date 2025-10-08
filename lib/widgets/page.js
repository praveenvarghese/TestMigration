const jQuery = require("jquery-node");
const { makeArray } = jQuery;
const { RootAction } = require("yemen");
const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const $$$ = require("../selenium/3xdollar");
const PageActions = require("../application/page-actions");
const WorkflowItems = require("../application/workflow");
const PrimaryAction = require("../application/primary-action");
const Sidepanel = require("../application/sidepanel");
const mixin = require("../mixin");
const { Widget } = require("./widget");
const {
	WithPageExtensionsOptionEditor,
} = require("../option-editors/page-extensions-option-editor");
const {
	WithActionUponLeaveOptionEditor,
} = require("../option-editors/action-upon-leave-option-editor");
const {
	WithActionUponLoadOptionEditor,
} = require("../option-editors/action-upon-load-option-editor");

class Page extends mixin(
	Widget,
	WithActionUponLeaveOptionEditor,
	WithActionUponLoadOptionEditor,
	WithPageExtensionsOptionEditor
) {
	getVisibleWidgetsInViewPort() {
		let widgetURIs = [];
		const widgetElements = this.webElement.findIfAny(
			".widgetdiv:not(.widget-hidden) .aimms-widget:isVisible"
		);

		if (widgetElements.any()) {
			const URIs = widgetElements.getAttribute("data-widget.uri");
			if (!Array.isArray(URIs)) {
				widgetURIs.push(URIs);
			} else {
				widgetURIs = URIs;
			}
		}
		return widgetURIs;
	}

	getVisibleWidgets() {
		let widgetURIs = [];
		const widgetElements = this.webElement.findIfAny(
			".widgetdiv:not(.widget-hidden) .aimms-widget"
		);

		if (widgetElements.any()) {
			const URIs = widgetElements.getAttribute("data-widget.uri");
			if (!Array.isArray(URIs)) {
				widgetURIs.push(URIs);
			} else {
				widgetURIs = URIs;
			}
		}
		return widgetURIs;
	}

	getHighlightedWidget() {
		let widgetURIs = [];
		const widgetElements = this.webElement.findIfAny(".widgetdiv.active-widget .aimms-widget");

		if (widgetElements.any()) {
			const URIs = widgetElements.getAttribute("data-widget.uri");
			if (!Array.isArray(URIs)) {
				widgetURIs.push(URIs);
			} else {
				widgetURIs = URIs;
			}
		}
		return widgetURIs;
	}

	getWidgets() {
		let widgetURIs = [];
		const widgetElements = this.webElement.findIfAny(".widgetdiv .aimms-widget");

		if (widgetElements.any()) {
			const URIs = widgetElements.getAttribute("data-widget.uri");
			if (!Array.isArray(URIs)) {
				widgetURIs.push(URIs);
			} else {
				widgetURIs = URIs;
			}
		}
		return widgetURIs;
	}

	findIfAnyWidgetSettingOptionOnSidePanel() {
		const widgetSettingIconCount = this.webElement.findIfAny(`.optiondialog-nib:isVisible`); //.widget-menu-button:isVisible
		const count = widgetSettingIconCount.any() ? widgetSettingIconCount.length : 0;
		return count;
	}

	findOptionDialogNib() {
		// The dialog nib lives in the chrome bar of the header
		return $$$("header .page-section .tools .optiondialog-nib");
	}

	findWidgetsBySelector(selector) {
		log.debug(`findWidgetsBySelector: ${selector}`);
		return this.webElement.findIfAny(selector);
	}

	getPageActions() {
		const pageActionsV1Exists = $$$("body").exists(".page-action");
		return pageActionsV1Exists ? new PageActions($$$(".page-action")) : null;
	}

	getPrimaryPageAction() {
		return new PrimaryAction($$$(".primary-page-action-holder"));
	}

	isPrimaryActionDisplayed() {
		const isPrimaryActionVisible = $$$("body").exists(".primary-page-action-holder");
		return isPrimaryActionVisible;
	}

	getSecondaryPageActions() {
		return new PageActions($$$(".page-action-v2"));
	}

	isSecondaryPageActionDisplayed() {
		const isSecondaryActionVisible = $$$("body").exists(".page-action-v2");
		return isSecondaryActionVisible;
	}

	getSecondaryPageActionDetails() {
		return new PageActions($$$(".page-action-v2")).getSecondaryPageActionsDetails();
	}

	hasPageColumns(maxColumns) {
		return maxColumns === 14
			? !this.webElement
					.getAttribute("class")
					.split(" ")
					.find((txt) => txt.includes("maxcolumns"))
			: this.webElement.hasClass(`maxcolumns-${maxColumns}`);
	}

	getRowColumnSize() {
		const getPageClasses = this.webElement.getAttribute("class");

		const maxRowsClass = getPageClasses
			.split(" ")
			.filter((e) => /maxrows-/.test(e))
			.slice(0)
			.toString();

		const maxColumnsClass = getPageClasses
			.split(" ")
			.filter((e) => /maxcolumns-/.test(e))
			.slice(0)
			.toString();
		if (maxRowsClass === "" || maxColumnsClass === "") {
			throw new Error("Could not locate maxrows/maxcolumns ClassName.");
		}

		const maxRowsValue = maxRowsClass.replace(/maxrows-/, "");
		const maxColumnsValue = maxColumnsClass.replace(/maxcolumns-/, "");

		return { MaxRows: maxRowsValue, MaxColumns: maxColumnsValue };
	}

	getColumnSize() {
		const getMaxColumns = this.webElement
			.getAttribute("class")
			.split(" ")
			.find((txt) => txt.includes("maxcolumns"));

		const maxColValue = getMaxColumns.split("-");
		return maxColValue[1];
	}

	getRowSize() {
		const getMaxRowSize = this.webElement
			.getAttribute("class")
			.split(" ")
			.find((txt) => txt.includes("maxrows"));

		const maxRowValue = getMaxRowSize.split("-");
		return maxRowValue[1];
	}

	hasPageRows(maxRows) {
		return maxRows === 14
			? !this.webElement
					.getAttribute("class")
					.split(" ")
					.find((txt) => txt.includes("maxrows"))
			: this.webElement.hasClass(`maxrows-${maxRows}`);
	}

	getSidepanels() {
		return new Sidepanel($$$(".sidepanel-container"));
	}

	isSidepanelsDisplayed() {
		return $$$("body").exists(".sidepanel-container");
	}

	getWorkflowItems() {
		const workflowPanel = $$$(".workflow-panel").findIfAny(".header");

		if (workflowPanel.any()) {
			return new WorkflowItems($$$(".workflow-panel"));
		}
		return [];
	}

	hasAnyWorkflowSteps() {
		const workflowStepElement = $$$("body>.workflow-panel").findIfAny(".steps");

		if (workflowStepElement.any()) {
			return true;
		}
		return false;
	}

	isPageManagerOpen() {
		const isPageManagerOpen = $$$("body").exists(".view.page-navigator-addon.open");
		return isPageManagerOpen;
	}

	unBindBrowserContextmenu() {
		browser.execute(
			() =>
				(document.oncontextmenu = function() {
					return false;
				})
		);
	}
}

const getMainPage = new RootAction("getMainPage", () => {
	const pageDomElement = $$$("#main");
	let widgetUri = pageDomElement.getAttribute("data-widget.uri");

	if (!widgetUri) {
		widgetUri = "non-existent-page";
		pageDomElement.setAttribute("data-widget.uri", widgetUri);
	}

	return Widget.find(widgetUri);
});

class PageV2 extends Page {
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
	Page,
	onRegisterWidgetTypes(registry) {
		registry["page"] = Page;
		registry["pagev2-grid"] = PageV2;
	},
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getMainPage);
	},
};
