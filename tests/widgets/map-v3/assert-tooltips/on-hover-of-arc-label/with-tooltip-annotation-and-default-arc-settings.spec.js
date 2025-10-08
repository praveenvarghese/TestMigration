/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes and Arcs. Arcs with webui::TooltipIdentifier annotations. Hover arc label's and assert tooltip is seen.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcLabel()
			.hover(5, 5);
		let tooltip = findWidget("NetherlandsMap_WithAnnotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("This arc is between city Deventer and airport Teuge.");

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.hover(5, 5);
		tooltip = findWidget("NetherlandsMap_WithAnnotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("This arc is between city Zwolle and airport Teuge.");

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Schiphol")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Schiphol")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Den_Haag", "Rotterdam")
			.getArcLabel()
			.hover(5, 5);
		tooltip = findWidget("NetherlandsMap_WithAnnotations").getTooltip();
		tooltip.should.exist;
		tooltip
			.getText()
			.should.contain("This arc is between Den Haag city and Rotterdam airport.");

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Breda", "Rotterdam")
			.getArcLabel()
			.hover(5, 5);
		tooltip = findWidget("NetherlandsMap_WithAnnotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("This arc is between Breda city and Rotterdam airport.");

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);
		tooltip = findWidget("NetherlandsMap_WithAnnotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("Arc between Rotterdam and Eindhoven airports.");

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);
		tooltip = findWidget("NetherlandsMap_WithAnnotations").getTooltip();
		tooltip.should.exist;
		tooltip.getText().should.contain("Arc between Schiphol and Eindhoven airports.");

		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amersfoort", "Lelystad")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amersfoort", "Lelystad")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithAnnotations").getTooltip().should.not.exist;
	}
);
