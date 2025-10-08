/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"With Numeric data from simple Parameter, Read-only Parameter, multi-dimensional Parameter contents loaded on individual Scalar widgets. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy messagage bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*
		With Numeric Data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Assert there are 3 item actions. Assert the details.

		findWidget("P_Data")
			.getScalarCell()
			.rightClick(0, 0)
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
		// findWidget("P_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("P_Data")
			.getScalarCell()
			.click(0, 0);

		findWidget("P_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
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
		// findWidget("P_RO_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("P_RO_Data")
			.getScalarCell()
			.click(0, 0);

		findWidget("P_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from P_nD_Data",
					icon: "aimms-stats-bars",
					state: "active",
				},
				{
					title: "Recent closed task of P_nD_Data",
					icon: "aimms-clipboard2",
					state: "inactive",
				},
				{
					title: "Top 1 Open task of P_nD_Data",
					icon: "aimms-list-numbered",
					state: "active",
				},
			]);

		// Get the item actions context-menu off
		// findWidget("P_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("P_nD_Data")
			.getScalarCell()
			.click(0, 0);

		findWidget("P_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from P_RO_nD_Data",
					icon: "aimms-chart",
					state: "active",
				},
				{
					title: "Recent closed task of P_RO_nD_Data",
					icon: "aimms-clipboard2",
					state: "active",
				},
				{
					title: "Top 1 Open task of P_RO_nD_Data",
					icon: "aimms-list-numbered",
					state: "active",
				},
				{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
			]);

		findWidget("P_RO_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Update value of MyHeight in "P_Data" Scalar widget
		findWidget("P_Data").setValue("190.147852369");

		// Assert item actions are displayed
		findWidget("P_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 3 item actions. Assert the details.
		findWidget("P_Data")
			.getScalarCell()
			.rightClick(0, 0)
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
		// findWidget("P_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("P_Data")
			.getScalarCell()
			.click(0, 0);
	}
);
