/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate x-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	//A numerical Parameter is what would be allowed in this option.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Step Size",
				value: "p_x_axis_step_interval",
				valueType: "IDENTIFIER",
				optionEditorType: "VALUE",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.getXaxisScaleValues()
		.should.eql([
			"2022-01-01",
			"2022-01-04",
			"2022-01-07",
			"2022-01-10",
			"2022-01-13",
			"2022-01-16",
			"2022-01-19",
			"2022-01-22",
			"2022-01-25",
			"2022-01-28",
			"2022-01-31",
		]);

	findWidget("CChart").goInFullScreenMode();

	// findWidget("CChart").isFullScreen().should.be.true;

	findWidget("CChart")
		.getXaxisScaleValues()
		.should.eql([
			"2022-01-01",
			"2022-01-04",
			"2022-01-07",
			"2022-01-10",
			"2022-01-13",
			"2022-01-16",
			"2022-01-19",
			"2022-01-22",
			"2022-01-25",
			"2022-01-28",
			"2022-01-31",
		]);

	findWidget("CChart").exitFullScreenMode();
});
