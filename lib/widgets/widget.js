const { bus, RootAction } = require("yemen");
const $$$ = require("../selenium/3xdollar");
const robustify = require("../robustify");
const mixin = require("../mixin");
const { uniq, flatten } = require("lodash");
const waitForDisplayedTimeout = process.env.WDIO_WAITFOR_DISPLAYED_TIMEOUT
	? Number.parseInt(process.env.WDIO_WAITFOR_DISPLAYED_TIMEOUT, 10)
	: 1000;
const {
	AbstractWidget,
	getWidgetType,
	findWidgetWebElement,
} = require("../widgets/abstractWidget");

// A registry of classes
const widgetTypeRegistry = {};
Object.defineProperty(widgetTypeRegistry, "get", {
	enumerable: false,
	value: (type) => {
		const widgetClass = widgetTypeRegistry[type];

		if (!widgetClass) {
			throw new Error(`Unsupported widget type: ${type}`);
		}

		return widgetClass;
	},
});
bus.on("initialized", () => {
	bus.trigger("registerWidgetTypes", widgetTypeRegistry);
});

const { WithOptionDialog } = require("../option-editors/optiondialog");
const { WithMiscellaneousOptionEditor } = require("../option-editors/misc-option-editor");
const { WithTotalsOptionEditor } = require("../option-editors/totals-option-editor");
const { WithWidgetTypeOptionEditor } = require("../option-editors/widget-type-option-editor");
const {
	WithStoreFocusSettingsOptionEditor,
} = require("../option-editors/store-focus-settings-option-editor");
const { WithColorPicker } = require("./traits/color-picker");
const { WithLayoutPositionInfo } = require("./traits/layout-position-info");
const { WithGenericActions } = require("./traits/generic-actions");
const {
	WithNamedViewsOptionEditor,
} = require("../option-editors/named-views-settings-option-editor");
const { WithIndexSettingsOptionEditor } = require("../option-editors/index-settings-option-editor");
const { WithTemplatesOptionEditor } = require("../option-editors/templates-settings-option-editor");

