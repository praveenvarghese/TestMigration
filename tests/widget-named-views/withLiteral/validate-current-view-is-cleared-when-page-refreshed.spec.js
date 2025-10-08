/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Validate current named view is cleared when page is refreshed", () => {
	loadPage("Main Project/Weather History/History Data?_aimms_only_persistence.write=true");

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.editView(0, {
			value: "First View",
			type: "literal",
		});

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.getDefaultNamedView()
		.should.eql("");

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("First View");

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.addNamedWidgetView({
			value: "Second View",
			type: "literal",
		});

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("Second View");

	pageRefresh();

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("");

	findWidget("Weather Data")
		.openNamedViewsOptionEditor()
		.getDefaultNamedView()
		.should.eql("");
});
