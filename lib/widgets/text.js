const { Widget } = require("./widget");

class Text extends Widget {
	isTextEditorDisplayed() {
		return this.webElement.findIfAny(".textwidget-toolbar").hasClass("open") ? true : false;
	}

	isContentEditable() {
		return this.webElement.find(".ql-editor").getAttribute("contenteditable") === "true"
			? true
			: false;
	}

	closeToolbar() {
		return this.webElement.find(".textwidget-toolbar .close-editor").click();
	}

	editMode() {
		//const loc=this.webElement;
		this.webElement.find(".open-editor").moveTo();
		this.webElement.find(".open-editor").click();

		return this;
	}

	getText() {
		return this.webElement.find(".ql-editor div").getText();
	}

	edit(value) {
		const textBoxLoc = this.webElement.find(`.ql-editor[contenteditable="true"]`);
		textBoxLoc.click();
		browser.keys([SPECIAL_KEYS.left_control, "a"]);
		browser.keys([SPECIAL_KEYS.delete]);
		textBoxLoc.keys(value);
		return this.webElement.find(".textwidget-toolbar .close-editor").click();
	}

	getAllEditorOptions() {
		const editorTitles = [].concat(
			this.webElement.find(".ql-format-group [title]:isVisible").getAttribute("title")
		);
		return editorTitles;
	}
}

module.exports = {
	Text,
	onRegisterWidgetTypes(registry) {
		registry["text"] = Text;
	},
};
