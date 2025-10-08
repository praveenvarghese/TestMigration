/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate the behaviour of the active tab option", () => {
	loadPage("Main Project/ActiveTab");

	findWidget("ActiveTab")
		.getValue()
		.should.eql("scatterchart_1");

	findWidget("ActiveTabWidget")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("scatterchart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_11", "DemandColumnChart_11", "SelectedFactory_16"]);

	findWidget("ActiveTabWidget").navigateToTabbedPage("Line Chart");

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

	findWidget("ActiveTabWidget")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("ActiveTab")
		.getValue()
		.should.eql("linechart_1");

	// Navigate to a different page
	getPageMenu().navigateToPage("Main Project/Home");

	// Return to the original page
	getPageMenu().navigateToPage("Main Project/ActiveTab");

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

	findWidget("ActiveTabWidget")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "No" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "Yes" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("ActiveTab")
		.getValue()
		.should.eql("linechart_1");
});
