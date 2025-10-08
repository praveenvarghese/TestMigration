/*!
 * @AIMMS_FILE=models/TablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario(
	"Check the hiding of aggregator types per identifier, using a 2-dimensional identifier.",
	() => {
		loadPage("Main Project/AggregatorHidingPage?table-v2=false");

		// The relevant css is already included in the model, so it is just a matter of verifying its effect on the
		// Table widget.
		function HasAnnotationTotalsClass(row, col, identifierName) {
			findWidget("DDNumFleet_1")
				.getCell(row, col)
				.hasAnnotations([`total-${identifierName}`])
				.should.be.equal(true);
		}

		function DoesNotHaveAnnotationTotalsClass(row, col, identifierName) {
			findWidget("DDNumFleet_1")
				.getCell(row, col)
				.hasAnnotations([`total-${identifierName}`])
				.should.be.equal(false);
		}

		for (let row = 0; row < 4; row++) {
			HasAnnotationTotalsClass(row, 8, "DisplayDomainNumberInFleet");
		}

		for (let col = 0; col < 8; col++) {
			HasAnnotationTotalsClass(4, col, "DisplayDomainNumberInFleet");
		}

		// A special case is the 'crossing' totals cell here, where the sum and the max cross (in cell 4, 8)
		HasAnnotationTotalsClass(4, 8, "DisplayDomainNumberInFleet");

		// Some random other cells to check that the annotation is NOT there
		DoesNotHaveAnnotationTotalsClass(1, 1, "DisplayDomainNumberInFleet");
		DoesNotHaveAnnotationTotalsClass(3, 0, "DisplayDomainNumberInFleet");
	}
);
