const mixin = require("../mixin");
const { BarLineChart } = require("./barlinechart.js");
const {
	WithBarchartSettingsOptionEditor,
} = require("../option-editors/barchart-settings-option-editor");

class BarChart extends mixin(BarLineChart, WithBarchartSettingsOptionEditor) {
	_getChartElementClass() {
		return "bar";
	}
}

module.exports = {
	BarChart,
	onRegisterWidgetTypes(registry) {
		registry["barchart"] = BarChart;
	},
};
