/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate y-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	//A numerical Parameter is what would be allowed in this option.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "Y-Axis",
				name: "Step Size",
				value: "p_y_axis_step_interval",
				valueType: "IDENTIFIER",
				optionEditorType: "VALUE",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.getYaxisScaleValues()
		.should.eql(["0", "12", "24", "36", "48", "60", "72"]);

	findWidget("CChart").goInFullScreenMode();

	findWidget("CChart").isFullScreen().should.be.true;

	findWidget("CChart")
		.getYaxisScaleValues()
		.should.eql(["0", "12", "24", "36", "48", "60", "72"]);

	findWidget("CChart").exitFullScreenMode();
});
