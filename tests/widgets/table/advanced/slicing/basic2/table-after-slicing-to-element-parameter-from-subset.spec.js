/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario(
	"Table after slicing to element parameter from subset should have correct data in cells. ",
	() => {
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
						value: "SingleSelectedFromVowels",
					},
				],
			});
		findWidget("OrderTable").closeOptionDialog();

		findWidget("SingleSelectFromVowels").select("e");

		findWidget("OrderTable")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5");
	}
);
