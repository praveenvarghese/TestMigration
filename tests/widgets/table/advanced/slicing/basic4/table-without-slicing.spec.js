/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table without slicing should have correct data in cells. ", () => {
	loadPage("Main Project/home?table-v2=false");

	findWidget("OrderTable")
		.getSlicingOptionEditor()
		.clearSlices(["OrderInVowels", "OrderInAlphabet"]);

	findWidget("OrderTable")
		.getCell(5, 0)
		.getValue()
		.should.be.equal("1");
});
