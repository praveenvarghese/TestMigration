const { generateOptionEditorConstructs } = require("./option-editor");

const { WithPageExtensionsOptionEditor } = generateOptionEditorConstructs({
	name: "PageExtensions",
	editorButtonSelector: ".workflow-items-control",
	editorSelector: ".workflow-items-container.open",
	mainMethodName: "openPageExtensionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openPageExtensionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithPageExtensionsOptionEditor,
};
