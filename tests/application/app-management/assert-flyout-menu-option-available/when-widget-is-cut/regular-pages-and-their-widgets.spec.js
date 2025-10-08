/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"When a widget is cut, checking for Flyout menu options available for Regular pages at root, child and inner-child levels. And for their respective widgets.",
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
				pagePath: "Main Project/Book Corner",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Book Corner"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner",
				widgetName: "Book Legend",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner",
				widgetName: "Selected Book Set",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/WH",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Book Corner/WH"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/WH",
				widgetName: "Mooietekst",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Book Corner/WH",
				widgetName: "Plaatje",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
