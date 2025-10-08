/*!
 * @AIMMS_FILE=models/FastEditModeLockProblem/FastEditModeLockProblem.aimms
 */

scenario(
	"Test asserting table is refreshed when selection box v1 option is changed in a classic page ",
	() => {
		loadPage("Main Project/home");

		findWidget("MySel").select("Jantje");

		findWidget("People")
			.getCell(0, 0)
			.setValue(false);

		findWidget("People")
			.getGridValues()
			.should.be.shallowDeepEqual([["0.00"], ["40.00"]]);

		findWidget("MySel").select("Pietje");

		findWidget("People")
			.getGridValues()
			.should.be.shallowDeepEqual([["1.00"], ["40.00"]]);
	}
);
