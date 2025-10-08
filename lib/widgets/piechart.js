const { Chart } = require("./chart");

class PieChart extends Chart {
	_getChartElementClass() {
		return "wedge";
	}

	findWedges(tuple = []) {
		return this._getChartElements(tuple);
	}

	findWedge(tupleOrSingleElementString, exactMatch = false) {
		return this._getChartElement(tupleOrSingleElementString, exactMatch);
	}

	findWedgeWithTooltip(tupleOrSingleElementString, exactMatch = false) {
		return this._getChartElement(tupleOrSingleElementString, exactMatch).hover();
	}

	getWedgesCount() {
		return this._chartElementsCount();
	}
}

module.exports = {
	PieChart,
	onRegisterWidgetTypes(registry) {
		registry["piechart"] = PieChart;
	},
};
