const mixin = require("../mixin");
const { Chart } = require("./chart");
const {
	WithHighChartContentsOptionEditor,
} = require("../option-editors/highchart-contents-option-editor");
const { FrameworkObject } = require("../framework-object");
const {
	WithCombinationchartSettingsOptionEditor,
} = require("../option-editors/combinationchart-settings-option-editor");

const { _ } = require("lodash");

class BarItem extends FrameworkObject {
	hover(xOffset = 5, yOffset = 5) {
		this.webElement.moveTo({ xOffset, yOffset });
		return this;
	}

	getTooltip() {
		return this.webElement.find("highcharts-tooltip").innerHTML;
	}

	click(xOffset = 0, yOffset = 0) {
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });
		return this;
	}

	rightClick(xOffset = 5, yOffset = 5) {
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	hasClass(className) {
		return this.webElement.hasClass(className);
	}
}

class PointItem extends FrameworkObject {
	hover(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo({ xOffset, yOffset });
		this.webElement.moveTo({ xOffset, yOffset });
		return this;
	}

	getTooltip() {
		return this.webElement.find("highcharts-tooltip").innerHTML;
	}

	click(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo({ xOffset, yOffset });
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });
		return this;
	}

	rightClick(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo({ xOffset, yOffset });
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	hasClass(className) {
		return this.webElement.hasClass(className);
	}

	getClassNames() {
		return `${this.webElement?.getAttribute("class")}`.split(" ") ?? [];
	}
}

