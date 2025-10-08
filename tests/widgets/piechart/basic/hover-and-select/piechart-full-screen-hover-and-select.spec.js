/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Hover and select behaviour on Pie chart in full screen mode.", () => {
	loadPage("Main Project/Charts");

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

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
		.hover();

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
		.hover();

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.9");

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
		.click()
		.hasClass("is-active")
		.should.be.equal(true);

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
		.hasClass("is-active")
		.should.be.equal(false);

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
		.click();

	mouseHoverMenuButton();

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Piechart")
		.findWedge("TotalCostPerIsland,Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");
});
