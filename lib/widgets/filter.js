const { RootAction } = require("yemen");
const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const { _ } = require("lodash");
const jQuery = require("jquery-node");
const { makeArray } = jQuery;

class Filter extends FrameworkObject {
	getFilterTitle() {
		return this.webElement.find(".ui-dialog-title").getText();
	}

	findFilterButton(buttonTitle) {
		return this.webElement.find(`button:textMatches(/${buttonTitle}/i)`);
	}

	isFilterEnabled(index) {
		const ruleIndex = index - 1;
		return this.webElement
			.findIfAny(`.ruleGroup .rule:eq(${ruleIndex}) .toggle-button  .rule-disabled`)
			.getAttribute("aria-checked");
	}

	enableFilter(index) {
		const switchStatus = this.webElement
			.find(`.ruleGroup .rule:eq(${index}) .toggle-button input`)
			.getAttribute("value");
		if (switchStatus === "false") {
			this.webElement.find(`.ruleGroup .rule:eq(${index}) .toggle-button`).click();
		}
	}

	dragAndDropRule(index1, index2) {
		const sourceElement = this.webElement.find(`.ruleGroup .rule:eq(${index1}) .drag-handler`);
		const targetElement = this.webElement.find(`.ruleGroup .rule:eq(${index2}) .drag-handler`);
		sourceElement.dragAndDrop(targetElement);
	}

	disableFilter(index) {
		const switchStatus = this.webElement
			.find(`.ruleGroup .rule:eq(${index}) .toggle-button input`)
			.getAttribute("value");
		if (switchStatus === "true") {
			this.webElement.find(`.ruleGroup .rule:eq(${index}) .toggle-button`).click();
		}
	}

	getFiltersData() {
		let filterDetails = null;
		const filterGroup = this.webElement.find(".ruleGroup");

		if (filterGroup.any()) {
			const allFilterLocator = filterGroup.find(" .rule");
			const ruleType = [].concat(
				allFilterLocator.find(".filter-label.label-rule-type").getText()
			);
			const ruleField = [].concat(
				allFilterLocator.find(".filter-label.label-rule-field").getText()
			);
			const rules = [].concat(
				allFilterLocator
					.find(".select-container .select__value-container .select__single-value")
					.getText()
			);

			const ruleValue = [];
			for (let index = 0; index < rules.length; index++) {
				const ruleElq = jQuery(filterGroup.find(`.rule:nth-child(${index + 2})`).getHTML());

				let val = [];
				// Check if it is multi-select rule-value field (i.e. of data headers)
				const multiSelectRuleValueInput = ruleElq.find(
					".filter-select.rule-value .select__value-container--has-value"
				);
				if (multiSelectRuleValueInput.length) {
					// If it is multi-select rule-value input (i.e. of data headers)
					val = makeArray(
						ruleElq.find(
							".filter-select.rule-value .select__multi-value .select__multi-value__label"
						)
					).map((elem2) => jQuery(elem2).text());
				} else if (ruleElq.find(".filter-input").length) {
					val = [].concat(
						filterGroup.find(`.rule:nth-child(${index + 2}) .filter-input`).getValue()
					);
				}
				ruleValue.push(val);
			}

			filterDetails = _.zipWith(
				ruleType,
				ruleField,
				rules,
				ruleValue,
				//filterSwitchStatus,
				(type, field, rule, value) => ({
					type,
					field,
					rule,
					value,
					//status,
				})
			);
		}
		return filterDetails;
	}

	addFilter({ rule, value, value1, itemsSearched = [], isHeaderRule = false }) {
		const ruleIndex = this.webElement.find(".ruleGroup .rule").length - 1;
		this.webElement
			.find(
				`.ruleGroup .rule:eq(${ruleIndex}) .filter-select.rule-operators .select__dropdown-indicator`
			)
			.click();
		$$$(`.select__menu-list .select__option[title="${rule}"]`).click();

		switch (rule.toLowerCase().replace(/ /g, "")) {
			case "notbetween":
			case "isinbetween": {
				this.webElement
					.find(`.ruleGroup .rule:eq(${ruleIndex}) .filter-input[data-id = "0"]`)
					.click()
					.keys(value);
				this.webElement
					.find(`.ruleGroup .rule:eq(${ruleIndex}) .filter-input[data-id = "1"]`)
					.click()
					.keys(value1);

				break;
			}
			case "is":
			case "isnot": {
				if (isHeaderRule) {
					itemsSearched.forEach((item) => {
						this.webElement
							.find(
								`.ruleGroup .rule:eq(${ruleIndex}) .filter-select.rule-value .select__dropdown-indicator`
							)
							.click();
						$$$(`.select__menu-list .select__option[title="${item}"]`).click();
					});
					break;
				}
				// When isHeaderRule is false, execution continues to default.
			}

			// eslint-disable-next-line no-fallthrough
			default: {
				this.webElement
					.find(`.ruleGroup .rule:eq(${ruleIndex}) .filter-input`)
					.click()
					.keys(value);
				break;
			}
		}
	}

