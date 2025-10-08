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
		On a Multi-contents Scalar with numeric data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters
		Right click and assert respective item actions are shown.
		*/

		// Right click on MyHeight data in "Numeric Data" Scalar widget
		// Assert item actions are displayed
		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 3 item actions. Assert the details.
		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(3);

		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
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
		// findWidget("Numeric Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
			.click(0, 0);

		// Right click on MyWeight data in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("MyWeight")
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
		// findWidget("Numeric Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Numeric Data")
			.getScalarCell("MyWeight")
			.click(0, 0);

		// Right click on P_nD_Data data in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("P_nD_Data")
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
		// findWidget("Numeric Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Numeric Data")
			.getScalarCell("P_nD_Data")
			.click(0, 0);

		// Right click on P_RO_nD_Data data in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("P_RO_nD_Data")
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

		// Get the item actions context-menu off
		// findWidget("Numeric Data").pressKeys([SPECIAL_KEYS.escape]);
		findWidget("Numeric Data")
			.getScalarCell("P_RO_nD_Data")
			.click(0, 0);

		// Update value of MyHeight in "Numeric Data" Scalar widget
		findWidget("Numeric Data").setValue("MyHeight", "190.147852369");

		// Right click on updated MyHeight in "Numeric Data" Scalar widget
		findWidget("Numeric Data")
			.getScalarCell("MyHeight")
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
	}
);
