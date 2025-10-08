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
		With Dropdown Data from a simple Element-Parameter, Read-only Element-Parameter, multi-dimensional Element-Parameter loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		findWidget("Ep_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 3 item actions. Assert the details.
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
		findWidget("Ep_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on Ep_RO_nData data in "Ep_RO_nD_Data" Scalar widget
		findWidget("Ep_RO_nD_Data")
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
		// findWidget("Ep_RO_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("Ep_RO_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Update value of Ep_SelectedPlane in "Ep_Data" Scalar widget
		findWidget("Ep_Data").setValue("Boeing 737");

		// Right click on Ep_SelectedPlane data in "Ep_Data" Scalar widget
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
	}
);
