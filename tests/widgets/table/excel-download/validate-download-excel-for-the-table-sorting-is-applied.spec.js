/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario("Assert excel Download for a table where sorting is applied", () => {
	loadPage("Main Project/Sorting/Sorted Table");

	//Assert excel Download for a table where sorting is applied
	findWidget("Sorted_Table_2")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("Sorted_Table_2")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("Sorted_Table_2.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("Sorted_Table_2")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"149.49",
				"292.24",
				"340.34",
				"167.79",
				"496.31",
				"327.28",
				"341.64",
				"56.74",
				"292.93",
				"345.23",
				"198.63",
				"71.84",
				"23.88",
				"383.08",
				"65.77",
			],
			[
				"329.36",
				"357.38",
				"365.76",
				"263.98",
				"311.51",
				"218.88",
				"219.91",
				"179.06",
				"241.37",
				"73.86",
				"253.97",
				"385.85",
				"113.64",
				"492.86",
				"126.99",
			],
			[
				"408.46",
				"249.10",
				"115.49",
				"186.68",
				"471.46",
				"355.83",
				"115.95",
				"1.85",
				"314.60",
				"3.57",
				"87.52",
				"383.33",
				"465.02",
				"179.04",
				"280.81",
			],
		]);

	findWidget("Sorted_Table_2")
		.getwidegtMenuButton()
		.click();

	findWidget("Sorted_Table_2")
		.getWidgetMenuDetails()
		.should.beEqualTo([
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_CSV,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_DOWNLOAD_AS_IMAGE,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_UPLOAD_EXCEL,
			WIDGET_HEADER_BUTTONS.WIDGET_MENU_HELP,
		]);
});