class CombinationChart extends mixin(
	Chart,
	WithHighChartContentsOptionEditor,
	WithCombinationchartSettingsOptionEditor
) {
	getHighChartTitle() {
		return this.webElement.find(".highcharts-title").getText();
	}

	getHighChartSubTitle() {
		return this.webElement.find(".highcharts-subtitle").getText();
	}

	getNumberOfPoints() {
		let totalInvisiblePoints = 0;
		const totalNumberOfPoints = this.webElement.find(
			".highcharts-series-group .highcharts-markers .highcharts-point"
		).length;

		const invisiblePoints = this.webElement.findIfAny(
			`.highcharts-series-group .highcharts-markers[visibility="hidden"] .highcharts-point`
		);
		invisiblePoints !== undefined
			? (totalInvisiblePoints = invisiblePoints.length)
			: (totalInvisiblePoints = 0);
		return totalNumberOfPoints - totalInvisiblePoints;
	}

	getNthPointForMultipleContents({ content, point }) {
		return new PointItem(
			this.webElement.find(
				`.highcharts-series-group .highcharts-series-${content -
					1} .highcharts-point:eq(${point - 1})`
			)
		);
	}

	getNthPointForSingleContent({ point }) {
		return new PointItem(
			this.webElement.find(`.highcharts-series-group .highcharts-point:eq(${point - 1})`)
		);
	}

	getNumberOfPointForSpecificContent({ content }) {
		return this.webElement.find(
			`.highcharts-series-group .highcharts-series-${content - 1} .highcharts-point`
		).length;
	}

	getNumberOfBars() {
		let totalInvisibleBars = 0;
		const totalNumberOfBars = this.webElement.find(
			".highcharts-series-group .highcharts-series .highcharts-point"
		).length;

		const invisiblebars = this.webElement.findIfAny(
			`.highcharts-series-group .highcharts-series[visibility="hidden"] .highcharts-point`
		);
		invisiblebars !== undefined
			? (totalInvisibleBars = invisiblebars.length)
			: (totalInvisibleBars = 0);
		return totalNumberOfBars - totalInvisibleBars;
	}

	/**
	 *
	 * @param bar 1-based index of bar
	 * @returns {BarItem}
	 */
	getNthBarForSingleContent({ bar }) {
		return new BarItem(
			this.webElement.find(`.highcharts-series-group .highcharts-point:eq(${bar - 1})`)
		);
	}

	/**
	 *
	 * @param content 1-based index of content series
	 * @param bar 1-based index of bar
	 * @returns {BarItem}
	 */
	getNthBarForMultipleContents({ content, bar }) {
		return new BarItem(
			this.webElement.find(
				`.highcharts-series-group .highcharts-series-${content -
					1} .highcharts-point:eq(${bar - 1})`
			)
		);
	}

	/**
	 *
	 * @param content 1-based index of content series
	 * @returns {*}
	 */
	getNumberOfBarsForSpecificContent({ content }) {
		return this.webElement.find(
			`.highcharts-series-group .highcharts-series-${content - 1} .highcharts-point`
		).length;
	}

	hasLegend() {
		let existsLegend = false;
		let totalLegendItems = 0;
		const searchLegend = this.webElement.findIfAny(
			`.highcharts-legend .highcharts-legend-item`
		);
		searchLegend !== undefined
			? (totalLegendItems = searchLegend.length)
			: (totalLegendItems = 0);

		totalLegendItems > 0 ? (existsLegend = true) : (existsLegend = false);

		return existsLegend;
	}

	getLegendValues() {
		const legendValues = [];
		this.webElement
			.find(".highcharts-legend .highcharts-legend-item")
			.webElements.forEach((webElement) => {
				legendValues.push(webElement.getText());
			});

		return legendValues;
	}

	getLegendItemCSSProperty(itemNr, cssProperty) {
		const legendItems = [];
		this.webElement
			.find(".highcharts-legend .highcharts-legend-item")
			.webElements.forEach((webElement) => {
				legendItems.push(webElement.getAttribute("id"));
			});

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
			{ elementId: legendItems[itemNr], propertyIn: cssProperty }
		);

		return value;
	}

	// This function gets you the single (extra) label along the X-axis. The one that can be set through the X-Axis group in the options editor.
	getXaxisLabel() {
		return this.webElement.find(`.highcharts-xaxis .highcharts-axis-title`).getText();
	}

	// This function gets you the single (extra) label along the Y-axis. The one that can be set through the Y-Axis group in the options editor.
	getYaxisLabel() {
		return this.webElement.find(`.highcharts-yaxis .highcharts-axis-title`).getText();
	}

	// This function gets you all the labels along the X-axis.
	getXaxisScaleValues() {
		const xAxis = [];
		this.webElement
			.find(`.highcharts-axis-labels.highcharts-xaxis-labels [text-anchor]`)
			.webElements.forEach((webElement) => {
				const getYAttribute = webElement.getAttribute("y");
				const xAxisValues = webElement.getText();
				if (xAxisValues !== "" && getYAttribute !== "-9999") {
					xAxis.push(xAxisValues);
				}
			});
		return xAxis;
	}

	// This function gets you all the labels count along the X-axis.
	getXaxisScaleValuesCount() {
		let count = 0;
		this.webElement
			.find(`.highcharts-axis-labels.highcharts-xaxis-labels [text-anchor]`)
			.webElements.forEach((webElement) => {
				const getYAttribute = webElement.getAttribute("y");
				const xAxisValues = webElement.getText();
				if (xAxisValues !== "" && getYAttribute !== "-9999") {
					count = count + 1;
				}
			});
		return count;
	}

	// This function gets you all the labels along the Y-axis.
	getYaxisScaleValues() {
		const yAxis = [];
		this.webElement
			.find(`.highcharts-axis-labels.highcharts-yaxis-labels [text-anchor]`)
			.webElements.forEach((webElement) => {
				const yAxisValues = webElement.getText();
				if (yAxisValues !== "") {
					yAxis.push(yAxisValues);
				}
			});
		return yAxis;
	}

	// This function gets you all the labels count along the Y-axis.
	getYaxisScaleValuesCount() {
		let count = 0;
		this.webElement
			.find(`.highcharts-axis-labels.highcharts-yaxis-labels [text-anchor]`)
			.webElements.forEach((webElement) => {
				const yAxisValues = webElement.getText();
				if (yAxisValues !== "") {
					count = count + 1;
				}
			});
		return count;
	}

	isXaxisScaleValuesVisible() {
		const xaxisScale = this.webElement.findIfAny(
			`.highcharts-axis-labels.highcharts-xaxis-labels [text-anchor]`
		);
		return xaxisScale.any();
	}

	isYaxisScaleValuesVisible(position) {
		const yaxisScale = this.webElement.findIfAny(
			`.highcharts-axis-labels.highcharts-yaxis-labels [text-anchor=${position}]`
		);
		return yaxisScale.any();
	}

	clickOnLegend(legendName) {
		return this.webElement
			.find(`.highcharts-legend .highcharts-legend-item:contains(${legendName})`)
			.click();
	}

	getEmptyMessage() {
		return this.webElement.find(".empty-widget-message").getText();
	}

	getResolutionMessage() {
		return this.webElement.find(".message-container").getText();
	}

	// This functions returns all data labels of the chart (when the option 'Show Labels' is set to true)
	getDataLabels() {
		const labels = [];
		this.webElement.find(`.highcharts-label`).webElements.forEach((webElement) => {
			labels.push(webElement.getText());
		});

		return labels;
	}

	showsTrendline() {
		const trendline = this.webElement.findIfAny(`.highcharts-plot-line-label`);
		return trendline.any();
	}

	getTrendlineLabel() {
		return this.webElement.find(`.highcharts-plot-line-label`).getText();
	}

	getTooltipText() {
		return this.webElement.find(`.highcharts-tooltip[style*="visible"] span`).getText();
	}

	chartOfSeriesIsOfType(series, chartType) {
		const chartTypeSelector = this.webElement.findIfAny(
			`.highcharts-series-group .highcharts-series.highcharts-series-${series}.highcharts-${chartType}-series`
		).length;

		return chartTypeSelector !== 0;
	}

	hasArea() {
		return this.webElement.findIfAny(`.highcharts-series .highcharts-area`);
	}

	hasDataLabels() {
		let existDataLabels = false;
		let totalDataLabels = 0;
		const searchDataLabels = this.webElement.findIfAny(
			`.highcharts-data-labels .highcharts-label`
		);
		searchDataLabels !== undefined
			? (totalDataLabels = searchDataLabels.length)
			: (totalDataLabels = 0);

		totalDataLabels > 0 ? (existDataLabels = true) : (existDataLabels = false);

		return existDataLabels;
	}

	hasAreaForSpecificContent({ content }) {
		let existsArea = false;
		let totalAreaItems = 0;
		const searchArea = this.webElement.findIfAny(
			`.highcharts-series-${content - 1} .highcharts-area`
		);
		searchArea !== undefined ? (totalAreaItems = searchArea.length) : (totalAreaItems = 0);

		totalAreaItems > 0 ? (existsArea = true) : (existsArea = false);

		return existsArea;
	}

	getNthChart({ content }) {
		return new PointItem(
			this.webElement.find(`.highcharts-series-group .highcharts-series-${content}`)
		);
	}

	getNumberOfAreas() {
		let totalInvisibleArea = 0;
		const totalNumberOfArea = this.webElement.find(`.highcharts-series .highcharts-area`)
			.length;
		const invisibleArea = this.webElement.findIfAny(
			`.highcharts-series-group .highcharts-series[visibility="hidden"] .highcharts-area`
		);
		invisibleArea !== undefined
			? (totalInvisibleArea = invisibleArea.length)
			: (totalInvisibleArea = 0);
		return totalNumberOfArea - totalInvisibleArea;
	}

	getColorAndTransparencyIndexAppliedClass() {
		let colorAndTransDetails = null;
		const chartContainer = this.webElement.find(".highcharts-series-group .highcharts-series");

		if (chartContainer.any()) {
			const chartElements = chartContainer.findIfAny(".highcharts-point");
			const colorIndexValues = chartElements
				.getAttribute("class")
				.map((classes) => classes.match(/annotation-Ord[0-9]+/)[0]);
			const colorIndexValue = [].concat(colorIndexValues);

			const transparencyIndexValueDetails = chartElements
				.getAttribute("class")
				.map((classes) => classes.match(/annotation-Mod5Trans[0-9]+/)[0]);
			const transparencyIndexValue = [].concat(transparencyIndexValueDetails);

			colorAndTransDetails = _.zipWith(
				colorIndexValue,
				transparencyIndexValue,
				(colorIndexClass, transparencyIndexClass) => ({
					colorIndexClass,
					transparencyIndexClass,
				})
			);
		}
		return colorAndTransDetails;
	}
}
module.exports = {
	CombinationChart,
	BarItem,
	PointItem,
	onRegisterWidgetTypes(registry) {
		registry["combinationchart"] = CombinationChart;
	},
};
