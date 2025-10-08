/*!
 * @AIMMS_FILE=models/Bugs/GL3532-default-Param-fix/TestDefaultParamFix.aimms
 */
scenario("GL3532-Default parameter fix", () => {
	loadPage("Main Project/home");

	findWidget("scalar").openDropdown();

	findWidget("scalar")
		.getAllOptions()
		.should.eql(["A", "B", "C", "D", "E"]);

	findWidget("scalar").click();

	findWidget("scalar2").openDropdown();

	findWidget("scalar2")
		.getAllOptions()
		.should.eql(["A", "B", "C", "D", "E"]);
});
