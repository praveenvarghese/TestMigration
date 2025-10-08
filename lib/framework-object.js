const $$$ = require("./selenium/3xdollar");

// Return an object with only properties listed in propertyNames
const filterObject = (object, propertyNames) =>
	propertyNames.reduce((res, cur) => {
		res[cur] = object[cur];

		return res;
	}, {});

const STYLE_PROPERTIES = ["opacity", "background-color", "text-align"];

class FrameworkObject {
	constructor(webElement) {
		this.webElement = webElement;
	}
	getStyle() {
		const computedStyle = this.webElement.getComputedStyle();

		// Filter out exotic properties, so the style becomes a manageable object;
		// otherwise actual becomes unreadable in case of test failure.
		return filterObject(computedStyle, STYLE_PROPERTIES);
	}
}

// A FrameworkObject which has a local copy of the remote DOM
// element wrapped in a jQuery object. This cached DOM allows
// for speedy/frequent DOM queries.
//
// Notes:
//   * Do not manipulate the local jQuery DOM and expect it to
//     be reflected remotely. Consider the local copy to be
//     readonly.
//   * The webElement field that makes a jQueryFrameworkObject
//     to be also a "normal" FrameworkObject is retrieved in a
//     deferred fashion.
class jQueryFrameworkObject {
	constructor(jQueryElement) {
		const id = jQueryElement.attr("id");

		if (!id) {
			throw new Error(
				"DeferredFrameworkObject can only be constructed using a jQueryElement with an id"
			);
		} else {
			this.jQueryElement = jQueryElement;
			let webElement;
			Object.defineProperty(this, "webElement", {
				get() {
					if (!webElement) {
						webElement = $$$(`#${id}`);
					}

					return webElement;
				},
			});
		}
	}
}

module.exports = {
	FrameworkObject,
	jQueryFrameworkObject,
};
