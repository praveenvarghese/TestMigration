const mixin = require("../mixin");
const { Widget } = require("./widget");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");

class Legend extends mixin(Widget, WithWidgetExtensionsOptionEditor) {
	select(itemName) {
		this.webElement
			.find(`.searchable-list li:not(.active) .name:textMatches(/^${itemName}$/)`)
			.click();
		return this;
	}

	deselect(itemName) {
		this.webElement
			.find(`.searchable-list li.active .name:textMatches(/^${itemName}$/)`)
			.click();
		return this;
	}

	getValue() {
		return this.webElement.find(".searchable-list li.active .name").getText();
	}

	getLegendEntries() {
		return [].concat(this.webElement.find(".searchable-list li").getAttribute("data-id"));
	}

	mouseHoverOverItem(itemName) {
		return this.webElement.find(`.searchable-list .name:textMatches(/^${itemName}$/)`).moveTo();
	}
	click(itemName) {
		this.webElement
			.find(`.searchable-list .name:textMatches(/^${itemName}$/)`)
			.click({ force: true });
		return this;
	}
}

module.exports = {
	Legend,
	onRegisterWidgetTypes(registry) {
		registry["legend"] = Legend;
	},
};
