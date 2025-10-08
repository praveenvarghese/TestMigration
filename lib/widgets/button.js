const _ = require("lodash");
const path = require("path");
const fs = require("fs");
const MAX_DOWNLOAD_TIMEOUT_MS = 15000;
const mixin = require("../mixin");
const $$$ = require("../selenium/3xdollar");
const { Widget } = require("./widget");
const { Upload } = require("../widgets/upload");
const {
	WithButtonSettingsOptionEditor,
} = require("../option-editors/button-settings-option-editor");

class Button extends mixin(Widget, WithButtonSettingsOptionEditor) {
	__getTitleElement__() {
		return this.webElement.find(".ui-button");
	}

	click() {
		this.webElement.find(".ui-button").click();
		return this;
	}

	getDownloadedFile() {
		let downloadedFiles = this.downloadedFiles;

		// Do not download twice of the same Download widget; retry-code will keep on clicking
		// the download link; but if is does not respond to the first click, it is
		// already confirmed not working.
		if (!downloadedFiles) {
			const difference = () =>
				_.difference(fs.readdirSync(global.wdioDownloadDir), this.dirBefore);

			while (!difference().length && Date.now() - this.t0 < MAX_DOWNLOAD_TIMEOUT_MS) {
				browser.pause(1000);
			}

			downloadedFiles = this.downloadedFiles = difference().map((filename) => {
				let contents = "<binary>";
				const absoluteFilename = path.join(global.wdioDownloadDir, filename);
				const stat = fs.statSync(absoluteFilename);

				if (stat.size < 1024) {
					contents = fs.readFileSync(absoluteFilename, "utf8");
				}

				return {
					filename,
					size: stat.size,
					contents,
				};
			});
		}

		return downloadedFiles;
	}

	uploadFile(fileName) {
		const uploadWebElement = $$$(`body`);
		const uploadButton = new Upload(uploadWebElement);
		uploadButton.newUploadProcedure(fileName);
		this.click();
	}

	getStyle() {
		const style = super.getStyle();
		const innerUIButtonComputedStyle = this.webElement.find(".ui-button").getComputedStyle();

		style["background-color"] = innerUIButtonComputedStyle["background"].replace(
			/([^)]*\)).*/,
			"$1"
		);

		return style;
	}

	getTooltipText(activeTooltip = true) {
		if (activeTooltip) {
			return $$$(`[id="tooltip"].active`).getText();
		}

		return $$$(`[id="tooltip"]:not(".active")`).getText();
	}

	// MB: Please note that this only returns the NAME of the button, not the title. I added this function just to check whether a button is on the screen at all,
	//     as part of the 'add new widgets directly to an area' functionality.
	getButtonName() {
		return this.name;
	}
}

module.exports = {
	Button,
	onRegisterWidgetTypes(registry) {
		registry["button"] = Button;
	},
};
