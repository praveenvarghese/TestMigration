/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Select behaviour on Bar chart is retained shuffling between full screen and normal view.",
	() => {
		loadPage("Main Project/Charts");

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Gran Canaria")
			.click();

		findWidget("Barchart").goInFullScreenMode();

		findWidget("Barchart").isFullScreen().should.be.true;

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
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Fuerteventura")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Fuerteventura")
			.click();

		findWidget("Barchart").exitFullScreenMode();

		findWidget("Barchart").isFullScreen().should.be.false;

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Fuerteventura")
			.getCSSStyleProperty("opacity")
			.should.be.equal("1");

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Gran Canaria")
			.getCSSStyleProperty("opacity")
			.should.be.equal("0.7");

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Fuerteventura")
			.hasClass("is-active")
			.should.be.equal(true);

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Gran Canaria")
			.hasClass("is-active")
			.should.be.equal(false);

		findWidget("Barchart")
			.findBar("TotalCostPerIsland,Isla de Fuerteventura")
			.click();

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
	}
);
