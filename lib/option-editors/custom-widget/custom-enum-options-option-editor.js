const { generateOptionEditorConstructs } = require("../option-editor");

const { WithEnumOptionsOptionEditor } = generateOptionEditorConstructs({
	name: "EnumOptions",
	editorButtonSelector: ".enum_options-control",
	editorSelector: ".enum_options-container.open",
	mainMethodName: "getCustomEnumOptionsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			getCustomEnumOptionsOptionEditor() {
				return this;
			}
		},
});

module.exports = {
	WithEnumOptionsOptionEditor,
};
