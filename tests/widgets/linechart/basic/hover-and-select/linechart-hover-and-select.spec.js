/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Hover and select behaviour on Line chart.", () => {
	loadPage("Main Project/Charts");

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.hover();

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.hover();

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.getCSSStyleProperty("opacity")
		.should.be.equal("0.9");

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.click()
		.hasClass("is-active")
		.should.be.equal(true);

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.hasClass("is-active")
		.should.be.equal(false);

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
		.click();

	mouseHoverMenuButton();

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.hasClass("is-active")
		.should.be.equal(false);

	findWidget("Linechart")
		.findPoint("Isla de Tenerife,TotalCostPerIsland")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");

	findWidget("Linechart")
		.findPoint("Isla de Lanzarote,TotalCostPerIsland")
		.getCSSStyleProperty("opacity")
		.should.be.equal("1");
});
