/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Store Focus works correctly for a Column Chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
		.getValue()
		.should.eql("");

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Amsterdam");

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.click();

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
		.getValue()
		.should.eql("Demand");

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Frankfurt");

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 2 })
		.click();

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_FocusIdentifier", { mode: "multiple" })
		.getValue()
		.should.eql("Demand");

	findWidget("SelectedFactory_2")
		.getScalarCell("ep_Center", { mode: "multiple" })
		.getValue()
		.should.eql("Copenhagen");
});
