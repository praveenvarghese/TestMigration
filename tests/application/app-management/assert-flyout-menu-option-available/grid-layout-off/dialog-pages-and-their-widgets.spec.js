/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"With Grid-Layout off, checking for Flyout menu options available for Dialog pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		// Open the App Manager.
		openAppManager();

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialogs",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList, pageOperationsWithNoVisiblity));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialogs/ValidationErrors",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList, pageOperationsWithNoVisiblity));

		getAppManager().unfoldWidgetContainers(["Main Project/Dialogs/ValidationErrors"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialogs/ValidationErrors",
				widgetName: "ValidationErrorText",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Dialogs/ValidationErrors",
				widgetName: "Retry",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
