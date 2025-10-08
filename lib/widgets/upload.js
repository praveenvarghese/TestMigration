const fs = require("fs");
const path = require("path");
const { Widget } = require("./widget");

// This step needed to share the file with selenium server
const copyFileToSeleniumServer = (filename, folderPath = "") => {
	const modelDir = process.env.AIMMS_FILE_RELATIVE_PATH
		? path.dirname(process.env.AIMMS_FILE_RELATIVE_PATH)
		: "";

	const modelPath =
		process.env.HOST_AIMMS_APP_ROOT_ABSOLUTE_PATH ?? `${__dirname}/../../${modelDir}`;

	const localPath = folderPath
		? `${global.wdioDownloadDir}/${filename}`
		: `${modelPath}/${filename}`;
	const remotePath = `${global.wdioUploadDir}/${path.basename(filename)}`;

	fs.copyFileSync(localPath, remotePath);
};

class Upload extends Widget {
	uploadFile(filename) {
		copyFileToSeleniumServer(filename);

		const fileUpload = this.webElement.find('input[type="file"]');
		const fileUploadInput = fileUpload.webElement;

		browser.execute((el) => {
			el.style.cssText = "opacity: 1; top: 0px !important; pointer-events: auto";
		}, fileUploadInput);

		fileUpload.setValue(`${global.browserUploadDir}/${path.basename(filename)}`);

		const uploadBtn = this.webElement.find(".start-upload").webElement;
		browser.execute((el) => el.click(), uploadBtn);

		this.webElement.find(`.upload-wrapper[data-state="done"]`);

		return this;
	}

	uploadExcelFile(filename, folderPath = "") {
		copyFileToSeleniumServer(filename, folderPath);

		const fileUpload = this.webElement.find('input[type="file"]');
		const fileUploadInput = fileUpload.webElement;
		const fileUploadParent = this.webElement;
		const fileUploadParentInput = fileUploadParent.webElement;

		// This is required to make the field visible and upload will work
		browser.execute((el) => {
			el.style.cssText =
				"display: block; opacity: 1; top: 0px !important; pointer-events: auto";
		}, fileUploadInput);

		browser.execute((el) => {
			el.style.cssText =
				"display: block; opacity: 1; top: 0px !important; pointer-events: auto";
		}, fileUploadParentInput);

		fileUpload.setValue(`${global.browserUploadDir}/${path.basename(filename)}`);

		return this;
	}

	uploadProcedure(filename) {
		copyFileToSeleniumServer(filename);

		const fileUpload = this.webElement.find("#e2e-file-dialog-helper");
		const fileUploadInput = fileUpload.webElement;
		const fileUploadParent = this.webElement;
		const fileUploadParentInput = fileUploadParent.webElement;

		//This is required to make the field visible and upload will work
		browser.execute((el) => {
			el.style.cssText =
				"display: block; opacity: 1; top: 0px !important; pointer-events: auto";
		}, fileUploadInput);

		browser.execute((el) => {
			el.style.cssText =
				"display: block; opacity: 1; top: 0px !important; pointer-events: auto";
		}, fileUploadParentInput);

		fileUpload.setValue(`${global.browserUploadDir}/${path.basename(filename)}`);

		return this;
	}

	newUploadProcedure(filename) {
		copyFileToSeleniumServer(filename);

		const fileUpload = this.webElement.find("#upload_file_helper");
		const fileUploadInput = fileUpload.webElement;

		//This is required to make the field visible and upload will work
		browser.execute((el) => {
			el.style.cssText =
				"display: block; opacity: 1; top: 0px !important; right: 0px !important; width: 100px; height: 20px; position: absolute !important; pointer-events: auto; z-index: 1000;";
		}, fileUploadInput);

		fileUpload.setValue(`${global.browserUploadDir}/${path.basename(filename)}`);

		return this;
	}
	// Get the text that is displayed initially in the widget
	getInitialText() {
		return this.webElement.findIfAny(".initial-text").getText();
	}

	// Get the text once a status is displayed in the widget
	getStatusText() {
		return this.webElement.findIfAny(".status-text").getText();
	}
}

module.exports = {
	Upload,
	onRegisterWidgetTypes(registry) {
		registry["upload"] = Upload;
	},
};
