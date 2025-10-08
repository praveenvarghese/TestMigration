/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select behaviour on Treemap is retained shuffling between full screen and normal view.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
			.click();

		findWidget("Treemap").goInFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.true;

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
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
			.click();

		findWidget("Treemap").exitFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.false;

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.6");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
			.click();

		findWidget("Treemap").goInFullScreenMode();

		findWidget("Treemap").isFullScreen().should.be.true;

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Fuerteventura")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Treemap")
			.findRectangle("TotalCostPerIsland, Isla de Gran Canaria")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");
	}
);
