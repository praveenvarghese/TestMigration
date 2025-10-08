/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario(
	"Create a widget from scratch in page V2 and add named view to it and validate added named view is dispalyed for added widget.",
	() => {
		loadPage("Main Project/LineChart");

		openPageConfigurator()
			.getAddWidgetDialogForArea("Area A")
			.selectType("tabbedpages")
			.enterName("newtabbedpagewidget")
			.clickAddWidgetButton();

		closePageConfigurator();

		findWidget("newtabbedpagewidget")
			.openTabbedPagesOptionEditor()
			.setOptions([
				{
					name: "Tabs",
					value: "tabbedPagesFirst",
					valueType: "identifier",
				},
			]);

		findWidget("newtabbedpagewidget")
			.getTabbedPagesInfo()
			.should.eql([
				{
					Name: "Column Chart",
					Slug: "weather_history",
					State: "active",
					CurrentTab: "Yes",
				},
				{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
				{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
				{
					Name: "Scatter Chart",
					Slug: "scatterchart_1",
					State: "active",
					CurrentTab: "No",
				},
				{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
			]);

		findWidget("newtabbedpagewidget")
			.getTabErrorConfigurationMessage()
			.should.eql(
				"Unable to display tab contents.\n\t\t\t\t\t\t\tYou cannot configure the current page to display on this tab,\n\t\t\t\t\t\t\tnor can it show other tabbed pages with the current page being part of it.\n\t\t\t\t\t\t\tThis would lead to infinite recursion."
			);

		findWidget("newtabbedpagewidget").navigateToTabbedPage("Line Chart");

		findWidget("linechart_1")
			.getVisibleWidgets()
			.should.eql(["SelectSomeCenters_3", "DemandColumnChart_3", "SelectedFactory_4"]);

		findWidget("newtabbedpagewidget").navigateToTabbedPage("Scatter Chart");

		findWidget("scatterchart_1")
			.getVisibleWidgets()
			.should.eql(["SelectSomeCenters_11", "DemandColumnChart_11", "SelectedFactory_16"]);
	}
);
