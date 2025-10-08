/*!
 * @AIMMS_FILE=models/Bugs/GL864-BubblesNotShowing/GL864-SmallExample.aimms
 */

scenario(
	"GL864 One of the Bubble charts in the test model did not show in the Single Cube branch of the WebUI.",
	() => {
		loadPage("Main Project/home");

		// Check the Bubble Chart X and Y axis annotations
		findWidget("BubbleChart")
			.getXAxisElements()
			.should.have.numberOfItems.equal(7);

		findWidget("BubbleChart")
			.getXAxisElements()
			.should.eql(["0", "5", "10", "15", "20", "25", "30"]);

		findWidget("BubbleChart")
			.getYAxisElements()
			.should.have.numberOfItems.equal(7);

		findWidget("BubbleChart")
			.getYAxisElements()
			.should.eql(["0", "5", "10", "15", "20", "25", "30"]);

		// Make sure the chart displays the expected 3 bubbles.
		findWidget("BubbleChart")
			.findBubbles()
			.should.have.numberOfItems(3);
	}
);
