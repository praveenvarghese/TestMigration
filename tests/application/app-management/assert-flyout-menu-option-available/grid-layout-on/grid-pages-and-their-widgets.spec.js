/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"On a PageV2 app, checking for Flyout menu options available for Grid pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		// Assert the flyout menu options available
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations));

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Book Legend1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page",
				widgetName: "Author Portrait1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/Custom Grid Page",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations));

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page/Custom Grid Page"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/Custom Grid Page",
				widgetName: "Booksdata",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperations));

		getAppManager().unfoldWidgetContainers(["Main Project/Test Page/A Grid Page But Hidden"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Test Page/A Grid Page But Hidden",
				widgetName: "Data1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
