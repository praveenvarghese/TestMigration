const { findWidgetWebElement } = require("../abstractWidget");

const conditionalUnwrap = (x) => (x.length === 1 ? x[0] : x);

const getAlignment = (lhs, rhs) =>
	conditionalUnwrap(
		["top", "right", "bottom", "left"].filter((position) => lhs[position] === rhs[position])
	);

const getRelativePositioning = (this_, other) => {
	const relativePositioning = [];
	let horizontalOverlap = false;
	let verticalOverlap = false;

	if (this_.right <= other.left) {
		relativePositioning.push("this left of other");
	} else if (this_.left >= other.right) {
		relativePositioning.push("this right of other");
	} else {
		horizontalOverlap = true;
	}

	if (this_.bottom <= other.top) {
		relativePositioning.push("this above other");
	} else if (this_.top >= other.bottom) {
		relativePositioning.push("this below other");
	} else {
		verticalOverlap = true;
	}

	if (horizontalOverlap && verticalOverlap) {
		relativePositioning.push("this and other overlap");
	}

	return conditionalUnwrap(relativePositioning);
};

const WithLayoutPositionInfo = (_) =>
	// eslint-disable-next-line @typescript-eslint/class-name-casing
	class mixin extends _ {
		// pick color at x, y relative to top-left of widget element
		getPositionInfoRelativeTo(otherWidgetSelector) {
			const this_boundingClientRect = this.webElement.getBoundingClientRect();
			const other_boundingClientRect = findWidgetWebElement(
				otherWidgetSelector
			).getBoundingClientRect();

			return {
				...Object.fromEntries(
					Object.entries(this_boundingClientRect).map(([k, v]) => [`this_${k}`, v])
				),
				...Object.fromEntries(
					Object.entries(other_boundingClientRect).map(([k, v]) => [`other_${k}`, v])
				),
				alignment: getAlignment(this_boundingClientRect, other_boundingClientRect),
				relativePositioning: getRelativePositioning(
					this_boundingClientRect,
					other_boundingClientRect
				),
			};
		}
	};

module.exports = {
	WithLayoutPositionInfo,
};
