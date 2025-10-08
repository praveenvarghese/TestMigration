/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario("Assert item actions in dialog page v2 custom,standard layout", () => {
	loadPage("Main Project/dp v2 ItemACtionCustom");

	/*
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a table cell
	findWidget("table2_v2")
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
	findWidget("Table1_v2")
		.getCell(2, 2)
		.rightClick(1, 1)
		.getItemActions()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);

	loadPage("Main Project/dp v2 ChartStandard");

	/*
		With Item actions data now configured.
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a Bar element
	findWidget("barchart1_v2")
		.findBar("IA_JobStart,3,AM")
		.rightClick();

	findWidget("barchart1_v2")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);

	// Right click on a another Bar element
	findWidget("barchart2_v2")
		.findBar("IA_JobDuration,3,AM")
		.rightClick();

	findWidget("barchart2_v2")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);
});
