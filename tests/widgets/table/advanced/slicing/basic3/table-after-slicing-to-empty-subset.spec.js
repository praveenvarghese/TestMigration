/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table after slicing to empty subset should have no data in cells. ", () => {
	loadPage("Main Project/home?table-v2=false");
	//Empty set as subset
	findWidget("OrderTable")
		.getSlicingOptionEditor()
		.clearSlices(["OrderInAlphabet"])
		.setSlices({
			identifier: "OrderInAlphabet",
			slice: [
				{
					index: "a",
					type: "index",
					value: "ea",
				},
			],
		});

	//OrderInAlphabet should not appear in the table headers, so
	//only OrderInVowels should be there.
	findWidget("OrderTable")
		.getNumColsInColHeaderViewport()
		.should.be.equal(1);

	findWidget("OrderTable")
		.getNumRowsInColHeaderViewport()
		.should.be.equal(1);

	findWidget("OrderTable")
		.getNumRowsInRowHeaderViewport()
		.should.be.equal(1);

	findWidget("OrderTable")
		.getNumColsInRowHeaderViewport()
		.should.be.equal(1);

	findWidget("OrderTable")
		.getNumColsInGridViewport()
		.should.be.equal(1);

	findWidget("OrderTable")
		.getNumRowsInGridViewport()
		.should.be.equal(1);

	findWidget("OrderTable")
		.getColHeaderTitles()
		.should.be.equal("Identifier");

	findWidget("OrderTable")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("OrderInVowels");

	findWidget("OrderTable")
		.getRowHeaderTitles()
		.should.be.equal("EmptySubSetFromAlphabet");

	findWidget("OrderTable")
		.getRowHeaderCell(0, 0)
		.getText()
		.should.be.equal("-");

	findWidget("OrderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("1");
});
