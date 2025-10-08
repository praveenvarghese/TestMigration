/*!
 * @AIMMS_FILE=models/ScatterChartBasicModel/ColumnChartBasics.aimms
 */

function ChangeMaxCatsInViewportAndCheck(maxCatsInViewportVal, expectedXAxisScaleLabels) {
	// Change the value
	findWidget("MaxCategoriesInViewport").setValue(maxCatsInViewportVal.toString());

	// Verify the effect on the Column Chart
	findWidget("ViewportTestChart");
	findWidget("ViewportTestChart")
		.getXaxisScaleValues()
		.should.eql(expectedXAxisScaleLabels);
}

scenario("Check the X-axis functionality of the Column Chart.", () => {
	loadPage("Main Project/ViewportTests");

	// Specify different values for the Maximum number of Categories in Viewport option and verify the results.

	// Specifying 0 and 1 does not have any effect, not do negative values or fractional values

	ChangeMaxCatsInViewportAndCheck(0, [
		"Value1-NED",
		"Value1-GER",
		"Value1-SWI",
		"Value1-AUT",
		"Value1-ESP",
	]);
	ChangeMaxCatsInViewportAndCheck(1, [
		"Value1-NED",
		"Value1-GER",
		"Value1-SWI",
		"Value1-AUT",
		"Value1-ESP",
	]);
	ChangeMaxCatsInViewportAndCheck(-1, [
		"Value1-NED",
		"Value1-GER",
		"Value1-SWI",
		"Value1-AUT",
		"Value1-ESP",
	]);
	ChangeMaxCatsInViewportAndCheck(1.7, [
		"Value1-NED",
		"Value1-GER",
		"Value1-SWI",
		"Value1-AUT",
		"Value1-ESP",
	]);

	// Now specify some "real" numbers to see some actual changes in the chart
	ChangeMaxCatsInViewportAndCheck(4, ["Value1-NED", "Value1-GER", "Value1-SWI", "Value1-AUT"]);
	ChangeMaxCatsInViewportAndCheck(2, ["Value1-NED", "Value1-GER"]);
	ChangeMaxCatsInViewportAndCheck(6, [
		"Value1-NED",
		"Value1-GER",
		"Value1-SWI",
		"Value1-AUT",
		"Value1-ESP",
	]);
});
