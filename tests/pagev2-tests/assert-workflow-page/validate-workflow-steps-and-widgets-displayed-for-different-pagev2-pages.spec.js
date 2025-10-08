/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to verify workflow steps displayed in the page", () => {
	loadPage("Main Project/home/Introduction new UI");

	//Verify workflow steps displayed
	findWidget("introduction_new_ui")
		.getWorkflowItems()
		.getData()
		.should.eql([
			{ title: "Introduction", icon: "icon aimms-new", state: "active", currentStep: "Yes" },
			{ title: "Overview", icon: "icon aimms-new", state: "active", currentStep: "No" },
			{
				title: "Load base case and scenarios",
				icon: "icon aimms-download",
				state: "active",
				currentStep: "No",
			},
			{ title: "Navigation", icon: "icon aimms-menu7", state: "active", currentStep: "No" },
			{ title: "Home page", icon: "icon aimms-home", state: "active", currentStep: "No" },
			{
				title: "Calculation",
				icon: "icon aimms-calculator",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Visit introduction again",
				icon: "icon aimms-undo2",
				state: "active",
				currentStep: "No",
			},
		]);

	findWidget("introduction_new_ui")
		.getVisibleWidgetsInViewPort()
		.should.eql(["StatusBarTable", "WorkflowTable"]);

	findWidget("introduction_new_ui")
		.getWorkflowItems()
		.getStepElement("Load base case and scenarios")
		.click();

	findWidget("customlayout_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(["LargeDialog_2", "SmallDIalog_2", "MediumDIalog_2", "Flag_4"]);

	getCurrentPage().should.be.equal("Main Project/CustomLayout");

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getData()
		.should.eql([
			{ title: "Introduction", icon: "icon aimms-new", state: "active", currentStep: "No" },
			{ title: "Overview", icon: "icon aimms-new", state: "active", currentStep: "No" },
			{
				title: "Load base case and scenarios",
				icon: "icon aimms-download",
				state: "active",
				currentStep: "Yes",
			},
			{ title: "Navigation", icon: "icon aimms-menu7", state: "active", currentStep: "No" },
			{ title: "Home page", icon: "icon aimms-home", state: "active", currentStep: "No" },
			{
				title: "Calculation",
				icon: "icon aimms-calculator",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Visit introduction again",
				icon: "icon aimms-undo2",
				state: "active",
				currentStep: "No",
			},
		]);

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getStepElement("Navigation")
		.hover();

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getStepElement("Navigation")
		.click();

	getCurrentPage().should.be.equal("Main Project/StandardLayout");

	findWidget("standardlayout_1")
		.getWorkflowItems()
		.getData()
		.should.eql([
			{ title: "Introduction", icon: "icon aimms-new", state: "active", currentStep: "No" },
			{ title: "Overview", icon: "icon aimms-new", state: "active", currentStep: "No" },
			{
				title: "Load base case and scenarios",
				icon: "icon aimms-download",
				state: "active",
				currentStep: "No",
			},
			{ title: "Navigation", icon: "icon aimms-menu7", state: "active", currentStep: "Yes" },
			{ title: "Home page", icon: "icon aimms-home", state: "active", currentStep: "No" },
			{
				title: "Calculation",
				icon: "icon aimms-calculator",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Visit introduction again",
				icon: "icon aimms-undo2",
				state: "active",
				currentStep: "No",
			},
		]);

	findWidget("standardlayout_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"]);
});
