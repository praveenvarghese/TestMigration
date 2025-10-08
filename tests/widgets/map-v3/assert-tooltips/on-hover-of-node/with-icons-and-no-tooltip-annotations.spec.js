/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes, with Node-Sizes and Icons applied. Hover the nodes and assert the tooltip text seen.",
	() => {
		loadPage("Main Project/StepsV3/map_with_node_size_v3");

		// Assert no tooltips are seen
		findWidget("Map with NodeSize_1").getTooltip().should.not.exist;

		// Amersfoort node has AIMMS icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Amersfoort")
			.hover();
		let tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Amersfoort");

		// Groningen node has AIMMS icon. Hover and assert tooltip is not seen.
		findWidget("Map with NodeSize_1")
			.getPoint("Groningen")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Groningen");

		// Apeldoorn node hass custom icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Apeldoorn")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Apeldoorn");

		// Dordrecht node hass custom icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Dordrecht")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Dordrecht");

		// Clear size of Amersfoort Node.
		findWidget("Clear Size of Amersfoort Node").click();
		// With Node sizes being updated. Hover on the nodes and assert tooltip's are shown

		// Groningen node has AIMMS icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Groningen")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Groningen");

		// Breda node has AIMMS icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Breda")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Breda");

		// Apeldoorn node hass custom icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Apeldoorn")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Apeldoorn");

		// Dordrecht node hass custom icon. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with NodeSize_1")
			.getPoint("Dordrecht")
			.hover();
		tooltip = findWidget("Map with NodeSize_1").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.be.equal("Dordrecht");
	}
);
