const { generateOptionEditorConstructs } = require("../option-editor");

const { WithIconOptionsOptionEditor } = generateOptionEditorConstructs({
	name: "IconOptions",
	editorButtonSelector: ".icon_options-control",
	editorSelector: ".icon_options-container.open",
	mainMethodName: "getCustomIconOptionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getCustomIconOptionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithIconOptionsOptionEditor,
};
