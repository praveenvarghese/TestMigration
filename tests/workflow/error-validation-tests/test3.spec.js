/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting on accessing workflow pages from menu. Wherein the workflow pages are of Inactive/Hidden state, has Valid PageId and Invalid/Undefined Redirect-PageId.",
	() => {
		loadPage("Main Project/Workflow Tests/Error Handling/Page 1");

		//Commenting some part of test to make it stable
		// Open the menu. Click on 'More' of 'Workflow Tests/Error Handling'.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Workflow Tests/Error Handling");

		// Scenario: Valid PageId. Inactive step. Invalid Redirect-PageId. Accessed through menu, retains on same page but with Error1 and warning.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 13",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 1",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 1");

		// Assert an error and a warning are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		// //Assert the warning message logged
		// getLogMessage()
		// 	.getLastReportedLogMessage(0)
		// 	.should.contain("Workflow:The redirect page for the step is not found");

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
			);
		getLogMessage().closeList();
	}
);
