/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
 */

scenario("Test to verify errors displayed when Page ID and redirect page ID are invalid", () => {
	loadPage("Main Project/home");

	//verify Error is displayed when maximum redirects are done.
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Workflow_Error_Validations/1",
		finalUri: "Main Project/home",
	});

	findWidget("home").should.exist;

	getLogMessage()
		.getUnreadMessagesCount()
		.should.be.equal(1);

	//Assert the error message logged
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("Workflow:The maximum number of redirects was exceeded.");

	getLogMessage().closeList();

	//verify user is navigated to the valid page when redirect is less then 25
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Workflow_Error_Validations/3",
		finalUri: "Main Project/Workflow_Error_Validations/26",
	});

	findWidget("26_1").should.exist;

	// Assert no new messages are logged
	getLogMessage()
		.getUnreadMessagesCount()
		.should.be.equal(0);

	getPageMenu().navigateToPage("Main Project/Workflow_Error_Validations/28");

	//verify Error is displayed when Page ID is invalid
	findWidget("28_1")
		.getWorkflowItems()
		.getStepElement("Step WF4 2")
		.click({ waitForPageLoad: false });

	// Assert 1 new error messages is logged
	getLogMessage()
		.getUnreadMessagesCount()
		.should.be.equal(1);

	//Assert the error message Text
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("Workflow:This page does not exist.");
	getLogMessage().closeList();

	//verify Error is displayed when Redirect Page ID is invalid
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Workflow_Error_Validations/29",
		finalUri: "Main Project/Workflow_Error_Validations/28",
	});

	// Assert 2 new messages are logged
	getLogMessage()
		.getUnreadMessagesCount()
		.should.be.equal(1);

	//Assert the error message logged
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain(
			"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
		);

	// //Assert the warning message logged
	// getLogMessage()
	// 	.getLastReportedLogMessage(1)
	// 	.should.contain("Workflow:The redirect page for the step is not found");

	getLogMessage().closeList();

	//verify Error is displayed when Page ID is hidden and invalid redirect id
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Workflow_Error_Validations/30",
		finalUri: "Main Project/Workflow_Error_Validations/28",
	});

	// Assert 2 new messages are logged
	getLogMessage()
		.getUnreadMessagesCount()
		.should.be.equal(1);

	//Assert the error message logged
	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain(
			"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
		);

	// //Assert the warning message logged
	// getLogMessage()
	// 	.getLastReportedLogMessage(1)
	// 	.should.contain("Workflow:The redirect page for the step is not found");

	getLogMessage().closeList();
});
