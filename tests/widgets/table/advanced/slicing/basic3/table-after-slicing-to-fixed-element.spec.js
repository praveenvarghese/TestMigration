/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table after slicing to fixed element should have correct data in cells. ", () => {
	loadPage("Main Project/home?table-v2=false");

	findWidget("OrderTable")
		.getSlicingOptionEditor()
		.clearSlices(["OrderInVowels"])
		.setSlices({
			identifier: "OrderInVowels",
			slice: [
				{
					index: "v",
					type: "fixed-element",
					value: "o",
				},
			],
		});

	findWidget("OrderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("4");
});
