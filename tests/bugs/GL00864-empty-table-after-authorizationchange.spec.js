/*!
 * @AIMMS_FILE=models/Bugs/GL00864-SmallExample864/SmallExample864.aimms
 */

scenario("Assert table data after authorization change", () => {
	loadPage("Main Project/home");

	findWidget("BW").click();

	findWidget("TW")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("16.00");
});
