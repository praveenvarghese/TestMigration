/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"With Grid-Layout off, checking for Flyout menu options available for Sidepanel pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		// Open the App Manager.
		openAppManager();

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Main Side Panel",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList, pageOperationsWithNoVisiblity));

		getAppManager().unfoldWidgetContainers(["Main Project/Main Side Panel"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Main Side Panel",
				widgetName: "Total Cost of Schedule",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Main Side Panel",
				widgetName: "Testbar",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		getAppManager().collapseAllNodes();

		getAppManager().unfoldPageNodes(["Main Project/SidePanels/SP_1"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SidePanels/SP_1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList, pageOperationsWithNoVisiblity));
	}
);
