/*!
 * @AIMMS_FILE=models/Bugs/GL668-NonDefaultDefaultsShowing/defaults.aimms
 */

scenario("GL668 - Non default default displayed", () => {
	loadPage("Main Project/home");

	// In the table widget, only the column with parameter p should be displayed, not the one with parameter q (which has a non default default of 100)
	findWidget("pq")
		.getNumColsInGridViewport()
		.should.be.equal(1);

	findWidget("pq")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("1");

	findWidget("pq")
		.getCell(1, 0)
		.getValue()
		.should.be.equal("1");
});
