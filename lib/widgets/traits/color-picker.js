const fs = require("fs");
const PNG = require("pngjs").PNG;
const { v4: uuidV4 } = require("uuid");
const dir = "./tmp";

const MAX_SCREENSHOT_TIMEOUT_MS = 10000;
const _pickColor = (x, y) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
	const tempFilename = `./tmp/color-picker-screenshot-${uuidV4()}.png`;

	// eslint-disable-next-line no-console
	console.log(`Saving screenshot to: ${tempFilename} ...`);
	browser.saveScreenshot(tempFilename);

	const t0 = Date.now();

	let color;

	fs.createReadStream(tempFilename)
		.pipe(
			new PNG({
				filterType: 4,
			})
		)
		.on("parsed", function() {
			const idx = (this.width * y + x) << 2;
			color = [this.data[idx], this.data[idx + 1], this.data[idx + 2]];
		});

	while (color === undefined && Date.now() - t0 < MAX_SCREENSHOT_TIMEOUT_MS) {
		browser.pause(1000);
	}

	// fs.unlinkSync(tempFilename);

	if (color === undefined) {
		color = [-1, -1, -1];
	}

	return color;
};

/**
 * Get the color of a pixel position, using viewport relative coordinates
 * @param webElement - seleniums webelement to start from (needed to invoke browser context function)
 * @param screenLeft - viewport left position
 * @param screenTop - viewport top position
 * @returns {String} valid css color definition
 */
const _getBackgroundColorAtPosition = (webElement, screenLeft, screenTop) => {
	let elementAtPosition = webElement.getElementFromPoint(screenLeft, screenTop);

	let bgColor = window.getComputedStyle(elementAtPosition).getPropertyValue("background-color");

	// from that position, if needed, look for the first element that actually displays a (human visible) background color
	while (
		elementAtPosition.length &&
		elementAtPosition[0].tagName !== "BODY" &&
		(bgColor === "transparent" || bgColor === "rgba(0, 0, 0, 0)")
	) {
		elementAtPosition = elementAtPosition.parent();
		bgColor = window.getComputedStyle(elementAtPosition).getPropertyValue("background-color");
	}

	return bgColor;
};

const _getRGBValues = (cssRGBString) => {
	let values = cssRGBString.replace(/[rgba\s()]/gi, "");
	values = values.split(",");

	// rgba: cannot (easily) tell actual color from it
	if (values[3]) {
		return { r: undefined, g: undefined, b: undefined };
	}

	return {
		r: parseInt(values[0], 10),
		g: parseInt(values[1], 10),
		b: parseInt(values[2], 10),
	};
};

const _toHex = (int) => {
	const hexRepresentation = Number(int).toString(16);

	return hexRepresentation.length === 1 ? `0${hexRepresentation}` : hexRepresentation;
};

const WithColorPicker = (_) =>
	// eslint-disable-next-line @typescript-eslint/class-name-casing
	class mixin extends _ {
		// pick color at x, y relative to top-left of widget element, at scale
		pickColor(x, y) {
			const boundingClientRect = this.webElement.getBoundingClientRect();
			const scale = this.webElement.getElementScale();
			return _pickColor(
				Math.round(Math.floor(boundingClientRect.left) + x * scale),
				Math.round(Math.floor(boundingClientRect.top) + y * scale)
			);
		}

		getBackgroundColorAsHex(x, y) {
			const boundingClientRect = this.webElement.getBoundingClientRect();
			const scale = this.webElement.getElementScale();
			const backgroundColorInRGB = _getBackgroundColorAtPosition(
				this.webElement,
				Math.round(Math.floor(boundingClientRect.left) + x * scale),
				Math.round(Math.floor(boundingClientRect.top) + y * scale)
			);
			const rgbValues = _getRGBValues(backgroundColorInRGB);

			return `#${_toHex(rgbValues.r)}${_toHex(rgbValues.g)}${_toHex(rgbValues.b)}`;
		}
	};

module.exports = {
	WithColorPicker,
};
