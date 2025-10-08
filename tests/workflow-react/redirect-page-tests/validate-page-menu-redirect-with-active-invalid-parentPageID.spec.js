/*!
 * @AIMMS_FILE=models/react-workflow-models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting on accessing workflow pages from menu. Wherein the workflow pages are of Inactive/Hidden state, has Valid PageId, valid/Invalid/Undefined Redirect-PageId and valid/invalid/undefined parentpageid",
	() => {
		loadPage("Main Project/Workflow Tests/Error Handling");

		//active page as parentPageID
		findWidget("Workflow Data")
			.getCell(5, 7)
			.setValue("page_1");

		//active page as parentPageID
		findWidget("Workflow Data")
			.getCell(6, 7)
			.setValue("page_1");

		loadPage("Main Project/Workflow Tests/Error Handling");

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

		// Scenario: for workflow step 6 Page Valid PageId. Inactive page state. Invalid Redirect-PageId and active parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 6",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 6",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 6");

		// Scenario: Valid PageId. Hidden step. Invalid Redirect-PageId and active parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 7",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 7",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 7");

		loadPage("Main Project/Workflow Tests/Error Handling");

		//inactive page as parentPageID
		findWidget("Workflow Data")
			.getCell(5, 7)
			.setValue("page_4");
		//inactive page as parentPageID
		findWidget("Workflow Data")
			.getCell(6, 7)
			.setValue("page_4");

		// Scenario: Valid PageId. inactive step. Invalid Redirect-PageId and inactive parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 6",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 6",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 6");

		// Scenario: Valid PageId. inactive step. Invalid Redirect-PageId and inactive parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 7",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 7",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 7");

		loadPage("Main Project/Workflow Tests/Error Handling");

		//Invalid page as parentPageID for inactive step
		findWidget("Workflow Data")
			.getCell(5, 7)
			.setValue("invalid_page_1");
		//Invalid page as parentPageID for hidden step
		findWidget("Workflow Data")
			.getCell(6, 7)
			.setValue("invalid_page_1");

		// Open the menu. Click on 'More' of 'Workflow Tests/Error Handling'.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Workflow Tests/Error Handling");

		// Scenario: for workflow step 6 Page Valid PageId. Inactive page state. Invalid Redirect-PageId and active parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 6",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 6",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 6");

		// Scenario: Valid PageId. Hidden step. Invalid Redirect-PageId and active parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 7",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 7",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 7");

		loadPage("Main Project/Workflow Tests/Error Handling");

		//Invalid page as parentPageID for active step
		findWidget("Workflow Data")
			.getCell(3, 7)
			.setValue("invalid_page_1");
		//Invalid page as parentPageID for active step
		findWidget("Workflow Data")
			.getCell(4, 7)
			.setValue("invalid_page_1");

		// Open the menu. Click on 'More' of 'Workflow Tests/Error Handling'.
		getPageMenu()
			.toggleMenu()
			.toggleMoreItems("Main Project/Workflow Tests/Error Handling");

		// Scenario: for workflow step 4 Page Valid PageId. Inactive page state. valid Redirect-PageId and active parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 4",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 4",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 4");

		// Scenario: Valid PageId. Hidden step. valid Redirect-PageId and active parentpageid.
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 5",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 5",
		});

		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 5");
	}
);
