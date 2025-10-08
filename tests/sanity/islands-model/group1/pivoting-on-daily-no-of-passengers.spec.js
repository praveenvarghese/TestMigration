/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Pivoting on DailyPassengers table, and tests asserting the column and row headers and data shown in the table.",
	() => {
		// We start from Home page.
		loadPage("Main Project/home");

		findWidget("DailyPassengers")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("DailyPassengers")
			.getNumColsInGridViewport()
			.should.be.equal(7);

		findWidget("DailyPassengers")
			.dragIndex("i2")
			.dropAfter("i1");

		findWidget("DailyPassengers")
			.getNumColsInColHeaderViewport()
			.should.be.equal(1);

		findWidget("DailyPassengers")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(2);

		findWidget("DailyPassengers")
			.dragIndex("i1")
			.dropIn("columns");

		findWidget("DailyPassengers")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("DailyPassengers")
			.getNumColsInGridViewport()
			.should.be.equal(6);

		findWidget("DailyPassengers")
			.dragIndex("i2")
			.dropAfter("i1");

		findWidget("DailyPassengers")
			.getNumColsInColHeaderViewport()
			.should.be.equal(6);

		findWidget("DailyPassengers")
			.getNumRowsInColHeaderViewport()
			.should.be.equal(2);

		findWidget("DailyPassengers")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(1);

		findWidget("DailyPassengers")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("rows");

		findWidget("DailyPassengers")
			.getRowHeaderCell(0, 0)
			.getText()
			.should.be.equal("DailyNumberOfPassengers");

		findWidget("DailyPassengers")
			.dragIndex("i1")
			.dropIn("rows");

		findWidget("DailyPassengers")
			.dragIndex("<IDENTIFIER-SET>")
			.dropIn("totals");

		findWidget("DailyPassengers")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("DailyPassengers")
			.getNumColsInGridViewport()
			.should.be.equal(7);

		findWidget("DailyPassengers").goInFullScreenMode();

		findWidget("DailyPassengers")
			.getNumRowsInGridViewport()
			.should.be.equal(8);

		findWidget("DailyPassengers")
			.getNumColsInGridViewport()
			.should.be.equal(8);
	}
);
