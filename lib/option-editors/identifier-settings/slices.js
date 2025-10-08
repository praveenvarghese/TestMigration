const autoLogia = require("../../auto-logia");
const log = require("../../log")(autoLogia());
const { resetOption } = require("../option-util");
const { generateOptionEditorConstructs } = require("../option-editor");
const { BaseIdentifierSettingsOptionEditorMixin } = require("./base");
const { SlicingIndex } = require("./slicingIndex");

const { WithSlicesOptionEditor } = generateOptionEditorConstructs({
	name: "Slices",
	editorButtonSelector: ".identifier-control",
	editorSelector: ".identifier-container.open", // .slice-editor',
	mainMethodName: "getSlicingOptionEditor",
	mixinClass: (_) =>
		class extends BaseIdentifierSettingsOptionEditorMixin(_) {
			// This is main method and returns current class for chaining.
			getSlicingOptionEditor() {
				return this;
			}

			setSlices(...slicesSpecifications) {
				log.debug(`${JSON.stringify(slicesSpecifications)}`);

				log.debug(`resetOption(${this.widget.webElement.origCssSelector}, /.slices$/)`);
				resetOption(this.widget.webElement, /.slices$/);

				slicesSpecifications.forEach(
					({ identifier: identifierName, slice: sliceElements }) => {
						this.selectIdentifier(identifierName);
						let slicingIndex;
						sliceElements.forEach(({ index: indexName, type, value }) => {
							slicingIndex = new SlicingIndex(this.webElement);
							slicingIndex.selectIndex(".field-index-selector", indexName);
							slicingIndex.selectSliceType(type);
							slicingIndex.selectValue(value);
						});
					}
				);
			}

			clearSlices(identifiers) {
				identifiers.forEach((identifierName) => {
					this.selectIdentifier(identifierName);
					const slicingIndex = new SlicingIndex(this.webElement);
					slicingIndex.clearSlicing();
				});
				return this;
			}
		},
});

module.exports = {
	WithSlicesOptionEditor,
};
