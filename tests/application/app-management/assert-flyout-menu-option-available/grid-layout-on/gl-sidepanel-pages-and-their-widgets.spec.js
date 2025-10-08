/*!
 * @AIMMS_FILE=models/PageV2/SidepanelPageV2/SidepanelPageV2.aimms
 */

scenario(
	"With Grid-Layout enabled, checking for Flyout menu options available for GL Sidepanel pages at root, child and inner-child levels. And for their respective widgets.",
	() => {
		loadPage("Main Project/home");

		// Open the App Manager.
		openAppManager();

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/standardPanelWithWidgets",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperationsWithNoVisiblity));

		getAppManager().unfoldWidgetContainers(["Main Project/home/standardPanelWithWidgets"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/standardPanelWithWidgets",
				widgetName: "standardTable",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/standardPanelWithWidgets",
				widgetName: "standardLineChart",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/customPanelWithWidgets",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(pageList, pageOperationsWithNoVisiblity));

		getAppManager().unfoldWidgetContainers(["Main Project/home/customPanelWithWidgets"]);

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/customPanelWithWidgets",
				widgetName: "standardTable_1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));

		// Assert the flyout menu options available
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home/customPanelWithWidgets",
				widgetName: "standardLineChart_1",
			})
			.getContextMenuOptions()
			.should.eql(getExpected(widgetOperations));
	}
);
