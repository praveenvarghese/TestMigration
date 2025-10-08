/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

// FIXED, November 23, 2017

scenario(
	"Table with domain, after slicing to first fixed element, should have correct data in cells.",
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
						type: "fixed-element",
						value: "a",
					},
				],
			});

		// a index is now sliced to a fixed-element, so removed from cube domain

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

		findWidget("SelectionFromAlphabetWithDomain").select(["a", "b", "e"]);

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

		// e is not in the fixed-element, so should not appear in the table.
		findWidget("OrderTableWithDomain")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("");
	}
);
