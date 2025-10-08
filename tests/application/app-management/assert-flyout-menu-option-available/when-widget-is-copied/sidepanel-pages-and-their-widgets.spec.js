/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"When a widget is copied, checking for Flyout menu options available for Sidepanel pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		openAppManager().unfoldWidgetContainers(["Main Project/home"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "flagsonhome",
			})
			.clickOnCopy();

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperationsWithNoVisiblity, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/SidePanels"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels",
				widgetName: "SidePanels",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels/MKG",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperationsWithNoVisiblity, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/SidePanels/MKG"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels/MKG",
				widgetName: "Charts",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels/MKG",
				widgetName: "SelectedBook_1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
