/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
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
		Clear off Item Actions Data
		On right-click of numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Assert no item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Assert no item actions are displayed
		findWidget("P_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Assert no item actions are displayed
		findWidget("P_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Assert item actions are not displayed
		findWidget("P_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Assert item actions are not displayed
		findWidget("P_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		/*
		Update the Item Actions Data
		On right-click of numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Assert respective item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		findWidget("P_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
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

		// Assert no item actions are displayed
		findWidget("P_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

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
			]);

		// Get the item actions context-menu off
		// findWidget("P_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("P_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on P_RO_nD_Data data in "P_RO_nD_Data" Scalar widget
		findWidget("P_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from P_RO_nD_Data",
					icon: "aimms-chart",
					state: "inactive",
				},
				{
					title: "Recent closed task of P_RO_nD_Data",
					icon: "aimms-folder-download2",
					state: "active",
				},
				{
					title: "Top 1 Open task of P_RO_nD_Data",
					icon: "aimms-list-numbered",
					state: "active",
				},
				{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
			]);
	}
);
