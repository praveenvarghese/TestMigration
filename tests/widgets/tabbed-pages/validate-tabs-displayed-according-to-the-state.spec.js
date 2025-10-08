/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate tab navigation and widgets displayed in tabbed pages widget", () => {
	loadPage("Main Project/SecondHome");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "Yes" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(0, 2)
		.setValue("inactive");

	findWidget("TabbedPageTable")
		.getCell(0, 2)
		.getValue()
		.should.eql("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(0, 2)
		.setValue("hidden");

	findWidget("TabbedPageTable")
		.getCell(0, 2)
		.getValue()
		.should.eql("hidden");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);
});
