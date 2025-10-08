/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Check for store focus with item action on Treemap, while juggling between normal and full screen.",
	() => {
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

		findWidget("treeMap2")
			.findRectangle("TotalCostPerIsland, Isla de Tenerife")
			.rightClick();

		findWidget("treeMap2")
			.getItemActions()
			.getData()
			.should.beEqualTo([
				{ title: "Factory Details", icon: "aimms-info", state: "active" },
				{ title: "View existing orders", icon: "aimms-cart", state: "active" },
				{ title: "Job Details", icon: "aimms-eraser", state: "active" },
				{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
			]);
	}
);
