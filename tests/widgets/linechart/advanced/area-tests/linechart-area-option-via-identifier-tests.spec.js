/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Verifying line chart area functionality via Identifier", () => {
	loadPage("Main Project/Charts/LineChartWithArea");

	//Verify by default Line chart area is disabled
	findWidget("allValuesLineChart").isAreaApplied().should.be.false;

	//Configure Line Chart Area with Identifier
	findWidget("allValuesLineChart")
		.openLinechartSettingsEditor()
		.setOptions([
			{
				name: "Show Area",
				value: "flag",
			},
		]);

	//Verify Line chart area is displayed
	findWidget("allValuesLineChart").isAreaApplied().should.be.true;

	//Validate area is not displayed for other line chart
	findWidget("otherLineChart").isAreaApplied().should.be.false;

	// Validate user navigates to different page and comes back the Area is retained
	openAppManager().navigateToPage("Main Project/Charts");

	openAppManager().navigateToPage("Main Project/Charts/LineChartWithArea");

	findWidget("allValuesLineChart").isAreaApplied().should.be.true;
	findWidget("otherLineChart").isAreaApplied().should.be.false;

	//Remove the identifier and validate area is not displayed
	findWidget("allValuesLineChart")
		.openLinechartSettingsEditor()
		.clearOptions([
			{
				name: "Show Area",
			},
		]);

	findWidget("allValuesLineChart").isAreaApplied().should.be.false;

	//Validate area is not displayed for other line chart
	findWidget("otherLineChart").isAreaApplied().should.be.false;

	openAppManager().navigateToPage("Main Project/Charts");

	openAppManager().navigateToPage("Main Project/Charts/LineChartWithArea");

	findWidget("allValuesLineChart").isAreaApplied().should.be.false;

	//Validate area is not displayed for other line chart
	findWidget("otherLineChart").isAreaApplied().should.be.false;
});
