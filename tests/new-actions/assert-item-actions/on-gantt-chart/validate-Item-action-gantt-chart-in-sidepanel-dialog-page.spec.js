/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Check on right click itrem action should be opened in gantt chart of dialog page", () => {
	loadPage("Main Project/Gantt New Page");

	closeAppManager();

	// Open Sidepanel tab with Bar Charts
	findWidget("gantt_new_page")
		.getSidepanels()
		.openSidepanelTab("Gantt Side Panel");

	findWidget("sidePanelGantt")
		.findResource(["Jan"])
		.findJob("Sleeping")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("dialogButton").click();

	//Validate on right click store focus is set and item is opened
	findWidget("ganttCHartInDIalog")
		.findResource(["Piet"])
		.findJob("Spare-Time")
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);
});
