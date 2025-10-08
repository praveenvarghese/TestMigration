/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"With Binary data from simple Parameter, Read-only Parameter, multi-dimensional Parameter contents loaded on individual Compact-Scalar widgets. Right-click and assert respective item actions are shown.",
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
		With Binary Data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Right click on BinaryFlag data in "BinaryFlag" Scalar widget
		let cell_BinaryFlag = findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10);

		// Assert item actions are displayed
		let cell_BinaryFlag_ItemActions = cell_BinaryFlag.getItemActions();
		cell_BinaryFlag_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_BinaryFlag_ItemActions.should.have.numberOfItems.equal(4);
		cell_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from BinaryFlag",
				icon: "aimms-chart",
				state: "active",
			},
			{
				title: "Recent closed task of BinaryFlag",
				icon: "aimms-clipboard2",
				state: "active",
			},
			{
				title: "Top 1 Open task of BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
		]);

		// Get the item actions context-menu off
		// findWidget("BinaryFlag").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BinaryFlag")
			.getScalarCell()
			.click(10, 10);

		// Right click on RO_BinaryFlag data in "RO_BinaryFlag" Scalar widget
		const cell_RO_BinaryFlag = findWidget("RO_BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10);

		// Assert item actions are displayed
		const cell_RO_BinaryFlag_ItemActions = cell_RO_BinaryFlag.getItemActions();
		cell_RO_BinaryFlag_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_RO_BinaryFlag_ItemActions.should.have.numberOfItems.equal(3);
		cell_RO_BinaryFlag_ItemActions.should.beEqualTo([
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
		// findWidget("RO_BinaryFlag").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("RO_BinaryFlag")
			.getScalarCell()
			.click(10, 10);

		// Right click on nD_BinaryFlag data in "BinaryFlag_nD" Scalar widget
		const cell_nD_BinaryFlag = findWidget("BinaryFlag_nD")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_nD_BinaryFlag_ItemActions = cell_nD_BinaryFlag.getItemActions();
		cell_nD_BinaryFlag_ItemActions.should.exist;

		// Assert there are 5 item actions. Assert the details.
		cell_nD_BinaryFlag_ItemActions.should.have.numberOfItems.equal(5);
		cell_nD_BinaryFlag_ItemActions.should.beEqualTo([
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
		// findWidget("BinaryFlag_nD").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BinaryFlag_nD")
			.getScalarCell()
			.click(0, 0);

		// Right click on RO_nD_BinaryFlag data in "BinaryFlag_RO_nD" Scalar widget
		const cell_RO_nD_BinaryFlag = findWidget("BinaryFlag_RO_nD")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_RO_nD_BinaryFlag_ItemActions = cell_RO_nD_BinaryFlag.getItemActions();
		cell_RO_nD_BinaryFlag_ItemActions.should.exist;

		// Assert there are 3 item actions. Assert the details.
		cell_RO_nD_BinaryFlag_ItemActions.should.have.numberOfItems.equal(3);
		cell_RO_nD_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from RO_nD_BinaryFlag",
				icon: "aimms-stats-bars",
				state: "active",
			},
			{
				title: "Recent closed task of RO_nD_BinaryFlag",
				icon: "aimms-clipboard2",
				state: "inactive",
			},
			{
				title: "Top 1 Open task of RO_nD_BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		// findWidget("BinaryFlag_RO_nD").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BinaryFlag_RO_nD")
			.getScalarCell()
			.click(0, 0);

		// Update value of BinaryFlag in "BinaryFlag" Scalar widget
		findWidget("BinaryFlag").setValue(false);

		// Right click on updated BinaryFlag in "BinaryFlag" Scalar widget
		cell_BinaryFlag = findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10);

		// Assert item actions are displayed
		cell_BinaryFlag_ItemActions = cell_BinaryFlag.getItemActions();
		cell_BinaryFlag_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_BinaryFlag_ItemActions.should.have.numberOfItems.equal(4);
		cell_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from BinaryFlag",
				icon: "aimms-chart",
				state: "active",
			},
			{
				title: "Recent closed task of BinaryFlag",
				icon: "aimms-clipboard2",
				state: "active",
			},
			{
				title: "Top 1 Open task of BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
		]);
	}
);
