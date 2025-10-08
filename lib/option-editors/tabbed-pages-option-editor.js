const { generateOptionEditorConstructs } = require("./option-editor");
const { WithTabbedPagesOptionEditor } = generateOptionEditorConstructs({
	name: "TabbedPages",
	editorButtonSelector: ".tabbedpages-control.toolbar-button",
	editorSelector: ".tabbedpages-container.open",
	mainMethodName: "openTabbedPagesOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openTabbedPagesOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithTabbedPagesOptionEditor,
};
