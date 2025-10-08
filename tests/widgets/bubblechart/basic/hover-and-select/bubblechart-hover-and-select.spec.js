/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Hover and select behaviour on Bubble chart.", () => {
	loadPage("Main Project/WidgetTypes");

	findWidget("LettersForWordStart").selectAll();
	mouseHoverMenuButton();

	let jurkBubble = findWidget("Bubblechart").findBubble("jurk");
	jurkBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	jurkBubble.hover();

	let doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
	doosBubble.hover();

	doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.hasClass("is-hover").should.be.equal(true);
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("1");

	jurkBubble = findWidget("Bubblechart").findBubble("jurk");
	jurkBubble.hasClass("is-hover").should.be.equal(false);
	jurkBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	let popBubble = findWidget("Bubblechart").findBubble("pop");
	popBubble
		.click()
		.hasClass("is-active")
		.should.be.equal(true);
	popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("1");

	doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.hasClass("is-active").should.be.equal(false);
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	findWidget("Bubblechart")
		.findBubble("pop")
		.click();

	mouseHoverMenuButton();

	popBubble = findWidget("Bubblechart").findBubble("pop");
	popBubble.hasClass("is-active").should.be.equal(false);
	popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.hasClass("is-active").should.be.equal(false);
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
});
