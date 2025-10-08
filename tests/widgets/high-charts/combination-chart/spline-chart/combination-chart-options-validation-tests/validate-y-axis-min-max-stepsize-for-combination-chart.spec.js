/*!
 * @AIMMS_FILE=models/SplineChartBasicModel/ColumnChartBasics.aimms
 * @DURATION=medium
 */
function ChangeValuesAndCheckResult(minVal, maxVal, stepsVal, expectedResult) {
	findWidget("MinY").setValue(minVal);
	findWidget("MaxY").setValue(maxVal);
	findWidget("StepsY").setValue(stepsVal);

	findWidget("Y2")
		.getYaxisScaleValues()
		.should.eql(expectedResult);
}

scenario("Check the Y-axis Min/Max/Stepsize-functionality of the Column Chart.", () => {
	loadPage("Main Project/YAxisTests");

	// Reset the Min/Max/Steps of the Y-axis of Y2 to their initial values
	findWidget("ResetMinMaxStepsY").click();

	ChangeValuesAndCheckResult("0", "6", "2", ["0", "2", "4", "6"]);
	ChangeValuesAndCheckResult("2", "6", "2", ["2", "4", "6"]);
	ChangeValuesAndCheckResult("-2", "8", "2", ["-2", "0", "2", "4", "6", "8"]);
	ChangeValuesAndCheckResult("0", "6", "3", ["0", "3", "6"]);
});
