/*!
 * @AIMMS_FILE=models/TransNet_HighCharts/TransNet.aimms
 */

scenario("Validate x-axis step size settings are applied to combination chart ", () => {
	loadPage("Main Project/Cost Overview/Data");

	// When a literal 0 is set or the resolved value of the AIMMS Identifier is 0, then no X-Axis labels are shown.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Step Size",
				value: "0",
				valueType: "LITERAL",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.isXaxisScaleValuesVisible()
		.should.eql(false);

	// When a value is set in the option, X-Axis labels are shown only at the nth interval based on the resolved value.
	findWidget("CChart")
		.opencombinationchartSettingsEditor()
		.setOptions([
			{
				groupName: "X-Axis",
				name: "Step Size",
				value: "2",
				valueType: "LITERAL",
			},
		]);

	findWidget("CChart").closeOptionDialog();

	findWidget("CChart")
		.getXaxisScaleValues()
		.should.eql([
			"2022-01-01",
			"2022-01-03",
			"2022-01-05",
			"2022-01-07",
			"2022-01-09",
			"2022-01-11",
			"2022-01-13",
			"2022-01-15",
			"2022-01-17",
			"2022-01-19",
			"2022-01-21",
			"2022-01-23",
			"2022-01-25",
			"2022-01-27",
			"2022-01-29",
			"2022-01-31",
		]);

	findWidget("Days Range")
		.getScalarCell("p_noDays", { mode: "kpi" })
		.setValue("60", true);

	findWidget("CChart")
		.getXaxisScaleValues()
		.should.eql([
			"2022-01-01",
			"2022-01-03",
			"2022-01-05",
			"2022-01-07",
			"2022-01-09",
			"2022-01-11",
			"2022-01-13",
			"2022-01-15",
			"2022-01-17",
			"2022-01-19",
			"2022-01-21",
			"2022-01-23",
			"2022-01-25",
			"2022-01-27",
			"2022-01-29",
			"2022-01-31",
			"2022-02-02",
			"2022-02-04",
			"2022-02-06",
			"2022-02-08",
			"2022-02-10",
			"2022-02-12",
			"2022-02-14",
			"2022-02-16",
			"2022-02-18",
			"2022-02-20",
			"2022-02-22",
			"2022-02-24",
			"2022-02-26",
			"2022-02-28",
			"2022-03-02",
		]);
});
