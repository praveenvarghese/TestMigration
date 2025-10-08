/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Assert excel Download for sidepanel and dialog page", () => {
	loadPage("Main Project/home");

	//Click on Table Download-excel Button, and assert the downloaded file

	findWidget("home_1")
		.getSidepanels()
		.openSidepanelTab("Passengers Data");

	findWidget("SP_DailyPassengers")
		.getwidegtMenuButton()
		.click();

	findWidget("SP_DailyPassengers")
		.getWidgetMenuDetails()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
		]);

	findWidget("SP_DailyPassengers")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("SP_DailyPassengers")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("SP_DailyPassengers.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("SP_DailyPassengers")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["", "300.00", "260.00", "130.00", "90.00", "100.00", "50.00"],
			["275.00", "", "740.00", "200.00", "150.00", "300.00", "63.00"],
			["170.00", "820.00", "", "240.00", "190.00", "80.00", "45.00"],
			["80.00", "240.00", "430.00", "", "350.00", "70.00", "30.00"],
			["60.00", "170.00", "380.00", "310.00", "", "55.00", "15.00"],
			["98.00", "160.00", "140.00", "80.00", "25.00", "", "40.00"],
			["30.00", "50.00", "40.00", "20.00", "12.00", "75.00", ""],
		]);

	openPageMenu().navigateToPage("Main Project/Switch Page");

	// Close the PageManager
	closeAppManager();

	// Unfold the Page Actions
	findWidget("switch_page")
		.getSecondaryPageActions()
		.clickHamburgerButton();

	// Click on the action that opens a dialog page
	findWidget("switch_page")
		.getSecondaryPageActions()
		.getPageActionV2Details(0)
		.click();

	// Click on Table Download-CSV Button, and assert the downloaded file
	findWidget("DP_PlaneCharacteristics")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("DP_PlaneCharacteristics")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("DP_PlaneCharacteristics.xlsx", "WebUITemp");

	findWidget("DP_PlaneCharacteristics")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["130.00", "50.00", "60.00"],
			["65.00", "20.00", "28.00"],
			["1,200.00", "600.00", "670.00"],
			["7.00", "50.00", "20.00"],
		]);

	findWidget("DP_PlaneCharacteristics")
		.getwidegtMenuButton()
		.click();

	findWidget("DP_PlaneCharacteristics")
		.getWidgetMenuDetails()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
		]);
});
