/*!
 * @AIMMS_FILE=models/Bugs/GLc4322-LegendError/Legend.aimms
 */

scenario("Click on legend with read-only parameter and assert no error is thrown.", () => {
	loadPage("Main Project/home");

	findWidget("LegendExample").click("Max");

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);
});
