/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

// FIXED, November 23, 2017

scenario(
	"Table with domain, after slicing to element parameter, should have correct data in cells.",
	() => {
		loadPage("Main Project/home?table-v2=false");
		loadPage("Main Project/Domain?table-v2=false");

		// Reset selection
		findWidget("SelectionFromAlphabetWithDomain").selectNone();

		/*
  Initial table
		  OrderInVowels
  -   a   1
  -   e   2
  -   i   3
  -   o   4
  -   u   5
  */

		findWidget("OrderTableWithDomain")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(2);

		findWidget("OrderTableWithDomain")
			.getSlicingOptionEditor()
			.setSlices({
				identifier: "OrderInAlphabet",
				slice: [
					{
						index: "a",
						type: "element-parameter",
						value: "SingleSelectedFromAlphabet",
					},
				],
			});
		findWidget("OrderTableWithDomain").closeOptionDialog();

		findWidget("SingleSelectFromAlphabetWithDomain").select(["a"]);

		// a index is now sliced to element parameter, so removed from cube domain

		/*
  Table
  OrderInVowels
  a   1
  e   2
  i   3
  o   4
  u   5
	*/

		findWidget("OrderTableWithDomain")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(1);

		findWidget("OrderTableWithDomain")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		//Domain is still empty, number of rows should still be 5
		findWidget("OrderTableWithDomain")
			.getNumRowsInGridViewport()
			.should.be.equal(5);

		// Fill domain identifier
		findWidget("SelectionFromAlphabetWithDomain").select(["a"]);

		// a is now in domain and element-parameter, so should appear in the table.

		/*
  Table
	  OrderInAlphabet OrderInVowels
  -   1
  a                   1
  e                   2
  i                   3
  o                   4
  u                   5
	*/

		findWidget("OrderTableWithDomain")
			.getNumRowsInGridViewport()
			.should.be.equal(6);

		findWidget("OrderTableWithDomain")
			.getNumColsInGridViewport()
			.should.be.equal(2);

		findWidget("OrderTableWithDomain")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1");

		// e is not in the element-parameter, so should not appear in the table.
		findWidget("OrderTableWithDomain")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("");
	}
);
