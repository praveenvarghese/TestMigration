/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate secondary Y-axis in widget setting - contents", () => {
	loadPage("Main Project/Weather History/History Data");

	//Select Secondary Y-axis as defaults in contents for identifiers
	findWidget("Weather Data")
		.HighChartContentsOptionEditor()
		.setOptions([
			{ groupName: "Defaults", name: "Y Axis", value: "Secondary Axis", valueType: "ENUM" },
		]);

	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.collapseChartSettingsGroup("X-Axis");

	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.collapseChartSettingsGroup("Y-Axis");

	//Validate Secondary Y-axis displayed on CChart
	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis (Secondary)",
				name: "Label",
				value: "sp_Demand_YAxisLabel",
				valueType: "IDENTIFIER",
			},
			{
				groupName: "Y-Axis (Secondary)",
				name: "Min",
				value: "-10",
				valueType: "LITERAL",
			},
			{
				groupName: "Y-Axis (Secondary)",
				name: "Max",
				value: "100",
				valueType: "LITERAL",
			},
			{
				groupName: "Y-Axis (Secondary)",
				name: "Step Size",
				value: "10",
				valueType: "LITERAL",
			},
		]);

	//"Primary Y-Axis" not displaying.
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("end")
		.should.eql(false);

	//"Secondary Y-Axis" not displaying.
	findWidget("Weather Data")
		.isYaxisScaleValuesVisible("start")
		.should.eql(true);

	findWidget("Weather Data")
		.getYaxisLabel()
		.should.eql("Thousands");

	findWidget("Weather Data")
		.getYaxisScaleValues()
		.should.eql(["-10", "0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]);

	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis (Secondary)",
				name: "Label",
				value: "millimeter",
				valueType: "LITERAL",
			},
		]);

	findWidget("Weather Data")
		.getYaxisLabel()
		.should.eql("millimeter");

	//Validate Secondary Y-axis displayed on CChart
	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis (Secondary)",
				name: "Step Size",
				value: "-1",
				valueType: "LITERAL",
			},
		]);

	// Display messgae for negative step size
	findWidget("Weather Data")
		.getEmptyMessage()
		.should.eql("Step size cannot be negative");

	//Clear secondary y-axis step size
	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.clearOptions([
			{
				groupName: "Y-Axis (Secondary)",
				name: "Step Size",
			},
		]);
	//Validate barchart for Secondary Y-axis with invalid min and max values
	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis (Secondary)",
				name: "Min",
				value: "100",
				valueType: "LITERAL",
			},
			{
				groupName: "Y-Axis (Secondary)",
				name: "Max",
				value: "-30",
				valueType: "LITERAL",
			},
		]);

	// Display messgae for Min > Max error
	findWidget("Weather Data")
		.getEmptyMessage()
		.should.eql("Minimum bound cannot exceed Maximum bound");

	//Clear secondary y-axis Min, Max values
	findWidget("Weather Data")
		.opencombinationchartSettingsEditor()
		.clearOptions([
			{
				groupName: "Y-Axis (Secondary)",
				name: "Min",
			},
			{
				groupName: "Y-Axis (Secondary)",
				name: "Max",
			},
		]);

	findWidget("Weather Data").closeOptionDialog();

	//contents overload error
	findWidget("Month Range").setValue("111");

	// Display messgae for contents overload error
	findWidget("Weather Data")
		.getResolutionMessage()
		.should.eql(
			"Unsupported: Unable to display the large dataset on your chart.To address this issue, consider the following options:Exploring alternative pivoting methods to better organize and present the data.Reducing the number of chart elements by slicing or removing less critical content.Adjusting the threshold for the number of data points displayed by the Combination Chart widget. For detailed instructions, please refer to the documentation."
		);
	//contents overload error
	findWidget("Month Range").setValue("10");
});
