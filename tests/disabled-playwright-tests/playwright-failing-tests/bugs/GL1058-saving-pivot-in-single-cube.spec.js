/*!
 * @AIMMS_FILE=models/Bugs/GL1058-SavingPivotingInSingleCube/GL1058-SavingPivotingInSingleCube.aimms
 */

scenario("Line chart should repsect saved pivot options", () => {
	findWidget("line-2")
		.getXAxisElements({ index: 0 })
		.should.eql([
			"Amsterdam",
			"Paris",
			"Tokyo",
			"Amsterdam",
			"Paris",
			"Tokyo",
			"Amsterdam",
			"Paris",
			"Tokyo",
			"Amsterdam",
			"Paris",
			"Tokyo",
			"Amsterdam",
			"Paris",
			"Tokyo",
		]);

	findWidget("line-2")
		.getXAxisElements({ index: 1 })
		.should.eql(["USA", "France", "Netherlands", "India", "Japan"]);

	findWidget("line-2")
		.getYAxisElements()
		.should.eql(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
});
