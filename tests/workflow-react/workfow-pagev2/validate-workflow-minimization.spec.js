/*!
 * @AIMMS_FILE=models/react-workflow-models/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Test to Verify workflow and widgets behaviour of standard layout when all the settings are opened and closed",
	() => {
		loadPage("Main Project/StandardLayout");

		const expected_widgets = ["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"];
		const expected_workflowItems = [
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
		];

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when page manager is opened and closed
		getPageHeader()
			.getButtons()
			.getPageManager()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.collapseWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getCollapsedData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.maximizeWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		closeAppManager();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when widget manager is opened and closed

		getPageHeader()
			.getButtons()
			.getWidgetManager()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.collapseWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getCollapsedData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.maximizeWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getWidgetManager()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when data manager is opened and closed

		getPageHeader()
			.getButtons()
			.getDataManager()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.collapseWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getCollapsedData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.maximizeWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getDataManager()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when page setting is opened and closed

		getPageHeader()
			.getButtons()
			.getPageSettings()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.collapseWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getCollapsedData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.maximizeWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getPageSettings()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when application setting is opened and closed

		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.collapseWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getCollapsedData()
			.should.eql(expected_workflowItems);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.maximizeWorkflowPanel();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		findWidget("standardlayout_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("standardlayout_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);
	}
);
