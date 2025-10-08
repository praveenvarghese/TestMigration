/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With Redirect Workflow/Infinity Model.aimms
 */

scenario(
	"Tests to verify workflow page behaviour when page is accessed directly through app Manager ",
	() => {
		// When Inactive Page is directly launched through URL
		openAppManager().navigateToPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/1",
			finalUri: "Main Project/Workflow_Error_Validations/1",
		});

		// When Hidden Page is directly launched through URL
		openAppManager().navigateToPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/27",
			finalUri: "Main Project/Workflow_Error_Validations/27",
		});

		// When No value is defined for Page state and page is directly launched through URL
		openAppManager().navigateToPageWithError({
			initialUri: "Main Project/Workflow_Error_Validations/28",
			finalUri: "Main Project/Workflow_Error_Validations/28",
		});

		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);
	}
);
