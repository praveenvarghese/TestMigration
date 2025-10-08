/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 * @DURATION=medium
 */

scenario(
	"For Map loaded with Nodes and Arcs. Arcs with no webui::TooltipIdentifier annotations. Hover arc label's and assert no tooltip is seen.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Schiphol")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Schiphol")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Den_Haag", "Rotterdam")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Den_Haag", "Rotterdam")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Breda", "Rotterdam")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Breda", "Rotterdam")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amersfoort", "Lelystad")
			.getArcLabel()
			.hover(5, 5);
		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amersfoort", "Lelystad")
			.getArcLabel()
			.isHovered().should.be.true;
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;
	}
);
