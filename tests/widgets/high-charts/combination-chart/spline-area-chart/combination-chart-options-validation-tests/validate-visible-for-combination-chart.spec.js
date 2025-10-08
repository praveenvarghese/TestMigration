/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for spline area chart", () => {
	loadPage("Main Project/SplineAreaChart/SplineAreaChart_1");

	findWidget("SelectedFactory_13")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("splineareachart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_9", "DemandColumnChart_9", "SelectedFactory_13"]);

	findWidget("SelectedFactory_13")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(false);

	findWidget("splineareachart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_9", "SelectedFactory_13"]);

	findWidget("SelectedFactory_13")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(true);

	findWidget("splineareachart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_9", "DemandColumnChart_9", "SelectedFactory_13"]);
});
