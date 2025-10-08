const { Chart } = require("./chart");
const zipWith = require("lodash.zipwith");
const {
	WithBubblechartSettingsOptionEditor,
} = require("../option-editors/bubblechart-settings-option-editor");
const mixin = require("../mixin");
const jQuery = require("jquery-node");

const extractTooltipLabels = (tooltips) => {
	const label = tooltips.reduce(
		(result, tooltip) => {
			const parsedTooltip = /[^(]*([^:]*):(.*)/.exec(tooltip);
			if (parsedTooltip) {
				result.labels.push(parsedTooltip[1].trim());
			}
			return result;
		},
		{ labels: [] }
	);

	return label;
};

class BubbleChart extends mixin(Chart, WithBubblechartSettingsOptionEditor) {
	_getChartElementClass() {
		return "bubble";
	}

	findBubbles(tuple = []) {
		return this._getChartElements(tuple);
	}

	findBubble(tupleOrSingleElementString) {
		return this._getChartElement(tupleOrSingleElementString);
	}

	getXAxisElements() {
		return this.webElement.find(".x.axis .tick text").getText();
	}

	getYAxisElements() {
		return this.webElement.find(".y.axis .tick text").getText();
	}

	getXAxisLabel() {
		const xAxisLabel = this.webElement.findIfAny(".chart.bubblechart .labels .x.label");
		return xAxisLabel.any() ? xAxisLabel : "None";
	}

	getYAxisLabel() {
		const yAxisLabel = this.webElement.findIfAny(".chart.bubblechart .labels .y.label");
		return yAxisLabel.any() ? yAxisLabel : "None";
	}

	getSizeAxisLabel() {
		const sizeAxisLabel = this.webElement.findIfAny(".chart.bubblechart .labels .size.label");
		return sizeAxisLabel.any() ? sizeAxisLabel : "None";
	}

	getBubblesCount() {
		const bubbleChartLoc = jQuery(this.webElement.getHTML());
		return bubbleChartLoc.find(".chart-item.bubble").length;
	}

	getXAxisLabelText() {
		let xAxisLabelText;
		if (this.getXAxisLabel()) {
			xAxisLabelText = this.getXAxisLabel().getText();
		} else {
			throw new Error("Could not locate X-Axis label for Bubblechart");
		}
		return xAxisLabelText;
	}

	hasXAxisLabelTooltip() {
		const tooltip = this.webElement.findIfAny(
			".x.label .default-tooltip-preventer-replacement-title.title"
		);

		return tooltip.any() ? true : false;
	}

	getYAxisLabelText() {
		let yAxisLabelText;
		if (this.getYAxisLabel()) {
			yAxisLabelText = this.getYAxisLabel().getText();
		} else {
			throw new Error("Could not locate Y-Axis label for Bubblechart");
		}
		return yAxisLabelText;
	}

	hasYAxisLabelTooltip() {
		const tooltip = this.webElement.findIfAny(
			".y.label .default-tooltip-preventer-replacement-title.title"
		);

		return tooltip.any() ? true : false;
	}

	getSizeAxisLabelText() {
		let sizeAxisLabelText;
		if (this.getSizeAxisLabel()) {
			sizeAxisLabelText = this.getSizeAxisLabel().getText();
		} else {
			throw new Error("Could not locate Size-Axis label for Bubblechart");
		}
		return sizeAxisLabelText;
	}

	hasSizeLabelTooltip() {
		const tooltip = this.webElement.findIfAny(
			".size.label .default-tooltip-preventer-replacement-title.title"
		);

		return tooltip.any() ? true : false;
	}

	getBubblesRadius(tuple = []) {
		const tupleText = tuple.join("\\s*,\\s*").replace(/[(&)]/g, ".");
		const chartElements = this.webElement.find(
			`.${this._getChartElementClass()}:textMatches(/[^\\(]*[\\(]?.*${tupleText}.*[\\)]?[^:]*:.*/)`
		);
		const tooltips = [].concat(chartElements.getText());
		const { labels } = extractTooltipLabels(tooltips);
		const r = [].concat(chartElements.getAttribute("r"));
		return zipWith(labels, r, (label, radius) => ({
			label,
			radius,
		}));
	}

	getEmptyMessage() {
		return this.webElement.find(".empty-widget-message").getText();
	}

	getZeroSizeBubbles() {
		return this.webElement.findIfAny(".crosses path");
	}

	getBubbleWithToolTip(bubbleName) {
		return this.webElement.find(`.bubbles .annotation-${bubbleName}`).moveTo();
	}
}

module.exports = {
	BubbleChart,
	onRegisterWidgetTypes(registry) {
		registry["bubblechart"] = BubbleChart;
	},
};