class Widget extends mixin(
	AbstractWidget,
	WithColorPicker,
	WithOptionDialog,
	WithMiscellaneousOptionEditor,
	WithTotalsOptionEditor,
	WithWidgetTypeOptionEditor,
	WithLayoutPositionInfo,
	WithGenericActions,
	WithStoreFocusSettingsOptionEditor,
	WithIndexSettingsOptionEditor,
	WithNamedViewsOptionEditor,
	WithTemplatesOptionEditor
) {
	/**
	 *@private / not to be called from within an e2e test
	 */
	__getTitleElement__() {
		return this.webElement.find(".title-addon");
	}

	getTitle() {
		const titleText = this.__getTitleElement__().getText();
		return titleText === "&nbsp;" ? "" : titleText;
	}

	getTitleToolTip() {
		return this.__getTitleElement__().getAttribute("title");
	}

	getTooltip() {
		const activeTooltipExists = $$$("body").exists("#tooltip.active:isVisible");
		return activeTooltipExists ? $$$("body #tooltip.active:isVisible").getText() : "None";
	}

	getStyle() {
		const style = super.getStyle();
		const titleElementComputedStyle = this.__getTitleElement__().getComputedStyle();
		style["title-color"] = titleElementComputedStyle["color"];
		style["title-background-color"] = titleElementComputedStyle["background"].replace(
			/([^)]*\)).*/,
			"$1"
		);

		return style;
	}

	/**
	 * @private
	 * @returns {unknown}
	 */
	getDocks() {
		// cssClasses is guaranteed to be an array.
		const cssClasses = flatten([
			this.webElement.find(".awf-dock:isVisible").getAttribute("class"),
		]);
		return cssClasses.reduce((res, next) => {
			["center", "top", "bottom", "left", "right"].forEach((dockLocation) => {
				if (next.includes(dockLocation)) {
					res.push(dockLocation);
				}
			});

			return uniq(res);
		}, []);
	}

	isWidgetOptionsDisplayed() {
		const widgetOptionLoc = this.webElement.findIfAny(
			".awf-dock.top.vbox.drag-handle.ui-draggable-handle"
		);
		return widgetOptionLoc.any();
	}

	//#region Buttons on a Widget header section

	/**
	 * Get the currently visible 'chrome buttons' in a widget header, in the order as they appear visually,
	 * as determined by certain css properties.
	 * @returns {{className: string, title: string}[]}
	 */
	getButtons() {
		const knownButtonCssClasses = Object.values(WIDGET_HEADER_BUTTONS).map(
			(button) => button.className
		);

		const buttons = this.webElement
			.find(".chrome-button:isVisible")
			.webElements.reduce((res, buttonWebElement) => {
				const cssClass = buttonWebElement.getAttribute("class");
				knownButtonCssClasses.forEach((kbcc) => {
					if (cssClass.includes(kbcc) && this._isChromeButtonVisible(buttonWebElement)) {
						// get 'order' by looking at own or intentionally inherited (in css) from parent (a data-react-addon div with order set)
						const order = this._getCSSStyleProperty(buttonWebElement, "order") ?? 0;
						const titleAttribute = buttonWebElement.getAttribute("title");
						let tooltip;

						// NOTE: this is a hacky way to allow ONLY the refresh-view-button to derive its tooltip contents from a child element of the button: span.flexicon__tooltip
						// Somehow the buttonWebElement.findElement will yield the same single span for all buttons in the set. As if it is not really looking within the button, but the widget. Very odd...needs to be fixed.
						if (kbcc === WIDGET_HEADER_BUTTONS.CHROME_BUTTON_REFRESH_VIEW.className) {
							tooltip = this.webElement
								.findIfAny(".chrome-button.refresh-view-button .flexicon__tooltip")
								.getText();
						}

						res.push({
							order: parseInt(order, 10),
							className: kbcc,
							title: tooltip ?? titleAttribute,
						});
					}
				});

				return res;
			}, []);

		const sortedButtons = buttons.sort((a, b) => a.order - b.order);

		return sortedButtons.map((button) => ({
			className: button.className,
			title: button.title,
		}));
	}

	/**
	 * Get a specific chrome button for a widget
	 * @param {{className: string, title: string}} buttonDefinition
	 * @returns {WebElement|null}
	 * @private
	 */
	_getSpecificChromeButton(buttonDefinition) {
		const chromeButton = this.webElement.findIfAny(
			`.chrome-button.${buttonDefinition.className}`
		);
		return chromeButton.any() && this._isChromeButtonVisible(chromeButton)
			? chromeButton
			: "None";
	}

	//FIXME: REMOVE this alias when SCN repo also uses the right name. Seems like the SCN tests no longer run from the same-named feature branch (which already had the change...)
	getwidegtActionMenuButton() {
		return this.getWidgetActionsButton();
	}

	getWidgetNamedViewButton() {
		return this._getSpecificChromeButton(WIDGET_HEADER_BUTTONS.CHROME_BUTTON_NAMED_VIEW);
	}

	// FIXME: it really seems like getWidgetMenuButton has replaced this. Remove this second forward...No longer sure why fixing a type led to this.
	getWidgetActionsButton() {
		return this.getWidgetMenuButton();
	}

	getWidgetMenuButton() {
		return this._getSpecificChromeButton(WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU);
	}

	getTableFilterButton() {
		return this._getSpecificChromeButton(WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS);
	}

	/**
	 * Get the Toggle Legend button from the widget header.
	 * NOTE: widget needs to have focus/be hovered over to reveal any buttons! (except widget actions and table filtering)
	 * @returns {WebElement|null}
	 */
	getLegendButton() {
		return this._getSpecificChromeButton(WIDGET_HEADER_BUTTONS.CHROME_BUTTON_TOGGLE_LEGEND);
	}

	/**
	 * Get the Option Dialog toggle button from the widget header.
	 * NOTE: widget needs to have focus/be hovered over to reveal any buttons! (except widget actions and table filtering)
	 * @returns {WebElement|null}
	 */
	getWidgetSettingButton() {
		return this._getSpecificChromeButton(WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG);
	}

	/**
	 * Get the Toggle Full screen button from the widget header.
	 * NOTE: widget needs to have focus/be hovered over to reveal any buttons! (except widget actions and table filtering)
	 * @returns {WebElement|null}
	 */
	getWidgetMaximizeButton() {
		return this._getSpecificChromeButton(WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN);
	}

	goInFullScreenMode() {
		// Hover on the widget
		this.movePointerToWidget(10, 10);

		const fullScreenButtonElement = this.getWidgetMaximizeButton();
		if (!fullScreenButtonElement || !fullScreenButtonElement.any()) {
			throw new Error(`Could not find Full Screen button.`);
		}

		fullScreenButtonElement.click();
		$$$(".shadow.large .vbox").waitForDisplayed(waitForDisplayedTimeout);

		// wait for the animation to finish
		browser.pause(1000);
	}

	exitFullScreenMode() {
		// Hover on the widget
		this.movePointerToWidget(10, 10);

		const fullScreenButtonElement = this.getWidgetMaximizeButton();
		if (!fullScreenButtonElement || !fullScreenButtonElement.any()) {
			throw new Error(`Could not find Full Screen button.`);
		}

		fullScreenButtonElement.click();

		// wait for the animation to finish
		browser.pause(500);
	}

	/**
	 * Determine if the ClientRect of an element is within the ClientRect of an element that is
	 * supposed to be wrapping it, which would make the element fully visible.
	 * Also takes visibility of the screen's viewport into account (to prevent false positives for cases
	 * where the wrapper goes off-screen itself).
	 * Having to scroll/being able to scroll does _not_ count as being visible.
	 * @param {String} cssSelector of wrapper
	 * @returns {boolean}
	 */
	isFullyVisibleWithinCertainContainer(cssSelector) {
		const browserViewport = $$$(this.webElement.getClosest("html"));
		const container = $$$(this.webElement.getClosest(cssSelector));

		if (!container.any()) {
			throw new Error(
				"Could not find the wrapper the widget should have been part of" + cssSelector
			);
		}

		const rectViewport = browserViewport.getBoundingClientRect();
		const rectOuter = container.getBoundingClientRect();
		const rectInner = this.webElement.getBoundingClientRect();

		const fullyWithinViewport =
			rectViewport.top <= rectOuter.top &&
			rectViewport.left <= rectOuter.left &&
			rectViewport.right >= rectOuter.right &&
			rectViewport.bottom >= rectOuter.bottom;
		const fullyWithinWrapper =
			rectOuter.top <= rectInner.top &&
			rectOuter.left <= rectInner.left &&
			rectOuter.right >= rectInner.right &&
			rectOuter.bottom >= rectInner.bottom;
		return fullyWithinViewport && fullyWithinWrapper;
	}

	/**
	 * Is this element in full screen state and is it fully visible within the viewport (which is
	 * what full-screen styling is supposed to accomplish)
	 * @returns {boolean}
	 */
	isFullScreen() {
		const isWidgetDivInFullScreenMode = $$$("body").exists(
			`.widgetdiv--in-or-for-fullscreen [data-widget\\.uri="${this.name}"]`
		);

		if (!isWidgetDivInFullScreenMode) {
			return false;
		}
		return this.isFullyVisibleWithinCertainContainer(".scroll-wrapper");
	}

	isHidden() {
		return this.webElement.hasClass("widget-hidden");
	}

	isVisibleOnWebUI() {
		return this._getCSSStyleProperty(this.webElement, "visibility") === "visible";
	}

	_getCSSStyleProperty(locator, property) {
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
			{ elementId: locator.getAttribute("id"), propertyIn: property }
		);

		if (value === null) {
			throw new Error(
				"Error while trying to remotely executing 'css style property': " + property
			);
		}
		return value;
	}

	_isChromeButtonVisible(chromeButton) {
		return (
			this._getCSSStyleProperty(chromeButton, "opacity") !== "0" &&
			this._getCSSStyleProperty(chromeButton, "width") !== 0 &&
			this._getCSSStyleProperty(chromeButton, "display") !== "none"
		);
	}

	mouseHover() {
		this.webElement.moveTo();
		return this;
	}

	bringIntoFocus(scrollIntoViewOptions = true) {
		this.webElement.scrollIntoView(scrollIntoViewOptions);
		return this;
	}

	getEmptyWidgetMessage() {
		const emptyWidgetMessage = this.webElement.findIfAny(".empty-widget-message:isVisible");
		return emptyWidgetMessage.any() ? emptyWidgetMessage : "None";
	}

	emptyWidgetMessageHasIcon(icon) {
		return (
			this.getEmptyWidgetMessage()
				.getAttribute("class")
				.split(" ")
				.indexOf(icon) !== -1
		);
	}

	getTop() {
		return this.webElement.getBoundingClientRect().top;
	}

	getDimensions() {
		return [
			this.webElement.getBoundingClientRect().width,
			this.webElement.getBoundingClientRect().height,
		];
	}

	getTabbedWidgetHeight() {
		return this.webElement.findIfAny(".tabbed-pages__tab-content").getBoundingClientRect()
			.height;
	}

	// Because the dimension of PageV2 widgets are not super precise, this function allows a tolerance to the dimensions given. It returns
	// true when the dimensions are deemed 'good enough', false when not.
	assertDimensions(width, height, pixelTolerance) {
		const actualWidth = this.webElement.getBoundingClientRect().width;
		const actualHeight = this.webElement.getBoundingClientRect().height;

		return (
			width - pixelTolerance < actualWidth &&
			width + pixelTolerance > actualWidth &&
			height - pixelTolerance < actualHeight &&
			height + pixelTolerance > actualHeight
		);
	}

	getContinueButtonOnConversionDialog = () => $$$(`.widget-conversion-dialog .action-continue`);

	isKebabMenuPresent() {
		const widgetMenuButton = this.webElement.findIfAny(".widget-menu-button:isVisible");

		return widgetMenuButton.any();
	}
}

Widget.find = function(name) {
	return robustify(() => {
		const webElement = findWidgetWebElement(name);
		const type = getWidgetType(webElement);
		const widgetClass = widgetTypeRegistry.get(type);

		return new widgetClass(webElement, name, type);
	});
};

const findWidget = new RootAction("findWidget", (name) => Widget.find(name));

module.exports = {
	AbstractWidget,
	Widget,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(findWidget);
	},
	// Gets the type (string) of a webElement
	getWidgetType,
	// A registry of classes
	widgetTypeRegistry,
};
