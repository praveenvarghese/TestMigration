/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Check for focus support behaviour on Bubble chart, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/WidgetTypes");

		findWidget("LettersForWordStart").selectAll();

		findWidget("Bubblechart").goInFullScreenMode();

		findWidget("Bubblechart").isFullScreen().should.be.true;

		findWidget("Bubblechart")
			.findBubble("doos")
			.click();

		findWidget("Bubblechart").exitFullScreenMode();

		findWidget("Bubblechart").isFullScreen().should.be.false;

		findWidget("FocusSupport")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("BubbleSize");

		findWidget("FocusSupport")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("doos");

		findWidget("Bubblechart")
			.findBubble("pop")
			.click();

		findWidget("Bubblechart").goInFullScreenMode();

		findWidget("Bubblechart").isFullScreen().should.be.true;

		findWidget("Bubblechart")
			.findBubble("jurk")
			.click()
			.click();

		findWidget("Bubblechart").exitFullScreenMode();

		findWidget("Bubblechart").isFullScreen().should.be.false;

		findWidget("FocusSupport")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("BubbleSize");

		findWidget("FocusSupport")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("jurk");
	}
);
