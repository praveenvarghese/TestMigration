/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Test to verify named views in dialog page", () => {
	loadPage("Main Project/DialogPage");

	//Validate Named views are displayed in Dialog Page config page
	findWidget("tableWidget_2")
		.getButtons()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_NAMED_VIEW,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("tableWidget_2")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_2")
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

	findWidget("tableWidget_2")
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

	findWidget("tableWidget_2")
		.openNamedViewsOptionEditor()
		.getDefaultNamedView()
		.should.eql("Basic View");

	findWidget("tableWidget_2")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "tableWidget_2",
			"OptionEditorTab Title": "Named Views",
			"OptionDialog Sub Header": "Basic View",
		});

	//Validate Named views are displayed in Dialog Page

	getPageMenu().navigateToPage("Main Project/Weather History/History Data");

	findWidget("dialogButton").click();

	findWidget("tableWidget_2")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_2")
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

	findWidget("tableWidget_2")
		.getNamedViewItem(2)
		.click();

	findWidget("tableWidget_2")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_2")
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
