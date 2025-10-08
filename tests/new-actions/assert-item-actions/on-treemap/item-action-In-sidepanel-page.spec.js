/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for item action on Treemap in sidepanel page", () => {
	loadPage("Main Project/Gantt Drag Test Page");

	findWidget("gantt_drag_test_page")
		.getSidepanels()
		.openSidepanelTab("Tree Map Chart");

	findWidget("sidepanelTreeMap")
		.findRectangle("TotalCostPerIsland, Isla de Tenerife")
		.rightClick();

	findWidget("sidepanelTreeMap")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("sidepanelTreeMap")
		.getItemActions()
		.getItemActionDetails(0)
		.click();

	getDialog().should.exist;
});
