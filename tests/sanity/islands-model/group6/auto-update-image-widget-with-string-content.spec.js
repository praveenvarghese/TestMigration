/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Assert that using the '?id=' trick, the image widget still updates even if only the underlying image is changed.",
	() => {
		loadPage("Main Project/THird Page");

		// Make sure that the image is white when starting
		findWidget("BWImage")
			.pickColor(50, 50)
			.should.beSameColorAs([255, 255, 255]);

		// Make the image black
		findWidget("MakeImageBlack").click();

		// And check the result...
		findWidget("BWImage")
			.pickColor(50, 50)
			.should.beSameColorAs([0, 0, 0]);

		// Make the image white
		findWidget("MakeImageWhite").click();

		// And check the result...
		findWidget("BWImage")
			.pickColor(50, 50)
			.should.beSameColorAs([255, 255, 255]);
	}
);
