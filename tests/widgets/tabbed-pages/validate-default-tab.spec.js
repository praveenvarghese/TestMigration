/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate the behaviour of the default tab option", () => {
	loadPage("Main Project/ThirdHome");

	// Upon entering the page, no active tab is specified, so a message should appear that the tab cannot be loaded.
	findWidget("TabbedWidgetWithAllCharts_1")
		.getTabErrorConfigurationMessage()
		.should.eql(
			"Unable to display tab contents.\n\t\t\t\t\t\t\tYou cannot configure the current page to display on this tab,\n\t\t\t\t\t\t\tnor can it show other tabbed pages with the current page being part of it.\n\t\t\t\t\t\t\tThis would lead to infinite recursion."
		);

	// Specify an active tab
	findWidget("Selected Tab").setValue("scatterchart_1");

	findWidget("TabbedWidgetWithAllCharts_1")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	// Navigate to a different tab
	findWidget("TabbedWidgetWithAllCharts_1").navigateToTabbedPage("Line Chart");

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

	// Now leave the page and return back
	loadPage("Main Project/Home");
	loadPage("Main Project/ThirdHome");

	// The scatterchart should be the landing tab
	findWidget("TabbedWidgetWithAllCharts_1")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);
});
