const chai = require("chai");
const { Assertion, util } = chai;

// eslint-disable-line
Assertion.overwriteProperty(
	"exist",
	(
		_super // eslint-disable-line
	) =>
		function() {
			const actual = util.flag(this, "object");

			// Function to determine if an object is empty including deep check on specific properties like webElements
			const isEmptyObject = (obj) => {
				if (Object.keys(obj).length === 0 && obj.constructor === Object) {
					return true;
				}
				// Additional specific check for webElements property being an empty array
				if (
					obj.hasOwnProperty("webElements") &&
					Array.isArray(obj.webElements) &&
					obj.webElements.length === 0
				) {
					return true;
				}
				return false;
			};

			// Determine if the value is "None", a null-like value, or an empty object (including special handling for webElements)
			const isNoneOrEmpty =
				actual === "None" ||
				actual == null ||
				(typeof actual === "object" && isEmptyObject(actual));

			// Assert that the value is neither "None", null, undefined, nor an empty object (or specifically empty webElements)
			this.assert(
				!isNoneOrEmpty,
				"expected #{this} to exist",
				"expected #{this} to not exist",
				"Not 'None', null, undefined, or an empty object (including empty webElements)", // expected
				actual // actual
			);
		}
);
