/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 */

scenario(
	"Verify that clearing a selectionbox using the closing cross indeed clears the value of the selected element in AIMMS.",
	() => {
		loadPage("Main Project/DebugPage");

		// Select an Island
		//findWidget("IslandSelector").pressKeys(["123"]);
		findWidget("IslandSelector").select("Island123");

		// Verify that it was selected
		findWidget("ScalarIslandSelected")
			.getValue()
			.should.eql("Island123");

		// Now clear the selectionbox by clicking on the closing cross
		findWidget("IslandSelector").deselect("Island123");

		// Verify that it was Cleared
		findWidget("ScalarIslandSelected")
			.getValue()
			.should.eql("");
	}
);
