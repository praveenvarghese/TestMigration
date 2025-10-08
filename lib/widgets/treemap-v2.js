const { Chart } = require("./chart");
const mixin = require("../mixin");
const {
	WithHighChartContentsOptionEditor,
} = require("../option-editors/highchart-contents-option-editor");

class TreeMapV2 extends mixin(Chart, WithHighChartContentsOptionEditor) {
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
	TreeMapV2,
	onRegisterWidgetTypes(registry) {
		registry["treemap-v2"] = TreeMapV2;
	},
};
