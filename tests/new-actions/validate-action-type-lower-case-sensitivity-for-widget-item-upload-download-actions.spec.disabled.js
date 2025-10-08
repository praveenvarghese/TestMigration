/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario(
	"Validate widget/item action upload/download procedure action type is case in-sensitivity",
	() => {
		loadPage("Main Project/widget_action_page");

		//Check case sensitivity for widget action upload procedure action type
		findWidget("TestWidgetACtion")
			.getCell(4, 4)
			.setValue("upload");

		//Check case sensitivity for widget action download procedure action type
		findWidget("TestWidgetACtion")
			.getCell(5, 4)
			.setValue("download");

		//Check case sensitivity for item action upload procedure action type
		findWidget("My Item Action")
			.getCell(0, 4)
			.setValue("upload");

		//Check case sensitivity for item action download procedure action type
		findWidget("My Item Action")
			.getCell(1, 4)
			.setValue("download");

		getPageMenu().navigateToPage("Main Project/Widget-Item-Actions-Upload-Download");

		//Assert ItemAction on table widget
		findWidget("Cars Production")
			.getCell(0, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{ title: "ItemActionUpload", icon: "aimms-upload", state: "active" },
				{ title: "ItemActionDownload", icon: "aimms-download", state: "active" },
			]);

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
			.should.contain("All perfect thank you very much...");

		// Initate download widgetAction on a bar - Bar chart widget
		// Right click on a Bar element
		findWidget("Cars Production")
			.getWidgetActionMenuButton()
			.click();

		// Click on the widgetAction
		findWidget("Cars Production")
			.getWidgetActions()
			.should.beEqualTo([
				{ title: "Factory Details", icon: "aimms-info", state: "active" },
				{ title: "View existing orders", icon: "aimms-cart", state: "active" },
				{ title: "Increase Supply", icon: "aimms-stack-up", state: "active" },
				{ title: "Delete Orders", icon: "aimms-cross2", state: "inactive" },
				{ title: "WidgetUpload", icon: "aimms-upload", state: "active" },
				{ title: "WidgetDownload", icon: "aimms-download", state: "active" },
			]);

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
			.should.contain("All perfect thank you very much...");

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
			.should.contain("Thank you for this beautiful image!");

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
			.should.contain("Thank you for this beautiful image!");
	}
);
