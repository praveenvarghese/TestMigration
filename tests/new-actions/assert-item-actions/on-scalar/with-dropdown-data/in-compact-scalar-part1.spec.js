/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
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
		With Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
 * @DURATION=long
		*/

		// Right click on Ep_SelectedPlane data in "Ep_Data" Scalar widget
		let cell_Ep_SelectedPlane = findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		let cell_Ep_SelectedPlane_ItemActions = cell_Ep_SelectedPlane.getItemActions();
		cell_Ep_SelectedPlane_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_Ep_SelectedPlane_ItemActions.should.have.numberOfItems.equal(3);
		cell_Ep_SelectedPlane_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from Ep_SelectedPlane",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Recent closed task of Ep_SelectedPlane",
				icon: "aimms-clipboard2",
				state: "inactive",
			},
			{
				title: "Top 1 Open task of Ep_SelectedPlane",
				icon: "aimms-list-numbered",
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
		let cell_Ep_RO_SelectedPlane = findWidget("Ep_RO_Data")
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
				state: "active",
			},
			{
				title: "Recent closed task of Ep_RO_SelectedPlane",
				icon: "aimms-clipboard2",
				state: "active",
			},
			{
				title: "Top 1 Open task of Ep_RO_SelectedPlane",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
		]);

		// Get the item actions context-menu off
		// findWidget("Ep_RO_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		// Right click on Ep_nData data in "Ep_nD_Data" Scalar widget
		let cell_Ep_nData = findWidget("Ep_nD_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_Ep_nData_ItemActions = cell_Ep_nData.getItemActions();
		cell_Ep_nData_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_Ep_nData_ItemActions.should.have.numberOfItems.equal(3);
		cell_Ep_nData_ItemActions.should.beEqualTo([
			{
				title: "Read data from Server.",
				icon: "aimms-satellite-dish",
				state: "active",
			},
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
		let cell_Ep_RO_nData = findWidget("Ep_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_Ep_RO_nData_ItemActions = cell_Ep_RO_nData.getItemActions();
		cell_Ep_RO_nData_ItemActions.should.exist;

		// Assert there are 5 item actions. Assert the details.
		cell_Ep_RO_nData_ItemActions.should.have.numberOfItems.equal(5);
		cell_Ep_RO_nData_ItemActions.should.beEqualTo([
			{
				title: "Select next available slot as per Calendar.",
				icon: "aimms-calendar5",
				state: "active",
			},
			{
				title: "Other tasks on this Date",
				icon: "aimms-question",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
			{ title: "Reset Date", icon: "aimms-history", state: "inactive" },
			{ title: "Clear Date", icon: "aimms-eraser2", state: "active" },
		]);

		// Get the item actions context-menu off
		// findWidget("Ep_RO_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		// Update value of Ep_SelectedPlane in "Ep_Data" Scalar widget
		findWidget("Ep_Data").setValue("Boeing 737");

		// Right click on Ep_SelectedPlane data in "Ep_Data" Scalar widget
		cell_Ep_SelectedPlane = findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_SelectedPlane_ItemActions = cell_Ep_SelectedPlane.getItemActions();
		cell_Ep_SelectedPlane_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_Ep_SelectedPlane_ItemActions.should.have.numberOfItems.equal(3);
		cell_Ep_SelectedPlane_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from Ep_SelectedPlane",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Recent closed task of Ep_SelectedPlane",
				icon: "aimms-clipboard2",
				state: "inactive",
			},
			{
				title: "Top 1 Open task of Ep_SelectedPlane",
				icon: "aimms-list-numbered",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("Ep_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		getFooter()
			.getBreadcrumb()
			.getBreadcrumbLink(1)
			.click();

		/*
		Clear off Item Actions Data
		With Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter loaded on individual Scalar widgets
		Right click and assert no item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on Ep_SelectedPlane data in "Ep_Data" Scalar widget
		cell_Ep_SelectedPlane = findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_SelectedPlane.getItemActions().should.not.exist;

		// Right click on Ep_RO_SelectedPlane data in "Ep_RO_Data" Scalar widget
		cell_Ep_RO_SelectedPlane = findWidget("Ep_RO_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_RO_SelectedPlane.getItemActions().should.not.exist;

		// Right click on Ep_nData data in "Ep_nD_Data" Scalar widget
		cell_Ep_nData = findWidget("Ep_nD_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_Ep_nData.getItemActions().should.not.exist;

		// Right click on Ep_RO_nData data in "Ep_RO_nD_Data" Scalar widget
		cell_Ep_RO_nData = findWidget("Ep_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_Ep_RO_nData.getItemActions().should.not.exist;
	}
);
