/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to verify that error message is displayed if duplicate pageid is configured in workflow.",
	() => {
		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pagesix");

		findWidget("Workflow Configuration")
			.getCell(2, 2)
			.setValue("pageone");

		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pagetwo");

		findWidget("Workflow Configuration")
			.getCell(4, 2)
			.setValue("pagethree");

		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pagetwo");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		getLogMessage().closeList();

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:Duplicate PageId entries of "pagetwo" have been specified in the "e2e Workflow Title" workflow.'
			);

		getLogMessage()
			.openList()
			.getMessages()
			.should.be.eql([
				{
					Header: "Workflow validation:",
					Message:
						'Duplicate PageId entries of "pagetwo" have been specified in the "e2e Workflow Title" workflow. ',
					Icon: "icon-spam",
					Status: "Unread",
				},
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

		// Verify the Duplicated pageID for 2 or more workflow steps
		findWidget("pageseven")
			.getWorkflowItems()
			.should.eql([]);

		loadPage("Main Project/home");

		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pageseven");

		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pageseven");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		getLogMessage().closeList();

		// Verify that a proper error message is logged
		getLogMessage()
			.getLastReportedLogMessage()
			.should.contain(
				'Workflow validation:Duplicate PageId entries of "pageseven" have been specified in the "e2e Workflow Title" workflow. & 1 more error.'
			);
	}
);
