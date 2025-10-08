/*!
 * @AIMMS_FILE=models/RequestShowNotificationOnDialog/RequestShowNotificationOnDialog.aimms
 */

scenario("The notification function combined with other dialog functions", () => {
	loadPage("Main Project/home");

	findWidget("WithOpenDialogPage").click();

	findWidget("test").clickDialogPageButton("ok");

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	findWidget("OptimizeButton").click();

	findDialog()
		.findButton("OK")
		.click();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	findWidget("OptimizeButton2").click();

	findDialog()
		.findButton("OK")
		.click();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	findWidget("OptimizeButton3").click();

	findDialog()
		.findButton("OK")
		.click();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);
});
