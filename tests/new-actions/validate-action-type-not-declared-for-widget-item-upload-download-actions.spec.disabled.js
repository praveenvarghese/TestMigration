/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario(
	"Validate widget/item action upload/download procedure action type is not declared then its treated as normal procedure",
	() => {
		loadPage("Main Project/widget_action_page");

		//Check case sensitivity for widget action upload procedure action type
		findWidget("TestWidgetACtion")
			.getCell(4, 4)
			.click();

		findWidget("TestWidgetACtion").pressKeys([SPECIAL_KEYS.delete]);

		//Check case sensitivity for widget action download procedure action type
		findWidget("TestWidgetACtion")
			.getCell(5, 4)
			.click();

		findWidget("TestWidgetACtion").pressKeys([SPECIAL_KEYS.delete]);

		//Check case sensitivity for item action upload procedure action type
		findWidget("My Item Action")
			.getCell(0, 4)
			.click();

		findWidget("TestWidgetACtion").pressKeys([SPECIAL_KEYS.delete]);

		//Check case sensitivity for item action download procedure action type
		findWidget("My Item Action")
			.getCell(1, 4)
			.click();

		findWidget("TestWidgetACtion").pressKeys([SPECIAL_KEYS.delete]);

		getPageMenu().navigateToPage("Main Project/Widget-Item-Actions-Upload-Download");

		//Initate download ItemAction on a cell - table widget
		findWidget("Cars Production")
			.getCell(0, 0)
			.rightClick()
			.getItemActionDetails(1)
			.click();

		//Verify an info message is reported, and that count of log messages is 1.
		getLogMessage()
			.getCount()
			.should.be.equal(1);

		// Assert an upload response message indicating successful upload
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				`Running procedure 'UploadTheFile' has resulted in an error: Procedure 'UploadTheFile' has 1 input argument(s), but is called with 0 argument(s). (code=500)`
			);

		// Initate download widgetAction on a bar - Bar chart widget
		// Right click on a Bar element
		findWidget("Cars Production")
			.getWidgetActionMenuButton()
			.click();

		// Right click on a Bar element
		findWidget("Cars Production")
			.mouseHover()
			.getProceduralDownloadButton()
			.click()
			.getDownloadedFile();

		//Verify an info message is reported, and that count of log messages is 2.
		getLogMessage()
			.getCount()
			.should.be.equal(2);

		// Assert an upload response message indicating successful upload
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				`Running procedure 'UploadTheFile' has resulted in an error: Procedure 'UploadTheFile' has 1 input argument(s), but is called with 0 argument(s). (code=500)`
			);

		//UPLOAD Widget and Item Action
		//Initate upload ItemAction on a cell - table widget
		findWidget("Cars Production")
			.getCell(0, 0)
			.rightClick()
			.getItemActionDetails(0, "TheUploadedFile0.jpg")
			.click();

		//Verify an info message is reported, and that count of log messages is 3.
		getLogMessage()
			.getCount()
			.should.be.equal(3);

		// Assert an upload response message indicating successful upload
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				`Running procedure 'UploadTheFile' has resulted in an error: Procedure 'UploadTheFile' has 1 input argument(s), but is called with 0 argument(s). (code=500)`
			);

		// Refresh the page
		pageRefresh();

		//Validate widget action details displayed.
		findWidget("Cars Production")
			.getWidgetActionMenuButton()
			.click();

		findWidget("Cars Production")
			.getWidgetActionDetails(4, "TheUploadedFile0.jpg")
			.click();

		//Verify an info message is reported, and that count of log messages is 1.
		getLogMessage()
			.getCount()
			.should.be.equal(1);

		// Assert an upload response message indicating successful upload
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				`Running procedure 'UploadTheFile' has resulted in an error: Procedure 'UploadTheFile' has 1 input argument(s), but is called with 0 argument(s). (code=500)`
			);
	}
);
