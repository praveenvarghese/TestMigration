/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
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
		Clear off Item Actions Data
		With Binary Data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemAction data removed
		findWidget("Clear ItemActions Data").click();

		// Right click on BinaryFlag data in "BinaryFlag" Scalar widget
		findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions().should.not.exist;

		// Right click on MyHeight data in "RO_BinaryFlag" Scalar widget
		findWidget("RO_BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions().should.not.exist;

		// Right click on MyWeight data in "BinaryFlag_nD" Scalar widget
		findWidget("BinaryFlag_nD")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions().should.not.exist;

		// Right click on RO_nD_BinaryFlag data in "BinaryFlag_RO_nD" Scalar widget
		findWidget("BinaryFlag_RO_nD")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions().should.not.exist;

		/*
		Update the Item Actions Data
		With Binary Data from a simple Parameter, Read-only Parameter, multi-dimensional Parameters loaded on individual Scalar widgets
		Right click and assert respective item actions are shown.
 * @DURATION=long
		*/

		// Get the ItemActions data updated
		findWidget("Update Scalar ItemAction Data").click();

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Right click on BinaryFlag data in "BinaryFlag" Scalar widget
		findWidget("BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Show last Quarter data from BinaryFlag",
					icon: "aimms-chart",
					state: "inactive",
				},
				{
					title: "Recent closed task of BinaryFlag",
					icon: "aimms-folder-download2",
					state: "active",
				},
				{
					title: "Top 1 Open task of BinaryFlag",
					icon: "aimms-list-numbered",
					state: "active",
				},
				{ title: "Add a reminder", icon: "aimms-mail", state: "active" },
			]);

		// Get the item actions context-menu off
		// findWidget("BinaryFlag").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("BinaryFlag")
			.getScalarCell()
			.click(10, 10);

		// Right click on MyHeight data in "RO_BinaryFlag" Scalar widget
		findWidget("RO_BinaryFlag")
			.getScalarCell()
			.rightClick(10, 10)
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
		// findWidget("RO_BinaryFlag").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("RO_BinaryFlag")
			.getScalarCell()
			.click(10, 10);

		// Right click on MyWeight data in "BinaryFlag_nD" Scalar widget
		findWidget("BinaryFlag_nD")
			.getScalarCell()
			.rightClick(10, 10)
			.getItemActions().should.not.exist;

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
			]);
	}
);
