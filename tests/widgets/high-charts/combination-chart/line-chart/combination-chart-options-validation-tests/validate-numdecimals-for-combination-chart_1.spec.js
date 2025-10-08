/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Decimal Places work correctly for a Column Chart", () => {
	loadPage("Main Project/LineChart/LineChart_1");

	findWidget("SelectedFactory_4")
		.getScalarCell("p_Demand_ShowLabels", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("SelectedFactory_4")
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

	findWidget("DemandColumnChart_3")
		.getDataLabels()
		.should.eql(dataLabels_1);

	findWidget("SelectedFactory_4")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.setValue("4");

	const dataLabels_4 = [
		"16.3226 ton",
		"11.7322 ton",
		"11.2293 ton",
		"16.2641 ton",
		"10.3645 ton",
		"16.8734 ton",
		"10.6696 ton",
		"10.1062 ton",
		"19.2932 ton",
		"14.9282 ton",
	];

	findWidget("DemandColumnChart_3")
		.getDataLabels()
		.should.eql(dataLabels_4);

	findWidget("SelectedFactory_4")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.setValue("1");

	findWidget("DemandColumnChart_3")
		.getDataLabels()
		.should.eql(dataLabels_1);
});
