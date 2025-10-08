const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const $$$ = require("../selenium/3xdollar");
const lodash = require("lodash");
const flatten = (...args) => lodash.flattenDeep(...args);
const { generateOptionEditorConstructs } = require("./option-editor");

const {
	GenericContentsOptionEditorMixable,
	WithGenericContentsOptionEditor,
} = generateOptionEditorConstructs({
	name: "GenericContents",
	editorButtonSelector: ".datasource-contents-control.toolbar-button",
	editorSelector: ".datasource-contents-container.open",
	mainMethodName: "getContentsOptionEditor",
	mixinClass: (_) =>
		class extends _ {
			getContentsOptionEditor() {
				return this;
			}

			searchFor(textOrKeys) {
				// Set focus on the search bar, and then using Ctrl+A+Delete clear off the entries. This was needed, when we add multiple contents.
				this.webElement.find(`.filterinput`).click();
				browser.keys([
					SPECIAL_KEYS.left_control,
					SPECIAL_KEYS.alphabet_A,
					SPECIAL_KEYS.delete,
				]);

				this.webElement
					.find(`.filterinput`)
					.click()
					.keys([textOrKeys, SPECIAL_KEYS.enter]);
				return this;
			}

			MoveUpTheIdentifier(contentName) {
				this.webElement
					.find(`.identifier-list [title="${contentName}"] .movehandler .up`)
					.click();
			}

			MoveDownTheIdentifier(contentName) {
				this.webElement
					.find(`.identifier-list [title="${contentName}"] .movehandler .down`)
					.click();
			}

			addItemFromAvailableContents(...names) {
				log.debug(`${JSON.stringify(names)}`);
				names.forEach((name) => {
					this.searchFor(name);
					browser.pause(500);
					$$$(`.filtercontainer .available.identifier-list [title="${name}"]`).click();
				});

				return this;
			}

			getAvailableContents() {
				log.debug("");

				let availableContents;
				if (this.webElement.exists(`.identifier-list.available .name`)) {
					availableContents = flatten([
						this.webElement.find(`.identifier-list.available .name`).getText(),
					]);
				} else {
					availableContents = [];
				}

				log.debug(` => ${JSON.stringify(availableContents)}`);

				return availableContents;
			}
			removeItemFromCurrentContents(...names) {
				log.debug(`${JSON.stringify(names)}`);
				names.forEach((name) => {
					this.webElement
						.find(`.identifier-list.current [title="${name}"] .icon-close`)
						.click();
				});

				return this;
			}
			removeSpecificItemFromCurrentContents(name) {
				this.webElement
					.find(`.identifier-list.current [title="${name}"] .icon-close`)
					.click();

				return this;
			}
			getCurrentContents() {
				log.debug("");

				let currentContents;
				if (this.webElement.exists(`.identifier-list.current .name`)) {
					currentContents = flatten([
						this.webElement.find(`.identifier-list.current .name`).getText(),
					]).map((e) => e.replace(/\([^)]*\)$/, ""));
				} else {
					currentContents = [];
				}

				log.debug(` => ${JSON.stringify(currentContents)}`);

				return currentContents;
			}
			setContents(...identifierNames) {
				log.debug(`${JSON.stringify(identifierNames)} (${this.webElement})`);

				const currentContents = this.getCurrentContents();

				const isContainedIn = (list, name) => list.some((name2) => name === name2);
				const isNotContainedInIdentifierNames = (name) =>
					!isContainedIn(identifierNames, name);
				const isNotContainedInCurrentContents = (name) =>
					!isContainedIn(currentContents, name);

				const unwantedCurrentIdentifiers = currentContents.filter(
					isNotContainedInIdentifierNames
				);
				const wantedNonCurrentIdentifiers = identifierNames.filter(
					isNotContainedInCurrentContents
				);

				log.debug(
					`unwantedCurrentIdentifiers: ${JSON.stringify(
						unwantedCurrentIdentifiers
					)}, wantedNonCurrentIdentifiers: ${JSON.stringify(wantedNonCurrentIdentifiers)}`
				);

				// Step 1: Remove all unwanted from current:
				this.removeItemFromCurrentContents(...unwantedCurrentIdentifiers);

				// Step 2: Add all wanted non-current to current:
				this.addItemFromAvailableContents(...wantedNonCurrentIdentifiers);
			}
		},
});

module.exports = {
	GenericContentsOptionEditorMixable,
	WithGenericContentsOptionEditor,
};
