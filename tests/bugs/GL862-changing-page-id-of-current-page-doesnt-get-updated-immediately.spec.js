/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Changing PageID of the current Page doesnt get updated immediately", () => {
	loadPage("Main Project/SecondHome");

	findWidget("TabbedPageTable")
		.getCell(0, 1)
		.setValue("linechart_1");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

	findWidget("TabbedPageTable")
		.getCell(0, 2)
		.setValue("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(1, 2)
		.setValue("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(2, 2)
		.setValue("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(3, 2)
		.setValue("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Spline Chart", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(4, 2)
		.setValue("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Spline Chart", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedPageTable")
		.getCell(5, 2)
		.setValue("inactive");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Spline Chart", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TabbedWidgetWithAllCharts")
		.getTabErrorConfigurationMessage()
		.should.eql("No active tabs have been defined.");
});
