const $$$ = require("../selenium/3xdollar");
const { v4: uuidV4 } = require("uuid");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const { WidgetWizardForm } = require("./widget-wizard-form");

class WidgetManager extends FrameworkObject {
	clickAddWidgetButton() {
		this.webElement.find(".show-widget-form-btn .icon-plus").click();
		return WidgetWizardForm.find();
	}

	keyBoardPressAddWidgetButton() {
		this.pressKeys(SPECIAL_KEYS.enter);
		return WidgetWizardForm.find();
	}

	closeAddWidgetWizard() {
		return $$$(".close-wizard").click();
	}

	OpenWidgetDetails(widgetTitle) {
		const widgetManager = this;
		const widgetDetail = widgetManager.webElement.findIfAny(
			`.widget-list .widget-item[title="${widgetTitle}"]`
		);
		if (!widgetDetail.any()) {
			throw new Error(`Could not locate widget with title "${widgetTitle}".`);
		}

		if (!widgetDetail.hasClass("open")) widgetDetail.click();
	}

	setWidgetSize(widgetTitle, newSize) {
		const widgetManager = this;
		this.OpenWidgetDetails(widgetTitle);
		// Doing search from the widgetManager webelement as DOM refresh happens after the selection
		widgetManager.webElement
			.find(`.widget-list .widget-item[title="${widgetTitle}"] select[name=width]`)
			.selectByAttribute("value", newSize.width);
		widgetManager.webElement
			.find(`.widget-list .widget-item[title="${widgetTitle}"] select[name=height]`)
			.selectByAttribute("value", newSize.height);
		return widgetManager;
	}

	deleteWidget(widgetTitle) {
		const widgetManager = this;
		this.OpenWidgetDetails(widgetTitle);
		widgetManager.webElement
			.find(`.widget-list .widget-item[title="${widgetTitle}"].open .deleteWidget`)
			.click();
		browser.acceptAlert();
		return widgetManager;
	}

	getWidgetSize(widgetTitle) {
		let widgetSize = null;
		this.OpenWidgetDetails(widgetTitle);
		const widgetSizeElement = $$$(
			`.widget-list .widget-item[title="${widgetTitle}"] .widget-form`
		);

		if (widgetSizeElement.any()) {
			const widgetWidth = widgetSizeElement
				.find(`[name="width"] [selected]`)
				.getAttribute("value");

			const WidgetHeight = widgetSizeElement
				.find(`[name="height"] [selected]`)
				.getAttribute("value");

			widgetSize = { width: widgetWidth, height: WidgetHeight };
		}

		return widgetSize;
	}

	getWidgets() {
		let widgetsTitles = [];
		const widgetsElements = this.webElement.findIfAny(".widget-list .widget-item");

		if (widgetsElements.any()) {
			const titles = widgetsElements.getAttribute("title");
			if (!Array.isArray(titles)) {
				widgetsTitles.push(titles);
			} else {
				widgetsTitles = titles;
			}
		}
		return widgetsTitles;
	}

	getAllWidgetTypes() {
		this.clickAddWidgetButton();
		const widgetTypes = $$$(`select[name="widgettype"] option`).getText();
		return widgetTypes;
	}
}

WidgetManager.open = () => {
	if (!$$$("body").exists(".sidebar .view.widget-manager-addon.open")) {
		$$$(".tools .widget-manager-addon").click();
	}
	const widgetManager = new WidgetManager($$$(".sidebar .view.widget-manager-addon"));
	return widgetManager;
};

WidgetManager.get = () => {
	const widgetManager = new WidgetManager($$$(".sidebar .view.widget-manager-addon"));
	return widgetManager;
};

WidgetManager.close = () => {
	const isWidgetManagerOpen = $$$("body").exists(".sidebar .view.widget-manager-addon.open");
	if (isWidgetManagerOpen) {
		$$$(".sidebar-container.open .icon-close").click();
	}
};

WidgetManager.createWidget = (type, contents, name, width, height) => {
	const widgetManager = WidgetManager.open();

	if (typeof contents === "string") {
		name = contents;
		contents = [];
	}

	let widgetWizardForm = widgetManager
		.clickAddWidgetButton()
		.selectType(type)
		.enterName(name)
		.addItemFromAvailableContents(...contents);

	if (width !== null || height !== null) {
		widgetWizardForm = widgetWizardForm.setSize(width, height);
	}

	return widgetWizardForm.clickAddWidgetButton();
};

WidgetManager.createWidgetThroughKeyBoardPress = (type, contents, name, width, height) => {
	const widgetManager = WidgetManager.open();

	if (typeof contents === "string") {
		name = contents;
		contents = [];
	}

	let widgetWizardForm = widgetManager
		.clickAddWidgetButton()
		.selectType(type)
		.enterName(name)
		.addItemFromAvailableContents(...contents);

	if (width !== null || height !== null) {
		widgetWizardForm = widgetWizardForm.setSize(width, height);
	}

	return widgetWizardForm.keyBoardPressAddWidgetButton();
};

const createWidget = new RootAction(
	"createWidget",
	(type = "table", contents = [], name = uuidV4(), width = null, height = null) =>
		WidgetManager.createWidget(type, contents, name, width, height)
);

const createWidgetThroughKeyBoardPress = new RootAction(
	"createWidgetThroughKeyBoardPress",
	(type = "table", contents = [], name = uuidV4(), width = null, height = null) =>
		WidgetManager.createWidgetThroughKeyBoardPress(type, contents, name, width, height)
);

const openWidgetManager = new RootAction("openWidgetManager", () => WidgetManager.open());
const closeWidgetManager = new RootAction("closeWidgetManager", () => WidgetManager.close());
const getWidgetManager = new RootAction("getWidgetManager", () => WidgetManager.get());

module.exports = {
	WidgetManager,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(
			openWidgetManager,
			closeWidgetManager,
			createWidget,
			createWidgetThroughKeyBoardPress,
			getWidgetManager
		);
	},
};
