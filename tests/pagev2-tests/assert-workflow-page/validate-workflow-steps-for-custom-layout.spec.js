/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Test to Verify workflow and widgets behaviour of custom layout when all the settings are opened and closed",
	() => {
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

		//Validate workflow steps and widgets displayed when page manager is opened and closed
		openAppManager();

		findWidget("customlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("customlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		closeAppManager();

		findWidget("customlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("customlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when widget manager is opened and closed

		getPageHeader()
			.getButtons()
			.getWidgetManager()
			.click();

		findWidget("customlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("customlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getWidgetManager()
			.click();

		findWidget("customlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("customlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when data manager is opened and closed

		getPageHeader()
			.getButtons()
			.getDataManager()
			.click();

		findWidget("customlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("customlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getDataManager()
			.click();

		findWidget("customlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("customlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when page setting is opened and closed

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

		//Validate workflow steps and widgets displayed when application setting is opened and closed

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
	}
);
