/*!
 * @AIMMS_FILE=models/Bugs/GL578-BugAnnotation/BugAnnotation.aimms
 */

scenario(
	"GL578 Check on bug annotations to be set correctly when two independent identifiers are displayed in a table and aggregating them",
	() => {
		loadPage("Main Project/home");

		// The top left cell is the only cell which should have the annotation "edited". The other five cells should not.
		findWidget("table1")
			.getCell(0, 0)
			.hasAnnotations(["edited"])
			.should.be.equal(true);

		findWidget("table1")
			.getCell(0, 1)
			.hasAnnotations(["edited"])
			.should.be.equal(false);

		findWidget("table1")
			.getCell(0, 2)
			.hasAnnotations(["edited"])
			.should.be.equal(false);

		findWidget("table1")
			.getCell(1, 0)
			.hasAnnotations(["edited"])
			.should.be.equal(false);

		findWidget("table1")
			.getCell(1, 1)
			.hasAnnotations(["edited"])
			.should.be.equal(false);

		findWidget("table1")
			.getCell(1, 2)
			.hasAnnotations(["edited"])
			.should.be.equal(false);

		// Now pivot the table, such that the iCostType index moves to the Totals part.
		findWidget("table1")
			.dragIndex("iCostType")
			.dropIn("totals");

		// Assert that the "edited" annotations in the changed table layout are as expected.
		findWidget("table1")
			.getCell(0, 0)
			.hasAnnotations(["edited"])
			.should.be.equal(true);

		findWidget("table1")
			.getCell(1, 0)
			.hasAnnotations(["edited"])
			.should.be.equal(false);

		// Also check that the "total" and the "sum" annotations are correctly put on the cell in the second row.
		findWidget("table1")
			.getCell(1, 0)
			.hasAnnotations(["total", "sum"])
			.should.be.equal(true);
	}
);
