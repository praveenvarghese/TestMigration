/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
 */

scenario("Test to verify redirect functionality of workflow ", () => {
	loadPage("Main Project/Dialog Pages");

	//Validate user is navigated to the redirect page ID when redirect Page is part of the same workflow, but only when doing it from the page menu.

	// Through the app manager, the Pie Chart page should simply be loaded.
	openAppManager().navigateToPageWithRedirect({
		initialUri: "Main Project/Pie Chart",
		finalUri: "Main Project/Pie Chart",
	});

	// Through the page menu, it should not.
	loadPage("Main Project/Dialog Pages");
	getPageMenu().navigateToPageWithRedirect({
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

	//Validate user is navigated to the redirect page ID when redirect Page is part of the another workflow, but only when doing it from the page menu.
	openAppManager().navigateToPageWithRedirect({
		initialUri: "Main Project/Map",
		finalUri: "Main Project/Map",
	});

	loadPage("Main Project/Dialog Pages");
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Map",
		finalUri: "Main Project/Bubble Chart",
	});
	findWidget("bubble_chart").should.exist;

	findWidget("bubble_chart")
		.getWorkflowItems()
		.getWorkflowSteps()

		.should.eql(["Step 1 WF2", "Step 2 WF2", "Step 3 WF2"]);

	//Validate user is navigated to the redirect page ID when redirect Page is not part of any workflow and the page is inactive, but only when
	// doing it from the page menu.
	openAppManager().navigateToPageWithRedirect({
		initialUri: "Main Project/Side Panels",
		finalUri: "Main Project/Side Panels",
	});

	loadPage("Main Project/Dialog Pages");
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Side Panels",
		finalUri: "Main Project/Workflow/page7",
	});

	findWidget("page7_1").should.exist;

	findWidget("page7_1").hasAnyWorkflowSteps().should.be.false;

	//Validate user is navigated to the redirect page ID when redirect Page is not part of any workflow and the page is hidden, but only when
	// doing it from the page menu.
	openAppManager().navigateToPageWithRedirect({
		initialUri: "Main Project/Table",
		finalUri: "Main Project/Table",
	});

	loadPage("Main Project/Dialog Pages");
	getPageMenu().navigateToPageWithRedirect({
		initialUri: "Main Project/Table",
		finalUri: "Main Project/Workflow/page9",
	});

	findWidget("page9_1").should.exist;
});
