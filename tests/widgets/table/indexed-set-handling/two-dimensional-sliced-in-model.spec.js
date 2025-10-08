/*!
 * @AIMMS_FILE=models/IndexedSetTestModel/IndexedSetTestModel.aimms
 */

scenario(
	"Validating dropdowns in the Table containing a 2-dimensional eltpar with a 2-dimensional indexed set as its range, with various slicings from the model",
	() => {
		loadPage("Main Project/TableTests");

		// Verify that the cells in the 'Famous PSV Players' table shows the expected values in its dropdown
		findWidget("Famous PSV Players").doubleClickCell(0, 0);

		findWidget("Famous PSV Players")
			.getAllOptions()
			.should.eql([
				"Willy van de Kerkhof",
				"Romario",
				"Ruud Gullit",
				"Luc Nilis",
				"Hans van Breukelen",
			]);

		findWidget("Famous PSV Players").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		findWidget("Famous PSV Players").doubleClickCell(0, 1);

		findWidget("Famous PSV Players")
			.getAllOptions()
			.should.eql(["Xavi Simons", "Luuk de Jong", "Patrick van Aanholt"]);
	}
);
