/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Store Focus works correctly for a Area Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_1");

	// findWidget("SelectedFactory_7")
	// 	.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
	// 	.getValue()
	// 	.should.eql("");

	findWidget("SelectedFactory_7")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Amsterdam");

	findWidget("DemandColumnChart_5")
		.getNthPointForMultipleContents({ content: 1, point: 5 })
		.click();

	// findWidget("SelectedFactory_7")
	// 	.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
	// 	.getValue()
	// 	.should.eql("Demand");

	findWidget("SelectedFactory_7")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Frankfurt");

	findWidget("DemandColumnChart_5")
		.getNthPointForMultipleContents({ content: 1, point: 2 })
		.click();

	// findWidget("SelectedFactory_7")
	// 	.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
	// 	.getValue()
	// 	.should.eql("Demand");

	findWidget("SelectedFactory_7")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Copenhagen");
});
