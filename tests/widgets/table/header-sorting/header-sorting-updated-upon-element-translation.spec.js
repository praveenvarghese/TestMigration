/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario(
	"Check whether the header sorting remains (which it should) after an element is removed from the header set.",
	() => {
		loadPage("Main Project/home/MischaTestPage");

		// Sort the first row header column on this filtered table, which displays all countries having an 'l' in their name.
		findWidget("SecondTable").sortRowHeader(2, 1, "increase");
		findWidget("SecondTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo(["Finland", "France", "Greece", "Romania"]);

		// Translate all country names with the click of a button.
		findWidget("ToggleCountryNames").click();

		// Check the first row header
		findWidget("SecondTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo([
				"România",
				"République française",
				"Suomen Tasavalta",
				"Ελληνική Δημοκρατία",
			]);
	}
);
