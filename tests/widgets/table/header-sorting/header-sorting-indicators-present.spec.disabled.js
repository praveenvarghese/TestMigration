/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario("Check whether the header sort indicators are present as expected", () => {
	loadPage("Main Project/home/MischaTestPage");

	// Sort a column header increasing/decreasing/default and check the indicators
	findWidget("FourDimTable").sortColumnHeader(1, 2, "increase");

	findWidget("FourDimTable")
		.getDataHeaderCell(1, 2)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	findWidget("FourDimTable").sortColumnHeader(1, 2, "decrease");

	findWidget("FourDimTable")
		.getDataHeaderCell(1, 2)
		.hasFlags(["sortedDecreasing"])
		.should.be.equal(true);

	findWidget("FourDimTable").sortColumnHeader(1, 2, "default");

	findWidget("FourDimTable")
		.getDataHeaderCell(1, 2)
		.hasFlags(["sortedDecreasing", "sortedIncreasing"])
		.should.be.equal(false);

	// Sort a row header increasing/decreasing/default and check the indicators
	findWidget("FourDimTable").sortRowHeader(2, 2, "increase");

	findWidget("FourDimTable")
		.getDataHeaderCell(2, 2)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	findWidget("FourDimTable").sortRowHeader(2, 2, "decrease");

	findWidget("FourDimTable")
		.getDataHeaderCell(2, 2)
		.hasFlags(["sortedDecreasing"])
		.should.be.equal(true);

	findWidget("FourDimTable").sortRowHeader(2, 2, "default");

	findWidget("FourDimTable")
		.getDataHeaderCell(2, 2)
		.hasFlags(["sortedDecreasing", "sortedIncreasing"])
		.should.be.equal(false);

	findWidget("OpenDialog").click();
	findWidget("FourDimTable_1")
		.getDataHeaderCell(2, 2)
		.hasFlags(["sortedIncreasing"])
		.should.be.equal(true);

	// For the dialog case, also REALLY check whether the indicator is actually displayed (and not just the flag, see #4110).
	findWidget("FourDimTable_1")
		.pickColor(265, 113)
		.should.beSameColorAs([0, 75, 255]); // -> this colour succeeds in the pipeline and is indeed the dark blue colour of the sort indicator.
});
