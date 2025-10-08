/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate y-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	//When the step size option is left blank, the default behavior of HighCharts Y-Axis is prevalent.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.clearOptions([
			{
				groupName: "Y-Axis",
				name: "Step Size",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.isXaxisScaleValuesVisible()
		.should.eql(true);

	findWidget("CChart").goInFullScreenMode();

	findWidget("CChart").isFullScreen().should.be.true;

	findWidget("CChart")
		.isXaxisScaleValuesVisible()
		.should.eql(true);

	findWidget("CChart").exitFullScreenMode();
});
