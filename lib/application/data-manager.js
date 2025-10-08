/**
 * TODO Add docs
 * TODO: Implement setActive when clicked while some existing case is dirty
 * TODO: Implement save case method
 * TODO: Implement DataManager.close
 */

const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");

class DataCase extends FrameworkObject {
	getName() {
		return this.webElement.find("b").getText();
	}

	compare() {
		this.webElement.click(); // TO show the hidden button
		this.webElement.find(".compare-case-btn").click();
		return this;
	}

	uncompare() {
		// The css selector for compare & uncompare is the same.
		this.compare();
		return this;
	}

	delete() {
		this.webElement.click(); // TO show the hidden button
		this.webElement.find(".delete-btn").click();
		browser.acceptAlert();
		return this;
	}

	makeActive() {
		this.webElement.click(); // TO show the hidden button
		this.webElement.find(".set-active-case-btn").click();
		return this;
	}

	reload() {
		// The css selector for load & reload is the same.
		this.webElement.click(); // TO show the hidden button
		this.webElement.find(".load-case-btn").click();
		$$$(".ui-dialog-buttonset button:textMatches(/Reload active case/)").click();
		return this;
	}

	save() {
		throw new Error("TODO: Not implemented yet");
	}
}

class DataManager extends FrameworkObject {
	getAvailableCases() {
		let cases;
		if (this.webElement.exists(".available-cases .case-list-view li")) {
			cases = this.webElement.find(".available-cases .case-list-view li");
		} else {
			cases = [];
		}

		return cases;
	}

	getAvailableCasesAsText() {
		let cases;
		const caseStrings = [];

		if (this.webElement.exists(".available-cases .case-list-view li")) {
			cases = this.webElement.find(".available-cases .case-list-view li");

			// Do some string magic to remove the standard case operation texts from this list
			cases = cases.getText();
			let i;
			for (i = 0; i < cases.length; i++) {
				caseStrings[i] = cases[i].slice(
					0,
					cases[i].indexOf("Load as activeCompare caseDelete")
				);
			}
		} else {
			cases = [];
		}

		return caseStrings;
	}

	getComparedCases() {
		let cases;
		if (this.webElement.exists(".selected-cases .case-list-view li")) {
			cases = this.webElement.find(".selected-cases .case-list-view li");
		} else {
			cases = [];
		}

		return cases;
	}

	getActiveCase() {
		const caseElement = this.webElement.find(".active-case li");
		return new DataCase(caseElement);
	}

	setActiveCase(name) {
		return this.getCase(name).makeActive();
	}

	getCase(name) {
		let caseElement;
		if (this.webElement.exists(`.available-cases [data-case-name="${name}"]`)) {
			caseElement = this.webElement.find(`.available-cases [data-case-name="${name}"]`);
		} else {
			// The case when first added will go directly to 'Compared Cases' if it was not first
			caseElement = this.webElement.find(`.selected-cases [data-case-name="${name}"]`);
		}
		return new DataCase(caseElement);
	}

	deleteCase(name) {
		this.getCase(name).delete();
		return this;
	}

	reloadCase(name) {
		this.getActiveCase(name).reload();
		return this;
	}

	createCase(name) {
		this.webElement.find(".case-form .icon-plus").click();
		this.webElement.find(".case-form .field-case").keys([name, SPECIAL_KEYS.enter]);
		return this;
	}
}

DataManager.open = () => {
	if (!$$$(".sidebar .view.data-management-addon").hasClass("open")) {
		$$$(".tools .data-management-addon").click();
	}
	return new DataManager($$$(".sidebar .view.data-management-addon"));
};

DataManager.close = () => {
	const isDataManagerOpen = $$$("body").exists(".sidebar .view.data-management-addon.open");
	if (isDataManagerOpen) {
		$$$(".sidebar-container.open .icon-close:isVisible").click();
	}
};

const openDataManager = new RootAction("openDataManager", () => DataManager.open());
const closeDataManager = new RootAction("closeDataManager", () => DataManager.close());

module.exports = {
	DataManager,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(openDataManager, closeDataManager);
	},
};
