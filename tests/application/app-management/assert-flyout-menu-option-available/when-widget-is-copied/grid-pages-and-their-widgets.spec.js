/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"When a widget is copied, checking for Flyout menu options available for Grid pages at root, child and inner-child levels. And for their respective widgets.",
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
				pagePath: "Main Project",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Legend1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Author Portrait1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/Custom Grid Page",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page/Custom Grid Page"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/Custom Grid Page",
				widgetName: "Booksdata",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations, widgetOperationPaste));

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page/A Grid Page But Hidden"]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
				widgetName: "Data1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
