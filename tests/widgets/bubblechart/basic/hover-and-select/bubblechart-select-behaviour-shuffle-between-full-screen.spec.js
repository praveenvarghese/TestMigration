/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select behaviour on Bubble chart is retained shuffling between full screen and normal view.",
	() => {
		loadPage("Main Project/WidgetTypes");

		findWidget("LettersForWordStart").selectAll();

		findWidget("Bubblechart")
			.findBubble("pop")
			.click();

		findWidget("Bubblechart").goInFullScreenMode();

		// Wait for Bubble chart to load
		findWidget("Bubblechart").isFullScreen().should.be.true;

		let popBubble = findWidget("Bubblechart").findBubble("pop");
		popBubble.hasClass("is-active").should.be.equal(true);
		popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("1");

		const doosBubble = findWidget("Bubblechart").findBubble("doos");
		doosBubble.hasClass("is-active").should.be.equal(false);
		doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

		findWidget("Bubblechart")
			.findBubble("jurk")
			.click();

		findWidget("Bubblechart").exitFullScreenMode();

		// Wait for Bubble chart to load
		findWidget("Bubblechart").isFullScreen().should.be.false;

		let jurkBubble = findWidget("Bubblechart").findBubble("jurk");
		jurkBubble.hasClass("is-active").should.be.equal(true);
		jurkBubble.getCSSStyleProperty("fill-opacity").should.be.equal("1");

		popBubble = findWidget("Bubblechart").findBubble("pop");
		popBubble.hasClass("is-active").should.be.equal(false);
		popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

		findWidget("Bubblechart")
			.findBubble("jurk")
			.click();

		findWidget("Bubblechart").goInFullScreenMode();

		// Wait for Bubble chart to load
		findWidget("Bubblechart").isFullScreen().should.be.true;

		jurkBubble = findWidget("Bubblechart").findBubble("jurk");
		jurkBubble.hasClass("is-active").should.be.equal(false);
		jurkBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

		popBubble = findWidget("Bubblechart").findBubble("pop");
		popBubble.hasClass("is-active").should.be.equal(false);
		popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	}
);
