/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate Chart Title works for column chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("columnchart_1")
		.getVisibleWidgets()
		.should.eql([
			"idelemtext",
			"identtooltip",
			"SelectSomeCenters_1",
			"DemandColumnChart_1",
			"SelectedFactory_2",
		]);

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(false);

	findWidget("columnchart_1")
		.getVisibleWidgets()
		.should.eql(["idelemtext", "identtooltip", "SelectSomeCenters_1", "SelectedFactory_2"]);

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_IsVisible", { mode: "multiple" })
		.setValue(true);

	findWidget("columnchart_1")
		.getVisibleWidgets()
		.should.eql([
			"idelemtext",
			"identtooltip",
			"SelectSomeCenters_1",
			"DemandColumnChart_1",
			"SelectedFactory_2",
		]);
});
