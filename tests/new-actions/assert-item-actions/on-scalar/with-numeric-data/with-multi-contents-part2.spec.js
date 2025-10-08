/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On a Multi-contents Scalar widget with numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy messagage bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*
		Clear off Item Actions Data		On right-click of numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Assert no item actions are shown.
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on MyHeight data in "Numeric Data" Scalar widget

		// Assert no item actions are displayed
		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Assert item actions are displayed
		findWidget("Numeric Data")
			.getScalarCell("P_nD_Data")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Assert item actions are displayed
		findWidget("Numeric Data")
			.getScalarCell("P_RO_nD_Data")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		/*
		Update the Item Actions Data		On right-click of numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Assert respective item actions are shown.
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Right click on MyHeight data in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
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

		// Right click on MyWeight data in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("MyWeight")
			.rightClick(0, 0)
			.getItemActions().should.not.exist;

		// Right click on P_RO_nD_Data data in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("P_RO_nD_Data")
			.rightClick(0, 2)
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
