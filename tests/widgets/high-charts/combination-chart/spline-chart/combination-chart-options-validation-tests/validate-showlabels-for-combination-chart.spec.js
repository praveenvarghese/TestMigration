/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check whether Show Labels works correctly for a spline Chart", () => {
	loadPage("Main Project/SplineChart/SplineChart_1");

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.setValue("4");

	const dataLabels = [
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

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_ShowLabels", { mode: "multiple" })
		.getValue()
		.should.eql(true);

	findWidget("DemandColumnChart_7")
		.hasDataLabels()
		.should.eql(true);

	findWidget("DemandColumnChart_7")
		.getDataLabels()
		.should.eql(dataLabels);

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_ShowLabels", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_7")
		.hasDataLabels()
		.should.eql(false);

	findWidget("SelectedFactory_10")
		.getScalarCell("p_Demand_ShowLabels", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_7")
		.hasDataLabels()
		.should.eql(true);

	findWidget("DemandColumnChart_7")
		.getDataLabels()
		.should.eql(dataLabels);
});
