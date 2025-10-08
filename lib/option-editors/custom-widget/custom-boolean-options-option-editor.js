const { generateOptionEditorConstructs } = require("../option-editor");

const { WithBooleanOptionsOptionEditor } = generateOptionEditorConstructs({
	name: "BooleanOptions",
	editorButtonSelector: ".boolean_options-control",
	editorSelector: ".boolean_options-container.open",
	mainMethodName: "getCustomBooleanOptionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getCustomBooleanOptionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithBooleanOptionsOptionEditor,
};
