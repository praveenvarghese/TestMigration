/*!
 * @AIMMS_FILE=models/PageV2/ListWidgetModel.aimms
 */

scenario("Intentionally provide an invalid URL. An error message should appear.", () => {
	loadPage("Main Project/home");

	getCurrentPage().should.be.equal("Main Project/home");

	loadPageWithRedirect({
		initialUri: "Main Project/home2",
		finalUri: "Main Project/home2",
	});

	getLogMessage()
		.getUnreadMessagesCount()
		.should.be.equal(1);

	getLogMessage()
		.getLastReportedLogMessage(0)
		.should.contain("Application:This page does not exist.");
});
