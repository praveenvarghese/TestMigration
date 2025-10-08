/*!
 * @AIMMS_FILE=models/Bugs/GL3331-InfTotalTest/InfTotalTest.aimms
 */

// Test a number of cell values in one go.
function TestCellValues(cells) {
	for (let i = 0; i < cells.length; i++) {
		findWidget("InfTable")
			.getCell(cells[i][0], cells[i][1])
			.getValue()
			.should.equal(cells[i][2]);
	}
}

scenario(
	"Test the bahaviour of special value 'inf' in WebUI tables (in totals, to be precise)",
	() => {
		loadPage("Main Project/home");

		// Assess the starting situation, without any infinity values
		let expected_values = [
			[2, 0, "8.00"],
			[0, 5, "31.00"],
			[3, 4, "8.50"],
			[4, 4, "5.00"],
			[5, 4, "12.00"],
		];
		TestCellValues(expected_values);

		// Change the values in the table, such that it contains a number of infinity values
		findWidget("Change").click();

		// Check the new values in the table
		expected_values = [
			[2, 0, "∞"],
			[3, 0, "∞"],
			[4, 0, "1.00"],
			[5, 0, "∞"],
			[0, 5, "∞"],
			[3, 4, "∞"],
			[4, 4, "5.00"],
			[5, 4, "∞"],
		];
		TestCellValues(expected_values);

		// Change the values in the table, such that it contains a number of minus infinity values
		findWidget("ChangeToMinusInf").click();

		// Check the new values in the table
		expected_values = [
			[2, 0, "-∞"],
			[3, 0, "-∞"],
			[4, 0, "-∞"],
			[5, 0, "1.00"],
			[0, 5, "-∞"],
			[3, 4, "-∞"],
			[4, 4, "-∞"],
			[5, 4, "5.00"],
		];
		TestCellValues(expected_values);
	}
);
