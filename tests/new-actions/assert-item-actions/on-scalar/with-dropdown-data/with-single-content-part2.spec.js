/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"With Dropdown data from simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter contents loaded on individual Scalar widgets. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*
		Clear off Item Actions Data
		With Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter loaded on individual Scalar widgets
		Right click and assert no item actions are shown.
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Assert item actions are displayed
		findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Ep_RO_SelectedPlane data in "Ep_RO_Data" Scalar widget
		findWidget("Ep_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Ep_RO_nData data in "Ep_RO_nD_Data" Scalar widget
		findWidget("Ep_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		/*
		Update the Item Actions Data
		With Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Right click on Ep_SelectedPlane data in "Dropdown Data" Scalar widget
		findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from Ep_SelectedPlane",
					icon: "aimms-stats-bars",
					state: "active",
				},
			]);

		// Get the item actions context-menu off
		// findWidget("Ep_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("Ep_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on Ep_RO_SelectedPlane data in "Ep_RO_Data" Scalar widget
		findWidget("Ep_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
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
		findWidget("Ep_RO_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on Ep_nData data in "Ep_nD_Data" Scalar widget
		findWidget("Ep_nD_Data")
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
		// findWidget("Ep_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("Ep_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on Ep_RO_nData data in "Ep_RO_nD_Data" Scalar widget
		findWidget("Ep_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;
	}
);
