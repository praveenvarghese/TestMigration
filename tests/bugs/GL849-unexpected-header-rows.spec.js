/*!
 * @AIMMS_FILE=models/Bugs/GL849-UnexpectedEmptyHeaderRows/GL849-UnexpectedEmptyHeaderRows.aimms
 */

scenario(
	"GL849 In some tables (in the Fuji project), there was an extra empty row displayed in the column header area",
	() => {
		loadPage("Main Project/home");

		// This situation is tested with a workaround, since the extra row was technically not an extra row: only the 1 real row was flagged and because of that
		// displayed with double height. Now we use the fact that there should be room for 4 rows (in total, so data area + header area) in total. In the wrong situation,
		// this would return 3 instead of 4.
		findWidget("SelectedProductTable")
			.getNumRowsInGridViewport()
			.should.be.equal(4);
	}
);
