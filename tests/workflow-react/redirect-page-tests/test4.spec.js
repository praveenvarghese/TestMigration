/*!
 * @AIMMS_FILE=models/react-workflow-models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting on accessing workflow pages directly through URL. Wherein the workflow pages are of Inactive/Hidden state, has Valid PageId and Invalid/Undefined Redirect-PageId.",
	() => {
		// Scenario: Valid PageId. Inactive step. Invalid Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1 and warning.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 13",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 13",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 13");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage(0)
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 2" step has an invalid RedirectPageId specified. & 4 more errors.'
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Hidden step. Invalid Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1 and warning.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 14",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 14",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 14");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage(0)
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 2" step has an invalid RedirectPageId specified. & 4 more errors.'
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Inactive step. Undefined Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 15",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 15",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 15");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage(0)
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 2" step has an invalid RedirectPageId specified. & 4 more errors.'
			);
		getLogMessage().closeList();

		// Scenario: Valid PageId. Hidden step. Undefined Redirect-PageId. Accessed through URL, redirects to MainProject along with Error1.
		loadPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 16",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 16",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 16");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage(0)
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 2" step has an invalid RedirectPageId specified. & 4 more errors.'
			);
		getLogMessage().closeList();
	}
);
