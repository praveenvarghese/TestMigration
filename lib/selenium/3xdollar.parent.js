const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const $$$ = require("./3xdollar");

// https://www.w3schools.com/css/css_combinators.asp
const CSS_COMBINATORS = ["descendant", "child", "sibling", "adjacent"];

const parseCss = require("css-what");
const stringifyCss = require("css-what/stringify");

const createParentCssSelector = (cssSelector) => {
	const parsed = parseCss(cssSelector);
	const selector = parsed[0];
	const indexOfLastCombinator =
		selector.length -
		selector
			.slice(0)
			.reverse()
			.findIndex((x) => CSS_COMBINATORS.includes(x.type));

	// The parser erroneously removes escaped dots from attribute names:
	selector.forEach((e) => {
		if (e.type === "attribute" && /\./.test(e.name)) {
			e.name = e.name.replace(/\./, "\\.");
		}
	});

	// The parse erroneously converts all pseudos to lower case
	selector.forEach((e) => {
		if (e.type === "pseudo" && /textmatches/i.test(e.name)) {
			e.name = "textMatches";
		}
	});

	selector.splice(indexOfLastCombinator, selector.length - indexOfLastCombinator, {
		type: "pseudo",
		name: "has",
		data: [[{ type: "child" }].concat(selector.slice(indexOfLastCombinator))],
	});

	return stringifyCss([selector]);
};

// A little self-contained unit-test (very useful for incrementally improving this implementation):
const test = () =>
	[
		{
			given: '.menu-holder .menu-list a[href="/app/Main Project/Result"]',
			expected: `.menu-holder .menu-list :has( > a[href='/app/Main Project/Result'])`,
		},
		{
			given: '.menu-holder .menu-list > a[href="/app/Main Project/Result"]',
			expected: `.menu-holder .menu-list > :has( > a[href='/app/Main Project/Result'])`,
		},
		{
			given: '.menu-holder .menu-list ~ a[href="/app/Main Project/Result"]',
			expected: `.menu-holder .menu-list ~ :has( > a[href='/app/Main Project/Result'])`,
		},
		{
			given: '.menu-holder .menu-list + a[href="/app/Main Project/Result"]',
			expected: `.menu-holder .menu-list + :has( > a[href='/app/Main Project/Result'])`,
		},
		{
			given: `[data-widget\\.uri='element-text-scalar'] .key`,
			expected: `[data-widget\\.uri='element-text-scalar'] :has( > .key)`,
		},
		{
			given: `.foo .key:textMatches(/^SelectedCousineE$/)`,
			expected: `.foo :has( > .key:textMatches(/^SelectedCousineE$/))`,
		},
	].every((e) => {
		const parentCssSelector = createParentCssSelector(e.given);
		const isSuccess = parentCssSelector === e.expected;
		// eslint-disable-next-line no-console
		console.log(
			`Given:    ${e.given}\nExpected: ${e.expected}\nActual:   ${parentCssSelector}\n${
				isSuccess ? "SUCCESS" : "FAILED"
			}\n\n`
		);
		return isSuccess;
	});

// Run test using:
// $ node lib/selenium/3xdollar.parent.js
if (require.main === module) {
	process.exit(test() ? 0 : 1);
}

module.exports = {
	parent() {
		const parentCssSelector = createParentCssSelector(this.origCssSelector);
		log.debug(`doing parent() using ${parentCssSelector}`);
		return $$$(parentCssSelector);
	},
};
