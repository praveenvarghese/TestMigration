/*!
 * @AIMMS_FILE=models/Bugs/GL1026-error-upon-change/66073.aimms
 */

scenario("Error when using uponchange to pages and activetab element", () => {
	loadPage("Main Project/Page with active tab element");

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	pageRefresh();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	pageRefresh();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);
});
