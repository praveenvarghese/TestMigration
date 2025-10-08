/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select behaviour on Line chart is retained shuffling between full screen and normal view.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Linechart")
			.findPoint("Isla de Tenerife,TotalCostPerIsland")
			.click();

		findWidget("Linechart").goInFullScreenMode();

		findWidget("Linechart").isFullScreen().should.be.true;

		findWidget("Linechart")
			.findPoint("Isla de Tenerife,TotalCostPerIsland")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Linechart")
			.findPoint("Isla de Lanzarote,TotalCostPerIsland")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("Linechart")
			.findPoint("Isla de Tenerife,TotalCostPerIsland")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Linechart")
			.findPoint("Isla de Lanzarote,TotalCostPerIsland")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Linechart")
			.findPoint("Isla de Lanzarote,TotalCostPerIsland")
			.click();

		findWidget("Linechart").exitFullScreenMode();

		findWidget("Linechart").isFullScreen().should.be.false;

		findWidget("Linechart")
			.findPoint("Isla de Lanzarote,TotalCostPerIsland")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Linechart")
			.findPoint("Isla de Tenerife,TotalCostPerIsland")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("Linechart")
			.findPoint("Isla de Lanzarote,TotalCostPerIsland")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Linechart")
			.findPoint("Isla de Tenerife,TotalCostPerIsland")
			.hasClass("is-active")
			.should.be.equal(false);
	}
);
