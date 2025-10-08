/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Store Focus works correctly for a spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	// findWidget("SelectedFactory_10")
	// 	.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
	// 	.getValue()
	// 	.should.eql("");

	findWidget("SelectedFactory_10")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Amsterdam");

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 5 })
		.click();

	// findWidget("SelectedFactory_10")
	// 	.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
	// 	.getValue()
	// 	.should.eql("Demand");

	findWidget("SelectedFactory_10")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Frankfurt");

	findWidget("DemandColumnChart_7")
		.getNthPointForSingleContent({ point: 2 })
		.click();

	// findWidget("SelectedFactory_10")
	// 	.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
	// 	.getValue()
	// 	.should.eql("Demand");

	findWidget("SelectedFactory_10")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Copenhagen");
});
