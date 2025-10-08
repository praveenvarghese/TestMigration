/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that error message is displayed if empty pageid's configured in workflow.",
	() => {
		loadPage("Main Project/PageSeven");

		// Verify workflow panel is not displaying on page
		findWidget("pageseven")
			.getWorkflowItems()
			.should.eql([]);

		// In the new error handling situation, errors are immediately shown.
		getLogMessage()
			.openList()
			.getMessages()
			.should.eql([
				{
					Header: "Workflow validation:",
					Message:
						'The "Step A" step in the "e2e Workflow Title" workflow has an empty PageId specified. & 5 more errors.',
					Icon: "icon-spam",
					Status: "Unread",
				},
			]);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pageone");

		findWidget("Workflow Configuration")
			.getCell(2, 2)
			.setValue("pagetwo");

		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pagethree");

		findWidget("Workflow Configuration")
			.getCell(4, 2)
			.setValue("pagefour");

		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pagefive");

		// In the new error handling situation, errors are immediately shown.
		getLogMessage()
			.openList()
			.getMessages()
			.should.eql([
				{
					Header: "Workflow validation:",
					Message:
						'The "Step F" step in the "e2e Workflow Title" workflow has an empty PageId specified. ',
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "Workflow validation:",
					Message:
						'The "Step E" step in the "e2e Workflow Title" workflow has an empty PageId specified. & 1 more error.',
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "Workflow validation:",
					Message:
						'The "Step D" step in the "e2e Workflow Title" workflow has an empty PageId specified. & 2 more errors.',
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "Workflow validation:",
					Message:
						'The "Step C" step in the "e2e Workflow Title" workflow has an empty PageId specified. & 3 more errors.',
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "Workflow validation:",
					Message:
						'The "Step B" step in the "e2e Workflow Title" workflow has an empty PageId specified. & 4 more errors.',
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "Workflow validation:",
					Message:
						'The "Step A" step in the "e2e Workflow Title" workflow has an empty PageId specified. & 5 more errors.',
					Icon: "icon-spam",
					Status: "Unread",
				},
			]);

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		findWidget("pageseven")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "Step B", "Step C", "Step D", "Step E", "Step F"]);
	}
);
