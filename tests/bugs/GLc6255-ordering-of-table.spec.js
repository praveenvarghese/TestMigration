/*!
 * @AIMMS_FILE=models/Bugs/GLc6255-OrderingOfTable/OrderingTable.aimms
 */

scenario(
	"Verify the ordering of both the table header and the elements, when string with mixed cases and/or special characters are involved. Should be case-insensitive.",
	() => {
		loadPage("Main Project/home");

		/* Verify the starting situation */
		findWidget("TheTable")
			.getColHeaderCells(0, 0, 7)
			.should.beEqualTo(["1", "10", "12", "234", "FULLY", "fully", "fULly", "Leuk"]);

		findWidget("SameTableButOrdered").sortRow(1, "increase");
		findWidget("SameTableButOrdered")
			.getRowValues(1)
			.should.beEqualTo([["1", "10", "12", "234", "FULLY", "fully", "fULly", "Leuk"]]);

		findWidget("SameTableButOrdered").sortRow(2, "increase");
		findWidget("SameTableButOrdered")
			.getRowValues(2)
			.should.beEqualTo([["1", "10", "2", "_zWam", "KoEk", "Voet", "voeten", "zwam"]]);

		findWidget("StrangeCharacterTable")
			.getColHeaderCells(0, 0, 7)
			.should.beEqualTo([
				"10",
				"2",
				"_mezelf_",
				"Dier",
				"GITAAR",
				"gItArIsT",
				"voedsel",
				"Vrouwlief",
			]);
	}
);
