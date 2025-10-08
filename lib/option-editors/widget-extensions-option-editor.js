const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const { generateOptionEditorConstructs } = require("./option-editor");

const { WithWidgetExtensionsOptionEditor } = generateOptionEditorConstructs({
	name: "WidgetExtensions",
	editorButtonSelector: ".widget-actions-control",
	editorSelector: ".widget-actions-container.open",
	mainMethodName: "openWidgetExtensionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openWidgetExtensionsOptionEditor() {
				return this;
			}

			_getWidgetExtensionDataOptionName(WidgetExtensionName) {
				const optionEntryLabelElement = this.webElement.find(
					`label:contains("${WidgetExtensionName}")`
				);

				if (!optionEntryLabelElement) {
					throw new Error(
						`Could not find a Widget Extension option with the name '${WidgetExtensionName}'.`
					);
				}

				return optionEntryLabelElement.parent().getAttribute("data-option-name");
			}

			_setAWidgetExtension(WidgetExtensionInfo) {
				log.debug(`${JSON.stringify(WidgetExtensionInfo)}`);

				this._setValue(
					this._getWidgetExtensionDataOptionName(WidgetExtensionInfo.name),
					"IDENTIFIER",
					"IDENTIFIER",
					WidgetExtensionInfo.value,
					WidgetExtensionInfo.sliceInfo,
					null // defaulting this input to Null, as there is no scope for Store-focus.
				);
				return this;
			}

			setWidgetExtensions(WidgetExtensionsData) {
				WidgetExtensionsData.forEach((WidgetExtensionInfo) => {
					this._setAWidgetExtension(WidgetExtensionInfo);
				});

				return this;
			}

			clearWidgetExtensions(WidgetExtensionsData) {
				WidgetExtensionsData.forEach((WidgetExtensionInfo) => {
					this.clearSetValue(
						this._getWidgetExtensionDataOptionName(WidgetExtensionInfo.name)
					);
				});

				return this;
			}
		},
});

module.exports = {
	WithWidgetExtensionsOptionEditor,
};
