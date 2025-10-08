const { generateOptionEditorConstructs } = require("./option-editor");
const jQuery = require("jquery-node");

const { WithButtonSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "ButtonSettings",
	editorButtonSelector: ".action-control",
	editorSelector: ".action-container.open",
	mainMethodName: "openButtonSettingsEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openButtonSettingsEditor() {
				return this;
			}
			getButtonSetting(optionName) {
				let buttonOptionEntry = null;
				this.OptionName = optionName;
				const optionEntryLabelElement = this.webElement.findIfAny(
					`[title = "${optionName}"]`
				);

				if (optionEntryLabelElement.any()) {
					this.OptionEntry = optionEntryLabelElement.parent();
					this.IsOldOptionEntryType =
						this.OptionEntry.parent()
							.getAttribute("class")
							.split(" ")
							.indexOf("literal-or-aimms-single-line-option-editor") === -1;
					buttonOptionEntry = this;
				}
				return buttonOptionEntry;
			}

			// Get the values of the dropdown when PageLink is selected
			getPageLinkList() {
				const $ = jQuery;
				const widgetJQueryDOM = $(this.webElement.getHTML());
				const actionsDropdown = widgetJQueryDOM.find(
					".action-option-editor select[style!='display: none;']:not([name='actionType'])"
				);

				const selectedItems = jQuery
					.makeArray(actionsDropdown.find(`option`))
					.map((e) => e.innerHTML);

				return selectedItems;
			}
		},
});

module.exports = {
	WithButtonSettingsOptionEditor,
};
