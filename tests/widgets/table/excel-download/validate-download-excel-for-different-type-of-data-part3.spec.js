/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Assert excel Download for differnt types of Data", () => {
	loadPage("Main Project/TablePage?table-v2=true");

	findWidget("Current Selections")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("Current Selections")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("Current Selections.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("Current Selections")
		.getGridValues()
		.should.be.shallowDeepEqual([[""], ["Cayenne"], [""], [""], [""]]);

	findWidget("Current Selections")
		.getwidegtMenuButton()
		.click();

	findWidget("Current Selections")
		.getWidgetMenuDetails()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
		]);
});
