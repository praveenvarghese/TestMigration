const asKeys = (textOrKeys, ...additionalKeys) => {
	const keys =
		typeof textOrKeys === "string" ? [...textOrKeys].concat(additionalKeys) : textOrKeys;
	return keys;
};

module.exports = {
	// Converts a textOrKeys into a keys (sequence of keys to type)
	// additionalKeys can be used for e.g. "Enter" etc.
	//
	// Using textOrKeys.split("") will break on characters in the astral plane like emojis because
	// in Javascript internal string representation is 16-bit (2 bytes); however emojis requires
	// three bytes. Therefore, javascript uses surrogate pairs to represent those symbols in two
	// chars. For example, if you do '😀'.length you will get two instead of one. In ES6 things got
	// better, for example doing [...myString].length will get you the correct length. However, even
	// this trick will fail when using grapheme cluster such as 'நி'. To correctly split a string you
	// need to implement the Unicode Text Segmentation:
	// https://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries
	// Luckily, Javascript now has Intl.Segmenter API to do exactly that:
	// [...(new Intl.Segmenter).segment(s)].map(x => x.segment)
	// However, Intl.Segmenter https://github.com/tc39/proposal-intl-segmenter landed in Chrome 87
	// (v8 8.7); therefore only available in Node 16+
	// https://www.chromestatus.com/features/6099397733515264
	// https://bugs.chromium.org/p/v8/issues/detail?id=6891
	// Note: Chrome driver does not yet support non-BMP (code points > U+FFFF) but firefox does.
	// https://github.com/bayandin/chromedriver/blob/d0827c2b7462d95feef201136a3f9d12cd084243/key_converter.cc#L450
	// To test emojis, you need to run e2e with Firefox.
	// https://bugs.chromium.org/p/chromedriver/issues/detail?id=2269
	// More about unicode in Js in: https://mathiasbynens.be/notes/javascript-unicode
	asKeys,
};
