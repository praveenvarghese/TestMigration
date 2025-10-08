/*!
 * @AIMMS_FILE=models/NamedViewsModel/TransNet.aimms
 */

scenario("Assert excel Download for named view table", () => {
	loadPage("Main Project/SecondHome");

	findWidget("tableWidget")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget")
		.getNamedViewItem(1)
		.click();

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"16.32 ton",
				"11.73 ton",
				"11.23 ton",
				"16.26 ton",
				"10.36 ton",
				"16.87 ton",
				"10.67 ton",
				"10.11 ton",
				"19.29 ton",
				"14.93 ton",
			],
		]);

	//Click on Table Download-excel Button, and assert the downloaded file
	findWidget("tableWidget")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("tableWidget")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("tableWidget.xlsx", "WebUITemp");

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"16.32 ton",
				"11.73 ton",
				"11.23 ton",
				"16.26 ton",
				"10.36 ton",
				"16.87 ton",
				"10.67 ton",
				"10.11 ton",
				"19.29 ton",
				"14.93 ton",
			],
		]);

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);
});
