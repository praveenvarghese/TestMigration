/*!
 * @AIMMS_FILE=models/SplineAreaChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check the pivoting on identifiers displayed in the spline area chart.", () => {
	loadPage("Main Project/home");

	// Verify the starting situation
	findWidget("ColChart1")
		.getNumberOfPoints()
		.should.eql(55);

	findWidget("ColChart1")
		.getXaxisScaleValues()
		.should.eql(["Value1-NED", "Value1-GER", "Value1-SWI", "Value1-AUT", "Value1-ESP"]);

	findWidget("ColChart1")
		.getLegendValues()
		.should.eql([
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017",
			"2018",
			"2019",
			"2020",
		]);

	// Drag index c to grouped
	findWidget("ColChart1")
		.dragIndex("c")
		.dropBefore("y");

	findWidget("ColChart1")
		.getNumberOfPoints()
		.should.eql(55);

	findWidget("ColChart1")
		.getXaxisScaleValues()
		.should.eql(["Value1"]);

	findWidget("ColChart1")
		.getLegendValues()
		.should.eql([
			"NED-2010",
			"NED-2011",
			"NED-2012",
			"NED-2013",
			"NED-2014",
			"NED-2015",
			"NED-2016",
			"NED-2017",
			"NED-2018",
			"NED-2019",
			"NED-2020",
			"GER-2010",
			"GER-2011",
			"GER-2012",
			"GER-2013",
			"GER-2014",
			"GER-2015",
			"GER-2016",
			"GER-2017",
			"GER-2018",
			"GER-2019",
			"GER-2020",
			"SWI-2010",
			"SWI-2011",
			"SWI-2012",
			"SWI-2013",
			"SWI-2014",
			"SWI-2015",
			"SWI-2016",
			"SWI-2017",
			"SWI-2018",
			"SWI-2019",
			"SWI-2020",
			"AUT-2010",
			"AUT-2011",
			"AUT-2012",
			"AUT-2013",
			"AUT-2014",
			"AUT-2015",
			"AUT-2016",
			"AUT-2017",
			"AUT-2018",
			"AUT-2019",
			"AUT-2020",
			"ESP-2010",
			"ESP-2011",
			"ESP-2012",
			"ESP-2013",
			"ESP-2014",
			"ESP-2015",
			"ESP-2016",
			"ESP-2017",
			"ESP-2018",
			"ESP-2019",
			"ESP-2020",
		]);

	// Drag index c to grouped
	findWidget("ColChart1")
		.dragIndex("y")
		.dropBefore("c");

	findWidget("ColChart1")
		.getNumberOfPoints()
		.should.eql(55);

	findWidget("ColChart1")
		.getXaxisScaleValues()
		.should.eql(["Value1"]);

	findWidget("ColChart1")
		.getLegendValues()
		.should.eql([
			"2010-NED",
			"2010-GER",
			"2010-SWI",
			"2010-AUT",
			"2010-ESP",
			"2011-NED",
			"2011-GER",
			"2011-SWI",
			"2011-AUT",
			"2011-ESP",
			"2012-NED",
			"2012-GER",
			"2012-SWI",
			"2012-AUT",
			"2012-ESP",
			"2013-NED",
			"2013-GER",
			"2013-SWI",
			"2013-AUT",
			"2013-ESP",
			"2014-NED",
			"2014-GER",
			"2014-SWI",
			"2014-AUT",
			"2014-ESP",
			"2015-NED",
			"2015-GER",
			"2015-SWI",
			"2015-AUT",
			"2015-ESP",
			"2016-NED",
			"2016-GER",
			"2016-SWI",
			"2016-AUT",
			"2016-ESP",
			"2017-NED",
			"2017-GER",
			"2017-SWI",
			"2017-AUT",
			"2017-ESP",
			"2018-NED",
			"2018-GER",
			"2018-SWI",
			"2018-AUT",
			"2018-ESP",
			"2019-NED",
			"2019-GER",
			"2019-SWI",
			"2019-AUT",
			"2019-ESP",
			"2020-NED",
			"2020-GER",
			"2020-SWI",
			"2020-AUT",
			"2020-ESP",
		]);

	findWidget("ColChart1")
		.dragIndex("c")
		.dropIn("Totals");

	findWidget("ColChart1")
		.getNumberOfPoints()
		.should.eql(11);

	findWidget("ColChart1")
		.getXaxisScaleValues()
		.should.eql(["Value1"]);

	findWidget("ColChart1")
		.getLegendValues()
		.should.eql([
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017",
			"2018",
			"2019",
			"2020",
		]);

	findWidget("ColChart1")
		.dragIndex("<IDENTIFIER-SET>")
		.dropIn("Stacked");

	findWidget("ColChart1")
		.getNumberOfPoints()
		.should.eql(11);

	findWidget("ColChart1")
		.getXaxisScaleValues()
		.should.eql(["-"]);

	findWidget("ColChart1")
		.getLegendValues()
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
});
