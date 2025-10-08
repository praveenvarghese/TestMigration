/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"On the Map, add a new Arc-Set. Arcs having webui::AnnotationsIdentifier annotations. Assert annotations on the arcs.",
	() => {
		loadPage("Main Project/Multiple Maps/Map Data?_aimms_only_persistence.write=true");

		// Resetting data on the page.
		findWidget("Reset Data_1").click();

		//Add ArcsBetween_C_A_WithAnnotations Arc-Set information
		findWidget("Map_with_Data")
			.arcSetsOptionEditor()
			.addArcSet(
				{
					value: "ArcsBetween_C_A_WithAnnotations",
					type: "identifier",
				},
				{
					value: "A_C_Arc_HideLabels",
					type: "identifier",
				},
				{
					value: "A_Arc_DynamicWidth",
					type: "identifier",
				},
				{
					value: "A_C_Arc_HideLabels",
					type: "identifier",
				},
				null
			);

		// Now with Arc-Set-1 added. Assert annotations of Arcs of Arc-Set-0 and Arc-Set-1
		let arcSet0 = findWidget("Map_with_Data").getArcSet(0);
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
		let arcSet1 = findWidget("Map_with_Data").getArcSet(1);
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
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: ["ToRotterdamNode"],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Haarlem", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: ["ToRotterdamNode"],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: ["ToRotterdamNode"],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToSchiphol"],
				arcLabelAnnotations: ["FromUtrecht", "ToSchiphol"],
				arcMarkerAnnotations: ["FromUtrecht", "ToSchiphol"],
			});

		arcSet1
			.getArc("Utrecht", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToEindhoven"],
				arcLabelAnnotations: ["FromUtrecht", "ToEindhoven"],
				arcMarkerAnnotations: ["FromUtrecht", "ToEindhoven"],
			});

		arcSet1
			.getArc("Den Bosch", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
				arcLabelAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
				arcMarkerAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
			});

		//Reload the page, and assert annotations on arcs of arcs of Arc-Set-0 and Arc-Set-1.
		pageRefresh();

		// Assert annotations of Arcs of Arc-Set-0
		arcSet0 = findWidget("Map_with_Data").getArcSet(0);
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
		arcSet1 = findWidget("Map_with_Data").getArcSet(1);
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
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: ["ToRotterdamNode"],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Haarlem", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: ["ToRotterdamNode"],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: ["ToRotterdamNode"],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToSchiphol"],
				arcLabelAnnotations: ["FromUtrecht", "ToSchiphol"],
				arcMarkerAnnotations: ["FromUtrecht", "ToSchiphol"],
			});

		arcSet1
			.getArc("Utrecht", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToEindhoven"],
				arcLabelAnnotations: ["FromUtrecht", "ToEindhoven"],
				arcMarkerAnnotations: ["FromUtrecht", "ToEindhoven"],
			});

		arcSet1
			.getArc("Den Bosch", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
				arcLabelAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
				arcMarkerAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
			});
	}
);
