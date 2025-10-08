/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"On the Map, edit an Arc-Set. Arcs from having webui::AnnotationsIdentifier annotation to one without. Assert annotations on the arcs.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs?_aimms_only_persistence.write=true");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		//Edit map. Updated Arc-Set-1 from ArcsBetween_C_A_WithAnnotations to ArcsBetween_C_A identifiers.
		// Updating arc from an identifier having webui::AnnotationsIdentifier to an identifier without such annotation.
		findWidget("NetherlandsMap_WithAnnotations")
			.arcSetsOptionEditor()
			.editArcSet(
				1,
				{
					value: "ArcsBetween_C_A",
					type: "identifier",
				},
				null,
				null,
				null,
				null,
				null
			);

		// Close option Editor
		findWidget("NetherlandsMap_WithAnnotations").closeOptionDialog();

		// Now with Arc-Set-1 updated. Assert annotations on Arcs of Arc-Set-0 and Arc-Set-1
		let arcSet0 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(0);
		arcSet0
			.getArc("Schiphol", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Rotterdam", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Teuge", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Rotterdam", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
				arcLabelAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
				arcMarkerAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Lelystad", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
				arcLabelAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
				arcMarkerAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Rotterdam", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
				arcLabelAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
				arcMarkerAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
			});

		// Assert annotations of Arcs of Arc-Set-1
		let arcSet1 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(1);
		arcSet1
			.getArc("Amsterdam", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Amsterdam", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Amersfoort", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Breda", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Haarlem", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Utrecht", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Utrecht", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Utrecht", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Den Bosch", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		//Reload the page, and assert annotations on arcs of arcs of Arc-Set-0 and Arc-Set-1.
		pageRefresh();

		// Assert annotations of Arcs of Arc-Set-0
		arcSet0 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(0);
		arcSet0
			.getArc("Schiphol", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: ["FromSchipolMainAirport"],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Rotterdam", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Teuge", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Rotterdam", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
				arcLabelAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
				arcMarkerAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Lelystad", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
				arcLabelAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
				arcMarkerAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Rotterdam", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
				arcLabelAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
				arcMarkerAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
			});

		// Assert annotations of Arcs of Arc-Set-1
		arcSet1 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(1);
		arcSet1
			.getArc("Amsterdam", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Amsterdam", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Amersfoort", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Breda", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Haarlem", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Utrecht", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Utrecht", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Utrecht", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet1
			.getArc("Den Bosch", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});
	}
);
