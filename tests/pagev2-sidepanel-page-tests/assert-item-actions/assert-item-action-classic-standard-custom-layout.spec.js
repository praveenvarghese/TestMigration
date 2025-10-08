/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Item action functionality in classic,standard and custom layout page", () => {
	loadPage("Main Project/home");

	// Right click on a table
	findWidget("selectedTable")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("WoW Score");

	// Right click on a table
	findWidget("customTable2")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Impact Score");

	// Right click on a table
	findWidget("tableStandard")
		.getCell(0, 0)
		.rightClick()
		.getItemActions()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);
});
