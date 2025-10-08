/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"Verifying num decimal func via literal of arcs when multple arcs and maps are configured",
	() => {
		loadPage("Main Project/StepsV3/2 - Single node layer, single arc layer");

		//Add one more arc set
		//Check for the default, labels with 2 decimals are shown for multiple arc set and multiple maps
		findWidget("step2_1")
			.arcSetsOptionEditor()
			.addArcSet(
				{
					value: "NumTrains",
					type: "identifier",
				},
				null,
				null,
				null,
				null
			);
		//Check for the default, labels with 2 decimals are shown
		findWidget("step2_1")
			.getArcSet(0)
			.getArc("Rotterdam", "Haarlem")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("26.26");

		findWidget("step2_1")
			.getArcSet(1)
			.getArc("Haarlem", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("18.00");

		findWidget("anothermap")
			.getArcSet(0)
			.getArc("Eindhoven", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("1.15");

		// Editing Arc sets to include literal "4" Num decimals
		findWidget("step2_1")
			.arcSetsOptionEditor()
			.editArcSet(0, null, null, null, null, null, {
				value: "4",
				type: "literal",
			});

		// Validating labels with 4 decimal values are shown for the changed arc set and for other arc set it doesnt change
		findWidget("step2_1")
			.getArcSet(0)
			.getArc("Rotterdam", "Haarlem")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("26.2611");

		findWidget("step2_1")
			.getArcSet(1)
			.getArc("Haarlem", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("18.00");

		//Validating change in num decimal in another map widget will not effect for the other map in the page
		findWidget("anothermap")
			.getArcSet(0)
			.getArc("Eindhoven", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("1.15");

		// Editing Arc sets to include an Identifier with value 3 as Num decimals
		findWidget("step2_1")
			.arcSetsOptionEditor()
			.editArcSet(1, null, null, null, null, null, {
				value: "3",
				type: "literal",
			});

		// Validating labels with 3 decimal values are shown for the changed arc set and for other arc set it doesnt change
		findWidget("step2_1")
			.getArcSet(0)
			.getArc("Rotterdam", "Haarlem")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("26.2611");

		findWidget("step2_1")
			.getArcSet(1)
			.getArc("Haarlem", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("18.000");

		//Validating change in num decimal in another map widget will not effect for the other map in the page
		findWidget("anothermap")
			.getArcSet(0)
			.getArc("Eindhoven", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("1.15");

		// Editing Arc sets of another map
		findWidget("anothermap")
			.arcSetsOptionEditor()
			.editArcSet(0, null, null, null, null, null, {
				value: "4",
				type: "literal",
			});

		//Validating change in num decimal in another map widget will not effect for the other map in the page.
		findWidget("step2_1")
			.getArcSet(0)
			.getArc("Rotterdam", "Haarlem")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("26.2611");

		findWidget("step2_1")
			.getArcSet(1)
			.getArc("Haarlem", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("18.000");

		findWidget("anothermap")
			.getArcSet(0)
			.getArc("Eindhoven", "Rotterdam")
			.getArcLabel()
			.getArcLabelContent()
			.should.equal("1.1476");
	}
);
