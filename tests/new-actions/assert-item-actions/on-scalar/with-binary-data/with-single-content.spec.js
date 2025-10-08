/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"With Binary data from simple Parameter, Read-only Parameter, multi-dimensional Parameter contents loaded on individual Scalar widgets. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*
		With Binary Data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Right click on BinaryFlag data in "BinaryFlag" Scalar widget
		findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions().should.exist;

		// Assert there are 4 item actions. Assert the details.
		findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.have.numberOfItems.equal(4);
		findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
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
		findWidget("RO_BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
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
		findWidget("BinaryFlag_nD")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
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
		findWidget("BinaryFlag_RO_nD")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
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
		findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
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
	}
);
