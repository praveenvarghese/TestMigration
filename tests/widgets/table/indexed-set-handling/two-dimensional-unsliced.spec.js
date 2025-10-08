/*!
 * @AIMMS_FILE=models/IndexedSetTestModel/IndexedSetTestModel.aimms
 */

scenario(
	"Validating dropdowns in the Table containing a 2-dimensional eltpar with a 2-dimensional indexed set as its range",
	() => {
		loadPage("Main Project/TableTests");

		findWidget("Player Table")
			.getCell(0, 0)
			.click();

		findWidget("Player Table").openDropdown();

		findWidget("Player Table")
			.getAllOptions()
			.should.eql([
				"Willy van de Kerkhof",
				"Romario",
				"Ruud Gullit",
				"Luc Nilis",
				"Hans van Breukelen",
			]);

		findWidget("Player Table").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		findWidget("Player Table")
			.getCell(0, 1)
			.click();

		findWidget("Player Table").openDropdown();

		findWidget("Player Table")
			.getAllOptions()
			.should.eql(["Johan Cruijff", "Johan Neeskens", "Dennis Bergkamp", "Marco van Basten"]);

		findWidget("Player Table").pressKeys([SPECIAL_KEYS.escape], 1000); // Close the dropdown again

		findWidget("Player Table")
			.getCell(1, 2)
			.click();

		findWidget("Player Table").openDropdown();

		findWidget("Player Table")
			.getAllOptions()
			.should.eql(["Justin Bijlow", "Mats Wieffer"]);
	}
);
