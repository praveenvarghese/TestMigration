/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"For Map loaded with Nodes and Arcs. Arcs with no webui::AnnotationsIdentifier data. Assert no annotations are associated with arcs.",
	() => {
		loadPage("Main Project/Multiple Maps/Arcs");

		// Resetting data on the page.
		findWidget("Reset Data").click();

		// Assert annotations of Arcs of Arc-Set-0
		const arcSet0 = findWidget("NetherlandsMap_WithoutAnnotations").getArcSet(0);
		arcSet0
			.getArc("Schiphol", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Schiphol", "Rotterdam")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Schiphol", "Teuge")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Schiphol", "Lelystad")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
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
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Lelystad", "Schiphol")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		arcSet0
			.getArc("Rotterdam", "Eindhoven")
			.getAnnotations()
			.should.include.something.like({
				arcAnnotations: [],
				arcLabelAnnotations: [],
				arcMarkerAnnotations: [],
			});

		// Assert annotations of Arcs of Arc-Set-1
		const arcSet1 = findWidget("NetherlandsMap_WithoutAnnotations").getArcSet(1);
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
