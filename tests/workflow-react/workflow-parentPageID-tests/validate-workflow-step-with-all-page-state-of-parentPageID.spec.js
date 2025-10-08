/*!
 * @AIMMS_FILE=models/react-workflow-models/WorkflowModelV2/WorkflowModelV2.aimms
 */

scenario(
	"Test to validate no error in configuring an Active, Inactive, Hidden Paged ID's as parent in for a workflow step",
	() => {
		loadPage("Main Project/home");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(0, 2)
			.setValue("pageseven");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(1, 2)
			.setValue("pagefive");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(2, 2)
			.setValue("pageone");

		// making the above page as inactive
		findWidget("Workflow Configuration")
			.getCell(2, 4)
			.setValue("inactive");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(3, 2)
			.setValue("pagetwo");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(4, 2)
			.setValue("pagethree");

		// making the above page as hidden
		findWidget("Workflow Configuration")
			.getCell(4, 4)
			.setValue("hidden");

		// Entering a valid PageId for a Step
		findWidget("Workflow Configuration")
			.getCell(5, 2)
			.setValue("pagesix");

		//Entering an active page id as parentPageId for a step
		findWidget("Workflow Configuration")
			.getCell(1, 7)
			.setValue("pageseven");

		//Entering an inactive page id as parentPageId for a step
		findWidget("Workflow Configuration")
			.getCell(3, 7)
			.setValue("pageone");

		//Entering a Hidden page id as parentPageId for a step
		findWidget("Workflow Configuration")
			.getCell(5, 7)
			.setValue("pagethree");

		// Navigate to another page
		getPageMenu().navigateToPage("Main Project/PageSeven");

		//Opening and clearing the Unread status for messages
		getLogMessage().openList();

		getLogMessage().closeList();

		// Since there are still errors in the configuration of workflow 2, no workflow should be displayed at this point.
		findWidget("pageseven")
			.getWorkflowItems()
			.getWorkflowSteps()
			.should.eql(["Step A", "Step B", "Step C", "Step D"]);

		findWidget("pageseven")
			.getWorkflowItems()
			.getChildWorkflowStepsData("pageseven") // "Step A - Active Parent step"
			.should.eql([
				{
					title: "Step B",
					icon: "icon aimms-seven-segment-B",
					state: "active",
					currentStep: "No",
				},
			]);

		findWidget("pageseven")
			.getWorkflowItems()
			.isChevronIconDisplayed("pageseven")
			.should.be.eql(true);

		findWidget("pageseven")
			.getWorkflowItems()
			.expandORCollapseParentStep("pageseven");

		findWidget("pageseven")
			.getWorkflowItems()
			.isSubWorkflowExpanded("pageseven")
			.should.eql(true);

		findWidget("pageseven")
			.getWorkflowItems()
			.getChildWorkflowStepsData("pageone") // "Step C - Inactive Parent Step"
			.should.eql([
				{
					title: "Step D",
					icon: "icon aimms-seven-segment-D",
					state: "active",
					currentStep: "No",
				},
			]);

		findWidget("pageseven")
			.getWorkflowItems()
			.isChevronIconDisplayed("pageone")
			.should.be.eql(true);

		findWidget("pageseven")
			.getWorkflowItems()
			.expandORCollapseParentStep("pageone");

		findWidget("pageseven")
			.getWorkflowItems()
			.isSubWorkflowExpanded("pageone")
			.should.eql(true);

		// Verify Inactive parent step child is able to click
		findWidget("pageseven")
			.getWorkflowItems()
			.getStepElement("Step D")
			.click();

		// trying to collapse a parent where child is actively selected
		// (possible in latest version of workflow: child turns into 'bar')
		findWidget("pagetwo")
			.getWorkflowItems()
			.expandORCollapseParentStep("pageone");

		findWidget("pagetwo")
			.getWorkflowItems()
			.isSubWorkflowExpanded("pageone")
			.should.eql(false);

		// TODO: perhaps check that the, now folded child, is really represented by what it should be: some bar-like thing of the correct color

		// trying to expand a different parent
		findWidget("pagetwo")
			.getWorkflowItems()
			.expandORCollapseParentStep("pageseven");

		findWidget("pagetwo")
			.getWorkflowItems()
			.isSubWorkflowExpanded("pageseven")
			.should.eql(false);

		// trying to collapse a different parent
		findWidget("pagetwo")
			.getWorkflowItems()
			.expandORCollapseParentStep("pageseven");

		findWidget("pagetwo")
			.getWorkflowItems()
			.isSubWorkflowExpanded("pageseven")
			.should.eql(true);

		getLogMessage()
			.getUnreadMessagesCount()
			.should.be.equal(0);
	}
);
