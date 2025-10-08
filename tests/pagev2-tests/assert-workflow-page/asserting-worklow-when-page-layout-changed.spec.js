/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Assert workflow when page layout is changed", () => {
	loadPage("Main Project/home/Wizard NewUI Page 1");

	const expected_widgets = ["map", "map2"];
	const expected_workflowItems = [
		{ title: "Introduction", icon: "icon aimms-new", state: "active", currentStep: "No" },
		{ title: "Overview", icon: "icon aimms-new", state: "active", currentStep: "Yes" },
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
	];

	findWidget("wizard_newui_page_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(expected_widgets);

	findWidget("wizard_newui_page_1")
		.getWorkflowItems()
		.getData()
		.should.eql(expected_workflowItems);

	// Change the layout of the page to another Standard layout
	openPageConfigurator().selectLayout("Layout 6");

	findWidget("wizard_newui_page_1")
		.getVisibleWidgetsInViewPort()
		.should.eql(expected_widgets);

	findWidget("wizard_newui_page_1")
		.getWorkflowItems()
		.getData()
		.should.eql(expected_workflowItems);
});
