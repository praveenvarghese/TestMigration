/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Check for store focus with item action on Treemap, while juggling between normal and full screen.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla Del Hierro")
			.rightClick();

		findWidget("Treemap")
			.getItemActions()
			.getData()
			.should.beEqualTo([
				{ title: "Factory Details", icon: "aimms-info", state: "active" },
				{ title: "View existing orders", icon: "aimms-cart", state: "active" },
				{ title: "Job Details", icon: "aimms-eraser", state: "active" },
				{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
			]);

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla Del Hierro");

		findWidget("Treemap").goInFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.true;

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de La Palma")
			.rightClick();

		findWidget("Treemap")
			.getItemActions()
			.getData()
			.should.beEqualTo([
				{ title: "Factory Details", icon: "aimms-info", state: "active" },
				{ title: "View existing orders", icon: "aimms-cart", state: "active" },
				{ title: "Job Details", icon: "aimms-eraser", state: "active" },
				{ title: "View Past orders", icon: "aimms-fire", state: "inactive" },
			]);

		findWidget("Treemap").exitFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.false;

		findWidget("data")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("TotalCostPerIsland");

		findWidget("data")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("Isla de La Palma");
	}
);
