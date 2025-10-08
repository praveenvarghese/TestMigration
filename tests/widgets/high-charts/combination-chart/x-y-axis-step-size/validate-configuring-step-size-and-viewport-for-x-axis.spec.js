/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate x-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Max Number Of Categories In Viewport",
				value: "20",
				valueType: "LITERAL",
			},
			{
				groupName: "X-Axis",
				name: "Step Size",
				value: "2",
				valueType: "LITERAL",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.getXaxisScaleValuesCount()
		.should.eql(10);

	findWidget("CChart").goInFullScreenMode();

	// findWidget("CChart").isFullScreen().should.be.true;

	findWidget("CChart")
		.getXaxisScaleValuesCount()
		.should.eql(10);

	findWidget("CChart").exitFullScreenMode();
});
