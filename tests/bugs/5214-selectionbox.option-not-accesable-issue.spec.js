/*!
 * @AIMMS_FILE=models/FastEditModeLockProblem/FastEditModeLockProblem.aimms
 */

scenario(
	"Selection box options are displayed when the selection box is at the botton of the page",
	() => {
		loadPage("Main Project/Selection Box%20Dropdown Opening Issue");

		findWidget("selectionBoxV2").select("Marietje");

		findWidget("table1")
			.getGridValues()
			.should.be.shallowDeepEqual([["40.00"], ["1.00"]]);
	}
);
