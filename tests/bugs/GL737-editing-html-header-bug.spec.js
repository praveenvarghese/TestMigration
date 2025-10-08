/*!
 * @AIMMS_FILE=models/Bugs/GL737-HTMLHeaderBug/HTML Header Example.aimms
 */

scenario("GL737 - Table header html editing bug", () => {
	loadPage("Main Project/home");

	findWidget("MasterTable")
		.getRowHeaderCell(0, 0)
		.getHeaderText()
		.should.eql(["Dataset-1", "This is the description of Dataset-1", "The total count is 15"]);

	findWidget("MasterTable")
		.getCell(0, 0)
		.setValue("20");

	findWidget("MasterTable")
		.getRowHeaderCell(0, 0)
		.getHeaderText()
		.should.eql(["Dataset-1", "This is the description of Dataset-1", "The total count is 20"]);
});
