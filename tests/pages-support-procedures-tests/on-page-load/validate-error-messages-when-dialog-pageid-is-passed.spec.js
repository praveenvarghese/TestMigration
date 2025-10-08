/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify error message is thrown when dialog page Id is passed in the procedure",
	() => {
		loadPage("Main Project/page open test");

		//verify error message is thrown when dialog page Id is passed in the procedure
		findWidget("dialogpage_id").click();

		getLogMessage()
			.getCount()
			.should.be.equal(2);
	}
);
