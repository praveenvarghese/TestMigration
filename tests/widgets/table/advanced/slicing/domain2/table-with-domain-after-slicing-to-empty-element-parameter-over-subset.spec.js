/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

// FIXED, November 23, 2017

scenario(
	"Table with domain, after slicing to empty element parameter over a subset, should have correct data in cells.",
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
						value: "EmptyEPFromVowels",
					},
				],
			});

		/*
		Domain is still empty so 'OrderInAlphabet' is still not visible

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
			.getNumRowsInGridViewport()
			.should.be.equal(5);

		findWidget("OrderTableWithDomain")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		findWidget("OrderTableWithDomain")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1");
	}
);
