/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario("Check whether the header sorting also works on a filtered table", () => {
	loadPage("Main Project/home/MischaTestPage");

	// Sort the first row header column on this filtered table
	findWidget("SecondTable").sortRowHeader(2, 1, "increase");
	findWidget("SecondTable")
		.getRowHeaderCells(1, 0, 3)
		.should.beEqualTo(["Finland", "France", "Greece", "Romania"]);
});
