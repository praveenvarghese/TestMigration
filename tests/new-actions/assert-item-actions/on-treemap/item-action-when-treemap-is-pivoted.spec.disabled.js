/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check for item action on Treemap when pivoted", () => {
	loadPage("Main Project/Tree Map Chart Page");

	findWidget("treeMap1")
		.findRectangle("TrafficDensity, Traffic-04")
		.rightClick();

	findWidget("treeMap1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Traffic Details", icon: "aimms-info", state: "active" },
			{ title: "View Traffic Details", icon: "aimms-cart", state: "active" },
		]);

	findWidget("treeMap1")
		.findRectangle("TrafficViolation, Traffic-10")
		.rightClick();

	findWidget("treeMap1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Penalty Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past Penalty", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("treeMap1")
		.dragIndex("t1")
		.dropIn("totals");

	findWidget("treeMap1")
		.findRectangle("TrafficDensity")
		.rightClick();

	findWidget("treeMap1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Traffic Details", icon: "aimms-info", state: "active" },
			{ title: "View Traffic Details", icon: "aimms-cart", state: "active" },
		]);

	findWidget("treeMap1")
		.findRectangle("TrafficViolation")
		.rightClick();

	findWidget("treeMap1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Penalty Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past Penalty", icon: "aimms-fire", state: "inactive" },
		]);

	findWidget("treeMap1")
		.dragIndex("t1")
		.dropIn("rectangles");

	findWidget("treeMap1")
		.findRectangle("TrafficDensity, Traffic-04")
		.rightClick();

	findWidget("treeMap1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Traffic Details", icon: "aimms-info", state: "active" },
			{ title: "View Traffic Details", icon: "aimms-cart", state: "active" },
		]);

	findWidget("treeMap1")
		.findRectangle("TrafficViolation, Traffic-10")
		.rightClick();

	findWidget("treeMap1")
		.getItemActions()
		.getData()
		.should.beEqualTo([
			{ title: "Penalty Details", icon: "aimms-eraser", state: "active" },
			{ title: "View Past Penalty", icon: "aimms-fire", state: "inactive" },
		]);
});
