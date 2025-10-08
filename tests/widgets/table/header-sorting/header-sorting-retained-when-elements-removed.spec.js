/*!
 * @AIMMS_FILE=models/ChartsExample/ChartsExample.aimms
 */

scenario(
	"Check whether the header sorting remains (which it should) after an element is removed from the header set.",
	() => {
		loadPage("Main Project/home/MischaTestPage?table-v2=true");

		// Sort the first row header column on this filtered table, which displays all countries having an 'l' in their name.
		findWidget("BelgiumTable").sortRowHeader(2, 1, "increase");
		findWidget("BelgiumTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo(["Belgium", "Belgium", "Belgium", "Belgium"]);

		// Remove the element 'Belgium' from the set displayed in the sorted row header.
		findWidget("RemoveBelgium").click();

		// Check the first row header
		findWidget("BelgiumTable")
			.getRowHeaderCells(1, 0, 3)
			.should.beEqualTo([
				"Czech Republic",
				"Czech Republic",
				"Czech Republic",
				"Czech Republic",
			]);
	}
);
