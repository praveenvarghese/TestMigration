const { Chart } = require("./chart");

class TreeMap extends Chart {
	_getChartElementClass() {
		return "rectangle";
	}

	findRectangles(tuple = []) {
		return this._getChartElements(tuple);
	}

	findRectangle(tupleOrSingleElementString) {
		return this._getChartElement(tupleOrSingleElementString);
	}

	findRectangleWithTooltip(tupleOrSingleElementString) {
		return this._getChartElement(tupleOrSingleElementString).hover();
	}

	getRectanglesCount() {
		return this._chartElementsCount();
	}
}

module.exports = {
	TreeMap,
	onRegisterWidgetTypes(registry) {
		registry["treemap"] = TreeMap;
	},
};
