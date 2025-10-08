/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario(
	"Table after slicing two identifiers to fixed element should have correct data in cells. ",
	() => {
		loadPage("Main Project/home?table-v2=false");

		findWidget("OrderTable")
			.getSlicingOptionEditor()
			.clearSlices(["OrderInVowels", "OrderInAlphabet"])
			.setSlices(
				{
					identifier: "OrderInVowels",
					slice: [
						{
							index: "v",
							type: "fixed-element",
							value: "o",
						},
					],
				},
				{
					identifier: "OrderInAlphabet",
					slice: [
						{
							index: "a",
							type: "fixed-element",
							value: "b",
						},
					],
				}
			);

		//This used to result in a bug.
		findWidget("OrderTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("2");

		findWidget("OrderTable")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("4");

		//Specifying non-first-element somehow works differently.
		findWidget("OrderTable")
			.getSlicingOptionEditor()
			.clearSlices(["OrderInVowels", "OrderInAlphabet"])
			.setSlices(
				{
					identifier: "OrderInVowels",
					slice: [
						{
							index: "v",
							type: "fixed-element",
							value: "a",
						},
					],
				},
				{
					identifier: "OrderInAlphabet",
					slice: [
						{
							index: "a",
							type: "fixed-element",
							value: "c",
						},
					],
				}
			);

		findWidget("OrderTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("3");

		findWidget("OrderTable")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("1");
	}
);
