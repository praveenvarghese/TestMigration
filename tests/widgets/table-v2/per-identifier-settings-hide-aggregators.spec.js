/*!
 * @AIMMS_FILE=models/TablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Check the hiding of aggregator types per identifier.", () => {
	loadPage("Main Project/AggregatorHidingPage?table-v2=true");

	// The relevant css is already included in the model, so it is just a matter of verifying its effect on the
	// Table widget.
	function HasAnnotationTotalsClass(row, col, identifierName) {
		findWidget("Aircraft Properties_5")
			.getCell(row, col)
			.hasAnnotations([`total-${identifierName}`])
			.should.be.equal(true);
	}

	function DoesNotHaveAnnotationTotalsClass(row, col, identifierName) {
		findWidget("Aircraft Properties_5")
			.getCell(row, col)
			.hasAnnotations([`total-${identifierName}`])
			.should.be.equal(false);
	}

	for (let row = 6; row < 16; row++) {
		HasAnnotationTotalsClass(row, 0, "FuselageLength");
		HasAnnotationTotalsClass(row, 1, "Wingspan");
		HasAnnotationTotalsClass(row, 2, "MaxTakeoffWeight");
	}

	// A special case: in the 'Count' column, all 3 identifiers are counted. This means that we expect all 3 identifier
	// annotations to be present.
	HasAnnotationTotalsClass(0, 3, "FuselageLength");
	HasAnnotationTotalsClass(0, 3, "Wingspan");
	HasAnnotationTotalsClass(0, 3, "MaxTakeoffWeight");

	// Some random other cells to check that the annotation is NOT there
	DoesNotHaveAnnotationTotalsClass(1, 1, "Wingspan");
	DoesNotHaveAnnotationTotalsClass(3, 0, "FuselageLength");
	DoesNotHaveAnnotationTotalsClass(4, 2, "MaxTakeoffWeight");
});
