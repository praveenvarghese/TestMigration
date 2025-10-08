const { FrameworkObject } = require("../../framework-object");
const { mixable } = require("../../mixin");
const { Widget } = require("../widget");

class HeaderRow extends FrameworkObject {
	getLabels() {
		return this.webElement.find(".label .text").getText();
	}

	click() {
		this.webElement.click();
	}
}

const WithChartHeader = mixable(
	Widget,
	(_) =>
		// eslint-disable-next-line @typescript-eslint/class-name-casing
		class mixin extends _ {
			// row in zero-based counting (to keep consistent)!
			getHeaderRow(row) {
				return new HeaderRow(this.webElement.find(`.header .rows .row-${row + 1}`));
			}
		}
);

module.exports = {
	WithChartHeader,
};
