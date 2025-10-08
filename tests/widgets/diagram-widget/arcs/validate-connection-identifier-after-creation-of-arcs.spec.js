/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Validate whether the creation of Arcs has the expected effect on the Arc Sets identifier.",
	() => {
		loadPage("Main Project/PageWithArcs");

		/* Make sure the identifier has the expected values before the removal of an arc */
		findWidget("qqq")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["1.00", "0.00", "0.00", "0.00", "0.00"],
				["0.00", "1.00", "0.00", "0.00", "0.00"],
				["0.00", "0.00", "0.00", "1.00", "1.00"],
				["0.00", "0.00", "1.00", "0.00", "0.00"],
			]);

		/* Add a new arc (using the original node names not to complicate stuff) */
		findWidget("Prefilled Diagram V2").drawAnArc("Suppliers3-1", "Customers3-1");

		/* Make sure the identifier has the expected values before the removal of an arc */
		findWidget("qqq")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["1.00", "0.00", "1.00", "0.00", "0.00"],
				["0.00", "1.00", "0.00", "0.00", "0.00"],
				["0.00", "0.00", "0.00", "1.00", "1.00"],
				["0.00", "0.00", "1.00", "0.00", "0.00"],
			]);
	}
);
