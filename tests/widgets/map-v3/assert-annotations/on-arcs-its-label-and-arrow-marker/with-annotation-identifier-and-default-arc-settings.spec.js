/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes and Arcs. Arcs with webui::AnnotationsIdentifier data. Assert annotations associated with arcs.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		// Assert annotations of Arcs of Arc-Set-0
		const arcSet0 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(0);
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
		const arcSet1 = findWidget("NetherlandsMap_WithAnnotations").getArcSet(1);
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
