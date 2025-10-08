/*!
 * @AIMMS_FILE=models/Bugs/GL4103-CombiChartLimit/TransNet.aimms
 */

scenario("Check combination chart threshold for number of data points", () => {
	loadPage("Main Project/Home");

	findWidget("Various_T1").setValue("1002");

	findWidget("Various_T1")
		.getValue()
		.should.eql("1,002");

	findWidget("CC_T1")
		.getNumberOfBars()
		.should.eql(1002);

	findWidget("Various_T1").setValue("1020");

	findWidget("Various_T1")
		.getValue()
		.should.eql("1,020");

	findWidget("CC_T1")
		.getNumberOfBars()
		.should.eql(1020);
});
