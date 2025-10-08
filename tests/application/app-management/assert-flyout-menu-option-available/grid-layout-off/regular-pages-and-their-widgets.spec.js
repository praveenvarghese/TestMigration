/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"With Grid-Layout off, checking for Flyout menu options available for Regular pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		// Open the App Manager.
		openAppManager();

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList, pageOperations));

		getAppManager().unfoldWidgetContainers(["Main Project/home"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "Clear Schedule",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
				widgetName: "Node",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Collapse all nodes to avoid scrolling issue when it does not fit in viewport
		getAppManager().collapseAllNodes();

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Second Page/Widgets Empty Contents",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(classicPageList, pageOperations));

		getAppManager().unfoldWidgetContainers(["Main Project/Second Page/Widgets Empty Contents"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Second Page/Widgets Empty Contents",
				widgetName: "Barchart",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Second Page/Widgets Empty Contents",
				widgetName: "barlinechart",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
