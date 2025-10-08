/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes and Arcs. Arcs with no webui::TooltipIdentifier annotations. Hover arcs and assert no tooltip is seen.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.hover(12, 18);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.hover(24, 100);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.hover(100, 178);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Schiphol")
			.hover(35, 15);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Den_Haag", "Rotterdam")
			.hover(30, 13);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Breda", "Rotterdam")
			.hover(45, 154);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.hover(270, 115);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.hover(217, 272);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;

		findWidget("NetherlandsMap_WithoutAnnotations")
			.getArcSet(1)
			.getArc("Amersfoort", "Lelystad")
			.hover(1, 120);
		findWidget("NetherlandsMap_WithoutAnnotations").getTooltip().should.not.exist;
	}
);
