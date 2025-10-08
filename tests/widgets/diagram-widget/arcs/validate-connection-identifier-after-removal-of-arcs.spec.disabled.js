/*!
 * @AIMMS_FILE=models/whiteboardV2/WhiteboardV2.aimms
 */

scenario(
	"Validate whether the removal of Arcs has the expected effect on the Arc Sets identifier.",
	() => {
		loadPage("Main Project/PageWithArcs");

		/* Make sure the identifier has the expected values before the removal of an arc */
		findWidget("qqq")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["0.00", "1.00", "1.00", "0.00", "0.00"],
				["1.00", "0.00", "0.00", "0.00", "0.00"],
				["0.00", "0.00", "0.00", "0.00", "1.00"],
				["0.00", "0.00", "0.00", "1.00", "0.00"],
			]);

		findWidget("Prefilled Diagram V2")
			.findArc("Warehouses-2", "Customers-5")
			.hoverOnArc()
			.rightClickOnArc();

		findWidget("Prefilled Diagram V2")
			.getItemActions()
			.getItemActionDetails(2)
			.click();

		/* Make sure the identifier has the expected values before the removal of an arc */
		findWidget("qqq")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["0.00", "1.00", "0.00", "0.00"],
				["1.00", "0.00", "0.00", "0.00"],
				["0.00", "0.00", "0.00", "1.00"],
				["0.00", "0.00", "1.00", "0.00"],
			]);
	}
);
