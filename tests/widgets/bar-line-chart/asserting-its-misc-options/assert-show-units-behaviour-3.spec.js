/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"For a Bar-Line chart, set 'Show Units' Misc option to a literal 0 and later to 1. Assert units label is not included in Y-Axis when the resolved value is 0/false.",
	() => {
		loadPage(
			"Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts?_aimms_only_persistence.write=true"
		);

		// Close the Page Manager sidebar
		closeAppManager();

		// Assert the Y-Axis details shown by default on page load
		// With 'Show Units' Misc option left blank/default. Units label should be included.
		findWidget("Another_BLC1")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"−90",
				"−80",
				"−70",
				"−60",
				"−50",
				"−40",
				"−30",
				"−20",
				"−10",
				"0",
				"year",
			]);

		// Assert the X-Axis details
		findWidget("Another_BLC1")
			.getXAxisElements()
			.should.eql([
				"Bar Chart",
				"Bubble Chart",
				"Gantt Chart",
				"Image",
				"Label",
				"Line Chart",
				"List",
				"Map",
				"Pie Chart",
				"Scalar",
				"Table",
				"Text",
				"Tree Map",
			]);

		// Set 'Show Units' Misc option to a literal:1.
		findWidget("Another_BLC1")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Show Units")
			.setValue({
				value: "1",
			});
		findWidget("Another_BLC1").closeOptionDialog();

		// Assert the X-Axis details
		findWidget("Another_BLC1")
			.getXAxisElements()
			.should.eql([
				"Bar Chart",
				"Bubble Chart",
				"Gantt Chart",
				"Image",
				"Label",
				"Line Chart",
				"List",
				"Map",
				"Pie Chart",
				"Scalar",
				"Table",
				"Text",
				"Tree Map",
			]);

		// Assert the Y-Axis details shown.
		// With 'Show Units' Misc option set to literal:1. Units label should be included.
		findWidget("Another_BLC1")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"−90",
				"−80",
				"−70",
				"−60",
				"−50",
				"−40",
				"−30",
				"−20",
				"−10",
				"0",
				"year",
			]);

		// Page Refresh
		pageRefresh();

		// Assert the X-Axis details
		findWidget("Another_BLC1")
			.getXAxisElements()
			.should.eql([
				"Bar Chart",
				"Bubble Chart",
				"Gantt Chart",
				"Image",
				"Label",
				"Line Chart",
				"List",
				"Map",
				"Pie Chart",
				"Scalar",
				"Table",
				"Text",
				"Tree Map",
			]);

		// Assert the Y-Axis details shown.
		// With 'Show Units' Misc option set to literal:1. Units label should be included.
		findWidget("Another_BLC1")
			.getYAxisElements({ includeUnits: true })
			.should.eql([
				"−90",
				"−80",
				"−70",
				"−60",
				"−50",
				"−40",
				"−30",
				"−20",
				"−10",
				"0",
				"year",
			]);
	}
);
