/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Verify Hide tabbed tabs option through literal", () => {
	loadPage("Main Project/SecondHome");

	findWidget("TabbedWidgetWithAllCharts")
		.openTabbedPagesOptionEditor()
		.setOptions([
			{
				name: "Hide Tab Headers",
				value: "true",
				valueType: "LITERAL",
				optionEditorType: "BOOLEAN",
				sliceInfo: null,
			},
		]);

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([]);

	findWidget("TabbedWidgetWithAllCharts")
		.openTabbedPagesOptionEditor()
		.setOptions([
			{
				name: "Hide Tab Headers",
				value: "false",
				valueType: "LITERAL",
				optionEditorType: "BOOLEAN",
				sliceInfo: null,
			},
		]);

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "Yes" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);
});
