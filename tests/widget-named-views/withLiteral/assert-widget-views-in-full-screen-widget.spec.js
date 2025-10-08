/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario(
	"Copying a widget and pasting it a new page. Asserting the named view are also copied",
	() => {
		loadPage("Main Project/SecondHome");

		findWidget("tableWidget").goInFullScreenMode();

		findWidget("tableWidget")
			.getButtons()
			.should.beEqualTo([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_NAMED_VIEW,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		findWidget("tableWidget")
			.getWidgetNamedViewButton()
			.click();

		findWidget("tableWidget")
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

		findWidget("tableWidget")
			.getNamedViewItem(2)
			.click();

		findWidget("tableWidget")
			.getNumberOfBars()
			.should.be.equal(372);

		findWidget("tableWidget")
			.getWidgetNamedViewButton()
			.click();

		findWidget("tableWidget")
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

		findWidget("tableWidget")
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

		findWidget("tableWidget")
			.openNamedViewsOptionEditor()
			.getDefaultNamedView()
			.should.eql("Basic View");

		findWidget("tableWidget")
			.openNamedViewsOptionEditor()
			.getCurrentNamedView()
			.should.eql("View With Change Widget Type");
	}
);
