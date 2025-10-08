/*!
 * @AIMMS_FILE=models/Bugs/GL5430-gettingDecimalWhenIntegerExpected/Sudoku.aimms
 */

scenario(
	"GL5430 Cell contains .00 where an integer (element of a subset of Integers) is expected",
	() => {
		loadPage("Main Project/DropDowns");

		findWidget("tableSudokuDropdowns")
			.getCell(0, 1)
			.setValue("1");

		findWidget("tableSudokuDropdowns")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("1");

		findWidget("tableSudokuDropdowns")
			.getCell(0, 1)
			.getDropdownCellValues()
			.should.be.eql(["1", "2", "4", "6", "7", "9"]);
	}
);
