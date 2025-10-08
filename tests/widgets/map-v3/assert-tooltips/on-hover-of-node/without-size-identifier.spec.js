/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes, with default sizes. Hover the nodes and assert the tooltip text seen.",
	() => {
		loadPage("Main Project/StepsV3/map_with_node_size_v3");

		findWidget("Map Without NodeSize_1").getTooltip().should.not.exist;

		findWidget("Map Without NodeSize_1")
			.getPoint("Amersfoort")
			.hover();
		let tooltip = findWidget("Map Without NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Amersfoort");

		findWidget("Map Without NodeSize_1")
			.getPoint("Groningen")
			.hover();
		tooltip = findWidget("Map Without NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Groningen");

		findWidget("Map Without NodeSize_1")
			.getPoint("Den Helder")
			.hover();
		tooltip = findWidget("Map Without NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Den Helder");
	}
);
