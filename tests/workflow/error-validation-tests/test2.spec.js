/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting error handling of workflow pages that are Inactive/Hidden state, has Valid PageId and Invalid/Undefined Redirect-PageId.",
	() => {
		loadPage("Main Project/Workflow Tests/Error Handling/Page 1");

		// Scenario: Invalid PageId. Active step. Valid Redirect-PageId. Show Error2.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("10th Step")
			.click({ waitForPageLoad: false });

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:This page does not exist.");
		getLogMessage().closeList();

		// Scenario: Invalid PageId. Active step. Invalid Redirect-PageId. Show Error2 and warning.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("11th Step")
			.click({ waitForPageLoad: false });

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(2);

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:The redirect page for the step is not found");

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage(1)
			.should.contain("Workflow:This page does not exist.");
		getLogMessage().closeList();

		// Scenario: Invalid PageId. Active step. Undefined Redirect-PageId. Show Error2.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("12th Step")
			.click({ waitForPageLoad: false });

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:This page does not exist.");
		getLogMessage().closeList();

		// Scenario: Undefined PageId. Active step. valid Redirect-PageId. Show Error2.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("13th Step")
			.click({ waitForPageLoad: false });

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:This page does not exist.");
		getLogMessage().closeList();

		// Scenario: Undefined PageId. Active step. Invalid Redirect-PageId. Show Error2 and warning.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("14th Step")
			.click({ waitForPageLoad: false });

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:This page does not exist.");
		getLogMessage().closeList();

		// Scenario: Undefined PageId. Active step. Undefined Redirect-PageId. Show Error2.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("15th Step")
			.click({ waitForPageLoad: false });

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:This page does not exist.");
		getLogMessage().closeList();
	}
);
