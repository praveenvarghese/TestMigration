/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Test to verify named views in sidepanel page", () => {
	loadPage("Main Project/SidePanelPage");

	//Validate Named views are displayed in Sidepanel config page
	findWidget("tableWidget_1")
		.getButtons()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_NAMED_VIEW,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("tableWidget_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_1")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Basic View", isSelected: "yes" },
			{ title: "View With Contents Change", isSelected: "no" },
			{ title: "View With Change Widget Type", isSelected: "no" },
			{ title: "View With Pivot Change", isSelected: "no" },
			{ title: "View With Identifier Settings Change", isSelected: "no" },
			{ title: "View With Widget Extensions", isSelected: "no" },
			{ title: "View With Miscellaneous", isSelected: "no" },
		]);

	findWidget("tableWidget_1")
		.openNamedViewsOptionEditor()
		.getNamedWidgetViewList()
		.should.eql([
			{
				ViewsTitle: [
					"Basic View",
					"View With Contents Change",
					"View With Change Widget Type",
					"View With Pivot Change",
					"View With Identifier Settings Change",
					"View With Widget Extensions",
					"View With Miscellaneous",
				],
				ViewsName: [
					"Basic View",
					"View With Contents Change",
					"View With Change Widget Type",
					"View With Pivot Change",
					"View With Identifier Settings Change",
					"View With Widget Extensions",
					"View With Miscellaneous",
				],
			},
		]);

	findWidget("tableWidget_1")
		.openNamedViewsOptionEditor()
		.getDefaultNamedView()
		.should.eql("Basic View");

	findWidget("tableWidget_1")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "tableWidget_1",
			"OptionEditorTab Title": "Named Views",
			"OptionDialog Sub Header": "Basic View",
		});

	//Validate Named views are displayed in Sidepanel Page

	getPageMenu().navigateToPage("Main Project/Cost Overview/Data");

	findWidget("new_page")
		.getSidepanels()
		.openSidepanelTab("Named Views");

	findWidget("tableWidget_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_1")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Basic View", isSelected: "yes" },
			{ title: "View With Contents Change", isSelected: "no" },
			{ title: "View With Change Widget Type", isSelected: "no" },
			{ title: "View With Pivot Change", isSelected: "no" },
			{ title: "View With Identifier Settings Change", isSelected: "no" },
			{ title: "View With Widget Extensions", isSelected: "no" },
			{ title: "View With Miscellaneous", isSelected: "no" },
		]);

	findWidget("tableWidget_1")
		.getNamedViewItem(2)
		.click();

	findWidget("tableWidget_1")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_1")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Basic View", isSelected: "no" },
			{ title: "View With Contents Change", isSelected: "no" },
			{ title: "View With Change Widget Type", isSelected: "yes" },
			{ title: "View With Pivot Change", isSelected: "no" },
			{ title: "View With Identifier Settings Change", isSelected: "no" },
			{ title: "View With Widget Extensions", isSelected: "no" },
			{ title: "View With Miscellaneous", isSelected: "no" },
		]);
});
