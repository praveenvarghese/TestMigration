/*!
 * @AIMMS_FILE=models/PageV2/Workflow Panel Demo/Workflow Panel Demo.aimms
 */

scenario(
	"Test to Verify workflow is displayed properly when navigated to page v2 page from page v1",
	() => {
		loadPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/Route Optimization/Initialize Data");

		let expected_widgets = [
			"All Customers",
			"Supply Demand",
			"Allocate Categories",
			"Location Map",
			"Select Suppliers",
		];
		let expected_workflowItems = [
			{
				title: "Initialize Data",
				icon: "icon aimms-file-text2",
				state: "active",
				currentStep: "Yes",
			},
			{
				title: "Supplier Information",
				icon: "icon aimms-store2",
				state: "inactive",
				currentStep: "No",
			},
			{
				title: "Buyer Identification",
				icon: "icon aimms-cart-add",
				state: "inactive",
				currentStep: "No",
			},
			{
				title: "Inventory Allocation",
				icon: "icon aimms-barcode",
				state: "inactive",
				currentStep: "No",
			},
			{
				title: "Quality Assurance",
				icon: "icon aimms-clipboard2",
				state: "inactive",
				currentStep: "No",
			},
			{ title: "Shipping", icon: "icon aimms-anchor", state: "inactive", currentStep: "No" },
			{
				title: "Select Constraints",
				icon: "icon aimms-shield-notice",
				state: "inactive",
				currentStep: "No",
			},
			{
				title: "Optimize Delivery",
				icon: "icon aimms-rocket",
				state: "inactive",
				currentStep: "No",
			},
			{ title: "Review", icon: "icon aimms-file-eye", state: "active", currentStep: "No" },
			{ title: "Result", icon: "icon aimms-coin-euro", state: "inactive", currentStep: "No" },
		];

		findWidget("initialize_data")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("initialize_data")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageMenu().navigateToPage("Main Project/Quality Assurance/Quality Report");

		expected_widgets = ["Go To Step 1_1"];
		expected_workflowItems = [
			{
				title: "Quality Report",
				icon: "icon aimms-file-spreadsheet",
				state: "active",
				currentStep: "Yes",
			},
			{
				title: "Inspection Plans",
				icon: "icon aimms-binoculars2",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Quality Issues",
				icon: "icon aimms-equalizer3",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Corrective Action",
				icon: "icon aimms-hammer-wrench",
				state: "active",
				currentStep: "No",
			},
			{
				title: "Quality Passed",
				icon: "icon aimms-file-check",
				state: "inactive",
				currentStep: "No",
			},
		];

		findWidget("quality_report")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("quality_report")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		findWidget("quality_report")
			.getWorkflowItems()
			.collapseWorkflowPanel();

		findWidget("quality_report")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("quality_report")
			.getWorkflowItems()
			.getCollapsedData()
			.should.eql(expected_workflowItems);
	}
);
