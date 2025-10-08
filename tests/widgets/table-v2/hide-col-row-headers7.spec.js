/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"Ticket #836: changing column widget and then back to default does not automatically update the widget in the latter case.",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("German Cities")
			.getNumColsInGridViewport()
			.should.be.equal(8);

		// Scroll all the way to the bottom of the table
		findWidget("German Cities").scrollDown(30);

		findWidget("German Cities")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Default column width")
			.setValue({
				value: "40",
			});

		findWidget("German Cities")
			.getNumColsInGridViewport()
			.should.be.equal(4);

		findWidget("German Cities")
			.openMiscellaneousOptionEditor()
			.revertToDefault("default.column.width");

		// Next to displaying completely incorrectly (which is not necessarilly detected by the test below),
		// the Table also gets stuck, making scrolling impossible. This indeed fails in the version of the alib
		// with the bug of ticket #836 still in.
		findWidget("German Cities").scrollUp(30);

		findWidget("German Cities")
			.getNumColsInGridViewport()
			.should.be.equal(8);
	}
);
