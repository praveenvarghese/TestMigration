/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for column chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Data");

	findWidget("DemandColumnChart_1")
		.getTitle()
		.should.eql("Demand Data");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("European Centers Demand");

	findWidget("DemandColumnChart_1")
		.getTitle()
		.should.eql("European Centers Demand");

	findWidget("SelectedFactory_2")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("Demand Data");

	findWidget("DemandColumnChart_1")
		.getTitle()
		.should.eql("Demand Data");
});
