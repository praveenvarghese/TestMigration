/*!
 * @AIMMS_FILE=models/react-workflow-models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting on accessing workflow pages from menu. Wherein the workflow pages are of Inactive/Hidden state, has Valid PageId and Invalid/Undefined Redirect-PageId.",
	() => {
		loadPage("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage(0)
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 2" step has an invalid RedirectPageId specified. & 4 more errors.'
			);

		// Open the menu. Click on 'More' of 'Workflow Tests/Error Handling'.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Workflow Tests/Error Handling");

		// Scenario: for workflow step 13th Page Valid PageId. Inactive page state. Invalid Redirect-PageId. Accessed through menu, retains on same page but with Error1 and warning.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 13",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 13",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 13");

		// // Open the menu. Click on 'More' of 'Workflow Tests/Error Handling'.
		// getPageMenu()
		// 	.toggleMenu()
		// 	.toggleMoreItems("Main Project/Workflow Tests/Error Handling");

		// Scenario: Valid PageId. Hidden step. Invalid Redirect-PageId. Accessed through menu, retains on same page but with Error1 and warning.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 14",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 14",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 14");
	}
);
