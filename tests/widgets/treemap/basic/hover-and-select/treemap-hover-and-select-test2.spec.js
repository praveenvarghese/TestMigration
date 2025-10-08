/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Hover and select behaviour on Treemap.", () => {
	loadPage("Main Project/Charts");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.hover();

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.hover();

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.8");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.click()
		.hasClass("is-active")
		.should.be.equal(true);

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.6");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.click();

	mouseHoverMenuButton();

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Treemap")
		.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");
});
