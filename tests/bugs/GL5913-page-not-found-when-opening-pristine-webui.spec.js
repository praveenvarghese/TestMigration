/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_GridLayout/ModelFromScratch2.aimms
 * @TEST_TYPE=functional
 */

scenario(
	"Opening a completely pristine WebUI led to the error 'This page does not exist' in early versions of 4.96",
	() => {
		loadPage("Main Project/home");

		// Assert that no error message is reported.
		getLogMessage().openList();

		getLogMessage()
			.getCount()
			.should.be.equal(0);

		getLogMessage().closeList();
	}
);
