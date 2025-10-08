const { generateOptionEditorConstructs } = require("./option-editor");
const jQuery = require("jquery-node");

const { WithGanttchartContentsOptionEditor } = generateOptionEditorConstructs({
	name: "GanttchartContents",
	editorButtonSelector: ".datasource-contents-control.toolbar-button",
	editorSelector: ".datasource-contents-container.list-entry-items-container.open",
	mainMethodName: "openGanttchartContentsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openGanttchartContentsOptionEditor() {
				return this;
			}
			getGanttchartContentsOptionsInfo() {
				const options = [];
				// Get the options dialog content
				const openOptionDialog = jQuery(this.webElement.getHTML());

				// Find all option editors with data-option-index (excluding templates)
				const optionElements = openOptionDialog
					.find("[data-option-index]")
					.not(".option-template");

				let optionsOrder = 0;

				for (let i = 0; i < optionElements.length; i++) {
					const element = optionElements[i];
					const optionWebElement = jQuery(element);
					const optionIndex = optionWebElement.attr("data-option-index");

					// Skip template elements (they have data-option-index="0" and class "option-template")
					if (optionWebElement.hasClass("option-template")) {
						continue;
					}

					// Check visibility in live DOM
					const isOption_Visible = browser.execute((optionIdx) => {
						const $ = window.jQuery;
						if (!$) return false;

						const elementTemplate = $(`[data-option-index="${optionIdx}"]`).not(
							".option-template"
						);
						return elementTemplate.length > 0 && elementTemplate.is(":visible");
					}, optionIndex);

					if (!isOption_Visible) {
						continue;
					}

					// Get display label
					const labelElement = optionWebElement.find("label[title]").first();
					const displayName = labelElement.attr("title") || labelElement.text() || "";

					// Extract value based on input type
					let optionValue = "";

					// Look for input with ID
					const inputWithId = optionWebElement.find("input[id]").first();
					if (inputWithId.length > 0) {
						optionValue = inputWithId.attr("value") || inputWithId.val() || "";
					} else {
						// Fallback: look for any input with value
						const anyInput = optionWebElement.find("input.literal-input").first();
						if (anyInput.length > 0) {
							optionValue = anyInput.attr("value") || anyInput.attr("title") || "";
						}
					}

					// Handle boolean options (if any)
					if (optionWebElement.hasClass("boolean") && optionValue === "") {
						optionValue = "false";
					}

					// Only add if we have meaningful data
					if (displayName) {
						options.push({
							Name: displayName,
							Value: optionValue,
							Index: optionsOrder++,
						});
					}
				}

				return options;
			}
		},
});

module.exports = {
	WithGanttchartContentsOptionEditor,
};
