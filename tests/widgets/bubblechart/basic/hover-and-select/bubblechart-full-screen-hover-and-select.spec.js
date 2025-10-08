/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Hover and select behaviour on Bubble chart in full screen mode.", () => {
	loadPage("Main Project/WidgetTypes");

	// Load data onto bubble chart
	findWidget("LettersForWordStart").selectAll();

	// Get onto full screen mode
	findWidget("Bubblechart").goInFullScreenMode();

	// Wait for Bubble chart to load
	findWidget("Bubblechart").isFullScreen().should.be.true;

	// Verify the default style on "jurk" bubble
	let jurkBubble = findWidget("Bubblechart").findBubble("jurk");
	jurkBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	//Hover "jurk" bubble
	jurkBubble.hover();

	// Verify the default style on "doos" bubble
	let doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	//Hover "doos" bubble
	doosBubble.hover();

	// Verify style when hover the "doos" bubble
	doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.hasClass("is-hover").should.be.equal(true);
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("1");

	// Verify style of "jurk" bubble, when hover "doos" bubble
	jurkBubble = findWidget("Bubblechart").findBubble("jurk");
	jurkBubble.hasClass("is-hover").should.be.equal(false);
	jurkBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	// Click on "pop" bubble and verify its style
	let popBubble = findWidget("Bubblechart").findBubble("pop");
	popBubble
		.click()
		.hasClass("is-active")
		.should.be.equal(true);
	popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("1");

	// Verify style on "doos" bubble when "pop" bubble is selected
	doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.hasClass("is-active").should.be.equal(false);
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	// Click on "pop" bubble
	findWidget("Bubblechart")
		.findBubble("pop")
		.click();

	//Move the mouse cursor to menu bar button
	mouseHoverMenuButton();

	// With "pop" bubble being unselected, check for the style on "pop" bubble
	popBubble = findWidget("Bubblechart").findBubble("pop");
	popBubble.hasClass("is-active").should.be.equal(false);
	popBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");

	// With "pop" bubble being unselected, check for the style on "doos" bubble
	doosBubble = findWidget("Bubblechart").findBubble("doos");
	doosBubble.hasClass("is-active").should.be.equal(false);
	doosBubble.getCSSStyleProperty("fill-opacity").should.be.equal("0.7");
});
