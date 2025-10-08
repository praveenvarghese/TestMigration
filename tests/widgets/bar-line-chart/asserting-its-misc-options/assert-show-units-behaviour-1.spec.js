/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"With an identifier set for 'Show Units' Misc option of a Bar-Line chart. Assert units label is included in Y-Axis, only when the identifier value is set to true.",
	() => {
		loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

		// Close the Page Manager sidebar
		closeAppManager();

		// Assert the Y-Axis details shown by default on page load
		// With 'Show_Units' identifier value being false. Units label should not be included.
		findWidget("Another_BLC3")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"-86",
				"-81",
				"-76",
				"-71",
				"-66",
				"-61",
				"-56",
				"-51",
				"-46",
				"-41",
				"-36",
				"-31",
				"-26",
				"-21",
				"-16",
				"-15",
			]);

		// Open SidePanel and update Show_Units identifier value to true
		findWidget("other_bar-line_charts")
			.getSidepanels()
			.openSidepanelTab("Widget Settings");
		findWidget("Scalar Widget Misc Settings").setValue("Show_Units", true);
		findWidget("other_bar-line_charts")
			.getSidepanels()
			.closeSidepanelTab();

		// Assert the X-Axis details
		findWidget("Another_BLC3")
			.getXAxisElements()
			.should.eql([
				"GLD",
				"Harish Sunkerikar",
				"JayaPrakash Dasaria",
				"Madhu K Gowda",
				"MR",
				"Pratap Kumble",
				"Praveen Varghese",
			]);

		// Assert the Y-Axis details shown by default on page load
		// With 'Show_Units' identifier value being true. Units label should be included.
		findWidget("Another_BLC3")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"-86",
				"-81",
				"-76",
				"-71",
				"-66",
				"-61",
				"-56",
				"-51",
				"-46",
				"-41",
				"-36",
				"-31",
				"-26",
				"-21",
				"-16",
				"-15",
				"year",
			]);

		// Assert Linechart details
		// Assert units is now appended in the labels
		const points = findWidget("Another_BLC3").findPoints();
		points.should.include.something.like({
			label: "(GLD,IA_InfinityTeam_JobStart)",
			value: "-23.95 year",
		});
		points.should.include.something.like({
			label: "(Harish Sunkerikar,IA_InfinityTeam_JobStart)",
			value: "-25.82 year",
		});
		points.should.include.something.like({
			label: "(JayaPrakash Dasaria,IA_InfinityTeam_JobStart)",
			value: "-20.00 year",
		});
		points.should.include.something.like({
			label: "(Madhu K Gowda,IA_InfinityTeam_JobStart)",
			value: "-43.36 year",
		});
		points.should.include.something.like({
			label: "(MR,IA_InfinityTeam_JobStart)",
			value: "-59.29 year",
		});
		points.should.include.something.like({
			label: "(Pratap Kumble,IA_InfinityTeam_JobStart)",
			value: "-41.35 year",
		});
		points.should.include.something.like({
			label: "(Praveen Varghese,IA_InfinityTeam_JobStart)",
			value: "-58.98 year",
		});

		// Assert Barchart details
		// Assert units is included in the label
		const bars = findWidget("Another_BLC3").findBars();
		bars.should.include.something.like({
			label: "(GLD,IA_InfinityTeam_JobDuration)",
			value: "-72.53 year",
		});
		bars.should.include.something.like({
			label: "(Harish Sunkerikar,IA_InfinityTeam_JobDuration)",
			value: "-62.59 year",
		});
		bars.should.include.something.like({
			label: "(JayaPrakash Dasaria,IA_InfinityTeam_JobDuration)",
			value: "-84.91 year",
		});
		bars.should.include.something.like({
			label: "(Madhu K Gowda,IA_InfinityTeam_JobDuration)",
			value: "-68.14 year",
		});
		bars.should.include.something.like({
			label: "(MR,IA_InfinityTeam_JobDuration)",
			value: "-88.17 year",
		});
		bars.should.include.something.like({
			label: "(Pratap Kumble,IA_InfinityTeam_JobDuration)",
			value: "-74.31 year",
		});
		bars.should.include.something.like({
			label: "(Praveen Varghese,IA_InfinityTeam_JobDuration)",
			value: "-71.96 year",
		});

		// Refresh the page
		pageRefresh();

		// Assert the X-Axis details
		findWidget("Another_BLC3")
			.getXAxisElements()
			.should.eql([
				"GLD",
				"Harish Sunkerikar",
				"JayaPrakash Dasaria",
				"Madhu K Gowda",
				"MR",
				"Pratap Kumble",
				"Praveen Varghese",
			]);

		// Assert the Y-Axis details shown by default on page load
		// With 'Show_Units' identifier value being true. Units label should be included.
		findWidget("Another_BLC3")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"-86",
				"-81",
				"-76",
				"-71",
				"-66",
				"-61",
				"-56",
				"-51",
				"-46",
				"-41",
				"-36",
				"-31",
				"-26",
				"-21",
				"-16",
				"-15",
				"year",
			]);

		// Open SidePanel and update Show_Units identifier value to false
		findWidget("other_bar-line_charts")
			.getSidepanels()
			.openSidepanelTab("Widget Settings");
		findWidget("Scalar Widget Misc Settings").setValue("Show_Units", false);
		findWidget("other_bar-line_charts")
			.getSidepanels()
			.closeSidepanelTab();

		// Assert the X-Axis details
		// Assert the ElementText Annotations are applied
		findWidget("Another_BLC3")
			.getXAxisElements()
			.should.eql([
				"GLD",
				"Harish Sunkerikar",
				"JayaPrakash Dasaria",
				"Madhu K Gowda",
				"MR",
				"Pratap Kumble",
				"Praveen Varghese",
			]);

		// Assert the Y-Axis details shown by default on page load
		// With 'Show_Units' identifier value being false. Units label should not be included.
		findWidget("Another_BLC3")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"-86",
				"-81",
				"-76",
				"-71",
				"-66",
				"-61",
				"-56",
				"-51",
				"-46",
				"-41",
				"-36",
				"-31",
				"-26",
				"-21",
				"-16",
				"-15",
			]);
	}
);
