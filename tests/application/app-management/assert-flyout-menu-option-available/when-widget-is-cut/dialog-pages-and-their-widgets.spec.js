/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"When a widget is cut, checking for Flyout menu options available for Dialog pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		openAppManager().unfoldWidgetContainers(["Main Project/home"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "flagsonhome",
			})
			.clickOnCut();

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperationsWithNoVisiblity, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Dialog Pages"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages",
				widgetName: "AantalHoofdstukken_1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages/Help",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperationsWithNoVisiblity, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Dialog Pages/Help"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages/Help",
				widgetName: "AllSidePanels",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialog Pages/Help",
				widgetName: "BookCoverImage",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
