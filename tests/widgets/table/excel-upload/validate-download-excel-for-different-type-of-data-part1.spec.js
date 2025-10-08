/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario("Assert excel Download for differnt types of Data", () => {
	loadPage("Main Project/TablePage?table-v2=true");

	//Click on Table Download-excel Button, and assert the downloaded file
	findWidget("Yield Table")
		.mouseHover()
		.getExcelDownloadButton()
		.click();

	findWidget("Yield Table")
		.mouseHover()
		.getExcelUploadButton()
		.uploadExcelFile("Yield Table.xlsx", "WebUITemp");

	getLogMessage()
		.getUnreadMessagesCount()
		.should.eql(1);

	findWidget("Yield Table")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["832.0 ton", "690.0 ton", "768.0 ton", "962.0 ton", "895.0 ton", "139.0 ton"],
			["394.0 ton", "98.0 ton", "768.0 ton", "374.0 ton", "778.0 ton", "943.0 ton"],
			["612.0 ton", "284.0 ton", "691.0 ton", "655.0 ton", "144.0 ton", "684.0 ton"],
			["681.0 ton", "380.0 ton", "678.0 ton", "804.0 ton", "947.0 ton", "156.0 ton"],
			["336.0 ton", "87.0 ton", "993.0 ton", "884.0 ton", "733.0 ton", "993.0 ton"],
			["817.0 ton", "293.0 ton", "279.0 ton", "820.0 ton", "560.0 ton", "329.0 ton"],
			["855.0 ton", "303.0 ton", "816.0 ton", "345.0 ton", "760.0 ton", "958.0 ton"],
			["419.0 ton", "242.0 ton", "89.0 ton", "304.0 ton", "342.0 ton", "77.0 ton"],
			["339.0 ton", "846.0 ton", "630.0 ton", "582.0 ton", "673.0 ton", "84.0 ton"],
			["753.0 ton", "747.0 ton", "962.0 ton", "759.0 ton", "259.0 ton", "239.0 ton"],
			["839.0 ton", "126.0 ton", "321.0 ton", "791.0 ton", "288.0 ton", "54.0 ton"],
			["541.0 ton", "366.0 ton", "777.0 ton", "559.0 ton", "140.0 ton", "538.0 ton"],
			["378.0 ton", "544.0 ton", "477.0 ton", "902.0 ton", "120.0 ton", "18.0 ton"],
			["715.0 ton", "732.0 ton", "732.0 ton", "284.0 ton", "215.0 ton", "366.0 ton"],
			["639.0 ton", "656.0 ton", "528.0 ton", "672.0 ton", "623.0 ton", "894.0 ton"],
		]);

	openPageMenu().navigateToPage("Main Project/TablePage");

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
		.should.eql(2);

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
