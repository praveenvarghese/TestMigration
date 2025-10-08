/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Hover and select behaviour on Bar chart in full screen mode.", () => {
	loadPage("Main Project/Charts");

	findWidget("Barchart").goInFullScreenMode();

	findWidget("Barchart").isFullScreen().should.be.true;

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.hover();

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.hover();

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.9");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.click()
		.hasClass("is-active")
		.should.be.equal(true);

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.7");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.click();

	mouseHoverMenuButton();

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Barchart")
		.findBar("TotalCostPerIsland,Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");
});
