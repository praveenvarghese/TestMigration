/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for column chart", () => {
	loadPage("Main Project/LineChart/LineChart_1");

	findWidget("SelectedFactory_4")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

	findWidget("SelectedFactory_4")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(false);

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "SelectedFactory_4"]);

	findWidget("SelectedFactory_4")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(true);

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);
});
