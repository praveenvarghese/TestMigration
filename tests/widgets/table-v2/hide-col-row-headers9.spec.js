/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"Ticket #834: Setting a specific index to 'Hide' messed up the headers and crashed the widget.",
	() => {
		loadPage("Main Project/home?table-v2=true");

		// Scroll all the way to the bottom of the table
		findWidget("German Cities").scrollDown(30);

		// Hide the first row header column
		findWidget("German Cities")
			.openIndexOptionEditor()
			.modifyIndices([
				{
					entry: 2,
					visibility: "Hide",
				},
			]);

		// Next to displaying completely incorrectly (which is not necessarilly detected by the test below),
		// the Table also gets stuck, making scrolling impossible. This indeed fails in the version of the alib
		// with the bug of ticket #834 still in.
		findWidget("German Cities").scrollUp(30);

		// Do just a random test to make sure the widget does not 'hang' after the scrolling.
		findWidget("German Cities")
			.getNumColsInGridViewport()
			.should.be.equal(8);
	}
);
