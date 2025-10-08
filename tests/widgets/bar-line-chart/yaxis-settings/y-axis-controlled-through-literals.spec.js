/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Applying Y-Axis settings on a multi-contents Bar-Line chart, assert the chart elements shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Close the Page Manager sidebar
		closeAppManager();

		// Apply Y-Axis settings
		findWidget("BarLineChart_1_1")
			.openBarLineChartSettingsEditor()
			.setOptions([
				{
					name: "Y-Axis Minimum Bound",
					value: "11",
					valueType: "LITERAL",
				},
				{
					name: "Y-Axis Maximum Bound",
					value: "30",
					valueType: "LITERAL",
				},
			]);
		findWidget("BarLineChart_1_1").closeOptionDialog();

		// Assert the X-Axis details
		findWidget("BarLineChart_1_1")
			.getXAxisElements()
			.should.eql([
				"MKG",
				"HS",
				"JP",
				"PK",
				"PV",
				"AM",
				"GLD",
				"MR",
				"KH",
				"MB",
				"EN",
				"OL",
				"MT",
				"LS",
			]);

		// Assert the Y-Axis details
		findWidget("BarLineChart_1_1")
			.getYAxisElements()
			.should.eql(["12", "14", "16", "18", "20", "22", "24", "26", "28", "30"]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_1")
			.getCountOfPoints()
			.should.be.equal(5);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_1")
			.getNumberOfBars()
			.should.be.equal(20);

		// Apply Y-Axis settings
		findWidget("BarLineChart_1_1")
			.openBarLineChartSettingsEditor()
			.setOptions([
				{
					name: "Y-Axis Maximum Bound",
					value: "21",
					valueType: "LITERAL",
				},
				{
					name: "Step",
					value: "0.5",
					valueType: "LITERAL",
				},
			]);
		findWidget("BarLineChart_1_1").closeOptionDialog();

		// Assert the X-Axis details
		findWidget("BarLineChart_1_1")
			.getXAxisElements()
			.should.eql([
				"MKG",
				"HS",
				"JP",
				"PK",
				"PV",
				"AM",
				"GLD",
				"MR",
				"KH",
				"MB",
				"EN",
				"OL",
				"MT",
				"LS",
			]);

		// Assert the Y-Axis details
		findWidget("BarLineChart_1_1")
			.getYAxisElements()
			.should.eql([
				"11",
				"11.5",
				"12",
				"12.5",
				"13",
				"13.5",
				"14",
				"14.5",
				"15",
				"15.5",
				"16",
				"16.5",
				"17",
				"17.5",
				"18",
				"18.5",
				"19",
				"19.5",
				"20",
				"20.5",
				"21",
			]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_1")
			.getCountOfPoints()
			.should.be.equal(5);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_1")
			.getNumberOfBars()
			.should.be.equal(16);

		// Apply Y-Axis settings
		findWidget("BarLineChart_1_1")
			.openBarLineChartSettingsEditor()
			.setOptions([
				{
					name: "Y-Axis Minimum Bound",
					value: "1",
					valueType: "LITERAL",
				},
			])
			.clearOptions([
				{
					name: "Step",
				},
			]);
		findWidget("BarLineChart_1_1").closeOptionDialog();

		// Assert the X-Axis details
		findWidget("BarLineChart_1_1")
			.getXAxisElements()
			.should.eql([
				"MKG",
				"HS",
				"JP",
				"PK",
				"PV",
				"AM",
				"GLD",
				"MR",
				"KH",
				"MB",
				"EN",
				"OL",
				"MT",
				"LS",
			]);

		// Assert the Y-Axis details
		findWidget("BarLineChart_1_1")
			.getYAxisElements()
			.should.eql(["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_1")
			.getCountOfPoints()
			.should.be.equal(13);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_1")
			.getNumberOfBars()
			.should.be.equal(25);
	}
);
