/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for column chart", () => {
	loadPage("Main Project/LineChart/LineChart_1");

	findWidget("SelectedFactory_4")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Data");

	findWidget("DemandColumnChart_3")
		.getTitle()
		.should.eql("Demand Data");

	findWidget("SelectedFactory_4")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("European Centers Demand");

	findWidget("DemandColumnChart_3")
		.getTitle()
		.should.eql("European Centers Demand");

	findWidget("SelectedFactory_4")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("Demand Data");

	findWidget("DemandColumnChart_3")
		.getTitle()
		.should.eql("Demand Data");
});
