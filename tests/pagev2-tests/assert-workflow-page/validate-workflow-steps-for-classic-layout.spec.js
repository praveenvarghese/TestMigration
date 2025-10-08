/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Test to Verify workflow and widgets behaviour of classic layout when all the settings are opened and closed",
	() => {
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

		//Validate workflow steps and widgets displayed when page manager is opened and closed
		openAppManager();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		closeAppManager();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when widget manager is opened and closed

		getPageHeader()
			.getButtons()
			.getWidgetManager()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getWidgetManager()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when data manager is opened and closed

		getPageHeader()
			.getButtons()
			.getDataManager()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getDataManager()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when page setting is opened and closed

		getPageHeader()
			.getButtons()
			.getPageSettings()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getPageSettings()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		//Validate workflow steps and widgets displayed when application setting is opened and closed

		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);

		getPageHeader()
			.getButtons()
			.getApplicationSettings()
			.click();

		findWidget("wizard_newui_page_1")
			.getVisibleWidgetsInViewPort()
			.should.eql(expected_widgets);

		findWidget("wizard_newui_page_1")
			.getWorkflowItems()
			.getData()
			.should.eql(expected_workflowItems);
	}
);
