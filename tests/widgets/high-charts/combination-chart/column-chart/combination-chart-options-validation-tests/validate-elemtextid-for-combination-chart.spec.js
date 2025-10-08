/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether ElementTextIdentifier works correctly for a Column Chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	const Cities = [
		"Amsterdam",
		"Copenhagen",
		"Dresden",
		"Edinburgh",
		"Frankfurt",
		"Liege",
		"Marseilles",
		"Nantes",
		"Paris",
		"Vienna",
	];

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.getValue()
		.should.eql(false);

	findWidget("DemandColumnChart_1")
		.getLegendValues()
		.should.eql(Cities);

	const Centers = [
		"Center-1",
		"Center-2",
		"Center-3",
		"Center-4",
		"Center-5",
		"Center-6",
		"Center-7",
		"Center-8",
		"Center-9",
		"Center-10",
	];

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_1")
		.getLegendValues()
		.should.eql(Centers);

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_1")
		.getLegendValues()
		.should.eql(Cities);
});
