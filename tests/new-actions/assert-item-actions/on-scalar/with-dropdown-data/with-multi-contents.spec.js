/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On a Multi-contents Scalar widget with Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameters. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		//On a Multi-contents Scalar with Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameters
		//Right click and assert respective item actions are shown.

		// Right click on Ep_SelectedPlane data in "Dropdown Data" Scalar widget
		let cell_Ep_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
			.click(0, 0);

		// Right click on Ep_RO_SelectedPlane data in "Dropdown Data" Scalar widget
		let cell_Ep_RO_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_SelectedPlane")
			.rightClick(0, 0);

		// Assert item actions are displayed
		let cell_Ep_RO_SelectedPlane_ItemActions = cell_Ep_RO_SelectedPlane.getItemActions();
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_SelectedPlane")
			.click(0, 0);

		// Right click on Ep_nData data in "Dropdown Data" Scalar widget
		let cell_Ep_nData = findWidget("Dropdown Data")
			.getScalarCell("Ep_nData")
			.rightClick(0, 0);

		// Assert item actions are displayed
		let cell_Ep_nData_ItemActions = cell_Ep_nData.getItemActions();
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_nData")
			.click(0, 0);

		// Right click on Ep_RO_nData data in "Dropdown Data" Scalar widget
		let cell_Ep_RO_nData = findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_nData")
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_nData")
			.click(0, 0);

		// Update value of Ep_SelectedPlane in "Dropdown Data" Scalar widget
		findWidget("Dropdown Data").setValue("Ep_SelectedPlane", "Boeing 737");

		// Right click on Ep_SelectedPlane data in "Dropdown Data" Scalar widget
		cell_Ep_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
			.click(0, 0);

		/* Clear off Item Actions Data On right-click of Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameters
		Assert no item actions are shown. */

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on Ep_SelectedPlane data in "Dropdown Data" Scalar widget
		cell_Ep_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_SelectedPlane.getItemActions().should.not.exist;

		// Right click on Ep_RO_SelectedPlane data in "Dropdown Data" Scalar widget
		cell_Ep_RO_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_SelectedPlane")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_RO_SelectedPlane.getItemActions().should.not.exist;

		// Right click on Ep_nData data in "Dropdown Data" Scalar widget
		cell_Ep_nData = findWidget("Dropdown Data")
			.getScalarCell("Ep_nData")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_Ep_nData.getItemActions().should.not.exist;

		// Right click on Ep_RO_nData data in "Dropdown Data" Scalar widget
		cell_Ep_RO_nData = findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_nData")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_Ep_RO_nData.getItemActions().should.not.exist;

		/* Update the Item Actions Data on right-click of Dropdown Data from a simple Element Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameters
		Assert respective item actions are shown. */

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Right click on Ep_SelectedPlane data in "Dropdown Data" Scalar widget
		cell_Ep_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_SelectedPlane_ItemActions = cell_Ep_SelectedPlane.getItemActions();
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_SelectedPlane")
			.click(0, 0);

		// Right click on Ep_RO_SelectedPlane data in "Dropdown Data" Scalar widget
		cell_Ep_RO_SelectedPlane = findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_SelectedPlane")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_RO_SelectedPlane_ItemActions = cell_Ep_RO_SelectedPlane.getItemActions();
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_SelectedPlane")
			.click(0, 0);

		// Right click on Ep_nData data in "Dropdown Data" Scalar widget
		cell_Ep_nData = findWidget("Dropdown Data")
			.getScalarCell("Ep_nData")
			.rightClick(0, 0);

		// Assert item actions are displayed
		cell_Ep_nData_ItemActions = cell_Ep_nData.getItemActions();
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
		// findWidget("Dropdown Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Dropdown Data")
			.getScalarCell("Ep_nData")
			.click(0, 0);

		// Right click on Ep_RO_nData data in "Dropdown Data" Scalar widget
		cell_Ep_RO_nData = findWidget("Dropdown Data")
			.getScalarCell("Ep_RO_nData")
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_Ep_RO_nData.getItemActions().should.not.exist;
	}
);
