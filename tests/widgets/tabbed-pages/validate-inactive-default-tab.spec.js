/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate the default tab option in combination with an inactive tab", () => {
	loadPage("Main Project/ThirdHome");

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

	// On another page, change the 'active' state of this tab to 'inactive'
	loadPage("Main Project/SecondHome");
	findWidget("TabbedPageTable")
		.getCell(4, 2)
		.setValue("inactive");

	// Return to the original page.
	loadPage("Main Project/ThirdHome");

	// The scatterchart cannot be the landing page anymore, so a message is expected.
	findWidget("TabbedWidgetWithAllCharts_1")
		.getTabErrorConfigurationMessage()
		.should.eql("Failed to load the configured tab as the active one.");
});
