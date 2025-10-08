/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate secondary Y-axis in widget setting - contents", () => {
	loadPage("Main Project/Weather History/History Data");

	//"Primary" being the default selected entry.
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("end")
		.should.eql(true);

	//"Secondary Y-Axis" not displaying.
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("start")
		.should.eql(false);

	//Select Secondary Y-axis as defaults in contents for identifiers
	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.setOptions([
			{ groupName: "Defaults", name: "Y Axis", value: "Secondary Axis", valueType: "ENUM" },
		]);

	//Validate Secondary Y-axis displayed on CChart
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("start")
		.should.eql(true);

	//"Primary Y-Axis" not displaying.
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("end")
		.should.eql(false);

	findWidget("Weather Data").closeOptionDialog();

	findWidget("Weather Data").goInFullScreenMode();

	//Validate Secondary Y-axis displayed on CChart
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("start")
		.should.eql(true);

	findWidget("Weather Data").exitFullScreenMode();

	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.clearOptions([{ groupName: "Defaults", name: "Y Axis" }]);

	//"Primary" being the default selected entry.
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("end")
		.should.eql(true);
});