	editFilter({
		index,
		rule = null,
		value,
		value1,
		newItemsToBeIncluded = [],
		itemsToBeRemoved = [],
		removeAllItems = false,
		isHeaderRule = false,
	}) {
		if (rule) {
			this.webElement
				.find(
					`.ruleGroup .rule:eq(${index}) .filter-select.rule-operators .select__dropdown-indicator`
				)
				.click();
			if ($$$(`.select__menu-list .select__option[title="${rule}"]`).any()) {
				$$$(`.select__menu-list .select__option[title="${rule}"]`).click();
			}
		}
		// Identify the rule operator from WebUI
		const ruleAsOnWebUI = this.webElement
			.find(
				`.ruleGroup .rule:eq(${index}) .filter-select.rule-operators .select__value-container--has-value .select__single-value`
			)
			.getText();

		switch (ruleAsOnWebUI.toLowerCase().replace(/ /g, "")) {
			case "notbetween":
			case "isinbetween": {
				const loc = this.webElement.find(`.ruleGroup .rule:eq(${index}) .between-editor`);
				loc.find(`.filter-input[data-id="0"]`)
					.click()
					.keys(value);
				loc.find(`.filter-input[data-id="1"]`)
					.click()
					.keys(value1);

				break;
			}
			case "is":
			case "isnot": {
				if (isHeaderRule) {
					// if removeAllItems argument is true, then clears off all entries selected.
					if (removeAllItems) {
						this.webElement
							.find(
								`.ruleGroup .rule:eq(${index}) .filter-select.rule-value .select__clear-indicator`
							)
							.click();
					}

					// Loops through and removes the items specified
					itemsToBeRemoved.forEach((itemToBeRemoved) => {
						const itemAlreadyExisting = this.webElement.find(
							`.ruleGroup .rule:eq(${index}) .filter-select.rule-value .select__value-container--has-value .select__multi-value__label:contains('${itemToBeRemoved}')`
						);

						itemAlreadyExisting
							.parent()
							.find(`.select__multi-value__remove`)
							.click();
					});

					// Loops through and adds the items specified
					newItemsToBeIncluded.forEach((item) => {
						this.webElement
							.find(
								`.ruleGroup .rule:eq(${index}) .filter-select.rule-value .select__dropdown-indicator`
							)
							.click();
						$$$(`.select__menu-list .select__option[title="${item}"]`).click();
					});
					break;
				}
				// When isHeaderRule is false, execution continues to default.
			}
			// eslint-disable-next-line no-fallthrough
			default: {
				this.webElement.find(`.ruleGroup .rule:eq(${index}) .filter-input`).doubleClick();

				this.webElement
					.find(`.ruleGroup .rule:eq(${index}) .filter-input`)
					.keys([SPECIAL_KEYS.delete, value]);
			}
		}
	}

	clearAllFilters() {
		return this.webElement.find(".clear-filters").click();
	}

	getRemoveFilterButton(index) {
		return this.webElement.find(`.ruleGroup .rule:eq(${index}) .aimms-minus3.rule-remove `);
	}

	click(xOffset = 2, yOffset = 2) {
		this.webElement.moveTo({ xOffset, yOffset });
		this.webElement.click();
		return this;
	}

	isRuleFocused(ruleIndex) {
		return this.webElement
			.findIfAny(
				`.ruleGroup .rule:eq(${ruleIndex}) .rule-operators .select__control.select__control--is-focused`
			)
			.any();
	}
}

// get does not guarantee to find; can be used with .should(.not).exist
Filter.get = () => {
	const webElement = $$$.findIfAny("body > .awf-dialog");
	return webElement.any() ? new Filter(webElement) : null;
};

const getFilter = new RootAction("getFilter", () => Filter.get());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getFilter);
	},
};
