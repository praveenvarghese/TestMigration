const { generateOptionEditorConstructs } = require("../option-editor");

const { WithNumberOptionsOptionEditor } = generateOptionEditorConstructs({
	name: "NumberOptions",
	editorButtonSelector: ".number_options-control",
	editorSelector: ".number_options-container.open",
	mainMethodName: "getCustomNumberOptionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getCustomNumberOptionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithNumberOptionsOptionEditor,
};
