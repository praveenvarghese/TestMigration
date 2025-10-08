/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
 */

scenario("Tests to verify workflow behaviour when page visibility is modified", () => {
	loadPage("Main Project/Workflow_Error_Validations/rename_page");

	//Verify workflow behaviour when page visibility is modified
	findWidget("rename_page_1")
		.getWorkflowItems()
		.getStepElement("Step WF5 3")
		.click();

	findWidget("annotations_1").should.exist;
});
