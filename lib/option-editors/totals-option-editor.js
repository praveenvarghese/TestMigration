const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

// const $$$ = require('../selenium/3xdollar');
const { generateOptionEditorConstructs } = require("./option-editor");

const operatorNameToTotalsLabelName = (operatorName) => {
	// prettier-ignore
	const totalsLabelName = operatorName.endsWith("_only_visible")
		? operatorName.replace(/_only_visible/, "")
		: `total ${operatorName}`;

	log.debug(`operatorNameToAggregatorName("${operatorName}") => "${totalsLabelName}"`);

	return totalsLabelName;
};

const { WithTotalsOptionEditor } = generateOptionEditorConstructs({
	name: "Totals",
	editorButtonSelector: ".datasource-totals-control.toolbar-button",
	editorSelector: ".datasource-totals-container.open",
	mainMethodName: "setupTotals",
	mixinClass: (_) =>
		class extends _ {
			setupTotals(totalsConfig) {
				totalsConfig.forEach((totalConfig) => {
					const { indexName, operators } = totalConfig;
					this.webElement
						.find(
							`.datasource-totals-option-editor .index-item:has(.totalstitle:textMatches(/^${indexName}$/))`
						)
						.click();
					const totalsListWebElement = this.webElement.find(
						`.datasource-totals-option-editor .index-item:has(.totalstitle:textMatches(/^${indexName}$/)) + .select-list.open`
					);

					// Turn off all currently activated totals:
					totalsListWebElement
						.findIfAny("li.active")
						.webElements.forEach((activeLiWebElement) => activeLiWebElement.click());

					// Activate all configured totals operators
					operators.forEach((operatorName) => {
						const totalsLabelName = operatorNameToTotalsLabelName(operatorName);

						totalsListWebElement
							.find(`li:has(label:textMatches(/^${totalsLabelName}$/i))`)
							.click();
					});
				});
			}

			openTotalsOptionEditor() {
				return this;
			}

			getActiveAggregators() {
				return this.webElement.find(".active-aggregates .active").getText();
			}

			openSelectionList() {
				const selectionList = this.webElement.find(".has-aggregates");
				selectionList.click();

				return this;
			}

			selectAggregator(aggregatorName) {
				// Only if the specified aggregator is not active, it should be clicked to become selected
				if (!this.getActiveAggregators().includes(aggregatorName)) {
					this.webElement
						.find(`.select-list.open li:has(label:textMatches(/^${aggregatorName}$/i))`)
						.click();
				}

				return this;
			}

			unselectAggregator(aggregatorName) {
				// Only if the specified aggregator is active, it should be clicked to become unselected
				if (this.getActiveAggregators().includes(aggregatorName)) {
					this.webElement
						.find(`.select-list.open li:has(label:textMatches(/^${aggregatorName}$/i))`)
						.click();
				}

				return this;
			}
		},
});

module.exports = {
	WithTotalsOptionEditor,
};
