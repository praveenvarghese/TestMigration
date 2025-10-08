/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Item action functionality in custom layout page", () => {
	loadPage("Main Project/ItemACtionCustomPage");

	/*
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a table cell
	findWidget("table2")
		.getCell(2, 2)
		.rightClick(1, 1)
		.getItemActions()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);

	// Right click on an another table
	findWidget("Table1")
		.getCell(2, 2)
		.rightClick(1, 1)
		.getItemActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);
});
