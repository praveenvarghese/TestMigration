/*!
 * @AIMMS_FILE=models/IndexedSetTestModel/IndexedSetTestModel.aimms
 */

scenario(
	"Validating dropdowns in the Table containing a 2-dimensional eltpar with a 2-dimensional indexed set as its range, with various slicings from the model",
	() => {
		loadPage("Main Project/TableTests");

		// Verify that the cells in the 'Famous PSV Players' table shows the expected values in its dropdown
		findWidget("Famous Past Players").doubleClickCell(0, 0);

		findWidget("Famous Past Players")
			.getAllOptions()
			.should.eql([
				"Willy van de Kerkhof",
				"Romario",
				"Ruud Gullit",
				"Luc Nilis",
				"Hans van Breukelen",
			]);

		findWidget("Famous Past Players").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		findWidget("Famous Past Players").doubleClickCell(0, 1);

		findWidget("Famous Past Players")
			.getAllOptions()
			.should.eql(["Johan Cruijff", "Johan Neeskens", "Dennis Bergkamp", "Marco van Basten"]);

		findWidget("Famous Past Players").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		findWidget("Famous Past Players").doubleClickCell(0, 2);

		findWidget("Famous Past Players")
			.getAllOptions()
			.should.eql(["Willem van Hanegem", "Coen Moulijn"]);
	}
);
