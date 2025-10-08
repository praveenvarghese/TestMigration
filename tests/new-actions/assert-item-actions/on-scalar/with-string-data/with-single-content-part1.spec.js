/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"With String data from simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameter contents loaded on individual Scalar widgets. Right-click and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions/Scalar Data");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Close the Page Manager
		closeAppManager();

		/*
		With String Data from a simple String-Parameter, Read-only String-Parameter, multi-dimensional String-Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
		*/

		// Right click on Sp_MyText data in "Sp_Data" Scalar widget
		findWidget("Sp_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions().should.exist;

		// Assert there are 5 item actions. Assert the details.
		findWidget("Sp_Data")
			.getScalarCell()
			.rightClick(0, 0)
			.getItemActions()
			.should.have.numberOfItems.equal(5);

		findWidget("Sp_Data")
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
		// findWidget("Sp_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("Sp_Data")
			.getScalarCell()
			.click(0, 0);

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
				{
					title: "Recent closed task of Sp_RO_MyText",
					icon: "aimms-clipboard2",
					state: "inactive",
				},
				{
					title: "Top 1 Open task of Sp_RO_MyText",
					icon: "aimms-list-numbered",
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
					state: "active",
				},
				{
					title: "Recent closed task of Sp_nData",
					icon: "aimms-clipboard2",
					state: "active",
				},
				{
					title: "Top 1 Open task of Sp_nData",
					icon: "aimms-list-numbered",
					state: "active",
				},
				{ title: "Add a reminder", icon: "aimms-mail", state: "inactive" },
			]);

		// Get the item actions context-menu off
		// findWidget("Sp_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
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
		// findWidget("Sp_RO_nD_Data").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("Sp_RO_nD_Data")
			.getScalarCell()
			.click(0, 0);

		// Update value of Sp_MyText in "Sp_Data" Scalar widget
		findWidget("Sp_Data").setValue("Madhu K Gowda");

		// Right click on Sp_MyText data in "Sp_Data" Scalar widget
		findWidget("Sp_Data")
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
	}
);
