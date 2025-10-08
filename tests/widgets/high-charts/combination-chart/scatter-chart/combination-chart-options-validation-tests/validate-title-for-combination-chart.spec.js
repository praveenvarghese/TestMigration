/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Data");

	findWidget("DemandColumnChart_11")
		.getTitle()
		.should.eql("Demand Data");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("European Centers Demand");

	findWidget("DemandColumnChart_11")
		.getTitle()
		.should.eql("European Centers Demand");

	findWidget("SelectedFactory_16")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("Demand Data");

	findWidget("DemandColumnChart_11")
		.getTitle()
		.should.eql("Demand Data");
});
