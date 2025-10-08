/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate y-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	//When a literal 0 is set or the resolved value of the AIMMS Identifier is 0, then no Y-Axis labels are shown.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Step Size",
				value: "0",
				valueType: "LITERAL",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.isYaxisScaleValuesVisible("end")
		.should.eql(false);

	findWidget("CChart").goInFullScreenMode();

	findWidget("CChart").isFullScreen().should.be.true;

	findWidget("CChart")
		.isYaxisScaleValuesVisible("end")
		.should.eql(false);

	findWidget("CChart").exitFullScreenMode();

	//Validate Primary Y-axis for negative step size
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Step Size",
				value: "-1",
				valueType: "LITERAL",
			},
		]);

	// Display messgae for negative step size
	findWidget("CChart")
		.getEmptyMessage()
		.should.eql("Step size cannot be negative");

	//Clear secondary y-axis step size
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.clearOptions([
			{
				groupName: "Y-Axis",
				name: "Step Size",
			},
		]);

	//Validate barchart for Primary Y-axis with invalid min and max values
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Min",
				value: "100",
				valueType: "LITERAL",
			},
			{
				groupName: "Y-Axis",
				name: "Max",
				value: "-30",
				valueType: "LITERAL",
			},
		]);

	// Display messgae for Min > Max error
	findWidget("CChart")
		.getEmptyMessage()
		.should.eql("Minimum bound cannot exceed Maximum bound");

	//Clear Primary y-axis Min, Max values
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.clearOptions([
			{
				groupName: "Y-Axis",
				name: "Min",
			},
			{
				groupName: "Y-Axis",
				name: "Max",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	//contents overload error
	findWidget("Days Range").setValue("1000");

	// Display messgae for contents overload error
	findWidget("CChart")
		.getResolutionMessage()
		.should.eql(
			"Unsupported: Unable to display the large dataset on your chart.To address this issue, consider the following options:Exploring alternative pivoting methods to better organize and present the data.Reducing the number of chart elements by slicing or removing less critical content.Adjusting the threshold for the number of data points displayed by the Combination Chart widget. For detailed instructions, please refer to the documentation."
		);
});
