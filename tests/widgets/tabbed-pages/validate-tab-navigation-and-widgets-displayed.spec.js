/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate tab navigation and widgets displayed in tabbed pages widget", () => {
	loadPage("Main Project/SecondHome");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabErrorConfigurationMessage()
		.should.eql(
			"Unable to display tab contents.\n\t\t\t\t\t\t\tYou cannot configure the current page to display on this tab,\n\t\t\t\t\t\t\tnor can it show other tabbed pages with the current page being part of it.\n\t\t\t\t\t\t\tThis would lead to infinite recursion."
		);

	findWidget("TabbedWidgetWithAllCharts").navigateToTabbedPage("Line Chart");

	findWidget("linechart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

	findWidget("TabbedWidgetWithAllCharts").navigateToTabbedPage("Scatter Chart");

	findWidget("scatterchart_1")
		.getVisibleWidgets()
		.should.eql(["SelectSomeCenters_11", "DemandColumnChart_11", "SelectedFactory_16"]);

	findWidget("TabbedWidgetWithAllCharts").navigateToTabbedPage("Column Chart");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabErrorConfigurationMessage()
		.should.eql(
			"Unable to display tab contents.\n\t\t\t\t\t\t\tYou cannot configure the current page to display on this tab,\n\t\t\t\t\t\t\tnor can it show other tabbed pages with the current page being part of it.\n\t\t\t\t\t\t\tThis would lead to infinite recursion."
		);

	findWidget("TabbedWidgetWithAllCharts").navigateToTabbedPage("Area Chart");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabErrorConfigurationMessage()
		.should.eql(
			"Unable to display tab contents.\n\t\t\t\t\t\t\tYou cannot configure the current page to display on this tab,\n\t\t\t\t\t\t\tnor can it show other tabbed pages with the current page being part of it.\n\t\t\t\t\t\t\tThis would lead to infinite recursion."
		);
});
