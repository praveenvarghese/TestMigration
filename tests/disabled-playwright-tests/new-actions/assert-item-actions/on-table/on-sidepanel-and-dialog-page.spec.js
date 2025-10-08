/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Validate item action in an table of a sidepanel and dialog page ", () => {
	loadPage("Main Project/Item Actions/Table Data?_aimms_only_table_itemactions=true");

	// Close PageManager
	closeAppManager();

	// Validate sidepanel page tab
	findWidget("data_1")
		.getSidepanels()
		.getTabDisplayName()
		.should.eql(["Indian Cities Overview", "Scrollable Table with ItemAction"]);

	//Click on sidepanel tab
	findWidget("data_1")
		.getSidepanels()
		.openSidepanelTab("Indian Cities Overview");

	//Validate widget diplayed in the page
	findWidget("table_itemaction_sidepanel_1")
		.getVisibleWidgets()
		.should.eql(["sidepanelTable", "SP_Table_2"]);

	// Right click on cell(0,0) and validate item actions displayed
	findWidget("sidepanelTable")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Read data from Server.", icon: "aimms-satellite-dish", state: "active" },
			{ title: "Show statistics.", icon: "aimms-stats-bars", state: "active" },
			{ title: "Reset Data.", icon: "aimms-history", state: "inactive" },
		]);

	//Close the side panel tab
	findWidget("data_1")
		.getSidepanels()
		.closeSidepanelTab();

	//Invoke dialog page by clicking on a button
	findWidget("DialogPage").click();

	// Right click on cell(0,0) and validate item actions displayed
	findWidget("dialogPageTable")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Read data from Server.", icon: "aimms-satellite-dish", state: "active" },
			{ title: "Show statistics.", icon: "aimms-stats-bars", state: "active" },
			{ title: "Reset Data.", icon: "aimms-history", state: "inactive" },
		]);

	// Click on OK button of Dialog page
	findWidget("dialogPageTable").clickDialogPageButton("ok");
});
