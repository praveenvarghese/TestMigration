/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On a Multi-contents Scalar widget with String Data from a simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameters. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*Clear off Item Actions Data On right-click of String Data from a simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameters	Assert no item actions are Shown.*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on Sp_MyText data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_MyText")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_RO_MyText data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_RO_MyText")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_nData data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_nData")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_RO_nData data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_RO_nData")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		/*Update the Item Actions Data On right-click of String Data from a simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameters
		Assert respective item actions are shown.*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Right click on Sp_MyText data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_MyText")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on Sp_RO_MyText data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_RO_MyText")
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
		// findWidget("String Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("String Data")
			.getScalarCell("Sp_RO_MyText")
			.click(0, 0);

		// Right click on Sp_nData data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_nData")
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
		// findWidget("String Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("String Data")
			.getScalarCell("Sp_nData")
			.click(0, 0);

		// Right click on Sp_RO_nData data in "String Data" Scalar widget
		findWidget("String Data")
			.getScalarCell("Sp_RO_nData")
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
