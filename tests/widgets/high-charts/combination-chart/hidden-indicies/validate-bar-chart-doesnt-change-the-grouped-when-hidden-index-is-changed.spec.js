/*!
 * @AIMMS_FILE=models/CombiChartConversions/CombiChartConversions.aimms
 */

scenario("Validate bar doesnt change to stacked when hidden index is changed", () => {
	loadPage("Main Project/TestTackedIssue");

	findWidget("widget_3")
		.getYaxisScaleValues()
		.should.eql(["0", "20", "40", "60", "80", "100"]);

	findWidget("widget_3")
		.getXaxisScaleValues()
		.should.eql(["AveragePrecipitation"]);

	findWidget("scalarWidget_3").setValue("HIDE");

	findWidget("widget_3")
		.getYaxisScaleValues()
		.should.eql(["0", "20", "40", "60", "80", "100"]);

	findWidget("widget_3")
		.getXaxisScaleValues()
		.should.eql(["AveragePrecipitation"]);
});
