/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario("Validate View name is displayed is displayed in the widget option dialog header", () => {
	loadPage("Main Project/SecondHome");

	findWidget("tableWidget")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget")
		.getNamedViewItem(1)
		.click();

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"16.32 ton",
				"11.73 ton",
				"11.23 ton",
				"16.26 ton",
				"10.36 ton",
				"16.87 ton",
				"10.67 ton",
				"10.11 ton",
				"19.29 ton",
				"14.93 ton",
			],
		]);

	findWidget("tableWidget")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "tableWidget",
			"OptionEditorTab Title": "Contents",
			"OptionDialog Sub Header": "View With Contents Change",
		});
});
