const { generateOptionEditorConstructs } = require("./option-editor");

const { WithFooOptionEditor } = generateOptionEditorConstructs({
	name: "Foo",
	editorButtonSelector: ".foo-control.toolbar-button",
	editorSelector: ".foo-container.open",
	// Method name of a method in the mixinClass that allows for editing
	// the option in a more abstract and decoupled way, without exposing
	// the option editor directly.
	mainMethodName: "setFoo",
	mixinClass: (_) =>
		class extends _ {
			setFoo() {
				// bar
			}
		},
});

module.exports = {
	WithFooOptionEditor,
};
