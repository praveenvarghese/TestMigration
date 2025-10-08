/*!
 * @AIMMS_FILE=models/Bugs/GL1479-bubbles/bubbles.aimms
 */

scenario(
	"GL1479 - Having an error in slicing/display domain combination, resulted in no error message given. Now it should show the error.",
	() => {
		loadPage("Main Project/home");

		//With new table changes error message has beem disabled
		// // Check for the error message.
		// getLogMessage()
		// 	.getLastReportedLogMessage()
		// 	.should.contain(
		// 		"Bubble2@contents: Error setting display-domain for 'Copy_P_X': i_sub is an index that cannot be mapped to the main identifier"
		// 	);

		// As a bonus, also verify the number of bubbles in the other widget.
		findWidget("Buble")
			.findBubbles()
			.should.have.numberOfItems(4);
	}
);
