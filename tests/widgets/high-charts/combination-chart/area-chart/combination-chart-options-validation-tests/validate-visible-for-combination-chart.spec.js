/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for Area Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("areachart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_5", "DemandColumnChart_5", "SelectedFactory_7"]);

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(false);

	findWidget("areachart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_5", "SelectedFactory_7"]);

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(true);

	findWidget("areachart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_5", "DemandColumnChart_5", "SelectedFactory_7"]);
});
