/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario("Validate the named views when ep is added to default view", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("CChart_1")
		.openNamedViewsOptionEditor()
		.setOptions([
			{
				name: "Default View",
				value: "ep_NamedViews2",
			},
		]);

	findWidget("scatterchart_1").getOptionDialog().should.exist;

	findWidget("CChart_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Cost Overview",
			"OptionEditorTab Title": "Named Views",
			"OptionDialog Sub Header": "Named View 3",
		});

	// // Close "Application Settings" option Editor
	// findWidget("scatterchart_1").closeOptionDialog();

	findWidget("SelectNameViews").select("Named View 2");

	// Verify Page Settings Option editor is available
	findWidget("scatterchart_1").getOptionDialog().should.exist;

	findWidget("CChart_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Cost Overview",
			"OptionEditorTab Title": "Named Views",
			"OptionDialog Sub Header": "Named View 2",
		});

	findWidget("CChart_1")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("Named View 2");

	findWidget("CChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart_1")
		.getNamedViewItem(2)
		.click();

	// Verify Page Settings Option editor is available
	findWidget("scatterchart_1").getOptionDialog().should.exist;
});
