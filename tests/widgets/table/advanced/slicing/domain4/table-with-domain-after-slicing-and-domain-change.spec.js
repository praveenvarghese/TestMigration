/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

// FIXED, November 23, 2017

scenario(
	"Table with domain, after slicing should have correct data in cells when the domain changes. ",
	() => {
		loadPage("Main Project/home?table-v2=false");
		loadPage("Main Project/Domain?table-v2=false");

		// Initial situation is tested in 'table-with-domain-without-slicing' test

		// Change slicing
		findWidget("OrderTableWithDomain")
			.getSlicingOptionEditor()
			.setSlices({
				identifier: "OrderInAlphabet",
				slice: [
					{
						index: "a",
						type: "index",
						value: "v",
					},
				],
			});

		/*
	  Both identifiers now share the same index domain, 'a' index is removed from table

	  Table
		  OrderInVowels
	  a   1
	  e   2
	  i   3
	  o   4
	  u   5
  */

		findWidget("OrderTableWithDomain")
			.getNumRowsInGridViewport()
			.should.be.equal(5);

		findWidget("OrderTableWithDomain")
			.getNumColsInRowHeaderViewport()
			.should.be.equal(1);

		// domain change
		findWidget("SelectionFromAlphabetWithDomain").select(["a", "i"]);

		/*
	  Both identifiers now share the same index domain, 'a' index is removed from table

	  Table
		  OrderInAlphabet OrderInVowels
	  a   1               1
	  e                   2
	  i   9               3
	  o                   4
	  u                   5
  */

		findWidget("OrderTableWithDomain")
			.getNumColsInGridViewport()
			.should.be.equal(2);

		//This used to be a bug. The OrderTable was not updated.
		findWidget("OrderTableWithDomain")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("9");
	}
);
