/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

// FIXED, November 23, 2017

scenario(
	"Table with domain, after slicing to element parameter over a subset, should have correct data in cells.",
	() => {
		loadPage("Main Project/home?table-v2=false");
		loadPage("Main Project/Domain?table-v2=false");

		findWidget("OrderTableWithDomain")
			.getSlicingOptionEditor()
			.setSlices({
				identifier: "OrderInAlphabet",
				slice: [
					{
						index: "a",
						type: "element-parameter",
						value: "SingleSelectedFromVowels",
					},
				],
			});
		findWidget("OrderTableWithDomain").closeOptionDialog();

		findWidget("SingleSelectFromVowelsWithDomain").select(["a"]);

		findWidget("SelectionFromAlphabetWithDomain").select(["a", "b"]);

		// a is now in domain and element-parameter, so should appear in the table.
		findWidget("OrderTableWithDomain")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1");

		// b is not in the element-parameter, so should not appear in the table.
		findWidget("OrderTableWithDomain")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("");
	}
);
