/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting on accessing workflow pages directly through URL. Wherein the workflow pages are of Inactive/Hidden state, has Valid PageId and Invalid/Undefined Redirect-PageId.",
	() => {
		// Scenario: Valid PageId. Inactive step. Invalid Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1 and warning.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 13",
			finalUri: "Main Project",
		});

		getCurrentPage().should.be.equal("Main Project");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(2);

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage(1)
			.should.contain("Workflow:The redirect page for the step is not found");

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Hidden step. Invalid Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1 and warning.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 14",
			finalUri: "Main Project",
		});

		getCurrentPage().should.be.equal("Main Project");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(2);

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage(1)
			.should.contain("Workflow:The redirect page for the step is not found");

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Inactive step. Undefined Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 15",
			finalUri: "Main Project",
		});

		getCurrentPage().should.be.equal("Main Project");

		// Assert 1 new error is logged
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

		// Scenario: Valid PageId. Hidden step. Undefined Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 16",
			finalUri: "Main Project",
		});

		getCurrentPage().should.be.equal("Main Project");

		// Assert 1 new error is logged
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
