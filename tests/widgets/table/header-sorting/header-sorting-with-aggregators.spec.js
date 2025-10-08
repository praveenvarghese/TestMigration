/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario("Check whether sorting is expected when the table has aggregators", () => {
	loadPage("Main Project/home/MischaTestPage2");

	// Verify the data in the first row in the unsorted state
	findWidget("FourDimTable_3")
		.getSelectionValues(0, 0, 0, 7)
		.should.shallowDeepEqual([
			["1.00", "27.00", "22.00", "50.00", "2.00", "4.00", "2.00", "8.00"],
		]);

	// Sort a column header increasing/decreasing/default and check the indicators
	findWidget("FourDimTable_3").sortColumnHeader(1, 2, "increase");

	findWidget("FourDimTable_3")
		.getSelectionValues(0, 0, 0, 7)
		.should.shallowDeepEqual([
			["27.00", "4.00", "18.00", "27.00", "12.00", "15.00", "3.00", "6.00"],
		]);

	// Sort the 'years' column header
	findWidget("FourDimTable_3").sortColumnHeader(0, 2, "increase");

	findWidget("FourDimTable_3")
		.getSelectionValues(0, 0, 0, 7)
		.should.shallowDeepEqual([
			["1.00", "27.00", "22.00", "2.00", "4.00", "2.00", "6.00", "18.00"],
		]);

	// Put back the 'months' column sorting to default. The aggregators should reappear.
	findWidget("FourDimTable_3").sortColumnHeader(1, 2, "default");

	findWidget("FourDimTable_3")
		.getSelectionValues(0, 0, 0, 7)
		.should.shallowDeepEqual([
			["1.00", "27.00", "22.00", "50.00", "2.00", "4.00", "2.00", "8.00"],
		]);
});
