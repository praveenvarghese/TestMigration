/*!
 * @AIMMS_FILE=models/IndexedSetTestModel/IndexedSetTestModel.aimms
 */

scenario(
	"Validating dropdowns in the Table containing a 2-dimensional eltpar with a 2-dimensional indexed set as its range, with an index sliced to a subset in the WebUI",
	() => {
		loadPage("Main Project/ScalarTests");

		// Verify that the cell in the 'WesternTeams' table shows the expected values in its dropdown
		findWidget("TheWestTeams").doubleClickCell(0, 0);

		findWidget("TheWestTeams")
			.getAllOptions()
			.should.eql(["Johan Cruijff", "Johan Neeskens", "Dennis Bergkamp", "Marco van Basten"]);

		findWidget("TheWestTeams").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		// Verify that the cell in the 'All With Slicing' table shows the expected values in its dropdown
		findWidget("TheWestTeams").doubleClickCell(1, 1);

		findWidget("TheWestTeams")
			.getAllOptions()
			.should.eql(["Justin Bijlow", "Mats Wieffer"]);
	}
);
