/**
 * return the hex representation of a number as a hex string, left-padded to represent round number of bytes
 * @param number
 * @returns {string}
 */
const numberToHex = (number) => {
	const hexAsString = number.toString(16);
	return hexAsString.length % 2 === 0 ? hexAsString : `0${hexAsString}`;
};

/**
 * @param {string} hex as string, either prefixed with the js-notation of `0x` or not. Arbitrary length
 * @returns {number}
 */
const hexToNumber = (hex) => {
	hex = hex.replace(/[^(0x)^0-9^a-f]/gi, "");
	hex = hex.startsWith("0x") ? hex : `0x${hex}`;

	return parseInt(hex, 16);
};

class Color {
	/**
	 * Create a color from rgb value (number 0-255, as number or hex string). Stores values as decimal number
	 * Has getters that represent css hex, rgb, rgba, rgba with additional space, hsla. Also chainable clear and semi-clear versions
	 * @param rOrHex number, 0-255, or 2-digit hex, or when longer string: representation of css color with 3 or 6 hex numbers optionally prefixed with #
	 * @param g
	 * @param b
	 * @param [alpha] {Number} optional alpha transparency, 0 to 1, defaults to 1
	 */
	constructor(rOrHex, g, b, alpha = 1) {
		if (
			typeof rOrHex === "string" &&
			!rOrHex.startsWith("0x") &&
			rOrHex.length > 2 &&
			g === undefined &&
			b === undefined
		) {
			let rPart, gPart, bPart;
			rOrHex = rOrHex.replace("#", "");

			if (rOrHex.length === 3) {
				rPart = rOrHex.substring(0, 1);
				rPart = rPart + rPart;
				gPart = rOrHex.substring(1, 2);
				gPart = gPart + gPart;
				bPart = rOrHex.substring(2, 3);
				bPart = bPart + bPart;
			} else if (rOrHex.length === 6) {
				rPart = rOrHex.substring(0, 2);
				gPart = rOrHex.substring(2, 4);
				bPart = rOrHex.substring(4, 6);
			}
			this.r = hexToNumber(rPart);
			this.g = hexToNumber(gPart);
			this.b = hexToNumber(bPart);
		} else {
			this.r = typeof rOrHex === "string" ? hexToNumber(rOrHex) : rOrHex;
			this.g = typeof g === "string" ? hexToNumber(g) : g;
			this.b = typeof b === "string" ? hexToNumber(b) : b;
		}
		this.a = alpha;
	}

	get hex() {
		return `#${numberToHex(this.r)}${numberToHex(this.g)}${numberToHex(this.b)}`;
	}

	get rgb() {
		return `rgb(${this.r}, ${this.g}, ${this.b})`;
	}

	get rgba() {
		return `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}
	get hsla() {
		// conversion adapted from https://css-tricks.com/converting-color-spaces-in-javascript/

		// Make r, g, and b fractions of 1
		const r = this.r / 255;
		const g = this.g / 255;
		const b = this.b / 255;

		// Find greatest and smallest channel values
		const cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin;
		let h, s, l;
		// Calculate hue
		// No difference
		if (delta === 0) {
			h = 0;
		}
		// Red is max
		else if (cmax === r) {
			h = ((g - b) / delta) % 6;
		}
		// Green is max
		else if (cmax === g) {
			h = (b - r) / delta + 2;
		}
		// Blue is max
		else {
			h = (r - g) / delta + 4;
		}

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

		return `hsla(${h},${s}%,${l}%,${this.a})`;
	}

	get rgbWithWhitespace() {
		return `rgb(${this.r}, ${this.g}, ${this.b})`;
	}

	get rgbaWithWhitespace() {
		return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
	}

	// clear would mean: no background set at all. And that will apparently be returned at 0,0,0,0
	get clear() {
		return new Color(0, 0, 0, 0);
	}

	get halfClear() {
		return new Color(this.r, this.g, this.b, this.a / 2);
	}
}

module.exports = Color;
