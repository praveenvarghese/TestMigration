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
		// Set identifiers to the options
		findWidget("BarLineChart_1_1")
			.openBarLineChartSettingsEditor()
			.setOptions([
				{
					name: "Y-Axis Minimum Bound",
					value: "YAxis_Minimum_Bound",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
				},
				{
					name: "Y-Axis Maximum Bound",
					value: "YAxis_Maximum_Bound",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
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
				"0",
				"20",
				"40",
				"60",
				"80",
				"100",
				"120",
				"140",
				"160",
				"180",
				"200",
				"220",
				"240",
			]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_1")
			.getCountOfPoints()
			.should.be.equal(14);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_1")
			.getNumberOfBars()
			.should.be.equal(40);

		// Open the SidePanel and control the value in the identifiers set for Y-Axis
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Charts YAxis Settings").setValue("YAxis_Maximum_Bound", "30");
		findWidget("Charts YAxis Settings").setValue("YAxis_Minimum_Bound", "11");
		findWidget("Charts YAxis Settings").setValue("YAxis_Step", "0.5");
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

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
					name: "Step",
					value: "YAxis_Step",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
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
				"21.5",
				"22",
				"22.5",
				"23",
				"23.5",
				"24",
				"24.5",
				"25",
				"25.5",
				"26",
				"26.5",
				"27",
				"27.5",
				"28",
				"28.5",
				"29",
				"29.5",
				"30",
			]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_1")
			.getCountOfPoints()
			.should.be.equal(5);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_1")
			.getNumberOfBars()
			.should.be.equal(20);

		// Open the SidePanel and control the value in the identifiers set for Y-Axis
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Charts YAxis Settings").setValue("YAxis_Maximum_Bound", "24");
		findWidget("Charts YAxis Settings").setValue("YAxis_Minimum_Bound", "1");
		findWidget("Charts YAxis Settings").setValue("YAxis_Step", "1");
		findWidget("bar-line_chart_data")
			.getSidepanels()
			.closeSidepanelTab();

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
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24",
			]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_1")
			.getCountOfPoints()
			.should.be.equal(13);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_1")
			.getNumberOfBars()
			.should.be.equal(27);
	}
);
