/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check tooltip for line Chart", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.setValue("4");

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.getValue()
		.should.eql(false);

	findWidget("DemandColumnChart_11")
		.getNthPointForSingleContent({ point: 5 })
		.hover(4, 2);

	findWidget("DemandColumnChart_11")
		.getTooltipText()
		.should.eql("Center : Frankfurt Demand : 10.3645");

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_11")
		.getNthPointForSingleContent({ point: 6 })
		.hover(4, 2);

	findWidget("DemandColumnChart_11")
		.getTooltipText()
		.should.contain("Center : Center-6 Demand : 16.8734");

	findWidget("SelectedFactory_16")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_11")
		.getNthPointForSingleContent({ point: 2 })
		.hover(4, 2);

	findWidget("DemandColumnChart_11")
		.getTooltipText()
		.should.contain("Center : Copenhagen Demand : 11.7322");
});
