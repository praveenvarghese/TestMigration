const mixin = require("../mixin");
const { BarLineChart } = require("./barlinechart.js");
const {
	WithLinechartSettingsOptionEditor,
} = require("../option-editors/linechart-settings-option-editor");
const { ItemActions } = require("../application/item-actions");

class Area extends ItemActions {
	hover(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo({ xOffset, yOffset });
		browser.pause(5000);
		return this;
	}

	click(xOffset = 0, yOffset = 0) {
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });
		return this;
	}

	_hasClass(className) {
		return (
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf(className) !== -1
		);
	}
}

class LineChart extends mixin(BarLineChart, WithLinechartSettingsOptionEditor) {
	_getChartElementClass() {
		return "point";
	}

	isAreaApplied() {
		const areaLoc = this.webElement.findIfAny(`.chart-item.chart-item-area`);
		if (areaLoc !== undefined && areaLoc.length > 0) {
			return true;
		}
		return false;
	}

	getNumberOFLineChartAreaCount() {
		const areaElement = this.webElement.findIfAny(".chart-item.chart-item-area");
		return areaElement.any() ? areaElement.webElements.length : 0;
	}

	getSpecificArea(identifierName) {
		return new Area(
			this.webElement.find(`.chart-item.chart-item-area.annotation-${identifierName}`)
		);
	}
}

module.exports = {
	LineChart,
	Area,
	onRegisterWidgetTypes(registry) {
		registry["linechart"] = LineChart;
	},
};
