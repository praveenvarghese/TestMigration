/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
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
		Update the Item Actions Data
		With Binary Data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Right click on BinaryFlag data in "BinaryFlag" Scalar widget
		const cell_BinaryFlag = findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10);

		// Assert item actions are displayed
		const cell_BinaryFlag_ItemActions = cell_BinaryFlag.getItemActions();
		cell_BinaryFlag_ItemActions.should.exist;

		// Assert there are 4 item actions. Assert the details.
		cell_BinaryFlag_ItemActions.should.have.numberOfItems.equal(4);
		cell_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from BinaryFlag",
				icon: "aimms-chart",
				state: "inactive",
			},
			{
				title: "Recent closed task of BinaryFlag",
				icon: "aimms-folder-download2",
				state: "active",
			},
			{
				title: "Top 1 Open task of BinaryFlag",
				icon: "aimms-list-numbered",
				state: "active",
			},
			{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
		]);

		// Get the item actions context-menu off
		// findWidget("BinaryFlag").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BinaryFlag")
			.getScalarCell()
			.click(10, 10);

		// Right click on MyHeight data in "RO_BinaryFlag" Scalar widget
		const cell_RO_BinaryFlag = findWidget("RO_BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10);

		// Assert item actions are displayed
		const cell_RO_BinaryFlag_ItemActions = cell_RO_BinaryFlag.getItemActions();
		cell_RO_BinaryFlag_ItemActions.should.exist;

		// Assert there are 2 item actions. Assert the details.
		cell_RO_BinaryFlag_ItemActions.should.have.numberOfItems.equal(2);
		cell_RO_BinaryFlag_ItemActions.should.beEqualTo([
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

		// Right click on MyWeight data in "BinaryFlag_nD" Scalar widget
		const cell_nD_BinaryFlag = findWidget("BinaryFlag_nD")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert no item actions are displayed
		cell_nD_BinaryFlag.getItemActions().should.not.exist;

		// Right click on RO_nD_BinaryFlag data in "BinaryFlag_RO_nD" Scalar widget
		const cell_RO_nD_BinaryFlag = findWidget("BinaryFlag_RO_nD")
			.getScalarCell()
			.rightClick(0, 0);

		// Assert item actions are displayed
		const cell_RO_nD_BinaryFlag_ItemActions = cell_RO_nD_BinaryFlag.getItemActions();
		cell_RO_nD_BinaryFlag_ItemActions.should.exist;

		// Assert there is 1 item action. Assert the details.
		cell_RO_nD_BinaryFlag_ItemActions.should.have.numberOfItems.equal(1);
		cell_RO_nD_BinaryFlag_ItemActions.should.beEqualTo([
			{
				title: "Show last Quarter data from RO_nD_BinaryFlag",
				icon: "aimms-stats-bars",
				state: "active",
			},
		]);
	}
);
