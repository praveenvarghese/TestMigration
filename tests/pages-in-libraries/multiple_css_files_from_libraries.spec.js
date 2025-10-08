/*!
 * @AIMMS_FILE=models/LibraryWithWorkflowModel/LibraryWithWorkflowModel.aimms
 */

scenario(
	"Verify that multiple .css files coming from both main model and library result in the expected effect.",
	() => {
		// A page in the main model
		loadPage("Main Project/home");

		findWidget("Inwoners")
			.getCell(0, 0)
			.getCSSStyleProperty("background-color")
			.should.be.equal("rgb(255, 0, 0)");

		findWidget("Inwoners")
			.getCell(0, 1)
			.getCSSStyleProperty("background-color")
			.should.be.equal("rgb(0, 128, 0)");
	}
);
