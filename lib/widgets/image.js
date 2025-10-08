const { Widget } = require("./widget");

const mixin = require("../mixin");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");

class Image extends Widget {
	getUrl() {
		return this.webElement.findIfAny(".image-widget__image").getAttribute("src");
	}

	isEmpty() {
		return !this.webElement
			.findIfAny(".image-widget__image")
			.hasClass("image-widget__image--visible");
	}
}

class MultiLayerImage extends mixin(
	Widget,
	WithIdentifierSettingsOptionEditor,
	WithGenericContentsOptionEditor
) {
	getUrls() {
		return this.webElement.find(".ml-image").getAttribute("src");
	}
}

module.exports = {
	Image,
	onRegisterWidgetTypes(registry) {
		registry["image"] = Image;
		registry["multilayer-image"] = MultiLayerImage;
	},
};
