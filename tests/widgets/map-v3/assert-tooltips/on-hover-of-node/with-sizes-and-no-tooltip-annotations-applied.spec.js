/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes, with Node-Sizes applied. Hover the nodes and assert the tooltip text seen.",
	() => {
		loadPage("Main Project/StepsV3/map_with_node_size_v3");

		findWidget("Map with NodeSize_1").getTooltip().should.not.exist;

		findWidget("Map with NodeSize_1")
			.getPoint("Amersfoort")
			.hover();
		let tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Amersfoort");

		findWidget("Map with NodeSize_1")
			.getPoint("Groningen")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Groningen");

		// Clear size of Amersfoort Node.
		findWidget("Clear Size of Amersfoort Node").click();

		// With Node sizes being updated. Hover on the nodes and assert tooltip's are shown
		findWidget("Map with NodeSize_1")
			.getPoint("Groningen")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Groningen");

		findWidget("Map with NodeSize_1")
			.getPoint("Breda")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Breda");
	}
);
