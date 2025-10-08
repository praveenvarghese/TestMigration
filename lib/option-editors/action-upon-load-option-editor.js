const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const { generateOptionEditorConstructs } = require("./option-editor");

const { WithActionUponLoadOptionEditor } = generateOptionEditorConstructs({
	name: "ActionUponLoad",
	editorButtonSelector: ".procedure-upon-load-control",
	editorSelector: ".procedure-upon-load-container.open",
	mainMethodName: "openActionUponLoadOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openActionUponLoadOptionEditor() {
				return this;
			}

			setActionUponLoad(actionUponLoadInfo) {
				log.debug(`${JSON.stringify(actionUponLoadInfo)}`);

				throw new Error("Missing implementation here.");
			}
		},
});

module.exports = {
	WithActionUponLoadOptionEditor,
};
