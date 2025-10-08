/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Copying a widget and pasting it a new page. Asserting the named view are also copied",
	() => {
		loadPage("Main Project/SecondHome");

		openAppManager().unfoldWidgetContainers([
			"Main Project/SecondHome",
			"Main Project/Weather History",
		]);

		// Copy a widget from current active page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SecondHome",
				widgetName: "tableWidget",
			})
			.clickOnCopy();

		// Paste the copied-widget to another page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Weather History",
			})
			.clickOnPasteWidget();

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Weather History",
				widgetName: "tableWidget_3",
			})
			.clickOnRename()
			.enterName("tableWidget_renamed")
			.pressKeys([SPECIAL_KEYS.enter]);

		getPageMenu().navigateToPage("Main Project/Weather History");

		openPageConfigurator()
			.dragWidget("tableWidget_renamed")
			.toArea("Area A");

		findWidget("tableWidget_3")
			.getWidgetNamedViewButton()
			.click();

		findWidget("tableWidget_3")
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

		findWidget("tableWidget_3")
			.getNamedViewItem(2)
			.click();

		findWidget("tableWidget_3")
			.getNumberOfBars()
			.should.be.equal(372);
	}
);
