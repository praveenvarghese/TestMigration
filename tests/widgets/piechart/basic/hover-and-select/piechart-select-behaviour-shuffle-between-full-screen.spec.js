/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select behaviour on Pie chart is retained shuffling between full screen and normal view.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.click();

		findWidget("Piechart").goInFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.true;

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.click();

		findWidget("Piechart").exitFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.false;

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.click();

		findWidget("Piechart").goInFullScreenMode();

		findWidget("Piechart").isFullScreen().should.be.true;

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Piechart")
			.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");
	}
);
