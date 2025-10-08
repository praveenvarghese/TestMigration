/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Decimal Places work correctly for a scatter chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_ShowUnits", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.getValue()
		.should.eql("1.00");

	const dataLabels_1 = [
		"16.3 ton",
		"11.7 ton",
		"11.2 ton",
		"16.3 ton",
		"10.4 ton",
		"16.9 ton",
		"10.7 ton",
		"10.1 ton",
		"19.3 ton",
		"14.9 ton",
	];

	findWidget("DemandColumnChart_11")
		.getDataLabels()
		.should.eql(dataLabels_1);

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_ShowUnits", { mode: "multiple" })
		.setValue(false);

	const dataLabels_1_nounit = [
		"16.3",
		"11.7",
		"11.2",
		"16.3",
		"10.4",
		"16.9",
		"10.7",
		"10.1",
		"19.3",
		"14.9",
	];

	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("DemandColumnChart_11")
		.getDataLabels()
		.should.eql(dataLabels_1_nounit);

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_ShowUnits", { mode: "multiple" })
		.setValue(true);

	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("DemandColumnChart_11")
		.getDataLabels()
		.should.eql(dataLabels_1);
});
