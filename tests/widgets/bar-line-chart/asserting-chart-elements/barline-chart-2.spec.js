/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a multi-contents Bar-Line chart with grouped bars, assert the chart elements details.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Close the Page Manager sidebar
		closeAppManager();

		// Click on Primary Action to load data on Bar-Line chart
		findWidget("bar-line_chart_data")
			.getPrimaryPageAction()
			.click();

		// Scroll down to get BarLineChart_1_2 Chart into Viewport
		findWidget("BarLineChart_1_2").bringIntoFocus(false);

		// Assert the X-Axis details
		findWidget("BarLineChart_1_2")
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
		findWidget("BarLineChart_1_2")
			.getYAxisElements()
			.should.eql([
				"-10",
				"0",
				"10",
				"20",
				"30",
				"40",
				"50",
				"60",
				"70",
				"80",
				"90",
				"100",
				"110",
				"120",
				"130",
				"140",
				"150",
				"160",
				"170",
				"180",
				"190",
				"200",
				"210",
				"220",
				"230",
				"240",
				"250",
			]);

		// Assert count of Linechart points
		findWidget("BarLineChart_1_2")
			.getCountOfPoints()
			.should.be.equal(14);

		// Assert count of Barchart elements
		findWidget("BarLineChart_1_2")
			.getNumberOfBars()
			.should.be.equal(42);

		// Assert Linechart details
		const points = findWidget("BarLineChart_1_2").findPoints();
		points.should.include.something.like({
			label: "(MKG,IA_Copy_JobDuration)",
			value: "173.01",
		});
		points.should.include.something.like({
			label: "(HS,IA_Copy_JobDuration)",
			value: "213.05",
		});
		points.should.include.something.like({
			label: "(JP,IA_Copy_JobDuration)",
			value: "165.35",
		});
		points.should.include.something.like({
			label: "(PK,IA_Copy_JobDuration)",
			value: "142.93",
		});
		points.should.include.something.like({
			label: "(PV,IA_Copy_JobDuration)",
			value: "212.82",
		});
		points.should.include.something.like({
			label: "(AM,IA_Copy_JobDuration)",
			value: "149.19",
		});
		points.should.include.something.like({
			label: "(GLD,IA_Copy_JobDuration)",
			value: "123.71",
		});
		points.should.include.something.like({
			label: "(MR,IA_Copy_JobDuration)",
			value: "165.79",
		});
		points.should.include.something.like({
			label: "(KH,IA_Copy_JobDuration)",
			value: "162.19",
		});
		points.should.include.something.like({
			label: "(MB,IA_Copy_JobDuration)",
			value: "211.06",
		});
		points.should.include.something.like({
			label: "(EN,IA_Copy_JobDuration)",
			value: "191.56",
		});
		points.should.include.something.like({
			label: "(OL,IA_Copy_JobDuration)",
			value: "190.68",
		});
		points.should.include.something.like({
			label: "(MT,IA_Copy_JobDuration)",
			value: "214.17",
		});
		points.should.include.something.like({
			label: "(LS,IA_Copy_JobDuration)",
			value: "243.81",
		});

		// Assert Barchart details
		const bars = findWidget("BarLineChart_1_2").findBars();
		bars.should.include.something.like({
			label: "(MKG,IA_Copy_JobStart)",
			value: "100.27",
		});
		bars.should.include.something.like({
			label: "(MKG,IA_JobDuration)",
			value: "104.69",
		});
		bars.should.include.something.like({
			label: "(MKG,IA_JobStart)",
			value: "53.08",
		});
		bars.should.include.something.like({
			label: "(HS,IA_Copy_JobStart)",
			value: "102.36",
		});
		bars.should.include.something.like({
			label: "(HS,IA_JobDuration)",
			value: "146.48",
		});
		bars.should.include.something.like({
			label: "(HS,IA_JobStart)",
			value: "45.00",
		});
		bars.should.include.something.like({
			label: "(JP,IA_Copy_JobStart)",
			value: "70.33",
		});
		bars.should.include.something.like({
			label: "(JP,IA_JobDuration)",
			value: "76.78",
		});
		bars.should.include.something.like({
			label: "(JP,IA_JobStart)",
			value: "33.21",
		});
		bars.should.include.something.like({
			label: "(PK,IA_Copy_JobStart)",
			value: "137.08",
		});
		bars.should.include.something.like({
			label: "(PK,IA_JobDuration)",
			value: "60.91",
		});
		bars.should.include.something.like({
			label: "(PK,IA_JobStart)",
			value: "107.26",
		});
		bars.should.include.something.like({
			label: "(PV,IA_Copy_JobStart)",
			value: "93.19",
		});
		bars.should.include.something.like({
			label: "(PV,IA_JobDuration)",
			value: "140.37",
		});
		bars.should.include.something.like({
			label: "(PV,IA_JobStart)",
			value: "22.12",
		});
		bars.should.include.something.like({
			label: "(AM,IA_Copy_JobStart)",
			value: "136.41",
		});
		bars.should.include.something.like({
			label: "(AM,IA_JobDuration)",
			value: "85.24",
		});
		bars.should.include.something.like({
			label: "(AM,IA_JobStart)",
			value: "93.29",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_Copy_JobStart)",
			value: "72.18",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_JobDuration)",
			value: "76.55",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_JobStart)",
			value: "72.18",
		});
		bars.should.include.something.like({
			label: "(MR,IA_Copy_JobStart)",
			value: "113.59",
		});
		bars.should.include.something.like({
			label: "(MR,IA_JobDuration)",
			value: "90.31",
		});
		bars.should.include.something.like({
			label: "(MR,IA_JobStart)",
			value: "58.21",
		});
		bars.should.include.something.like({
			label: "(KH,IA_Copy_JobStart)",
			value: "91.95",
		});
		bars.should.include.something.like({
			label: "(KH,IA_JobDuration)",
			value: "96.01",
		});
		bars.should.include.something.like({
			label: "(KH,IA_JobStart)",
			value: "21.58",
		});
		bars.should.include.something.like({
			label: "(MB,IA_Copy_JobStart)",
			value: "96.79",
		});
		bars.should.include.something.like({
			label: "(MB,IA_JobDuration)",
			value: "132.93",
		});
		bars.should.include.something.like({
			label: "(MB,IA_JobStart)",
			value: "51.80",
		});
		bars.should.include.something.like({
			label: "(EN,IA_Copy_JobStart)",
			value: "78.45",
		});
		bars.should.include.something.like({
			label: "(EN,IA_JobDuration)",
			value: "90.54",
		});
		bars.should.include.something.like({
			label: "(EN,IA_JobStart)",
			value: "1.80",
		});
		bars.should.include.something.like({
			label: "(OL,IA_Copy_JobStart)",
			value: "115.36",
		});
		bars.should.include.something.like({
			label: "(OL,IA_JobDuration)",
			value: "112.21",
		});
		bars.should.include.something.like({
			label: "(OL,IA_JobStart)",
			value: "99.16",
		});
		bars.should.include.something.like({
			label: "(MT,IA_Copy_JobStart)",
			value: "137.77",
		});
		bars.should.include.something.like({
			label: "(MT,IA_JobDuration)",
			value: "116.43",
		});
		bars.should.include.something.like({
			label: "(MT,IA_JobStart)",
			value: "114.58",
		});
		bars.should.include.something.like({
			label: "(LS,IA_Copy_JobStart)",
			value: "105.99",
		});
		bars.should.include.something.like({
			label: "(LS,IA_JobDuration)",
			value: "190.46",
		});
		bars.should.include.something.like({
			label: "(LS,IA_JobStart)",
			value: "46.04",
		});
	}
);
