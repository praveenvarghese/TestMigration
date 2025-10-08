/*!
 * @AIMMS_FILE=models/WebUIFrontendStateTestModel/WebUIFrontendStateTestModel.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("When opening a new tab webui-state should update accordingly", () => {
	// We have to add ?_aimms_only_use_page_visibility_api=false to temporarily disable
	// the use of the page visibility api. If we would not disable it, then switching
	// between tabs would already update the LastActiveWebUITab, while we want to test
	// that it is updated just-in-time upon click.
	// Why? Well, this tests for multiple-windows open and then activating the "other"
	// window, then instantly clicking on the page-action button. The E2E test framework
	// unfortunately does not cater for multiple windows, only multiple tabs.
	loadPage(
		"Main Project/home?_aimms_only_use_page_visibility_api=false&webui-state-support=true"
	);

	// Wait until page has been reset:
	findWidget("LastActiveWebUITabDuringMainPageActionExecution")
		.getMultipleScalarModeValue("LastActiveWebUITabDuringMainPageActionExecution")
		.should.be.equal("");

	findWidget("LastActiveWebUITabDuringMainPageActionExecution")
		.getMultipleScalarModeValue(
			"IsListActiveWebUITabEqualToLAWUITDuringMainPageActionExecution"
		)
		.should.be.equal("0");

	findWidget("home")
		.getSecondaryPageActions()
		.singlePageAction()
		.click();

	findWidget("LastActiveWebUITabDuringMainPageActionExecution")
		.getMultipleScalarModeValue(
			"IsListActiveWebUITabEqualToLAWUITDuringMainPageActionExecution"
		)
		.should.be.equal("1");

	loadPageInNewTab("Main Project/Another Page?webui-state-support=true");
	findWidget("another_page").should.exist;

	switchToTab("Main Project/home");

	// Here we assert that the LastActiveWebUITab is still the tab with "Another Page" open,
	// not the tab we just switched back to.
	findWidget("LastActiveWebUITabDuringMainPageActionExecution")
		.getMultipleScalarModeValue(
			"IsListActiveWebUITabEqualToLAWUITDuringMainPageActionExecution"
		)
		.should.be.equal("0");

	findWidget("home")
		.getSecondaryPageActions()
		.singlePageAction()
		.click();

	findWidget("LastActiveWebUITabDuringMainPageActionExecution")
		.getMultipleScalarModeValue(
			"IsListActiveWebUITabEqualToLAWUITDuringMainPageActionExecution"
		)
		.should.be.equal("1");

	// Clean up the other tab (needs bogus assertion, otherwise the RootAction will be optimized to no-op)
	closeTab("Main Project/Another Page");
	findWidget("CurrentPageIds").should.be.a.widgetOfType("table");
});
