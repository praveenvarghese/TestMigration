/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate secondary Y-axis in widget setting - contents", () => {
	loadPage("Main Project/Weather History/History Data");

	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.collapseDefaults();

	//Select Secondary Y-axis as in contents for an identifiers
	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.unCollapseContents("p_RainFall(city, i_month)");

	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.getContentsOption(0, "Y Axis")
		.setValue({
			value: "Secondary Axis",
			valueType: "ENUM",
		});

	//Validate Secondary Y-axis displayed on CChart
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("start")
		.should.eql(true);

	//Validate primary Y-axis displayed on CChart
	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.unCollapseContents("p_Temperature(city, i_month)");

	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.getContentsOption(1, "Y Axis")
		.setValue({
			value: "Primary Axis",
			valueType: "ENUM",
		});

	//Validate Secondary Y-axis displayed on CChart
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("end")
		.should.eql(true);
});
