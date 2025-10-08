const jQuery = require("jquery-node");
const $$$ = require("../selenium/3xdollar");
const { makeArray } = jQuery;
// const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const { PageManager } = require("./page-manager");
const { WidgetWizardForm } = require("./widget-wizard-form");
const { FlyoutMenu } = require("./app-manager");

const UNASSIGNED_WIDGETS_VISIBLE_AREA_NAME = "Unassigned widgets";
const ADD_NEW_WIDGET_FLYOUT_ITEM_LABEL = "Add new widget";

class DraggableWidgetHandle extends FrameworkObject {
	constructor(webElement, pageConfigurator) {
		super(webElement);
		this.pageConfigurator = pageConfigurator;
	}
	toArea(areaName) {
		const pcWebElement = this.pageConfigurator.webElement;
		const areaWebElement = pcWebElement.find(
			`.widget-area-list-configurator__item-name:textMatches(/^${areaName}$/) + .widget-area-list-configurator__widget-list`
		);

		this.webElement.dnd({
			dropOnTopOf: areaWebElement.cssSelector,
		});
	}
	dropAfter(widgetName) {
		const pcWebElement = this.pageConfigurator.webElement;
		const widgetHandleWebElement = pcWebElement.find(
			`.widget-area-list-configurator__item-name:textMatches(/^${widgetName}$/)`
		);

		this.webElement.dnd({
			dropAfter: widgetHandleWebElement.cssSelector,
			dropOffset: {
				y: -10,
			},
		});
	}
	dropBefore(widgetName) {
		const pcWebElement = this.pageConfigurator.webElement;
		const widgetHandleWebElement = pcWebElement.find(
			`.widget-area-list-configurator__item-name:textMatches(/^${widgetName}$/)`
		);

		this.webElement.dnd({
			dropBefore: widgetHandleWebElement.cssSelector,
		});
	}
}

class PageConfigurator extends FrameworkObject {
	getLayoutPreviews() {
		const layoutPreviews = this.webElement.findIfAny(`.layout-previews:isVisible`);
		return layoutPreviews.any() ? layoutPreviews : "None";
	}

	getClassicLayoutWidgetArea() {
		const nonClassicLayoutWidgetArea = this.webElement.findIfAny(
			`.widget-area-list-configurator.widget-area-list-configurator--undefined:isVisible`
		);
		return nonClassicLayoutWidgetArea.any() ? nonClassicLayoutWidgetArea : "None";
	}

	getClassicLayoutWidgetAreaText() {
		return this.getClassicLayoutWidgetArea().getText();
	}

	selectAppSection() {
		return $$$(".page-navigator__tab.page-navigator__tab--app").click();
	}

