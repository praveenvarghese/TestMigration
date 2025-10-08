/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table with 1 case after slicing to fixed element, should show correct data.", () => {
	loadPage("Main Project/Cases?table-v2=false");

	findWidget("WordTable")
		.getSlicingOptionEditor()
		.setSlices({
			identifier: "WordThatStartsWith",
			slice: [
				{
					index: "a",
					type: "fixed-element",
					value: "a",
				},
			],
		});

	findWidget("WordTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("aap");

	findWidget("WordTable")
		.getSlicingOptionEditor()
		.clearSlices(["WordThatStartsWith"])
		.setSlices({
			identifier: "WordThatStartsWith",
			slice: [
				{
					index: "a",
					type: "fixed-element",
					value: "r",
				},
			],
		});

	findWidget("WordTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("roos");
});
