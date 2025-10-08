/*!
 * @AIMMS_FILE=models/Bugs/GL4160-CalendarElementAnnotations/CalendarElementText.aimms
 */

scenario("Assert excel Download for table that have element text on element parameters.", () => {
	loadPage("Main Project/home");

	findWidget("tb_test")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("tb_test")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("tb_test.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("tb_test")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["ElementText-2021-07-07", "ElementText-2021-07-08", "ElementText-2021-07-09"],
			["2021-07-07", "2021-07-08", "2021-07-09"],
		]);

	loadPage("Main Project/home");

	findWidget("tb_set")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("tb_set")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("tb_set.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("tb_set")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["Sir Jack", "Sir John", "Sir Joe"],
			["Sir Jack", "Sir John", "Sir Joe"],
		]);
});
