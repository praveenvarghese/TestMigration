/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for spline area chart", () => {
	loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Data");

	findWidget("DemandColumnChart_9")
		.getTitle()
		.should.eql("Demand Data");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("European Centers Demand");

	findWidget("DemandColumnChart_9")
		.getTitle()
		.should.eql("European Centers Demand");

	findWidget("SelectedFactory_13")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("Demand Data");

	findWidget("DemandColumnChart_9")
		.getTitle()
		.should.eql("Demand Data");
});
