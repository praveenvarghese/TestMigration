const Color = require("../color-utils");

// These are the 'primitive' colors used throughout the WebUI. Find their defintion
// Their names (should) match the names used in webui/frontend/resources/scss/_colors-primitives.scss
const COLORS_REFERENCE = {
	colorPrimitiveAccentBlue110: new Color("#1452cc"), // 		rgb( 20,  82, 204)
	colorPrimitiveAccentBlue100: new Color("#2e6be5"), // 		rgb( 46, 107, 229)
	colorPrimitiveAccentBlue20: new Color("#ccddff"), // 		rgb(204, 221, 255)
	colorPrimitiveGreen100: new Color("#51992e"), // 			rgb( 81, 153,  46)
	colorPrimitivePink100: new Color("#cc3d85"), // 			rgb(204,  61, 100)
	colorPrimitiveRed100: new Color("#bf1d1d"), // 				rgb(191,  29,  29)
	colorPrimitiveYellow100: new Color("#ffc61a"), // 			rgb(255, 198,  26)
	colorPrimitiveTransparentYellow32: new Color(255, 198, 26, 0.3),

	// Blacks, greys and whites (and not the transparent ones)
	colorPrimitiveGrey100: new Color("#000f33"), // 			rgb(  0,  15,  51)
	colorPrimitiveGrey80: new Color("#1f3466"), // 				rgb( 31,  52, 102)
	colorPrimitiveGrey40: new Color("#8f9bb2"), //				rgb(143, 155, 178)
	colorPrimitiveGrey25: new Color("#c3cad9"), // 				rgb(195, 202, 217)
	colorPrimitiveGrey20: new Color("#cfd6e5"), // 				rgb(207, 214, 229)
	colorPrimitiveGrey15: new Color("#e1e7f2"), // 				rgb(225, 231, 242)
	colorPrimitiveGrey10: new Color("#ebeff7"), // 				rgb(235, 239, 247)
	colorPrimitiveGrey5: new Color("#f5f7fc"), // 				rgb(245, 247, 252)
	colorPrimitiveWhite100: new Color("#ffffff"), // 			rgb(255, 255, 255)

	// transparent blacks and whites
	// NOTE: Checking for transparent colors only works when the CSS style is checked.
	// Sampling/picking from a screenshot will result in an INCORRECT outcome (of the transparent color mixed with the background), which is of course hard to register here...
	colorPrimitiveTransparentBlack2: new Color(0, 15, 51, 0.02),
	colorPrimitiveTransparentBlack4: new Color(0, 15, 51, 0.04),
	colorPrimitiveTransparentBlack8: new Color(0, 15, 51, 0.08),
	colorPrimitiveTransparentBlack16: new Color(0, 15, 51, 0.16),
	colorPrimitiveTransparentBlack40: new Color(0, 15, 51, 0.4),

	colorPrimitiveTransparentWhite80: new Color(255, 255, 255, 0.8),
	colorPrimitiveTransparentWhite64: new Color(255, 255, 255, 0.64),
	colorPrimitiveTransparentWhite40: new Color(255, 255, 255, 0.4),
	colorPrimitiveTransparentWhite16: new Color(255, 255, 255, 0.16),
};

// colors as set by the Mod16 palette (without any transparency index; we're not listing those 80 combinations here)
// these rgb values were takes from the browser, that is really creating a calculated color based on HSL values and a modification of those values)
// see webui/frontend/resources/scss/_colors-reference.scss and webui/frontend/resources/scss/global/palette.scss
const COLORS_MOD16_PALETTE = {
	colorMod16Ord1: new Color(215, 214, 243),
	colorMod16Ord2: new Color(67, 26, 77),
	colorMod16Ord3: new Color(174, 50, 108),
	colorMod16Ord4: new Color(145, 78, 48),
	colorMod16Ord5: new Color(71, 74, 22),
	colorMod16Ord6: new Color(77, 177, 51),
	colorMod16Ord7: new Color(14, 50, 34),
	colorMod16Ord8: new Color(40, 105, 134),
	colorMod16Ord9: new Color(32, 29, 100),
	colorMod16Ord10: new Color(149, 57, 172),
	colorMod16Ord11: new Color(206, 86, 142),
	colorMod16Ord12: new Color(105, 56, 35),
	colorMod16Ord13: new Color(199, 205, 84),
	colorMod16Ord14: new Color(22, 50, 14),
	colorMod16Ord15: new Color(32, 111, 75),
	colorMod16Ord16: new Color(52, 137, 174),
};

// The colors below are colors that occur in some places in e2e, for various reasons (model, custom css).
// But which are not the standard palette (and should be kept separated)
const COLORS_NON_STANDARD = {
	// still found e2e/custom css or model setup with hard-code colors
	colorNonStandardDarkGreen: new Color("#008000"), //		rgb(  0, 128,   0)
	colorNonStandardDarkBlue: new Color("#000066"), //		rgb(  0,   0, 102)
	colorNonStandardMediumYellow: new Color("#CCCC00"), //	rgb(204, 204,   0)
	colorNonStandardDarkPurple: new Color("#6600ff"), //	rgb(102,   0, 255)
	colorNonStandardOrangeYellow: new Color("#FF9933"), //	rgb(255, 153,  51)
	colorDarkBlue: new Color("#0033cc"), //					rgb(  0,  51, 204)
	colorPureRed: new Color("#ff0000"), // 					rgb(255,   0,   0)
	colorTangerineYellow: new Color("#ffcc00"), //  		rgb(255, 204,   0)
	colorBlueMagenta: new Color("#9900ff"), // 				rgb(153,   0, 255)
	colorPureYellow: new Color("#ffff00"), //				rgb(255, 255,   0)
	colorPureBlack: new Color("#000000"), //				rgb(  0,   0,   0)
	colorNeonBlue: new Color("#0000ff"), // 				rgb(  0,   0, 255)
	colorGreySilver: new Color("#cccccc"), //				rgb(204, 204, 204)
	colorNonStandardDarkGrey: new Color("#a9a9a9"), //		rgb(169, 169, 169)
	colorPrimitiveWhite100Smoke: new Color("#f5f5f5"), //	rgb(245, 245, 245)
	colorTrolleyGrey: new Color("#808080"), //				rgb(128, 128, 128)
};

// for now, we just combine them, so they're all available
const colors = Object.assign({}, COLORS_REFERENCE, COLORS_MOD16_PALETTE, COLORS_NON_STANDARD);

module.exports = {
	colors,
};
