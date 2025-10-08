const chai = require("chai");
const { util } = chai;
chai.use(require("chai-shallow-deep-equal"));

const isSomethingLike = (actual, expected) =>
	Object.keys(expected).every(
		(propertyName) =>
			actual[propertyName] === expected[propertyName] ||
			JSON.stringify(actual[propertyName]) === JSON.stringify(expected[propertyName])
	);

module.exports = {
	similar: [
		function assert(expected) {
			// const expectedItems = _.flatten([expectedItemOrItems]);
			const actual = util.flag(this, "object");

			this.assert(
				isSomethingLike(actual, expected),
				"expected #{act} to be like #{exp}",
				"expected #{act} to not be like #{exp}",
				expected, // expected
				actual // actual
			);
		},
		// function property() {},
	],
};
