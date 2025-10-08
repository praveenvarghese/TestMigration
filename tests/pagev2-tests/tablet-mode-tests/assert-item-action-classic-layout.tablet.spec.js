/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Item action functionality in classic layout page", () => {
	loadPage("Main Project/ItemActionClassicLayout");

	/*
		Right-click and assert respective item actions are shown.
		*/

	// Right click on a Bubble Chart - solid bubble element
	findWidget("lineChart1")
		.findPoint("1,GLD,IA_JobStart")
		.rightClick(1, 1);

	findWidget("lineChart1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details1", icon: "aimms-info", state: "active" },
			{ title: "View existing orders1", icon: "aimms-cart", state: "active" },
			{ title: "Job Details1", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders1", icon: "aimms-fire", state: "inactive" },
		]);

	// Right click on a Bubble Chart - solid bubble element
	findWidget("lineChart2")
		.findPoint("1,LS,IA_JobDuration")
		.rightClick(1, 1);

	findWidget("lineChart2")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
			{ title: "Job Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
		]);
});
