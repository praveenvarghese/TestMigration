/*!
 * @AIMMS_FILE=models/ScatterChartBasicModel/ColumnChartBasics.aimms
 */

scenario("Check whether widget actions work fine on a scatter chart", () => {
	loadPage("Main Project/WidgetActionTests");

	// Clear the display domain through a widget action and verify that the widget becomes empty as a result.
	findWidget("WA1")
		.getWidgetActionMenuButton()
		.click();

	findWidget("WA1")
		.getWidgetActionDetails(0)
		.click();

	findWidget("WA1")
		.getEmptyMessage()
		.should.eql("No Data");

	// Set the display domain to 1 through a widget action and verify that the widget becomes filled again as a result.
	findWidget("WA1")
		.getWidgetActionMenuButton()
		.click();

	findWidget("WA1")
		.getWidgetActionDetails(1)
		.click();

	findWidget("WA1")
		.getNumberOfPoints()
		.should.eql(55);
});
