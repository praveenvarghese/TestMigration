/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"For a Bar-Line chart with partial/broken line elements, asserting the data shown.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

		// Close the Page Manager sidebar
		closeAppManager();

		// Assert the X-Axis details
		findWidget("Another_BLC2")
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
		findWidget("Another_BLC2")
			.getYAxisElements({ includeUnits: true })
			.should.eql(["−50", "−40", "−30", "−20", "−10", "0", "10", "year"]);

		// Assert count of Linechart points
		findWidget("Another_BLC2")
			.getCountOfPoints()
			.should.be.equal(7);

		// Assert count of Barchart elements
		findWidget("Another_BLC2")
			.getNumberOfBars()
			.should.be.equal(13);

		// Assert Linechart details
		const points = findWidget("Another_BLC2").findPoints();
		points.should.include.something.like({
			label: "(MKG,IA_InfinityTeam_JobStart)",
			value: "-43.36 year",
		});
		points.should.include.something.like({
			label: "(HS,IA_InfinityTeam_JobStart)",
			value: "-25.82 year",
		});
		points.should.include.something.like({
			label: "(JP,IA_InfinityTeam_JobStart)",
			value: "-20.00 year",
		});
		points.should.include.something.like({
			label: "(PK,IA_InfinityTeam_JobStart)",
			value: "-41.35 year",
		});
		points.should.include.something.like({
			label: "(PV,IA_InfinityTeam_JobStart)",
			value: "-58.98 year",
		});
		points.should.include.something.like({
			label: "(GLD,IA_InfinityTeam_JobStart)",
			value: "-23.95 year",
		});
		points.should.include.something.like({
			label: "(MR,IA_InfinityTeam_JobStart)",
			value: "-59.29 year",
		});

		// Assert Barchart details
		const bars = findWidget("Another_BLC2").findBars();
		bars.should.include.something.like({
			label: "(MKG,IA_Copy_JobStart)",
			value: "12.11",
		});
		bars.should.include.something.like({
			label: "(HS,IA_Copy_JobStart)",
			value: "9.36",
		});
		bars.should.include.something.like({
			label: "(JP,IA_Copy_JobStart)",
			value: "5.11",
		});
		bars.should.include.something.like({
			label: "(PK,IA_Copy_JobStart)",
			value: "4.07",
		});
		bars.should.include.something.like({
			label: "(PV,IA_Copy_JobStart)",
			value: "6.81",
		});
		bars.should.include.something.like({
			label: "(AM,IA_Copy_JobStart)",
			value: "19.34",
		});
		bars.should.include.something.like({
			label: "(GLD,IA_Copy_JobStart)",
			value: "0.00",
		});
		bars.should.include.something.like({
			label: "(MR,IA_Copy_JobStart)",
			value: "14.14",
		});
		bars.should.include.something.like({
			label: "(KH,IA_Copy_JobStart)",
			value: "11.74",
		});
		bars.should.include.something.like({
			label: "(MB,IA_Copy_JobStart)",
			value: "3.72",
		});
		bars.should.include.something.like({
			label: "(EN,IA_Copy_JobStart)",
			value: "5.79",
		});
		bars.should.include.something.like({
			label: "(OL,IA_Copy_JobStart)",
			value: "10.18",
		});
		bars.should.include.something.like({
			label: "(MT,IA_Copy_JobStart)",
			value: "13.30",
		});
		bars.should.include.something.like({
			label: "(LS,IA_Copy_JobStart)",
			value: "6.90",
		});
	}
);
