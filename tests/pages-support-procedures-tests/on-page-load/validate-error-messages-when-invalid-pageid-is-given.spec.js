/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify error message is thrown when invalid page Id is passed in the procedure",
	() => {
		loadPage("Main Project/page open test");

		//verify error message is thrown when invalid page Id is passed in the procedure
		findWidget("invalid_pageId").click();

		getLogMessage()
			.getCount()
			.should.be.equal(2);
	}
);
