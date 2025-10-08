const { generateOptionEditorConstructs } = require("../option-editor");

const { WithIntegerOptionsOptionEditor } = generateOptionEditorConstructs({
	name: "IntegerOptions",
	editorButtonSelector: ".integer_options-control",
	editorSelector: ".integer_options-container.open",
	mainMethodName: "getCustomIntegerOptionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getCustomIntegerOptionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithIntegerOptionsOptionEditor,
};
