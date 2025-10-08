/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("persisting-focus-on-a-table-cell", () => {
	loadPage("Main Project/Item Actions/Table Data");

	// Bring focus on cell by clicking
	findWidget("IND Cities Coordinates")
		.getCell(1, 1)
		.click();

	findWidget("IND Cities Coordinates").goInFullScreenMode();

	findWidget("IND Cities Coordinates").isFullScreen().should.be.true;

	//the same cell should be remain in focus
	findWidget("IND Cities Coordinates")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([1, 1]);

	findWidget("IND Cities Coordinates").exitFullScreenMode();

	//the same cell should be remain in focus
	findWidget("IND Cities Coordinates")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([1, 1]);

	findWidget("IND Cities Coordinates").isFullScreen().should.be.false;

	loadPageInNewTab("Main Project/Planes Info/Tasks?webui-state-support=true");

	findWidget("Plane Info Tasks").should.exist;

	switchToTab("Main Project/Item Actions/Table Data");

	//the same cell should be remain in focus
	findWidget("IND Cities Coordinates")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([1, 1]);

	// On a Dialog Page
	findWidget("DialogPage").click();

	// Bring focus on cell by clicking
	findWidget("dialogPageTable")
		.getCell(1, 0)
		.click();

	switchToTab("Main Project/Planes Info/Tasks");

	findWidget("Plane Info Tasks").should.exist;

	switchToTab("Main Project/Item Actions/Table Data");

	//the same cell should be remain in focus
	findWidget("dialogPageTable")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([1, 0]);

	findDialog()
		.findButton("OK")
		.click();

	//On Sidepanel
	// Open Sidepanel tab with Table widgets
	findWidget("data_1")
		.getSidepanels()
		.openSidepanelTab("Indian Cities Overview");

	findWidget("sidepanelTable")
		.getCell(1, 0)
		.click();

	switchToTab("Main Project/Planes Info/Tasks");

	findWidget("Plane Info Tasks").should.exist;

	switchToTab("Main Project/Item Actions/Table Data");

	//the same cell should be remain in focus
	findWidget("sidepanelTable")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([1, 0]);
});
