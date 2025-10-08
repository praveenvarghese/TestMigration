/*!
 * @AIMMS_FILE=models/react-workflow-models/Infinity Model With One Workflow/Infinity Model.aimms
 */

scenario(
	"Test to verify redirect functionality of workflow when step state is inactive, hidden, active ",
	() => {
		loadPage("Main Project/Dialog Pages");

		//Validate user is navigated to the redirect page ID when redirect Page is part of the same workflow
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Pie Chart",
			finalUri: "Main Project/Workflow/page1",
		});

		findWidget("page1_1").should.exist;

		findWidget("page1_1")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql([
				"Step 1",
				"Step 2",
				"Step 3",
				"Step 4",
				"Step 5",
				"Step 6",
				"Step 7",
				"Step 8",
				"Step 9",
				"Step 10",
				"Step11",
			]);

		findWidget("page1_1").hasAnyWorkflowSteps().should.be.true;

		//Validate user is navigated to the redirect page ID when redirect Page is not part of any workflow
		//and the page is inactive
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Side Panels",
			finalUri: "Main Project/Workflow/page7",
		});

		findWidget("page7_1").should.exist;

		findWidget("page7_1").hasAnyWorkflowSteps().should.be.false;

		openAppManager().navigateToPageWithRedirect({
			initialUri: "Main Project/Side Panels",
			finalUri: "Main Project/Side Panels",
		});

		getCurrentPage().should.be.equal("Main Project/Side Panels");

		//Validate user is navigated to the redirect page ID when redirect Page is not part of any workflow
		//and the page is hidden
		getPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Table",
			finalUri: "Main Project/Workflow/page9",
		});

		findWidget("page9_1").should.exist;

		loadPage("Main Project/Dialog Pages");

		//Validate user is navigated to the redirect page ID when redirect Page is part of the same workflow
		//and the page is hidden
		openPageMenu().navigateToPageWithRedirect({
			initialUri: "Main Project/Table",
			finalUri: "Main Project/Workflow/page9",
		});

		findWidget("page9_1").should.exist;

		//Validate user is not navigated to the redirect page ID when redirect Page is part of any workflow
		//and the page is active
		openAppManager().navigateToPageWithRedirect({
			initialUri: "Main Project/home",
			finalUri: "Main Project/home",
		});

		findWidget("home").should.exist;

		findWidget("home").hasAnyWorkflowSteps().should.be.true;

		findWidget("home")
			.getWorkflowItems()
			.getStepElement("Step 1")
			.isTheCurrentStep().should.be.true;
	}
);
