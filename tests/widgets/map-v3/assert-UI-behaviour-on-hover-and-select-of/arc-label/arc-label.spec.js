/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Hover on arcs, and assert its opacity and that of other arcs of same Arc-set and of different Arc-set. Similarly, click on the arc and assert its opacity and that of others.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		// Hover on Deventer-Teuge arc label of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcLabel()
			.hover(5, 5);

		// On the hovered arc, assert the Opacity of it, its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});

		// While above arc is hovered, assert the Opacity of other arcs of same Arc-Set-1, its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.6",
				arcLabelCSSStyleProperty: "0.6",
				arcMarkerCSSStyleProperty: "0.6",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.6",
				arcLabelCSSStyleProperty: "0.6",
				arcMarkerCSSStyleProperty: "0.6",
			});

		// While an arc of Arc-Set-1 is hovered, assert Opacity of arcs of Arc-Set-0 has not changed, and that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.85",
				arcLabelCSSStyleProperty: "0.85",
				arcMarkerCSSStyleProperty: "0.85",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.85",
				arcLabelCSSStyleProperty: "0.85",
				arcMarkerCSSStyleProperty: "0.85",
			});

		// Hover on Zwolle-Teuge arc label
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.hover(5, 5);

		// While Zwolle-Teuge arc is hovered, assert its Opacity, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});

		// While above arc is hovered, assert the Opacity of other arcs of same arc-set, its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.6",
				arcLabelCSSStyleProperty: "0.6",
				arcMarkerCSSStyleProperty: "0.6",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.6",
				arcLabelCSSStyleProperty: "0.6",
				arcMarkerCSSStyleProperty: "0.6",
			});

		// While another arc of Arc-Set-1 is hovered, assert Opacity of arcs of Arc-Set-0 has not changed, and that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.85",
				arcLabelCSSStyleProperty: "0.85",
				arcMarkerCSSStyleProperty: "0.85",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.85",
				arcLabelCSSStyleProperty: "0.85",
				arcMarkerCSSStyleProperty: "0.85",
			});

		// Click on Zwolle-Teuge arc
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcLabel()
			.click(5, 5);

		// While Zwolle-Teuge arc is selected, assert its Opacity, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});

		// While above arc is selected, assert the Opacity of other arcs of same arc-set, its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});

		// While an arc of Arc-Set-1 is selected, assert Opacity of arcs of Arc-Set-0 has not changed, and that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.85",
				arcLabelCSSStyleProperty: "0.85",
				arcMarkerCSSStyleProperty: "0.85",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.85",
				arcLabelCSSStyleProperty: "0.85",
				arcMarkerCSSStyleProperty: "0.85",
			});

		// Hover on Schiphol-Eindhoven arc of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);

		// While Schiphol-Eindhoven arc of Arc-Set-0 is hovered, assert its Opacity, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});

		// While other arc of Arc-Set-0 is hovered, assert Opacity of this Arc-Set-0 arc, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.6",
				arcLabelCSSStyleProperty: "0.6",
				arcMarkerCSSStyleProperty: "0.6",
			});

		// While Rotterdam-Eindhoven arc of Arc-Set-0 is hovered, assert Opacity of the earlier interacted arcs of Arc-Set-1 are not modified.
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});

		// Hover Rotterdam-Eindhoven arc of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcLabel()
			.hover(5, 5);

		// While Rotterdam-Eindhoven arc of Arc-Set-0 is hovered, assert its Opacity, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});

		// While other arc of Arc-Set-0 is hovered, assert Opacity of this Arc-Set-0 arc, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.6",
				arcLabelCSSStyleProperty: "0.6",
				arcMarkerCSSStyleProperty: "0.6",
			});

		// While Rotterdam-Eindhoven arc of Arc-Set-0 is hovered, assert Opacity of the earlier interacted arcs of Arc-Set-1 are not modified.
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});

		// Click on Rotterdam-Eindhoven arc of Arc-Set-0
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcLabel()
			.click(5, 5);

		// While Rotterdam-Eindhoven arc of Arc-Set-0 is selected, assert its Opacity, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});

		// While other arc of Arc-Set-0 is selected, assert Opacity of this Arc-Set-0 arc, that of its label and arrow-marker
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});

		// While Rotterdam-Eindhoven arc of Arc-Set-0 is hovered, assert Opacity of the earlier interacted arcs of Arc-Set-1 are not modified.
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});

		// Maximize the widget
		findWidget("NetherlandsMap_WithAnnotations").goInFullScreenMode();
		findWidget("NetherlandsMap_WithAnnotations").isFullScreen().should.be.true;

		// While Rotterdam-Eindhoven arc of Arc-Set-0 and Zwolle-Teuge arc of Arc-Set-1 are selected, assert Opacity of these arcs along with other arcs
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Rotterdam", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(0)
			.getArc("Schiphol", "Eindhoven")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Zwolle", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "1",
				arcLabelCSSStyleProperty: "1",
				arcMarkerCSSStyleProperty: "1",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Deventer", "Teuge")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
		findWidget("NetherlandsMap_WithAnnotations")
			.getArcSet(1)
			.getArc("Amsterdam", "Rotterdam")
			.getArcsCSSOpacity()
			.should.include.something.like({
				arcsCSSStyleProperty: "0.5",
				arcLabelCSSStyleProperty: "0.5",
				arcMarkerCSSStyleProperty: "0.5",
			});
	}
);
