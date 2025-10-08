/*!
 * @AIMMS_FILE=models/LibraryWithWorkflowModel/LibraryWithWorkflowModel.aimms
 */

scenario(
	"Assert that a workflow setup from the main model can use pages from a(ny) library.",
	() => {
		loadPage("Main Project/home");

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
	}
);
