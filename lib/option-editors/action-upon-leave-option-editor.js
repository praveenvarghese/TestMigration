const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const { generateOptionEditorConstructs } = require("./option-editor");

const { WithActionUponLeaveOptionEditor } = generateOptionEditorConstructs({
	name: "ActionUponLeave",
	editorButtonSelector: ".page-leave-action-settings-control",
	editorSelector: ".page-leave-action-settings-container.open",
	mainMethodName: "openActionUponLeaveOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			// This is main method and returns current class for chaining.
			openActionUponLeaveOptionEditor() {
				return this;
			}

			setActionUponLeave(actionUponLeaveInfo) {
				log.debug(`${JSON.stringify(actionUponLeaveInfo)}`);

				if (actionUponLeaveInfo.procedure) {
					this._setValue(
						"pageleave",
						null,
						"IDENTIFIER",
						actionUponLeaveInfo.procedure,
						actionUponLeaveInfo.slice,
						null
					);
				} else {
					this.clearSetValue(actionUponLeaveInfo.procedure);
				}
				return this;
			}
		},
});

module.exports = {
	WithActionUponLeaveOptionEditor,
};
