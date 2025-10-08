/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table with 1 case after slicing to element parameter, should show correct data.", () => {
	loadPage("Main Project/Cases?table-v2=false");

	findWidget("WordTable")
		.getSlicingOptionEditor()
		.setSlices({
			identifier: "WordThatStartsWith",
			slice: [
				{
					index: "a",
					type: "element-parameter",
					value: "SingleSelectedFromAlphabet",
				},
			],
		});
	findWidget("WordTable").closeOptionDialog();

	//There should only be 1 case, so only 1 column in column area.
	findWidget("WordTable")
		.getNumColsInColHeaderViewport()
		.should.be.equal(1);

	// The SingleSelectedFromAlphabet EP in this case contains 'b' as value.
	findWidget("WordTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("boom");

	findWidget("SingleSelectFromAlphabet-Cases").select("m");

	findWidget("WordTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("mies");
});
