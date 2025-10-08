/*!
 * @AIMMS_FILE=models/Infinity Model/Infinity Model.aimms
 */
scenario("GL3498-Table edited cell value is not persisted issue", () => {
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	/* Verify that the initial content of the AllPageIds set is as expected */
	findWidget("Unit Transport Cost")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("131.00");

	findWidget("Unit Transport Cost")
		.getCell(0, 0)
		.setValueWithoutConfirm("90");

	findWidget("Unit Transport Cost")
		.getCell(2, 0)
		.click();

	pageRefresh();

	findWidget("Unit Transport Cost")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("90.00");
});
