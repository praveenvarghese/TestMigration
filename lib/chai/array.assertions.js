// These assertions are also available in core chai, but lead to
// unpreferable test code.
//
// lengthOf vs numberOfItems
// =========================
// find('mapWidget').getArcs().should.have.lengthOf(3) => length of arcs ambiguity
//
// With these assertions you can write things like:
//
// find('mapWidget').getArcs().should.have.numberOfItems(3); or
// find('mapWidget').getArcs().should.have.numberOfItems.equal(3); or
// find('mapWidget').getArcs().should.have.numberOfItems.within(3, 5);
//
//
// (deep.)include(.members) vs include.something.like
// ==================================================
//
// .something.like: Duck type testing; consider:
//
// [{a:1}, {b:2}].should.deep.include({a:1}) => true
// [{a:1}, {b:2}].should.deep.include.members([{a:1}, {b:2}]) => true
// [{a:1, c:0}, {b:2, c:0}].should.deep.include({a:1}) => false
// [{a:1, c:0}, {b:2, c:0}].should.deep.include.members([{a:1}, {b:2}]) => false
// [{a:1, c:0}, {b:2, c:0}].should.include.something.like({a:1}) => true
// [{a:1, c:0}, {b:2, c:0}].should.include.something.like([{a:1}, {b:2}]) => true
//

const _ = require("lodash");

const chai = require("chai");
const { Assertion, util } = chai;
chai.use(require("chai-shallow-deep-equal"));

const containsItemsLike = (actualItems, expectedItems) =>
	expectedItems.every((expectedItem) =>
		// eslint-disable-next-line no-confusing-arrow
		actualItems.some((actualItem) =>
			_.isString(expectedItem)
				? expectedItem === actualItem
				: Object.keys(expectedItem).every((key) => {
						let res;

						if (_.isArray(expectedItem[key])) {
							res = containsItemsLike(actualItem[key], expectedItem[key]);
						} else {
							res = actualItem[key] === expectedItem[key];
						}

						return res;
				  })
		)
	);

const _toHex = (int) => {
	const hexRepresentation = Number(int).toString(16);

	return hexRepresentation.length === 1 ? `0${hexRepresentation}` : hexRepresentation;
};

module.exports = {
	numberOfItems: [
		function assert(expectedNumItems) {
			const actualNumItems = util.flag(this, "object");

			// second, our actual check
			this.assert(
				actualNumItems === expectedNumItems,
				"expected to have #{exp} item(s), but it has #{act}",
				"expected to not have #{act} item(s)",
				expectedNumItems, // expected
				actualNumItems // actual
			);
		},
		function property() {
			const obj = util.flag(this, "object");
			if (typeof obj !== "number") {
				new Assertion(obj).to.have.property("length");
				util.flag(this, "object", obj.length);
			}
		},
	],
	like: [
		function assert(expectedItemOrItems) {
			const expectedItems = _.flatten([expectedItemOrItems]);
			const actualItems = util.flag(this, "object");

			this.assert(
				containsItemsLike(actualItems, expectedItems),
				"expected #{act} to contain #{exp}",
				"expected #{act} to not contain #{exp}",
				expectedItems, // expected
				actualItems // actual
			);
		},
		// function property() {},
	],
	beEqualTo: [
		function(exp) {
			new chai.Assertion(this._obj, "/").to.be.shallowDeepEqual(exp);
		},
	],
	beRoughlyEqualTo: [
		function assert(expectedDimensions, options) {
			const { tolerance } = options || {};
			const actualDimensions = util.flag(this, "object");

			// Ensure actualDimensions and expectedDimensions are arrays
			if (!Array.isArray(actualDimensions) || !Array.isArray(expectedDimensions)) {
				throw new TypeError("Both actual and expected dimensions should be arrays.");
			}

			// Check if the dimensions are within the tolerance range
			const isWithinTolerance = actualDimensions.every((value, index) => {
				const expected = expectedDimensions[index];
				return value >= expected - tolerance && value <= expected + tolerance;
			});

			this.assert(
				isWithinTolerance,
				`expected dimensions #{act} to be within tolerance of #{exp} ±${tolerance}`,
				`expected dimensions #{act} not to be within tolerance of #{exp} ±${tolerance}`,
				expectedDimensions,
				actualDimensions
			);
		},
	],

	beEqualInAnyOrderTo: [
		function(exp) {
			new chai.Assertion(new Set(this._obj), "/").to.be.shallowDeepEqual(new Set(exp));
		},
	],
	beSameColorAs: [
		function assert(expectedColorComponentArray) {
			const actualColorComponentArray = util.flag(this, "object");

			const isWithinRange = (x, y) => _.inRange(x, y - 3, y + 3);
			let isSameColor = false;
			if (
				expectedColorComponentArray &&
				actualColorComponentArray &&
				expectedColorComponentArray.length === actualColorComponentArray.length
			) {
				isSameColor = actualColorComponentArray.every((e, i) =>
					isWithinRange(e, expectedColorComponentArray[i])
				);
			}

			this.assert(
				isSameColor,
				"expected #{act} to be roughly the same color as #{exp}",
				"expected #{act} not to be roughly the same color as #{exp}",
				expectedColorComponentArray, // expected
				actualColorComponentArray // actual
			);
		},
		// function property() {},
	],
	beExactHexColor: [
		function assert(expectedColorRGBorHex) {
			let isExactColor = false;
			let expectedColorAsHex = expectedColorRGBorHex;
			const actualColorAsHex = util.flag(this, "object");

			if (expectedColorRGBorHex && actualColorAsHex) {
				if (Array.isArray(expectedColorRGBorHex)) {
					expectedColorAsHex = `#${_toHex(expectedColorRGBorHex[0])}${_toHex(
						expectedColorRGBorHex[1]
					)}${_toHex(expectedColorRGBorHex[2])}`;
				} else {
					expectedColorAsHex = expectedColorRGBorHex;
				}

				isExactColor = actualColorAsHex === expectedColorAsHex.toLowerCase();
			}

			this.assert(
				isExactColor,
				"expected #{act} to be equivalent to #{exp}",
				"expected #{act} not to be equivalent to #{exp}",
				expectedColorAsHex, // expected
				actualColorAsHex // actual
			);
		},
	],
};
