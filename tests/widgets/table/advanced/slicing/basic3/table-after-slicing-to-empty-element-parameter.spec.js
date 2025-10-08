/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table after slicing to empty element parameter should have no data in cells. ", () => {
	loadPage("Main Project/home?table-v2=false");

	findWidget("OrderTable")
		.getSlicingOptionEditor()
		.clearSlices(["OrderInAlphabet"])
		.setSlices({
			identifier: "OrderInAlphabet",
			slice: [
				{
					index: "a",
					type: "element-parameter",
					value: "EmptyEPFromAlphabet",
				},
			],
		});

	findWidget("OrderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("0");
});
