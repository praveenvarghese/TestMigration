/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes and Arcs. Arcs with webui::AnnotationsIdentifier data and arc settings like Straight lines, Dynamic Width and to hide labels. Assert annotations associated with arcs.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		// Updating the 2 arc-sets to have to Straight lines, Dynamic Width and to hide labels.
		const mapArcSettings = findWidget("Arc Settings");
		mapArcSettings.getCell(0, 0).setValue(true);
		mapArcSettings.getCell(1, 0).setValue(true);
		mapArcSettings.getCell(2, 0).setValue(true);
		mapArcSettings.getCell(4, 0).setValue(true);
		mapArcSettings.getCell(5, 0).setValue(true);
		mapArcSettings.getCell(6, 0).setValue(true);

		// Assert annotations of Arcs of Arc-Set-0
		let arcSet0 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(0);
		arcSet0
			.getArc("Schiphol", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
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
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Lelystad", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Rotterdam", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
				arcLabelAnnotations: [],
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
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Haarlem", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToSchiphol"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromUtrecht", "ToSchiphol"],
			});

		arcSet1
			.getArc("Utrecht", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToEindhoven"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromUtrecht", "ToEindhoven"],
			});

		arcSet1
			.getArc("Den Bosch", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
			});

		// reload the page and assert the annotations on the arcs
		pageRefresh();

		// Assert annotations of Arcs of Arc-Set-0
		arcSet0 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(0);
		arcSet0
			.getArc("Schiphol", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromSchipolMainAirport"],
			});

		arcSet0
			.getArc("Schiphol", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromSchipolMainAirport"],
				arcLabelAnnotations: [],
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
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromRotterdamAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Lelystad", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromLelystadAirport", "ToSchipholAirport"],
			});

		arcSet0
			.getArc("Rotterdam", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromRotterdamAirport", "ToEindhovenAirport"],
				arcLabelAnnotations: [],
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
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Haarlem", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["ToRotterdamNode"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["ToRotterdamNode"],
			});

		arcSet1
			.getArc("Utrecht", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToSchiphol"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromUtrecht", "ToSchiphol"],
			});

		arcSet1
			.getArc("Utrecht", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromUtrecht", "ToEindhoven"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromUtrecht", "ToEindhoven"],
			});

		arcSet1
			.getArc("Den Bosch", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: ["FromDen", "Bosch", "ToEindhoven"],
			});
	}
);
