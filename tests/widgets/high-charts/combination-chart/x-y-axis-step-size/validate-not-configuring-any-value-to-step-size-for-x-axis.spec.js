/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate x-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	// When the step size option is left blank, the default behavior of HighCharts X-Axis is prevalent.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.clearOptions([
			{
				groupName: "X-Axis",
				name: "Step Size",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.getXaxisScaleValues()
		.should.eql([
			"2022-01-01",
			"2022-01-02",
			"2022-01-03",
			"2022-01-04",
			"2022-01-05",
			"2022-01-06",
			"2022-01-07",
			"2022-01-08",
			"2022-01-09",
			"2022-01-10",
			"2022-01-11",
			"2022-01-12",
			"2022-01-13",
			"2022-01-14",
			"2022-01-15",
			"2022-01-16",
			"2022-01-17",
			"2022-01-18",
			"2022-01-19",
			"2022-01-20",
			"2022-01-21",
			"2022-01-22",
			"2022-01-23",
			"2022-01-24",
			"2022-01-25",
			"2022-01-26",
			"2022-01-27",
			"2022-01-28",
			"2022-01-29",
			"2022-01-30",
			"2022-01-31",
		]);

	findWidget("CChart").goInFullScreenMode();

	findWidget("CChart").isFullScreen().should.be.true;

	findWidget("CChart")
		.getXaxisScaleValues()
		.should.eql([
			"2022-01-01",
			"2022-01-02",
			"2022-01-03",
			"2022-01-04",
			"2022-01-05",
			"2022-01-06",
			"2022-01-07",
			"2022-01-08",
			"2022-01-09",
			"2022-01-10",
			"2022-01-11",
			"2022-01-12",
			"2022-01-13",
			"2022-01-14",
			"2022-01-15",
			"2022-01-16",
			"2022-01-17",
			"2022-01-18",
			"2022-01-19",
			"2022-01-20",
			"2022-01-21",
			"2022-01-22",
			"2022-01-23",
			"2022-01-24",
			"2022-01-25",
			"2022-01-26",
			"2022-01-27",
			"2022-01-28",
			"2022-01-29",
			"2022-01-30",
			"2022-01-31",
		]);

	findWidget("CChart").exitFullScreenMode();
});
