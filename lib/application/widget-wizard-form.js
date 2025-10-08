const $$$ = require("../selenium/3xdollar");
const { asKeys } = require("../input-util");
const { FrameworkObject } = require("../framework-object");
const {
	GenericContentsOptionEditorMixable,
} = require("../option-editors/generic-contents-option-editor");
const mixin = require("../mixin");

class WidgetWizardForm extends mixin(FrameworkObject, GenericContentsOptionEditorMixable) {
	enterName(nameOrKeys) {
		this.webElement
			.find(`#widget-wizard_widget-name`)
			.click()
			.keys(asKeys(nameOrKeys));

		return this;
	}
	getName() {
		return this.webElement.find(`#widget-wizard_widget-name`).getValue();
	}
	selectType(type) {
		type = type.toLowerCase();
		type = type === "map" ? "map-v2" : type;
		this.webElement.find(`#widget-wizard_widget-type`).selectByAttribute("value", type);

		return this;
	}
	getType() {
		return this.webElement.find(`#widget-wizard_widget-type`).getValue();
	}
	setSize(width, height) {
		this.webElement.find(`#widget-wizard_widget-width`).selectByAttribute("value", width);
		this.webElement.find(`#widget-wizard_widget-height`).selectByAttribute("value", height);

		return this;
	}
	getSize() {
		const width = this.webElement.find(`#widget-wizard_widget-width`).val();
		const height = this.webElement.find(`#widget-wizard_widget-height`).val();

		return { width, height };
	}
	clickAddWidgetButton() {
		this.webElement.find(`.add-widget-btn`).click();

		// MB: Originally, const widget = Widget.find(name) was done here and the resulting widget returned. Which does not work on PageV2, where the widget is not
		// automatically assigned to an area and hence cannot be found on the screen. As no existing test uses this return value anyway, Madhu and I decided to
		// remove this find + return.
		return null;
	}

	keyBoardPressAddWidgetButton() {
		this.webElement.find(`.add-widget-btn`).keys(SPECIAL_KEYS.enter);
		return null;
	}

	clickCancel() {
		this.webElement.find(`.close-wizard`).click();
		// No return value; after clicking this button, you should not be able
		// to interact with the form anymore.
	}

	isContentsSectionDisplayed() {
		const contentSection = $$$("body").exists(".contents-field.active");
		return contentSection;
	}

	isGroupWidgetMessageDispalyed() {
		const groupWidgetClass = $$$("body").exists(".tooltipster-content");
		return groupWidgetClass;
	}
}
WidgetWizardForm.find = () => new WidgetWizardForm($$$(".widget-wizard"));

module.exports = {
	WidgetWizardForm,
};
