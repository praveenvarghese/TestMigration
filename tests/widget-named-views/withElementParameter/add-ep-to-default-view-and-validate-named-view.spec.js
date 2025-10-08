/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario("Validate the named views when ep is added to default view", () => {
	loadPage("Main Project/ScatterChart/ScatterChart_1");

	findWidget("CChart_1")
		.getNumberOfBars()
		.should.be.equal(31);

	findWidget("CChart_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Cost Overview",
			"OptionEditorTab Title": "Contents",
			"OptionDialog Sub Header": "Named View 1",
		});

	findWidget("CChart_1")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("Named View 1");

	findWidget("CChart_1")
		.openNamedViewsOptionEditor()
		.setOptions([
			{
				name: "Default View",
				value: "ep_NamedViews2",
			},
		]);

	findWidget("CChart_1")
		.getNumberOfPoints()
		.should.be.equal(31);

	findWidget("CChart_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "Cost Overview",
			"OptionEditorTab Title": "Named Views",
			"OptionDialog Sub Header": "Named View 3",
		});

	findWidget("CChart_1")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("Named View 3");

	// Close "Application Settings" option Editor
	findWidget("scatterchart_1").closeOptionDialog();

	findWidget("CChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("CChart_1")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Named View 3", isSelected: "yes" },
			{ title: "Named View 2", isSelected: "no" },
			{ title: "Named View 1", isSelected: "no" },
		]);

	findWidget("CChart_1")
		.getNamedViewItem(2)
		.click();

	findWidget("CChart_1")
		.getNumberOfBars()
		.should.be.equal(31);
});
