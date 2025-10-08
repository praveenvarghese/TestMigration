/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Asserting Bar-Line chart visibility controlled through it's Misc option.", () => {
	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

	// Close the Page Manager sidebar
	closeAppManager();

	// Assert the widgets shown on the Page.
	findWidget("other_bar-line_charts")
		.getVisibleWidgets()
		.should.eql(["Another_BLC1", "Another_BLC2", "Another_BLC3"]);

	// Open SidePanel and control the Visibility flags
	findWidget("other_bar-line_charts")
		.getSidepanels()
		.openSidepanelTab("Widget Settings");
	findWidget("Visibility Control").setValue("Visibility2", false);

	//Assert the widgets now shown on the Page.
	findWidget("other_bar-line_charts")
		.getVisibleWidgets()
		.should.eql(["Another_BLC1", "Another_BLC3"]);

	findWidget("Visibility Control").setValue("Visibility", false);
	// Assert the widgets now shown on the Page.
	findWidget("other_bar-line_charts")
		.getVisibleWidgets()
		.should.eql(["Another_BLC3"]);

	// Navigate to another page
	getPageMenu().navigateToPage("Main Project/Second Page/Widgets Empty Contents");

	// Assert the widgets shown on the Page.
	findWidget("all_widgets")
		.getVisibleWidgets()
		.should.eql([
			"Barchart",
			"Linechart",
			"Piechart",
			"Treemap",
			"List_1",
			"Bubblechart",
			"Ganttchart",
			"Table",
		]);

	loadPage("Main Project/Item Actions/Charts/Bar-Line Chart Data/Other Bar-Line Charts");

	// Assert the widgets shown on the Page.
	findWidget("other_bar-line_charts")
		.getVisibleWidgets()
		.should.eql(["Another_BLC3"]);

	// Open SidePanel and control the Visibility flags
	findWidget("other_bar-line_charts")
		.getSidepanels()
		.openSidepanelTab("Widget Settings");

	findWidget("Visibility Control").setValue("Visibility2", true);
	// Assert the widgets now shown on the Page.
	findWidget("other_bar-line_charts")
		.getVisibleWidgets()
		.should.eql(["Another_BLC2", "Another_BLC3"]);

	findWidget("Visibility Control").setValue("Visibility", true);
	// Assert the widgets now shown on the Page.
	findWidget("other_bar-line_charts")
		.getVisibleWidgets()
		.should.eql(["Another_BLC1", "Another_BLC2", "Another_BLC3"]);

	// Navigate to another page
	getPageMenu().navigateToPage("Main Project/Second Page/Widgets Empty Contents");

	// Assert the widgets shown on the Page.
	findWidget("all_widgets")
		.getVisibleWidgets()
		.should.eql([
			"Barchart",
			"Linechart",
			"Piechart",
			"Treemap",
			"List_1",
			"Bubblechart",
			"Ganttchart",
			"Table",
			"barlinechart",
		]);
});
