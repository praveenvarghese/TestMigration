/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate tabbed widget is not supported in non grid pages", () => {
	loadPage("Main Project/SecondHome?ignore-grid-layout=true");

	findWidget("TabbedWidgetWithAllCharts")
		.getTabErrorConfigurationMessage()
		.should.eql(
			`Incompatible (Tabbed Pages) Widget!\n\t\t\t\n\t\t\tPlease convert the page to a Grid Layout for compatibility.`
		);

	loadPage("Main Project/Grid_Page_Custom_Layout?ignore-grid-layout=false");

	findWidget("tabbedWidgetInClassic")
		.getTabErrorConfigurationMessage()
		.should.eql(
			`Incompatible (Tabbed Pages) Widget!\n\t\t\t\n\t\t\tPlease convert the page to a Grid Layout for compatibility.`
		);
});
