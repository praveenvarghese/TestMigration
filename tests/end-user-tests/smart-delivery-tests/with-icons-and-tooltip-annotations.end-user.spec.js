/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @WEBUI_MODE=end_user
 */

scenario(
	"For Map loaded with Nodes, with Node-Sizes, Icons and tooltips annotations applied. Hover the nodes and assert the tooltip text seen.",
	() => {
		loadPage("Main Project/StepsV3/Maps with Tooltip annotations");
		// Reset data
		findWidget("Reset Data_2").click();

		// Groningen node has blank tooltip. Hover and assert tooltip is not seen.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Groningen")
			.hover();
		findWidget("Map with icons and tooltip annotations").getTooltip().should.not.exist;

		// Amersfoort node has custom tooltip. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Amersfoort")
			.hover();
		let tooltip = findWidget("Map with icons and tooltip annotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("This is Amersfoort node");

		// Eindhoven node has tooltip text with only whitespaces. Hover and assert tooltip is not seen.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Eindhoven")
			.hover();
		findWidget("Map with icons and tooltip annotations").getTooltip().should.not.exist;

		// Breda node has custom tooltip. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Breda")
			.hover();
		tooltip = findWidget("Map with icons and tooltip annotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("Node name: Breda");

		// Amsterdam node has custom tooltip. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Amsterdam")
			.hover();
		tooltip = findWidget("Map with icons and tooltip annotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("Capital of The Netherlands.");

		// Clear size of Amersfoort Node.
		findWidget("Clear Size of Amersfoort Node_1").click();
		// Update the tooltip contents.
		findWidget("Update Cities Tooltips Data").click();

		// With Node sizes and tooltip contents being updated. Hover on the nodes and assert tooltip's text
		// Groningen node has updated tooltip. Hover and assert tooltip text.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Groningen")
			.hover();
		tooltip = findWidget("Map with icons and tooltip annotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("Node name: Groningen");

		// Eindhoven node has updated tooltip. Hover and assert tooltip text.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Eindhoven")
			.hover();
		tooltip = findWidget("Map with icons and tooltip annotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("This is Eindhoven node.");

		// Breda node has custom tooltip. Hover and assert tooltip is seen with relevant text.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Breda")
			.hover();
		tooltip = findWidget("Map with icons and tooltip annotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("This is Breda node.");

		// Amsterdam node has blank tooltip. Hover and assert tooltip is not seen.
		findWidget("Map with icons and tooltip annotations")
			.getPoint("Amsterdam")
			.hover();
		findWidget("Map with icons and tooltip annotations").getTooltip().should.not.exist;
	}
);
