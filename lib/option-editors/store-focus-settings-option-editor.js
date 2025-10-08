const $$$ = require("../selenium/3xdollar");

const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const { Select2 } = require("../misc/select2");

const { generateOptionEditorConstructs } = require("./option-editor");

const { WithStoreFocusSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "StoreFocusSettings",
	editorButtonSelector: ".store-focus-control",
	editorSelector: ".store-focus-container.open",
	//mainMethodName: "setStoreFocusSetting",
	mainMethodName: "openStoreFocusOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openStoreFocusOptionEditor() {
				return this;
			}

			getStoreFocusOptionsInfo() {
				const options = [];
				let index = 0;
				this.webElement
					.findIfAny(
						`.optionwrapper div[data-option-index="0"] .indexEPselector:isVisible`
					)
					.webElements.forEach((storeFocusOptionElement) => {
						// Get the Store Focus Option WebElement
						const storeFocusOptionWebElement = $$$(storeFocusOptionElement.selector);

						// Option Name
						const option_Name = storeFocusOptionWebElement
							.find(`label:first`)
							.getAttribute("title")
							.toUpperCase();

						// Option Value
						const option_ValueSet = storeFocusOptionWebElement
							.find(`input:last`)
							.getAttribute("value")
							.replace(/literal:/, "");

						options.push({
							Name: option_Name,
							Value: option_ValueSet,
							Index: index++,
						});
					});

				return options;
			}

			setStoreFocusSetting(optionInfo) {
				log.debug(`${JSON.stringify(optionInfo)}`);
				const { name: optionName, value: optionValue, type: valueType } = optionInfo;
				const valueTypeSelector =
					valueType === "identifier" ? '[class*="identifier-"]' : ".literal";

				// Escape special regex characters in specified string.
				const escapeRegexp = (string) => string.replace(/([()])/g, "\\$1");
				const indexSelector = new Select2(
					this.webElement.find(
						`div:has(>label:textMatches(/${escapeRegexp(
							optionName
						)}/i)) .dropdown-literal-or-identifier-selector`
					),
					(itemName) =>
						$$$(
							`.select2-drop .select2-result-label ${valueTypeSelector}:textMatches(/^${itemName}(: .*)?$/)`
						)
				);

				if (optionValue === "") {
					// Specifying the empty string is interpreted as that the value should be cleared
					this.webElement
						.find(
							`div:has(>label:textMatches(/${escapeRegexp(
								optionName
							)}/i)) .dropdown-literal-or-identifier-selector .select2-search-choice-close`
						)
						.click();
				} else {
					indexSelector.search(optionValue).select(optionValue);
				}

				return this;
			}

			getValue(optionName) {
				const escapeRegexp = (string) => string.replace(/([()])/g, "\\$1");

				return this.webElement
					.find(
						`div:has(>label:textMatches(/${escapeRegexp(
							optionName
						)}/i)) .dropdown-literal-or-identifier-selector`
					)
					.getText();
			}
		},
});

module.exports = {
	WithStoreFocusSettingsOptionEditor,
};
