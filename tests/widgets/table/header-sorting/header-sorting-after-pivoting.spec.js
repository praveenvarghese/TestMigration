/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario("Check whether sorting is retained after pivoting", () => {
	loadPage("Main Project/home/MischaTestPage");

	// Sort a column header increasing/decreasing/default and check the indicators
	findWidget("FourDimTable").sortColumnHeader(1, 2, "increase");

	findWidget("FourDimTable")
		.getDataHeaderCell(1, 2)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	// Do the pivoting
	findWidget("FourDimTable")
		.dragIndex("m")
		.dropBefore("y");

	// Check the sorting
	findWidget("FourDimTable")
		.getDataHeaderCell(0, 2)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);
});
