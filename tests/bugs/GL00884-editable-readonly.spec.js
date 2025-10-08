/*!
 * @AIMMS_FILE=models/Bugs/GL00884-EditableReadOnly/EditableReadOnly.aimms
 */

scenario("Assert table data remains readonly after compare case", () => {
	loadPage("Main Project/home");

	openDataManager()
		.getActiveCase()
		.getName()
		.should.equal("test1");

	openDataManager()
		.getCase("test2")
		.compare();

	findWidget("test")
		.getCell(0, 0)
		.hasFlags(["readOnly"])
		.should.be.equal(true);
});
