/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for spline chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("splinechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_7", "DemandColumnChart_7", "SelectedFactory_10"]);

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(false);

	findWidget("splinechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_7", "SelectedFactory_10"]);

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(true);

	findWidget("splinechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_7", "DemandColumnChart_7", "SelectedFactory_10"]);
});
