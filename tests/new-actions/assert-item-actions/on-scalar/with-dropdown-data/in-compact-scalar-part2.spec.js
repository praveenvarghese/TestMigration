/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"With Dropdown data from simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter contents loaded on individual Compact-Scalar widgets. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		// Open Sidepanel tab and set all Scalar widgets to Compact-Scalar-mode
		findWidget("scalar_data")
			.getSidepanels()
			.openSidepanelTab("Widget Settings");
		findWidget("Scalar Widget Misc Settings").setValue("Enable_Compact_Mode", true);
		findWidget("scalar_data")
			.getSidepanels()
			.closeSidepanelTab();

		/*
		Update the Item Actions Data
		With Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Right click on Ep_SelectedPlane data in "Dropdown Data" Scalar widget
		const cell_Ep_SelectedPlane = findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_Ep_SelectedPlane_ItemActions = cell_Ep_SelectedPlane.getItemActions();
		cell_Ep_SelectedPlane_ItemActions.should.exist;

		// Assert there is 1 item action. Assert the details.
		cell_Ep_SelectedPlane_ItemActions.should.have.numberOfItems.equal(1);
		cell_Ep_SelectedPlane_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from Ep_SelectedPlane",
				icon: "aimms-stats-bars",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("Ep_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		// Right click on Ep_RO_SelectedPlane data in "Ep_RO_Data" Scalar widget
		const cell_Ep_RO_SelectedPlane = findWidget("Ep_RO_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_Ep_RO_SelectedPlane_ItemActions = cell_Ep_RO_SelectedPlane.getItemActions();
		cell_Ep_RO_SelectedPlane_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_Ep_RO_SelectedPlane_ItemActions.should.have.numberOfItems.equal(4);
		cell_Ep_RO_SelectedPlane_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from Ep_RO_SelectedPlane",
				icon: "aimms-chart",
				state: "inactive",
			},
			{
				title: "Recent closed task of Ep_RO_SelectedPlane",
				icon: "aimms-folder-download2",
				state: "active",
			},
			{
				title: "Top 1 Open task of Ep_RO_SelectedPlane",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
		]);

		// Get the item actions context-menu off
		// findWidget("Ep_RO_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		// Right click on Ep_nData data in "Ep_nD_Data" Scalar widget
		const cell_Ep_nData = findWidget("Ep_nD_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_Ep_nData_ItemActions = cell_Ep_nData.getItemActions();
		cell_Ep_nData_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_Ep_nData_ItemActions.should.have.numberOfItems.equal(2);
		cell_Ep_nData_ItemActions.should.beEqualTo([
			{
				title: "Show statistics.",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{ title: "Reset Data.", icon: "aimms-history", state: "inactive" },
		]);

		// Get the item actions context-menu off
		// findWidget("Ep_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		// Right click on Ep_RO_nData data in "Ep_RO_nD_Data" Scalar widget
		const cell_Ep_RO_nData = findWidget("Ep_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_Ep_RO_nData.getItemActions().should.not.exist;
	}
);
