const { generateOptionEditorConstructs } = require("./option-editor");
const { Select2 } = require("../misc/select2");

const { WithDiagramWidgetArcSettingsOptionEditor } = generateOptionEditorConstructs({
	name: "DiagramWidgetArcSettings",
	editorButtonSelector: ".diagram-arc-sets-control",
	editorSelector: ".diagram-arc-sets-container.open",
	mainMethodName: "openDiagramArcOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openDiagramArcOptionEditor() {
				return this;
			}

			getEditorTitle() {
				return this.webElement.find(`.diagram-arc-sets-control.toolbar-button`).getText();
			}

			//Template
			getCurrentTemplate() {
				return this.webElement
					.find(`[data-option-name="arcs.0.template.type"] .select2-chosen`)
					.getText();
			}

			setTemplateFromOptionEditor(templateType) {
				const templateDropdown = this.webElement.find(
					`[data-option-name="arcs.0.template.type"] .select2-container`
				);
				const select2 = new Select2(templateDropdown);
				select2.select(templateType, false);
			}

			clearTemplate() {
				const templateDropdown = `arcs.0.template.type`;
				this.clearSetValue(templateDropdown);
				return this;
			}

			clearLabel() {
				const arclabelOption = `arcs.0.label`;
				this.clearSetValue(arclabelOption);
				return this;
			}

			templateField1Exists() {
				const fieldExists = this.webElement.findIfAny(
					`:not(.literal-or-aimms-single-line-option-editor--invisible)>[data-option-name="arcs.0.fields.A"] input`
				);

				return fieldExists.any();
			}

			templateField2Exists() {
				const fieldExists = this.webElement.findIfAny(
					`:not(.literal-or-aimms-single-line-option-editor--invisible)>[data-option-name="arcs.0.fields.B"] input`
				);

				return fieldExists.any();
			}

			getTemplateField1Value() {
				return this.webElement
					.find(`[data-option-name="arcs.0.fields.A"] input`)
					.getAttribute("title");
			}

			getTemplateField2Value() {
				return this.webElement
					.find(`[data-option-name="arcs.0.fields.A"] input`)
					.getAttribute("title");
			}

			deleteIdentifierOption() {
				const identifierOption = `arcs.0.identifier`;
				this.clearSetValue(identifierOption);
				return this;
			}
		},
});

module.exports = {
	WithDiagramWidgetArcSettingsOptionEditor,
};
