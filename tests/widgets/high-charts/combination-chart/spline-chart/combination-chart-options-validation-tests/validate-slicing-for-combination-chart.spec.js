/*!
 * @AIMMS_FILE=models/SplineChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether all forms of slicing works fine on a spline Chart", () => {
	loadPage("Main Project/SlicingTests");

	// Check the number of bars of the 3 charts
	findWidget("ResetElementValues").click(); // Make sure we start with 'NED'/'2010' in the element sliced chart

	// Fixed element
	findWidget("ColChart2")
		.getNumberOfPoints()
		.should.eql(11);

	// Element parameter
	findWidget("ColChart3")
		.getNumberOfPoints()
		.should.eql(1);

	// Subset
	findWidget("ColChart4")
		.getNumberOfPoints()
		.should.eql(15);

	// Check the X-axis labels of the 3 charts
	findWidget("ColChart2")
		.getXaxisScaleValues()
		.should.eql([
			"Value1-2010",
			"Value1-2011",
			"Value1-2012",
			"Value1-2013",
			"Value1-2014",
			"Value1-2015",
			"Value1-2016",
			"Value1-2017",
			"Value1-2018",
			"Value1-2019",
			"Value1-2020",
		]);

	findWidget("ColChart3")
		.getXaxisScaleValues()
		.should.eql(["Value1"]);

	findWidget("ColChart4")
		.getXaxisScaleValues()
		.should.eql(["Value1-GER", "Value1-SWI", "Value1-AUT"]);

	// Change the value of the 2 element parameters that slice ColChart3 and verify the effect.
	findWidget("ColChart3")
		.getDataLabels()
		.should.eql(["0.33"]);

	findWidget("ChangeElementValues").click();

	findWidget("ColChart3")
		.getDataLabels()
		.should.eql(["5.00"]);
});
