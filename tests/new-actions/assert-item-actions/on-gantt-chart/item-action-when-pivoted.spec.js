/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Check on right click store focus is set on Gantt chart.", () => {
	loadPage("Main Project/Gantt New Page");

	closeAppManager();

	findWidget("firstWidget")
		.dragIndex("j")
		.dropIn("jobs");

	//Validate on right click store focus is set and item is opened
	findWidget("firstWidget")
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

	findWidget("firstWidget").goInFullScreenMode();

	findWidget("firstWidget").isFullScreen().should.be.true;

	findWidget("firstWidget")
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
