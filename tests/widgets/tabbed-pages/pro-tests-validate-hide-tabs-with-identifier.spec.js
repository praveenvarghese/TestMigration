/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Verify Hide tabbed tabs option through identifier", () => {
	loadPage("1.0/Main Project/ColumnChart?mode=server");

	// Validate initial state
	findWidget("TestHideScalar").getValue().should.be.true;

	findWidget("TestHideTabs")
		.getTabbedPagesInfo()
		.should.eql([]);

	findWidget("TestHideTabs")
		.getTabbedWidgetHeight()
		.should.eql(614.5);

	findWidget("TestHideScalar").setValue(false);

	findWidget("TestHideTabs")
		.getTabbedPagesInfo()
		.should.eql([
			{ Name: "Column Chart", Slug: "weather_history", State: "active", CurrentTab: "Yes" },
			{ Name: "Line Chart", Slug: "linechart_1", State: "active", CurrentTab: "No" },
			{ Name: "Area Chart", Slug: "areachart_1", State: "inactive", CurrentTab: "No" },
			{ Name: "Scatter Chart", Slug: "scatterchart_1", State: "active", CurrentTab: "No" },
			{ Name: "", Slug: "splinechart_1", State: "inactive", CurrentTab: "No" },
		]);

	findWidget("TestHideTabs")
		.getTabbedWidgetHeight()
		.should.eql(566.5);
});
