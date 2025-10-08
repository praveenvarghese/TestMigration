/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For the multi-contents Bar-Line chart on a Dialog, assert the chart elements details.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data");

		// Close the Page Manager sidebar
		closeAppManager();

		// Click on the button to get the Dialog Page
		findWidget("Opens Dialog").click();

		// Assert the X-Axis details
		findWidget("DP_BLC1")
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
		findWidget("DP_BLC1")
			.getYAxisElements()
			.should.eql(["−10", "−5", "0", "5", "10", "15", "20", "25", "30"]);

		// Assert count of Linechart points
		findWidget("DP_BLC1")
			.getCountOfPoints()
			.should.be.equal(14);

		// Assert count of Barchart elements
		findWidget("DP_BLC1")
			.getNumberOfBars()
			.should.be.equal(13);

		// Assert Linechart details
		let points = findWidget("DP_BLC1").findPoints();
		points.should.include.something.like({
			label: "(MKG,IA_JobDuration)",
			value: "20.07",
		});
		points.should.include.something.like({
			label: "(HS,IA_JobDuration)",
			value: "-11.39",
		});
		points.should.include.something.like({
			label: "(JP,IA_JobDuration)",
			value: "2.05",
		});
		points.should.include.something.like({
			label: "(PK,IA_JobDuration)",
			value: "3.32",
		});
		points.should.include.something.like({
			label: "(PV,IA_JobDuration)",
			value: "-13.08",
		});
		points.should.include.something.like({
			label: "(AM,IA_JobDuration)",
			value: "11.17",
		});
		points.should.include.something.like({
			label: "(GLD,IA_JobDuration)",
			value: "4.48",
		});
		points.should.include.something.like({
			label: "(MR,IA_JobDuration)",
			value: "12.80",
		});
		points.should.include.something.like({
			label: "(KH,IA_JobDuration)",
			value: "9.87",
		});
		points.should.include.something.like({
			label: "(MB,IA_JobDuration)",
			value: "18.34",
		});
		points.should.include.something.like({
			label: "(EN,IA_JobDuration)",
			value: "-10.30",
		});
		points.should.include.something.like({
			label: "(OL,IA_JobDuration)",
			value: "21.60",
		});
		points.should.include.something.like({
			label: "(MT,IA_JobDuration)",
			value: "28.45",
		});
		points.should.include.something.like({
			label: "(LS,IA_JobDuration)",
			value: "34.66",
		});

		// Assert Barchart details
		let bars = findWidget("DP_BLC1").findBars();
		bars.should.include.something.like({
			label: "(MKG,IA_JobStart)",
			value: "12.11",
		});
		bars.should.include.something.like({
			label: "(HS,IA_JobStart)",
			value: "9.36",
		});
		bars.should.include.something.like({
			label: "(JP,IA_JobStart)",
			value: "5.11",
		});
		bars.should.include.something.like({
			label: "(PK,IA_JobStart)",
			value: "-4.07",
		});
		bars.should.include.something.like({
			label: "(PV,IA_JobStart)",
			value: "-6.81",
		});
		bars.should.include.something.like({
			label: "(AM,IA_JobStart)",
			value: "19.34",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_JobStart)",
			value: "0.00",
		});
		bars.should.include.something.like({
			label: "(MR,IA_JobStart)",
			value: "14.14",
		});
		bars.should.include.something.like({
			label: "(KH,IA_JobStart)",
			value: "11.74",
		});
		bars.should.include.something.like({
			label: "(MB,IA_JobStart)",
			value: "-3.72",
		});
		bars.should.include.something.like({
			label: "(EN,IA_JobStart)",
			value: "-5.79",
		});
		bars.should.include.something.like({
			label: "(OL,IA_JobStart)",
			value: "10.18",
		});
		bars.should.include.something.like({
			label: "(MT,IA_JobStart)",
			value: "13.30",
		});
		bars.should.include.something.like({
			label: "(LS,IA_JobStart)",
			value: "-6.90",
		});

		// Assert the X-Axis details
		findWidget("DP_BLC2")
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
		findWidget("DP_BLC2")
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
		findWidget("DP_BLC2")
			.getCountOfPoints()
			.should.be.equal(14);

		// Assert count of Barchart elements
		findWidget("DP_BLC2")
			.getNumberOfBars()
			.should.be.equal(42);

		// Assert Linechart details
		points = findWidget("DP_BLC2").findPoints();
		points.should.include.something.like({
			label: "(MKG,IA_JobDuration)",
			value: "104.69",
		});
		points.should.include.something.like({
			label: "(HS,IA_JobDuration)",
			value: "146.48",
		});
		points.should.include.something.like({
			label: "(JP,IA_JobDuration)",
			value: "76.78",
		});
		points.should.include.something.like({
			label: "(PK,IA_JobDuration)",
			value: "60.91",
		});
		points.should.include.something.like({
			label: "(PV,IA_JobDuration)",
			value: "140.37",
		});
		points.should.include.something.like({
			label: "(AM,IA_JobDuration)",
			value: "85.24",
		});
		points.should.include.something.like({
			label: "(GLD,IA_JobDuration)",
			value: "76.55",
		});
		points.should.include.something.like({
			label: "(MR,IA_JobDuration)",
			value: "90.31",
		});
		points.should.include.something.like({
			label: "(KH,IA_JobDuration)",
			value: "96.01",
		});
		points.should.include.something.like({
			label: "(MB,IA_JobDuration)",
			value: "132.93",
		});
		points.should.include.something.like({
			label: "(EN,IA_JobDuration)",
			value: "90.54",
		});
		points.should.include.something.like({
			label: "(OL,IA_JobDuration)",
			value: "112.21",
		});
		points.should.include.something.like({
			label: "(MT,IA_JobDuration)",
			value: "116.43",
		});
		points.should.include.something.like({
			label: "(LS,IA_JobDuration)",
			value: "190.46",
		});

		// Assert Barchart details
		bars = findWidget("DP_BLC2").findBars();
		bars.should.include.something.like({
			label: "(MKG,IA_Copy_JobDuration)",
			value: "173.01",
		});
		bars.should.include.something.like({
			label: "(HS,IA_Copy_JobDuration)",
			value: "213.05",
		});
		bars.should.include.something.like({
			label: "(JP,IA_Copy_JobDuration)",
			value: "165.35",
		});
		bars.should.include.something.like({
			label: "(PK,IA_Copy_JobDuration)",
			value: "142.93",
		});
		bars.should.include.something.like({
			label: "(PV,IA_Copy_JobDuration)",
			value: "212.82",
		});
		bars.should.include.something.like({
			label: "(AM,IA_Copy_JobDuration)",
			value: "149.19",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_Copy_JobDuration)",
			value: "123.71",
		});
		bars.should.include.something.like({
			label: "(MR,IA_Copy_JobDuration)",
			value: "165.79",
		});
		bars.should.include.something.like({
			label: "(KH,IA_Copy_JobDuration)",
			value: "162.19",
		});
		bars.should.include.something.like({
			label: "(MB,IA_Copy_JobDuration)",
			value: "211.06",
		});
		bars.should.include.something.like({
			label: "(EN,IA_Copy_JobDuration)",
			value: "191.56",
		});
		bars.should.include.something.like({
			label: "(OL,IA_Copy_JobDuration)",
			value: "190.68",
		});
		bars.should.include.something.like({
			label: "(MT,IA_Copy_JobDuration)",
			value: "214.17",
		});
		bars.should.include.something.like({
			label: "(LS,IA_Copy_JobDuration)",
			value: "243.81",
		});
		bars.should.include.something.like({
			label: "(MKG,IA_Copy_JobStart)",
			value: "100.27",
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
			label: "(HS,IA_JobStart)",
			value: "45.00",
		});
		bars.should.include.something.like({
			label: "(JP,IA_Copy_JobStart)",
			value: "70.33",
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
			label: "(PK,IA_JobStart)",
			value: "107.26",
		});
		bars.should.include.something.like({
			label: "(PV,IA_Copy_JobStart)",
			value: "93.19",
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
			label: "(AM,IA_JobStart)",
			value: "93.29",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_Copy_JobStart)",
			value: "72.18",
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
			label: "(MR,IA_JobStart)",
			value: "58.21",
		});
		bars.should.include.something.like({
			label: "(KH,IA_Copy_JobStart)",
			value: "91.95",
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
			label: "(MB,IA_JobStart)",
			value: "51.80",
		});
		bars.should.include.something.like({
			label: "(EN,IA_Copy_JobStart)",
			value: "78.45",
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
			label: "(OL,IA_JobStart)",
			value: "99.16",
		});
		bars.should.include.something.like({
			label: "(MT,IA_Copy_JobStart)",
			value: "137.77",
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
			label: "(LS,IA_JobStart)",
			value: "46.04",
		});

		// Click on "OK" button of dialog to close it.
		findDialog()
			.findButton("OK")
			.click();
	}
);
