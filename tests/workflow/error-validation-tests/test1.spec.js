/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting error handling of workflow pages that Valid PageId. Active/Inactive/Hidden state in combination with Valid/Invalid/Undefined Redirect-PageId.",
	() => {
		loadPage("Main Project/Workflow Tests/Error Handling/Page 1");

		// Scenario: Valid PageId. Active step. Invalid Redirect-PageId. Should go to PageId along with warning message.
		findWidget("page_1")
			.getWorkflowItems()
			.getStepElement("Page 2")
			.click();

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 2");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);

		// //Assert the error message logged
		// getLogMessage()
		// 	.getLastReportedLogMessage()
		// 	.should.contain("Workflow:The redirect page for the step is not found");

		// getLogMessage().closeList();

		// Scenario: Valid PageId. Active step. Undefined Redirect-PageId. Should go to PageId.
		findWidget("page_2")
			.getWorkflowItems()
			.getStepElement("Page 3")
			.click();

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 3");

		// Assert no new warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);

		// Scenario: Valid PageId. Inactive step. Valid Redirect-PageId. Should go to Redirect-PageId.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 4",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 2",
		});

		// Assert navigation to Page 2.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 2");

		// Assert no new warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);

		// Scenario: Valid PageId. Hidden step. Valid Redirect-PageId. Should go to Redirect-PageId.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 5",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 3",
		});

		// Assert navigation to Page 3.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 3");

		// Assert no new warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);

		// Scenario: Valid PageId. Inactive step. Invalid Redirect-PageId. Show Error1 and warning messages.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 6",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 3",
		});

		// Assert navigation to Page 3.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 3");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		// //Assert the error message logged
		// getLogMessage()
		// 	.getLastReportedLogMessage(1)
		// 	.should.contain("Workflow:The redirect page for the step is not found");

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Hidden step. Invalid Redirect-PageId. Show Error1 and warning messages.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 7",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 3",
		});

		// Assert navigation to Page 3.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 3");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		// //Assert the error message logged
		// getLogMessage()
		// 	.getLastReportedLogMessage(1)
		// 	.should.contain("Workflow:The redirect page for the step is not found");

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
			);

		getLogMessage().closeList();

		// Scenario: Valid PageId. Inactive step. Undefined Redirect-PageId. Show Error1.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 8",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 3",
		});

		// Assert navigation to Page 3.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 3");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, no redirect page is configured either."
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Hidden step. Undefined Redirect-PageId. Show Error1.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 9",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 3",
		});

		// Assert navigation to Page 3.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 3");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, no redirect page is configured either."
			);
		getLogMessage().closeList();
	}
);
