const { FrameworkObject } = require("../framework-object");

class Button extends FrameworkObject {
	isActive() {
		const hasActive = this.webElement.hasClass("active");
		const hasOpen = this.webElement.hasClass("open");

		return hasActive || hasOpen;
	}

	click() {
		if (this.webElement) this.webElement.click();
		else throw new Error("Webelement is not available.");
	}

	isDisplayedInViewport() {
		return this.webElement ? this.webElement.isDisplayedInViewport() : false;
	}

	mouseHover() {
		this.webElement.moveTo();
	}
}

module.exports = { Button };
