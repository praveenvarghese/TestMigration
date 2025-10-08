/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("scatterchart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_11", "DemandColumnChart_11", "SelectedFactory_16"]);

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(false);

	findWidget("scatterchart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_11", "SelectedFactory_16"]);

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(true);

	findWidget("scatterchart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_11", "DemandColumnChart_11", "SelectedFactory_16"]);
});
