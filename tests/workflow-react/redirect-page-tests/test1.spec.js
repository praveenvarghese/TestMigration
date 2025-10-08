/*!
 * @AIMMS_FILE=models/react-workflow-models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Tests asserting error handling of workflow pages that Valid PageId. Active/Inactive/Hidden state in combination with Valid/Invalid/Undefined Redirect-PageId.",
	() => {
		loadPage("Main Project/Workflow Tests/Error Handling/Page 1?table-v2=true");

		//Assert redirect page error message for active page and invalid pageid(page not available in app)
		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 2" step has an invalid RedirectPageId specified. & 4 more errors.'
			);
		getLogMessage().closeList();

		getPageMenu().navigateToPage("Main Project/Workflow Tests/Error Handling");

		// give valid redirect pageid for above step Page2
		findWidget("Workflow Data")
			.getCell(1, 6)
			.setValue("page_3");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert redirect page error message for inactive page and invalid pageid(page not available in app)
		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 6" step has an invalid RedirectPageId specified. & 3 more errors.'
			);
		getLogMessage().closeList();

		//Assigning Valid redirect PageID Value to Page 6
		findWidget("Workflow Data")
			.getCell(5, 6)
			.setValue("page_8");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert redirect page error message for hidden page and invalid pageid(page not available in app)
		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "Page 7" step has an invalid RedirectPageId specified. & 2 more errors.'
			);
		getLogMessage().closeList();

		//Assigning Valid redirect PageID Value to Page 7
		findWidget("Workflow Data")
			.getCell(6, 6)
			.setValue("page_8");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert redirect page error message for inactive page and invalid pageid(page not available in app)
		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "13th Page" step has an invalid RedirectPageId specified. & 1 more error.'
			);
		getLogMessage().closeList();

		//Assigning Valid redirect PageID Value to Page 13
		findWidget("Workflow Data")
			.getCell(23, 6)
			.setValue("page_15");

		// Assert 1 warning is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert redirect page error message for hidden page and invalid pageid(page not available in app)
		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:In the "Workflow Error Handling" workflow, the "14th Page" step has an invalid RedirectPageId specified.'
			);
		getLogMessage().closeList();

		//Assigning Valid redirect PageID Value to Page 14
		findWidget("Workflow Data")
			.getCell(24, 6)
			.setValue("page_15");

		// Assert 1 warning is logged
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

		// Scenario: Page6 with inactive page state, and redirect pageid Page8 page state is also inactive and no redirect pageID defined for Page8.
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

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, no redirect page is configured either."
			);

		getLogMessage().closeList();

		// Scenario: Page7 with hidden page state, and redirect pageid Page8 page state is also inactive and no redirect pageID defined for Page8.
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

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, no redirect page is configured either."
			);
		getLogMessage().closeList();

		// Scenario: Page7 with hidden page state, and accessed via page manager should not have been redirected as per workflow configuration
		openAppManager().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 7",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 7",
		});

		// Assert navigation to Page 3.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 7");

		// Scenario: Valid PageId. Inactive step. Undefined Redirect-PageId. Show Error1.
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Workflow Tests/Error Handling/Page 8",
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 7",
		});

		// Assert stays on Page 7.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 7");

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
			finalUri: "Main Project/Workflow Tests/Error Handling/Page 7",
		});

		// Assert stays on Page 7.
		getCurrentPage().should.be.equal("Main Project/Workflow Tests/Error Handling/Page 7");

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
