/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table after slicing to a filled subset should have correct data in cells. ", () => {
	loadPage("Main Project/home?table-v2=false");

	//Vowels as subset
	findWidget("OrderTable")
		.getSlicingOptionEditor()
		.clearSlices(["OrderInVowels", "OrderInAlphabet"])
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

	findWidget("OrderTable")
		.getCell(4, 0)
		.getValue()
		.should.be.equal("21");

	//Test two different subsets after each other:
	//Consonants as subset
	findWidget("OrderTable")
		.getSlicingOptionEditor()
		.clearSlices(["OrderInAlphabet"])
		.setSlices({
			identifier: "OrderInAlphabet",
			slice: [
				{
					index: "a",
					type: "index",
					value: "c",
				},
			],
		});

	findWidget("OrderTable")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("2");
});
