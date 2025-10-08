/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario(
	"With String data from simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameter contents loaded on individual Compact-Scalar widgets. Right-click and assert respective item actions are shown.",
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
		Clear off Item Actions Data
		With String Data from a simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameters loaded on individual Scalar widgets
		Right-click on them and assert respective item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on Sp_MyText data in "Sp_Data" Scalar widget
		findWidget("Sp_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_RO_MyText data in "Sp_RO_Data" Scalar widget
		findWidget("Sp_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_nData data in "Sp_nD_Data" Scalar widget
		findWidget("Sp_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_RO_nData data in "Sp_RO_nD_Data" Scalar widget
		findWidget("Sp_RO_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		/*
		Update the Item Actions Data
		/* With String Data from a simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameters loaded on individual Scalar widgets
		Right-click on them and assert respective item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Right click on Sp_MyText data in "Sp_Data" Scalar widget
		findWidget("Sp_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_RO_MyText data in "Sp_RO_Data" Scalar widget
		findWidget("Sp_RO_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from Sp_RO_MyText",
					icon: "aimms-stats-bars",
					state: "active",
				},
			]);

		// Get the item actions context-menu off
		// findWidget("Sp_RO_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("Sp_RO_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on Sp_nData data in "Sp_nD_Data" Scalar widget
		findWidget("Sp_nD_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from Sp_nData",
					icon: "aimms-chart",
					state: "inactive",
				},
				{
					title: "Recent closed task of Sp_nData",
					icon: "aimms-folder-download2",
					state: "active",
				},
				{
					title: "Top 1 Open task of Sp_nData",
					icon: "aimms-list-numbered",
					state: "active",
				},
				{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
			]);

		// Get the item actions context-menu off
		findWidget("Sp_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Right click on Sp_RO_nData data in "Sp_RO_nD_Data" Scalar widget
		findWidget("Sp_RO_nD_Data")
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
	}
);
