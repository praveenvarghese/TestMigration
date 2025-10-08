const autoLogia = require("../../auto-logia");
const log = require("../../log")(autoLogia());

const $$$ = require("../../selenium/3xdollar");

const { Select2 } = require("../../misc/select2");

const BaseIdentifierSettingsOptionEditorMixin = (_) =>
	class extends _ {
		selectIdentifier(identifierName) {
			log.debug(`${JSON.stringify(identifierName)}`);

			const identifierSelector = new Select2(
				this.webElement.find(".identifier-selector"),
				(itemName) =>
					$$$(
						`.select2-drop .select2-result-label .identifier-name > span:first-child:textMatches(/^${itemName}$/)`
					)
			);
			identifierSelector.select(identifierName);
		}
	};

module.exports = {
	BaseIdentifierSettingsOptionEditorMixin,
};
