/*!
 * @AIMMS_FILE=models/HiddenTableIndices/HiddenTableIndices.aimms
 */

scenario(
	"Ticket #875: hiding the column header on a table with visibility of all indices set to 'Show' also hid the Row Header",
	() => {
		loadPage("Main Project/home?table-v2=true");

		findWidget("TwoDim")
			.getNumRowsInColHeaderViewport()
			.should.eql(1);

		findWidget("TwoDim")
			.getNumColsInRowHeaderViewport()
			.should.eql(2);

		findWidget("TwoDim")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Header Visibility")
			.setValue({
				value: "Hide Column Header",
				valueType: "ENUM",
				optionEditorType: "ENUM",
			});

		findWidget("TwoDim")
			.getNumRowsInColHeaderViewport()
			.should.eql(0);

		findWidget("TwoDim")
			.getNumColsInRowHeaderViewport()
			.should.eql(2);
	}
);
