/*!
 * @AIMMS_FILE=models/IslandsApp_PageV2_Sanity/Islands.aimms
 */

scenario(
	"Pivoting on PassTable table, and tests asserting the column and row headers and data shown in the table.",
	() => {
		// We start from Home page.
		loadPage("Main Project/PivotingTestPage");

		findWidget("PassTable")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("PassTable")
			.getNumColsInGridViewport()
			.should.be.equal(8);

		findWidget("PassTable")
			.dragIndex("i2")
			.dropAfter("i1");

		findWidget("PassTable")
			.getNumColsInColHeaderViewport()
			.should.be.equal(1);

		findWidget("PassTable")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(2);

		findWidget("PassTable")
			.dragIndex("i1")
			.dropIn("columns");

		findWidget("PassTable")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("PassTable")
			.getNumColsInGridViewport()
			.should.be.equal(8);

		findWidget("PassTable")
			.dragIndex("i2")
			.dropAfter("i1");

		findWidget("PassTable")
			.getNumColsInColHeaderViewport()
			.should.be.equal(13);

		findWidget("PassTable")
			.getNumRowsInColHeaderViewport()
			.should.be.equal(2);

		findWidget("PassTable")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(1);

		findWidget("PassTable")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("rows");

		findWidget("PassTable")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("DailyNumberOfPassengers");

		findWidget("PassTable")
			.dragIndex("i1")
			.dropIn("rows");

		findWidget("PassTable")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("totals");

		findWidget("PassTable")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("PassTable")
			.getNumColsInGridViewport()
			.should.be.equal(8);
	}
);
