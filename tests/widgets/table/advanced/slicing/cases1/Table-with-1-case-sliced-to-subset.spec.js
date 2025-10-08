/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table with 1 case after slicing to subset, should show correct data.", () => {
	loadPage("Main Project/Cases?table-v2=false");

	//Consonants as subset
	findWidget("WordTable")
		.getSlicingOptionEditor()
		.setSlices({
			identifier: "WordThatStartsWith",
			slice: [
				{
					index: "a",
					type: "index",
					value: "c",
				},
			],
		});

	findWidget("WordTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("boom");
});