	selectLayout(layoutName, custom = false) {
		if (!custom) {
			this.selectStandardLayoutsSection();
		} else {
			this.selectCustomLayoutsSection();
		}

		if (layoutName === "No Layout") {
			browser.execute((selector) => {
				const $ = window.jQuery;
				$(selector).click();
			}, `.layout-previews__select-layout-classic`);
		} else {
			// const category = layoutId.replace(/\/.*/, "");
			const baseLayoutName = layoutName.replace(/.*\//, "");

			//this.webElement
			//	.find(`.layout-previews__layout:has(figcaption:textMatches(/^${baseLayoutName}$/))`)
			//	.click();

			browser.execute((selector) => {
				const $ = window.jQuery;
				$(selector).click();
			}, `.layout-previews__layout:has(figcaption:textMatches(/^${baseLayoutName}$/i))`);
		}
	}

	standardLayoutHeaderButton() {
		// assumes standard layouts are the first mentioned type
		const standardLayoutHeaderButton = this.webElement.findIfAny(
			`.page-configurator__layout-types .page-configurator__layout-type:nth-child(1)`
		);

		return standardLayoutHeaderButton.any() ? standardLayoutHeaderButton : null;
	}

	customLayoutHeaderButton() {
		// assumes Custom layouts are the second mentioned type
		const customLayoutHeaderButton = this.webElement.findIfAny(
			`.page-configurator__layout-types .page-configurator__layout-type:nth-child(2)`
		);

		return customLayoutHeaderButton.any() ? customLayoutHeaderButton : null;
	}

	// assumes standard layouts are the first mentioned type
	selectStandardLayoutsSection() {
		browser.execute((selector) => {
			const $ = window.jQuery;
			$(selector).click();
		}, `.page-configurator__layout-types .page-configurator__layout-type:nth-child(1)`);
	}

	getVisibleLayoutNames(custom = false) {
		if (!custom) {
			this.selectStandardLayoutsSection();
		} else {
			this.selectCustomLayoutsSection();
		}
		let names = [];
		names = this.webElement.findIfAny(".layout-previews__layout-name:isVisible").getText();
		return names;
	}

	getLayoutNames(custom = false) {
		if (!custom) {
			this.selectStandardLayoutsSection();
		} else {
			this.selectCustomLayoutsSection();
		}
		let names = [];
		names = this.webElement.findIfAny(".layout-previews__layout-name").getText();
		return names;
	}

	clickRightArrow() {
		this.webElement.find(".icon-arrow-right2").click();

		// for chaining
		return this;
	}

	clickLeftArrow() {
		this.webElement.find(".icon-arrow-left").click();

		// for chaining
		return this;
	}

	// assumes Custom layouts are the second mentioned type
	selectCustomLayoutsSection() {
		browser.execute((selector) => {
			const $ = window.jQuery;
			$(selector).click();
		}, `.page-configurator__layout-types .page-configurator__layout-type:nth-child(2)`);
	}

	_getSelectedLayout() {
		const selectedLayoutElement = this.webElement.findIfAny(
			`.layout-previews__layout-list-container .layout-previews__layout-list .layout-previews__layout--selected`
		);

		return selectedLayoutElement.any()
			? selectedLayoutElement.find(`figcaption`).getText()
			: "";
	}

	_getSelectedLayoutType() {
		const selectedLayoutTypeElement = this.webElement.findIfAny(
			`.page-configurator__layout-types .page-configurator__layout-type.page-configurator__layout-type--active`
		);
		return selectedLayoutTypeElement.any() ? selectedLayoutTypeElement.getText() : null;
	}

	getSelectedLayoutInfo() {
		return {
			LayoutType: this._getSelectedLayoutType(),
			Layout: this._getSelectedLayout(),
		};
	}

	getWidgetAreas() {
		let widgetAreas = "None";
		const widgetAreaListConfiguratorElement = this.webElement.findIfAny(
			".widget-area-list-configurator"
		);
		if (widgetAreaListConfiguratorElement.any()) {
			const widgetAreaListConfiguratorStub = jQuery(
				widgetAreaListConfiguratorElement.getHTML()
			);

			widgetAreas = makeArray(
				widgetAreaListConfiguratorStub.find(".widget-area-list-configurator__item--area")
			).map((element) => {
				const elQ = jQuery(element);
				const widgets = makeArray(
					elQ.find(
						".widget-area-list-configurator__widget-list .widget-area-list-configurator__item--widget .widget-area-list-configurator__item-name"
					)
				).map((elem) => jQuery(elem).text());

				return {
					areaName: elQ.find("> .widget-area-list-configurator__item-name").text(),
					widgets,
				};
			});
		}

		return widgetAreas;
	}

	getAddWidgetDialogForArea(areaName) {
		this.clickWidgetAreaFlyoutMenu(areaName);

		// Click on the 'Add new widget' menu that has popped up.
		$$$(".flyout__menu .flyout__menu-item:eq(0)").click();
		return WidgetWizardForm.find();
	}

	clickWidgetAreaFlyoutMenu(areaName) {
		const theArea = this.webElement.find(
			`.widget-area-list-configurator__item-name:textMatches(/^${areaName}$/)`
		);

		const flyOutButton = theArea.find(" .flyout__context-button");
		flyOutButton.click();
	}

	assertAddWidgetmenu(areaName) {
		this.clickWidgetAreaFlyoutMenu(areaName);

		// Assert on click of flyout option add new widget option is present
		return $$$(".flyout__menu .flyout__menu-item:eq(0)").getText();
	}

	dragWidget(widgetName) {
		return new DraggableWidgetHandle(
			this.webElement.find(
				`.widget-area-list-configurator__item-name:textMatches(/^${widgetName}$/)`
			),
			this
		);
	}

	openCustomLayoutEditor(layoutName) {
		this.selectCustomLayoutsSection();
		this.webElement
			.findIfAny(`.layout-previews__layout-name:textMatches(/^${layoutName}$/)`)
			.parent()
			.find(" .flyout__context-button")
			.click();
		$$$(".flyout__menu .flyout__menu-item:eq(0)").click();
	}

	deleteCustomLayout(layoutName) {
		this.selectCustomLayoutsSection();
		this.webElement
			.findIfAny(`.layout-previews__layout-name:textMatches(/^${layoutName}$/)`)
			.parent()
			.find(" .flyout__context-button")
			.click();
		$$$(".flyout__menu .flyout__menu-item:eq(2)").click();
	}

	getLayoutPreviewData(layoutName, layoutSection) {
		if (layoutSection === "standard") {
			this.selectStandardLayoutsSection();
		} else if (layoutSection === "custom") {
			this.selectCustomLayoutsSection();
		}
		let previewData = null;
		const previewElements = [].concat(
			this.webElement
				.find(`.layout-previews__layout-name:textMatches(/^${layoutName}$/)`)
				.parent()
				.find(" .pagev2__grid-container:isVisible")
				.getAttribute("style")
				.split(";")
		);
		previewData = previewElements.filter((n) => n);
		return previewData;
	}

	addACustomLayout() {
		this.selectCustomLayoutsSection();
		this.webElement.findIfAny(`.layout-previews__add-layout`).click();
		return getCustomLayoutDialog();
	}

	cloneLayout(layoutName, layoutSection) {
		if (layoutSection === "standard") {
			this.selectStandardLayoutsSection();
		} else if (layoutSection === "custom") {
			this.selectCustomLayoutsSection();
		}
		this.webElement
			.findIfAny(`.layout-previews__layout-name:textMatches(/^${layoutName}$/)`)
			.parent()
			.find(" .flyout__context-button")
			.click();
		$$$(`.flyout__menu .flyout__menu-item:contains("Clone")`).click();
	}

	/**
	 * Open the flyout for the 'Unassigned Widgets' area and Click on the Flyout item that adds a widget there
	 * (mimics functionality that used to be present in the '+' icon at the bottom of the Page Configurator; deleted now)
	 * Kept for legacy reasons (other tests 'adding widgets').
	 * @returns {WidgetWizardForm}
	 */
	clickAddWidgetButton() {
		this.clickWidgetAreaFlyoutMenu(UNASSIGNED_WIDGETS_VISIBLE_AREA_NAME);
		$$$(
			`.flyout__menu .flyout__menu-item:contains("${ADD_NEW_WIDGET_FLYOUT_ITEM_LABEL}")`
		).click();

		return WidgetWizardForm.find();
	}

	assertAddWidgetButton() {
		const buttonLoc = this.webElement.findIfAny(".page-configurator__btn-add-widget.icon-plus");
		return buttonLoc.any();
	}

	createWidget(type, contents, name, width = null, height = null) {
		if (typeof contents === "string") {
			name = contents;
			contents = [];
		}

		let widgetWizardForm = this.clickAddWidgetButton()
			.selectType(type)
			.enterName(name)
			.addItemFromAvailableContents(...contents);
		if (width !== null || height !== null) {
			widgetWizardForm = widgetWizardForm.setSize(width, height);
		}

		return widgetWizardForm.clickAddWidgetButton();
	}

	getWidgetFlyoutMenu(widgetUri) {
		const widgetArea = this.webElement.find(
			`.widget-area-list-configurator__item[title="${widgetUri}"]`
		);
		widgetArea.moveTo();
		widgetArea.find(`.flyout__context-button`).click();
		return new FlyoutMenu($$$(`.flyout.flyout--open`));
	}
}

PageConfigurator.open = () => {
	const pageManager = PageManager.open();

	pageManager.getPageNavigatorTab().click();

	const pageConfigurator = new PageConfigurator(
		pageManager.webElement.find(".page-configurator")
	);

	return pageConfigurator;
};

PageConfigurator.get = () => {
	const pageConfigurator = new PageConfigurator($$$(".page-configurator"));
	return pageConfigurator;
};

PageConfigurator.close = () => {
	PageManager.close();
};

const openPageConfigurator = new RootAction("openPageConfigurator", () => PageConfigurator.open());
const getPageConfigurator = new RootAction("getPageConfigurator", () => PageConfigurator.get());
const closePageConfigurator = new RootAction("closePageConfigurator", () =>
	PageConfigurator.close()
);

module.exports = {
	PageConfigurator,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(openPageConfigurator, getPageConfigurator, closePageConfigurator);
	},
	UNASSIGNED_WIDGETS_VISIBLE_AREA_NAME,
	ADD_NEW_WIDGET_FLYOUT_ITEM_LABEL,
};
