const { generateOptionEditorConstructs } = require("./option-editor");

const { WithWidgetTypeOptionEditor } = generateOptionEditorConstructs({
	name: "WidgetType",
	editorButtonSelector: ".typeswitch-control.toolbar-button",
	editorSelector: ".typeswitch-container.open",
	mainMethodName: "openChangeWidgetTypeOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			openChangeWidgetTypeOptionEditor() {
				return this;
			}

			_getWidgetType(widgetType) {
				return this.webElement.find(`.typeswitch-optioneditor li.type-${widgetType}`);
			}
			changeWidgetTypeTo(widgetType) {
				this._getWidgetType(widgetType).click();
			}

			getTooltipText(widgetType) {
				this._getWidgetType(widgetType).moveTo();
				return this._getWidgetType(widgetType).getAttribute("title");
			}

			getAllWidgetTypeDetails() {
				return [].concat(this.webElement.find(".typeswitch-optioneditor li").getText());
			}

			getDisabledWidgetTypeList() {
				return [].concat(
					this.webElement.find(".typeswitch-optioneditor li.disabled").getText()
				);
			}

			getDisabledWidgetTypeText() {
				return [].concat(
					this.webElement.find(".typeswitch-optioneditor li.disabled").getText()
				);
			}
		},
});

module.exports = {
	WithWidgetTypeOptionEditor,
};
