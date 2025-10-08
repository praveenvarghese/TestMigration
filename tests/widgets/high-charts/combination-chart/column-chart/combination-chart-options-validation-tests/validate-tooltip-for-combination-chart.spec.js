/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate tooltip for a Column Chart", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.setValue("4");

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.getValue()
		.should.eql(false);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 5 })
		.hover();

	findWidget("DemandColumnChart_1")
		.getTooltipText()
		.should.eql("Center : Frankfurt Demand : 10.3645");

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 6 })
		.hover();

	findWidget("DemandColumnChart_1")
		.getTooltipText()
		.should.contain("Center : Center-6 Demand : 16.8734");

	findWidget("SelectedFactory_2")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_1")
		.getNthBarForSingleContent({ bar: 2 })
		.hover();

	findWidget("DemandColumnChart_1")
		.getTooltipText()
		.should.contain("Center : Copenhagen Demand : 11.7322");
});
