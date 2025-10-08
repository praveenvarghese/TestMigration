/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Assert excel Download for differnt types of Data", () => {
	loadPage("Main Project/newFilterPage");

	findWidget("filterDateTime")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("filterDateTime")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("filterDateTime.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("filterDateTime")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["2020-02-16 00:00", "", "2020-02-11 00:00"],
			["", "2020-07-02 00:00", "2020-02-27 00:00"],
			["", "", "2020-12-29 00:00"],
		]);

	loadPage("Main Project/newFilterPage");

	findWidget("DecimalFilter")
		.getwidegtMenuButton()
		.click();

	findWidget("DecimalFilter")
		.getWidgetMenuDetails()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
		]);

	findWidget("DecimalFilter")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("DecimalFilter")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("DecimalFilter.xlsx", "WebUITemp");

	findWidget("DecimalFilter").getEmptyWidgetMessage().should.exist;
});
