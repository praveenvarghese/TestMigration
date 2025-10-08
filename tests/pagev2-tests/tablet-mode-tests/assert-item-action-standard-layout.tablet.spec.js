/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Item action functionality in standard layout page", () => {
	loadPage("Main Project/ChartStandardPage");

	/*
		With Item actions data now configured.
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a Bar element
	findWidget("barchart1")
		.findBar("IA_JobStart,3,AM")
		.rightClick();

	findWidget("barchart1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);

	// Right click on a another Bar element
	findWidget("barchart2")
		.findBar("IA_JobDuration,3,AM")
		.rightClick();

	findWidget("barchart2")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);
});
