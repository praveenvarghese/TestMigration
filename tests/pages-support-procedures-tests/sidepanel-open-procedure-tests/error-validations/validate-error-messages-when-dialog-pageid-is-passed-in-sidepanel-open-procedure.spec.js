/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Test to verify error message is thrown when dialog page Id is passed in the sidepanel openprocedure",
	() => {
		loadPage("Main Project/home");

		//verify error message is thrown when dialog page Id is passed in the procedure
		findWidget("wrongdialogpageid").click();

		getLogMessage()
			.getCount()
			.should.be.equal(2);
	}
);
