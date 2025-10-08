/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario("Validate the named views when ep is removed from current view", () => {
	loadPage("Main Project/ColumnChart/ColumnChart_1");

	findWidget("DemandColumnChart_1")
		.openNamedViewsOptionEditor()
		.clearOptions([
			{
				name: "Default View",
			},
		]);

	findWidget("DemandColumnChart_1")
		.openNamedViewsOptionEditor()
		.getCurrentNamedView()
		.should.eql("Basic View");

	// findWidget("DemandColumnChart_1")
	// 	.openOptionDialog()
	// 	.getOptionEditorHeaderDetails()
	// 	.should.eql({
	// 		"OptionDialog Header": "Demand Data",
	// 		"OptionEditorTab Title": "Named Views",
	// 		"OptionDialog Sub Header": "Basic View",
	// 	});

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.be.equal(10);

	findWidget("DemandColumnChart_1")
		.getTitle()
		.should.eql("Demand Data");

	findWidget("DemandColumnChart_1")
		.getWidgetActionMenuButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getWidgetActions()
		.should.beEqualTo([
			{ title: "(Re)Initialize Input", icon: "aimms-reset", state: "active" },
			{ title: "Modify Demand", icon: "aimms-reset", state: "active" },
		]);

	findWidget("DemandColumnChart_1")
		.getYaxisLabel()
		.should.be.equal("Thousands");

	findWidget("DemandColumnChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Basic View", isSelected: "yes" },
			{ title: "View With Contents Change", isSelected: "no" },
			{ title: "View With Index Change", isSelected: "no" },
			{ title: "View With Chart Settings Change", isSelected: "no" },
			{ title: "View With Pivot Change", isSelected: "no" },
			{ title: "View With Widget Extension Change", isSelected: "no" },
			{ title: "View With Misc Change", isSelected: "no" },
		]);

	findWidget("DemandColumnChart_1")
		.getNamedViewItem(1)
		.click();

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.be.equal(13);

	findWidget("DemandColumnChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getNamedViewItem(2)
		.click();

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.be.equal(13);

	findWidget("DemandColumnChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Basic View", isSelected: "no" },
			{ title: "View With Contents Change", isSelected: "no" },
			{ title: "View With Index Change", isSelected: "yes" },
			{ title: "View With Chart Settings Change", isSelected: "no" },
			{ title: "View With Pivot Change", isSelected: "no" },
			{ title: "View With Widget Extension Change", isSelected: "no" },
			{ title: "View With Misc Change", isSelected: "no" },
		]);

	findWidget("DemandColumnChart_1")
		.getNamedViewItem(4)
		.click();

	findWidget("DemandColumnChart_1")
		.getNumberOfBars()
		.should.be.equal(13);

	findWidget("DemandColumnChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getNamedViewItem(5)
		.click();

	findWidget("DemandColumnChart_1")
		.getWidgetActionMenuButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getWidgetMenuDetails()
		.should.beEqualTo([WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP]);

	findWidget("DemandColumnChart_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("DemandColumnChart_1")
		.getNamedViewItem(6)
		.click();

	findWidget("DemandColumnChart_1")
		.getTitle()
		.should.eql("");
});
