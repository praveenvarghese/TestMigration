/*!
 * @AIMMS_FILE=models/react-workflow-models/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to Verify workflow and widgets behaviour when page manager is kept opened", () => {
	loadPage("Main Project/CustomLayout");

	const expected_widgets = ["LargeDialog_2", "SmallDIalog_2", "MediumDIalog_2", "Flag_4"];
	const expected_workflowItems = [
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
	];

	findWidget("customlayout_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(expected_widgets);

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getData()
		.should.eql(expected_workflowItems);

	//Validate workflow steps and widgets displayed when page manager is opened
	openAppManager();

	findWidget("customlayout_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(expected_widgets);

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getData()
		.should.eql(expected_workflowItems);

	//Validate workflow steps and widgets displayed when page setting is opened

	getPageHeader()
		.getButtons()
		.getPageSettings()
		.click();

	findWidget("customlayout_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(expected_widgets);

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getData()
		.should.eql(expected_workflowItems);

	//Validate workflow steps and widgets displayed when application setting is opened

	getPageHeader()
		.getButtons()
		.getApplicationSettings()
		.click();

	findWidget("customlayout_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(expected_widgets);

	findWidget("customlayout_1")
		.getWorkflowItems()
		.getData()
		.should.eql(expected_workflowItems);
});
