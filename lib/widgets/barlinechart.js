const mixin = require("../mixin");
const { Chart } = require("./chart");
const {
	WithBarLineChartSettingsOptionEditor,
} = require("../option-editors/barlinechart-settings-option-editor");
const { _ } = require("lodash");
const jQuery = require("jquery-node");

class BarLineChart extends mixin(Chart, WithBarLineChartSettingsOptionEditor) {
	constructor(webElement, widgetUri, widgetType) {
		super(webElement, widgetUri, widgetType);
		this.chartType = "dot";
	}

	_getChartElementClass() {
		return this.chartType;
	}

	setChartElementClass(chartType) {
		this.chartType = chartType;
	}

	//#region Bars Section
	findBars(tuple = []) {
		this.setChartElementClass("bar");
		return this._getChartElements(tuple);
	}

	findBar(tupleOrSingleElementString) {
		this.setChartElementClass("bar");
		return this._getChartElement(tupleOrSingleElementString);
	}

	mouseHoverOverBar(tupleOrSingleElementString, xOffset = "", yOffset = "") {
		if (xOffset === "" || yOffset === "") {
			this.findBar(tupleOrSingleElementString).webElement.moveTo();
		} else {
			this.findBar(tupleOrSingleElementString).webElement.moveTo(xOffset, yOffset);
		}
	}

	getNumberOfBars() {
		const chartElements = this.webElement.findIfAny(`.bar`);
		let chartElementsInViewPort = [];
		if (chartElements.any()) {
			const chartHeight = this._getChartHeight();
			chartElementsInViewPort = _.filter(chartElements.webElements, (chartElement) => {
				const height = parseFloat(chartElement.getAttribute("height"));
				const y = parseFloat(chartElement.getAttribute("y"));
				const absY = Math.abs(y);
				let isElementVisible = false;

				if (y !== null && height !== null && height > 0) {
					isElementVisible = y < 0 ? height - absY > 0 : y < chartHeight;
				}
				return isElementVisible;
			});
		}
		return chartElementsInViewPort.length;
	}
	//#endregion

	//#region Points Section
	findPoints(tuple = []) {
		return this._getChartElements(tuple);
	}

	findPoint(tupleOrSingleElementString) {
		return this._getChartElement(tupleOrSingleElementString);
	}

	getLine(tupleOrSingleElementString) {
		let chartLineItem = null;
		const lineElement = this.webElement.findIfAny(
			`.line.annotation-${tupleOrSingleElementString}`
		);
		if (lineElement.any()) {
			chartLineItem = _.extend({}, lineElement[0], {
				click(xOffset = 0, yOffset = 0, type = "left") {
					this.webElement.click({ button: type, x: xOffset, y: yOffset });

					return this;
				},
				rightClick(xOffset = 5, yOffset = 5) {
					browser.pause(500);
					this.click(xOffset, yOffset, "right");
					browser.pause(500);

					return this;
				},
				hover() {
					this.webElement.moveTo();

					return this;
				},
			});
		}

		return chartLineItem;
	}

	getCountOfPoints() {
		const chartElements = this.webElement.findIfAny(`.${this._getChartElementClass()}`);
		let chartElementsInViewPort = [];
		if (chartElements.any()) {
			const chartHeight = this._getChartHeight();
			chartElementsInViewPort = _.filter(chartElements.webElements, (chartElement) => {
				const y = parseFloat(chartElement.getAttribute("cy"));
				let isElementVisible = false;

				if (y >= 0) {
					isElementVisible = y <= chartHeight;
				}
				return isElementVisible;
			});
		}
		return chartElementsInViewPort.length;
	}

	//#endregion

	getXAxisElements({ index = 0 } = {}) {
		const barlineComboChart = `.x-axis:eq(${index}) text`;
		const barOrLineChart = `.row:eq(${index}) .leaf .text`;
		const xaxisElementsQueryString =
			this._getChartElementClass() === "dot" ? barlineComboChart : barOrLineChart;

		const jQdom = jQuery(this.webElement.getHTML());
		const xaxisElements = jQdom.find(xaxisElementsQueryString);
		const texts = jQuery.makeArray(xaxisElements).map((elem) =>
			jQuery(elem)
				.contents()
				.get(0)
				.nodeValue.trim()
		);
		return texts;
	}

	getYAxisElements({ includeUnits = false } = {}) {
		const barlineComboChart = `.y-axis text:not(.unit-label)`;
		const barOrLineChart = `.yaxis text:not(.unit-label)`;
		let yaxisElementsQueryString =
			this._getChartElementClass() === "dot" ? barlineComboChart : barOrLineChart;

		if (includeUnits === true) {
			yaxisElementsQueryString = yaxisElementsQueryString.replace(/:not\(\.unit-label\)/, "");
		}

		return this.webElement.find(yaxisElementsQueryString).getText();
	}
}

module.exports = {
	BarLineChart,
	onRegisterWidgetTypes(registry) {
		registry["barlinechart"] = BarLineChart;
	},
};
