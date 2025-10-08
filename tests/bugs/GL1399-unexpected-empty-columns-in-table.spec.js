/*!
 * @AIMMS_FILE=models/Bugs/GL1399-UnexpectedColumnsInTableHeaderDisplayed/AIMMS/SmartScheduling.aimms
 */

scenario(
	"GL1399 - 2 Unexpected columns were displayed in the row header area in AIMMS 4.64/4.65. This should not happen.",
	() => {
		loadPage("Main Project/Cargo overview");

		// Check the number of columns in the row header area
		findWidget("table_RecentVoyages")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(2);
	}
);
