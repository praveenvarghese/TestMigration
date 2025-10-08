const _ = require("lodash");
const path = require("path");
const fs = require("fs");
const { Widget } = require("./widget");
const MAX_DOWNLOAD_TIMEOUT_MS = 15000;

class Download extends Widget {
	constructor(webElement, widgetUri, widgetType) {
		super(webElement, widgetUri, widgetType);
		this.t0 = null;
		this.dirBefore = null;
	}

	click() {
		// Before clicking on the download button. Get the current TimeStamp and current state of file system.
		this.t0 = Date.now();
		this.dirBefore = fs.readdirSync(global.wdioDownloadDir, { encoding: "utf8" });
		this.downloadedFiles = null;

		this.webElement.find(".prepare-download").moveTo();
		this.webElement.find(".prepare-download").click();

		// Pause for 2 seconds for the file to be downloaded
		browser.pause(2000);
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

	getInitialText() {
		return this.webElement.findIfAny(".initial-text").getText();
	}

	getStatusText() {
		return this.webElement.findIfAny(".status-text").getText();
	}

	getDimensions() {
		return [
			this.webElement.getBoundingClientRect().width,
			this.webElement.getBoundingClientRect().height,
		];
	}

	// Because the dimension of PageV2 widgets are not super precise, this function allows a tolerance to the dimensions given. It returns
	// true when the dimensions are deemed 'good enough', false when not.
	assertDimensions(width, height, pixelTolerance) {
		const actualWidth = this.webElement.getBoundingClientRect().width;
		const actualHeight = this.webElement.getBoundingClientRect().height;

		return (
			width - pixelTolerance < actualWidth &&
			width + pixelTolerance > actualWidth &&
			height - pixelTolerance < actualHeight &&
			height + pixelTolerance > actualHeight
		);
	}
}

module.exports = {
	Download,
	onRegisterWidgetTypes(registry) {
		registry["download"] = Download;
	},
};
