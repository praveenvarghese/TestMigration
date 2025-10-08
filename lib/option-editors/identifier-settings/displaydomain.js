const autoLogia = require("../../auto-logia");
const log = require("../../log")(autoLogia());
const { asKeys } = require("../../input-util");

const { resetOption } = require("../option-util");

const { generateOptionEditorConstructs } = require("../option-editor");

const { BaseIdentifierSettingsOptionEditorMixin } = require("./base");

const { WithDisplayDomainOptionEditor } = generateOptionEditorConstructs({
	name: "DisplayDomain",
	editorButtonSelector: ".identifier-control",
	editorSelector: ".identifier-container.open",
	mainMethodName: "setDisplayDomain",
	mixinClass: (_) =>
		class extends BaseIdentifierSettingsOptionEditorMixin(_) {
			setDisplayDomain(displayDomainSpecification) {
				log.debug(`${JSON.stringify(displayDomainSpecification)}`);

				log.debug(
					`resetOption(${this.widget.webElement.origCssSelector}, /.displaydomain$/)`
				);
				resetOption(this.widget.webElement, /.displaydomain$/);

				Object.keys(displayDomainSpecification).forEach((identifierName) => {
					this.selectIdentifier(identifierName);

					const displayDomain = displayDomainSpecification[identifierName];
					this.webElement
						.find('[title="contents.displaydomain"]+input')
						.click()
						.keys(asKeys(displayDomain, SPECIAL_KEYS.enter));
				});
			}
		},
});

module.exports = {
	WithDisplayDomainOptionEditor,
};
