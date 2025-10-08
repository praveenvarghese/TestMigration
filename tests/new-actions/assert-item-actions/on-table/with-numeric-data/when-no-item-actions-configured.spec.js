/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On a table with no Item actions info configured. Right click on the data cells and assert item actions are not shown.",
	() => {
		loadPage("Main Project/Highlight Table Test Page?_aimms_only_table_itemactions=true");

		closeAppManager();

		// Right click on cell(0,0) and assert item actions are not displayed
		findWidget("Highlight table")
			.getCell(0, 0)
			.rightClick()
			.getItemActions().should.not.exist;

		// Click on cell(0,2)
		findWidget("Highlight table")
			.getCell(0, 2)
			.click();
		// Right-click and assert item actions are not displayed
		findWidget("Highlight table")
			.getCell(0, 2)
			.rightClick()
			.getItemActions().should.not.exist;

		// Click on cell(2,0)
		findWidget("Highlight table")
			.getCell(2, 0)
			.click();
		// Right-click and assert item actions are not displayed
		findWidget("Highlight table")
			.getCell(2, 0)
			.rightClick()
			.getItemActions().should.not.exist;

		// Click on cell(2,2)
		findWidget("Highlight table")
			.getCell(2, 2)
			.click();
		// Right-click and assert item actions are not displayed
		findWidget("Highlight table")
			.getCell(2, 2)
			.rightClick()
			.getItemActions().should.not.exist;
	}
);
