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

		// cut a widget from current active page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SecondHome",
				widgetName: "tableWidget",
			})
			.clickOnCut();

		// Paste the cut-widget to another page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Weather History",
			})
			.clickOnPasteWidget();

		getPageMenu().navigateToPage("Main Project/Weather History");

		openPageConfigurator()
			.dragWidget("tableWidget")
			.toArea("Area A");

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
	}
);
