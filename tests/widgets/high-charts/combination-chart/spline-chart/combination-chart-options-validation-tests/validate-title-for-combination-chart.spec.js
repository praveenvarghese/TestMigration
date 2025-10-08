/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for spline chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.getValue()
		.should.eql("Demand Data");

	findWidget("DemandColumnChart_7")
		.getTitle()
		.should.eql("Demand Data");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("European Centers Demand");

	findWidget("DemandColumnChart_7")
		.getTitle()
		.should.eql("European Centers Demand");

	findWidget("SelectedFactory_10")
		.getScalarCell("sp_Demand_Title", { mode: "multiple" })
		.setValue("Demand Data");

	findWidget("DemandColumnChart_7")
		.getTitle()
		.should.eql("Demand Data");
});
