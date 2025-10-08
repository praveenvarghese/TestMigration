/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table with all hidden item actions. Right-click on the cells and assert no item actions are shown.",
	() => {
		loadPage(
			"Main Project/Item Actions/Table Data?_aimms_only_no_deprecation_dialog=true?_aimms_only_table_itemactions=true"
		);

		// Data setup
		findWidget("Reset Data").click();

		// Assert item actions are displayed
		findWidget("IND QC Certification Capacity")
			.getCell(0, 0)
			.rightClick()
			.getItemActions().should.not.exist;

		// Assert item actions are displayed
		findWidget("IND QC Certification Capacity")
			.getCell(1, 0)
			.rightClick()
			.getItemActions().should.not.exist;
	}
);
