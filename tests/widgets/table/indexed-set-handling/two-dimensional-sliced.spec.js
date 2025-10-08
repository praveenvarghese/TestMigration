/*!
 * @AIMMS_FILE=models/IndexedSetTestModel/IndexedSetTestModel.aimms
 */

scenario(
	"Validating dropdowns in the Table containing a 2-dimensional eltpar with a 2-dimensional indexed set as its range, with various slicings in the WebUI",
	() => {
		loadPage("Main Project/TableTests");

		// Set the two element parameters which determine the slicing for the 'All With Slicing' table
		findWidget("Selection for Slicing").setMultipleScalarModeValue("SelectedPeriod", "Present");
		findWidget("Selection for Slicing").setMultipleScalarModeValue("SelectedTeam", "PSV");

		// Verify that the cell in the 'All With Slicing' table shows the expected values in its dropdown
		findWidget("All With Slicing").doubleClickCell(0, 0);

		findWidget("All With Slicing")
			.getAllOptions()
			.should.eql(["Xavi Simons", "Luuk de Jong", "Patrick van Aanholt"]);

		findWidget("All With Slicing").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		// Do the same, but now for different values of the two element parameters. The dropdown contents should change accordingly.
		findWidget("Selection for Slicing").setMultipleScalarModeValue("SelectedPeriod", "Past");
		findWidget("Selection for Slicing").setMultipleScalarModeValue("SelectedTeam", "Feyenoord");

		// Verify that the cell in the 'All With Slicing' table shows the expected values in its dropdown
		findWidget("All With Slicing").doubleClickCell(0, 0);

		findWidget("All With Slicing")
			.getAllOptions()
			.should.eql(["Willem van Hanegem", "Coen Moulijn"]);
	}
);
