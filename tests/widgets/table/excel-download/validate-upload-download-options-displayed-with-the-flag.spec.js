/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Assert Download and upload options are displayed only with the Flag", () => {
	loadPage("Main Project/home");

	// Validate Upload and Download options doesnt display whithout the flag
	findWidget("PepperData").movePointerToWidget(10, 10);

	findWidget("PepperData")
		.getButtons()
		.should.eql([
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FILTERS,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
			WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
		]);

	findWidget("PepperData")
		.getwidegtMenuButton()
		.click();

	findWidget("PepperData")
		.getWidgetMenuDetails()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
		]);

	//Click on Table Download-excel Button, and assert the downloaded file
	findWidget("PepperData")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("PepperData")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("PepperData.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("PepperData")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["50,000 Scoville"],
			["50,000 Scoville"],
			["100,000 Scoville"],
		]);
});
