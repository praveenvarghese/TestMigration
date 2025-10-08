/*!
 * @AIMMS_FILE=models/LibraryWithWorkflowModel/LibraryWithWorkflowModel.aimms
 */

scenario("Assert that a workflow setup from a library can use pages from the main model.", () => {
	loadPage("Main Project/home");

	findWidget("application")
		.openApplicationWorkflowSettingsOptionEditor()
		.clickToGetIdentifierSelectionDialog("workflows.information")
		.clearSearch()
		.getIdentifierList("")
		.should.include.something.like([
			"GlobalWorkflowSteps",
			"Workflows",
			"l2::Lib2Workflows",
			"l2::Lib2WorkflowSteps",
			"webui::BrowserTimeZoneMapping",
			"webui::BrowserTimeZoneMappingData",
		]);

	findWidget("application")
		.openApplicationWorkflowSettingsOptionEditor()
		.clickToGetIdentifierSelectionDialog("workflows.information")
		.clearSearch()
		.selectIdentifier("l2::Lib2Workflows")
		.clickOnFinish();

	findWidget("application")
		.openApplicationWorkflowSettingsOptionEditor()
		.clickToGetIdentifierSelectionDialog("workflows.configuration")
		.clearSearch()
		.getIdentifierList("")
		.should.include.something.like(["GlobalWorkflowSteps", "l2::Lib2WorkflowSteps"]);

	findWidget("application")
		.openApplicationWorkflowSettingsOptionEditor()
		.clickToGetIdentifierSelectionDialog("workflows.configuration")
		.clearSearch()
		.selectIdentifier("l2::Lib2WorkflowSteps")
		.clickOnFinish();

	findWidget("home")
		.getWorkflowItems()
		.getData()
		.should.eql([
			{
				title: "Global Step 1",
				icon: "icon aimms-home8",
				state: "active",
				currentStep: "Yes",
			},
			{
				title: "Global Step 2",
				icon: "icon aimms-home8",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Global Step 3",
				icon: "icon aimms-home8",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Lib1 Step 1",
				icon: "icon aimms-library",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Lib1 Step 2",
				icon: "icon aimms-library",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Lib2 Step 1",
				icon: "icon aimms-library2",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Lib2 Step 2",
				icon: "icon aimms-library2",
				state: "active",
				currentStep: "No",
			},
		]);

	findWidget("home")
		.getWorkflowItems()
		.clickOnWorkflowStep("Global Step 2"); // Move to page 1 in the main project

	// Verify by checking a specific widget being present on the page
	findWidget("At Page 1")
		.getValue()
		.should.eql("0.00");

	findWidget("new_page")
		.getWorkflowItems()
		.clickOnWorkflowStep("Lib1 Step 1"); // Move to page 1 in Lib1

	// Verify by checking a specific widget being present on the page
	findWidget("l1::At Lib 1 Page 1")
		.getValue()
		.should.eql("0.00");

	findWidget("l1::page1")
		.getWorkflowItems()
		.clickOnWorkflowStep("Lib2 Step 1"); // Move to page 1 in Lib2

	// Verify by checking a specific widget being present on the page
	findWidget("l2::At Lib 2 Page 1")
		.getValue()
		.should.eql("0.00");
});
