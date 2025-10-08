/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validate widget header options for end user mode", () => {
	loadPage("Main Project/home/Application Settings");

	findWidget("Application Settings_1").setValue(false);

	//Side panel Widget
	openPageMenu().navigateToPage("Main Project/home");

	findWidget("home_1")
		.getSidepanels()
		.openSidepanelTab("Global Overview");

	//Scalar on Side Panel
	findWidget("Total Cost of Schedule")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("Total Cost of Schedule")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("Total Cost of Schedule")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	findWidget("Total Cost of Schedule")
		.getWidgetMenu()
		.click();

	findWidget("Total Cost of Schedule")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("Total Cost of Schedule")
		.isWidgetMenuOptionDisplayed(0)
		.should.be.eql(false);

	//Bar Chart on Side Panel
	findWidget("Testbar")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("Testbar")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("Testbar")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	findWidget("Testbar")
		.getWidgetMenu()
		.click();

	findWidget("Testbar")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("Testbar")
		.isWidgetMenuOptionDisplayed(1)
		.should.be.eql(false);

	findWidget("home_1")
		.getSidepanels()
		.openSidepanelTab("Passengers Data");

	//Table on Side Panel
	findWidget("SP_DailyPassengers")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("SP_DailyPassengers")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("SP_DailyPassengers")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	findWidget("SP_DailyPassengers")
		.getWidgetMenu()
		.click();

	findWidget("SP_DailyPassengers")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("SP_DailyPassengers")
		.isWidgetMenuOptionDisplayed(1)
		.should.be.eql(false);

	findWidget("home_1")
		.getSidepanels()
		.closeSidepanelTab();

	//Navigate to Switch Page
	openPageMenu().navigateToPage("Main Project/Switch Page");

	// Unfold the Page Actions
	findWidget("switch_page")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	// Click on the action that opens a dialog page
	findWidget("switch_page")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	findWidget("DP_PlaneCharacteristics")
		.isWidgetMenuButtonDisplayed()
		.should.be.eql(true);

	findWidget("DP_PlaneCharacteristics")
		.isWidgetMenuOpened()
		.should.be.eql(false);

	findWidget("DP_PlaneCharacteristics")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	findWidget("DP_PlaneCharacteristics")
		.getWidgetMenu()
		.click();

	findWidget("DP_PlaneCharacteristics")
		.isWidgetMenuOpened()
		.should.be.eql(true);

	findWidget("DP_PlaneCharacteristics")
		.isWidgetMenuOptionDisplayed(1)
		.should.be.eql(false);

	// Close the Dialog
	getDialog()
		.findButton("OK")
		.click();
});
