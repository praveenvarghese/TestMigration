/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With Redirect Workflow/Infinity Model.aimms
 */

scenario(
	"Tests to verify workflow page behaviour when page is accessed directly through URL ",
	() => {
		// When Inactive Page is directly launched through URL
		loadPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/1",
			finalUri: "Main Project",
		});

		// Assert 1 new message is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:The maximum number of redirects was exceeded.");
		getLogMessage().closeList();

		// Verify workflow steps not displayed in the main_project page.
		findWidget("main_project")
			.getWorkflowItems()
			.should.be.eql([]);

		// When Hidden Page is directly launched through URL
		loadPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/27",
			finalUri: "Main Project",
		});

		// Assert 1 new message is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:The maximum number of redirects was exceeded.");
		getLogMessage().closeList();

		// Verify workflow steps not displayed in the main_project page.
		findWidget("main_project")
			.getWorkflowItems()
			.should.be.eql([]);

		// When No value is defined for Page state and page is directly launched through URL
		loadPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/28",
			finalUri: "Main Project",
		});

		// Assert 1 new message is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:The maximum number of redirects was exceeded.");
		getLogMessage().closeList();

		// When Invalid Page is directly launched through URL
		loadPage("Main Project/Workflow_Error_Validations/wrong_PageId");

		// Assert 1 new message is logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(1);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain("Workflow:This page does not exist.");
	}
);
