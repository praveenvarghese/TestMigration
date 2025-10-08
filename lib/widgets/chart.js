const { Widget } = require("./widget");
const { WithChartHeader } = require("./traits/chart-header");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");
const { WithPartitionOptionEditor } = require("../option-editors/partition-option-editor");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { WithWidgetActions } = require("../application/widget-actions");
const { WithWidgetMenu } = require("../application/widget-menu");
const { ItemActions } = require("../application/item-actions");
const { WithWidgetNamedView } = require("../application/widget-named-view");
const mixin = require("../mixin");

const { flatten, _ } = require("lodash");
const zipWith = require("lodash.zipwith");

const extractTooltipLabelsAndValues = (tooltips) => {
	const labelsAndValues = tooltips.reduce(
		(result, tooltip) => {
			const parsedTooltip = /[^(]*([^:]*):(.*)/.exec(tooltip);
			if (parsedTooltip) {
				result.labels.push(parsedTooltip[1].trim());
				result.values.push(parsedTooltip[2].trim());
			}
			return result;
		},
		{ labels: [], values: [] }
	);

	return labelsAndValues;
};

const fixPieChartInconsistency = (text) => text.replace(/^[^(]*/, "");

class Chart extends mixin(
	Widget,
	WithChartHeader,
	WithIdentifierSettingsOptionEditor,
	WithPartitionOptionEditor,
	WithGenericContentsOptionEditor,
	WithWidgetExtensionsOptionEditor,
	WithWidgetActions,
	WithWidgetMenu,
	WithWidgetNamedView
) {
	_getChartElementClass() {
		throw new Error("Subclass does not implement mandatory method: _getChartElementClass");
	}

	_getChartElements(tuple = [], exactMatch = false) {
		const tupleText = tuple.join("\\s*,\\s*").replace(/[(&)]/g, ".");
		const chartElementPattern = exactMatch
			? `.${this._getChartElementClass()}:textMatches(/[^\\(]*\\(${tupleText}\\)[^:]*:.*/)`
			: `.${this._getChartElementClass()}:textMatches(/[^\\(]*[\\(]?.*${tupleText}.*[\\)]?[^:]*:.*/)`;

		const chartElements = this.webElement.find(chartElementPattern);
		const tooltips = [].concat(chartElements.getText()).map(fixPieChartInconsistency);
		const { labels, values } = extractTooltipLabelsAndValues(tooltips);
		const { flags, annotations } = flatten([chartElements.getAttribute("class")]).reduce(
			(res, cur) => {
				cur.split(/\s/).forEach((cssClass) => {
					if (cssClass.startsWith("flag-")) {
						res.flags.push(cssClass.replace(/flag-/, ""));
					} else if (cssClass.startsWith("annotation-")) {
						res.annotations.push(cssClass.replace(/annotation-/, ""));
					}
				});
				return res;
			},
			{ flags: [], annotations: [] }
		);

		return zipWith(labels, values, chartElements.webElements, (label, value, webElement) => ({
			label,
			value,
			flags,
			annotations,
			webElement: this.webElement.find(webElement.selector),
		}));
	}

	_getChartHeight() {
		let chartHeight = 0;

		switch (this._getChartElementClass()) {
			case "dot":
				chartHeight =
					this.webElement.find(".chart .graphic").getBoundingClientRect().height -
					this.webElement.find(".chart .x-axis").getBoundingClientRect().height;
				break;

			default:
				{
					const spacerElQ = this.webElement.findIfAny("div.spacer");
					if (spacerElQ.any()) {
						chartHeight = spacerElQ.getSize("height");
					}
				}
				break;
		}

		return chartHeight;
	}

	_getChartElement(tupleOrSingleElementString, exactMatch = false) {
		const tuple = _.isString(tupleOrSingleElementString)
			? [tupleOrSingleElementString]
			: tupleOrSingleElementString || [];

		const chartElements = this._getChartElements(tuple, exactMatch);
		if (chartElements.length > 1) {
			throw new Error(
				`getChartElement(${tuple}) yields more than one chart element: ${chartElements}`
			);
		}
		// (Note: _getChartElements will return with at least one chartElement, so we can assume there is one)
		const chartElement = _.extend({}, chartElements[0], {
			click(xOffset = 0, yOffset = 0, type = "left") {
				// In case of a single wedge in Piechart, we need to narrow down to the label on the wedge and then click on it.
				// else, we get an error that the click was not on the wedge.
				// This also holds safe for other chart elements that has a child element with 'label' classname
				const findLabelElement = this.webElement.findIfAny(".label");
				if (findLabelElement.any()) {
					findLabelElement.click();
				} else {
					this.webElement.click({ button: type, x: xOffset, y: yOffset });
				}
				return this;
			},
			rightClick(xOffset = 5, yOffset = 5) {
				browser.pause(500);
				this.webElement.click({ button: "right", x: xOffset, y: yOffset });
				browser.pause(500);

				return this;
			},
			hover(xOffset = "", yOffset = "") {
				if (xOffset === "" || yOffset === "") {
					this.webElement.moveTo();
				} else {
					this.webElement.moveTo({ xOffset, yOffset });
				}
				return this;
			},
			hasClass(className) {
				return this.webElement.hasClass(className);
			},
			getCSSStyleProperty(property) {
				return this.webElement.getCSSStyleProperty(property);
			},
		});

		return chartElement;
	}

	_chartElementsCount() {
		const chartElements = this.webElement.findIfAny(
			`.${this._getChartElementClass()}[class*="annotation-"]`
		);

		return chartElements.any() ? chartElements.length : 0;
	}

	getItemActions() {
		return new ItemActions();
	}
}

module.exports = {
	Chart,
	extractTooltipLabelsAndValues,
};
