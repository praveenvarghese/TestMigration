/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate tooltip for identifier name in scalar widget", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarIdentifier("p_Demand_NumDecimals")
		.getIdentifierTooltipText()
		.should.be.equal("p_Demand_NumDecimals");

	findWidget("identtooltip").click();

	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("SelectedFactory_2")
		.getScalarIdentifier("p_Demand_NumDecimals")
		.getIdentifierTooltipText()
		.should.be.equal("Number of Decimals");
});
