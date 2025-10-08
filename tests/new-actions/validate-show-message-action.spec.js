/*!
 * @AIMMS_FILE=models/Bugs/GL00703-ShowMessage/ShowMessage.aimms
 */

scenario(
	"Click on a button calling webui::ShowMessage and validate that message is displayed",
	() => {
		loadPage("Main Project/home");

		findWidget("ShowInfo").click();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("This is an info message");

		findWidget("ShowWarning").click();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("This is a warning message");

		findWidget("ShowError").click();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("This is an error message");

		findWidget("ShowInfoLib").click();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("This is an info message from a library");

		findWidget("ShowWarningLib").click();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("This is a warning message from a library");

		findWidget("ShowErrorLib").click();

		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("This is an error message from a library");
	}
);
