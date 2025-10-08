const { generateOptionEditorConstructs } = require("./option-editor");

const { WithApplicationExtensionsOptionEditor } = generateOptionEditorConstructs({
	name: "ApplicationExtensions",
	editorButtonSelector: ".application-extensions-control",
	editorSelector: ".application-extensions-container.open",
	mainMethodName: "openApplicationExtensionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openApplicationExtensionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithApplicationExtensionsOptionEditor,
};
