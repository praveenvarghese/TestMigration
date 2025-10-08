/*!
 * @AIMMS_FILE=models/Slicing/Slicing.aimms
 */

scenario("Table with 1 case without slicing should show correct data.", () => {
	loadPage("Main Project/Cases");

	findWidget("WordTable")
		.getNumColsInColHeaderViewport()
		.should.be.equal(1);

	findWidget("WordTable")
		.getColHeaderCell(0, 0)
		.getText()
		.should.be.equal("WordThatStartsWith");

	findWidget("WordTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("aap");
});
