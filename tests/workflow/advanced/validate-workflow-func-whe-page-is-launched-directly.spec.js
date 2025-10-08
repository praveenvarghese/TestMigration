/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
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

		// When Hidden Page is directly launched through URL
		loadPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/30",
			finalUri: "Main Project",
		});

		// Assert 2 new messages are logged
		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(2);

		//Assert the error message logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				"Workflow:You cannot access this step. For this step, invalid redirect page is configured."
			);

		//Assert the warning message logged
		getLogMessage()
			.getLastReportedLogMessage(1)
			.should.contain("Workflow:The redirect page for the step is not found");

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
			.should.contain("Application:This page does not exist.");
		getLogMessage().closeList();
	}
);
