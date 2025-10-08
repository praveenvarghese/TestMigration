/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Check tooltip for line Chart", () => {
	loadPage("Main Project/AreaChart/AreaChart_1");

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_NumDecimals", { mode: "multiple" })
		.setValue("4");

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.getValue()
		.should.eql(false);

	findWidget("DemandColumnChart_5")
		.getNthPointForMultipleContents({ content: 1, point: 5 })
		.hover();

	findWidget("DemandColumnChart_5")
		.getTooltipText()
		.should.eql("Center : Frankfurt Demand : 10.3645");

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(true);

	findWidget("DemandColumnChart_5")
		.getNthPointForMultipleContents({ content: 1, point: 6 })
		.hover();

	findWidget("DemandColumnChart_5")
		.getTooltipText()
		.should.contain("Center : Center-6 Demand : 16.8734");

	findWidget("SelectedFactory_7")
		.getScalarCell("p_Demand_UseElemText", { mode: "multiple" })
		.setValue(false);

	findWidget("DemandColumnChart_5")
		.getNthPointForMultipleContents({ content: 1, point: 2 })
		.hover();

	findWidget("DemandColumnChart_5")
		.getTooltipText()
		.should.contain("Center : Copenhagen Demand : 11.7322");
});
