/*!
 * @AIMMS_FILE=models/Bugs/GLc4226-DisplayInf/DisplayInf.aimms
 */

scenario("Table with default inf values revert upon delete", () => {
	loadPage("Main Project/home");

	findWidget("p_onedim")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("∞");

	findWidget("p_onedim")
		.getCell(0, 0)
		.clearValue();

	findWidget("p_onedim")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("∞");

	findWidget("p_1dim_def_min")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("-∞");

	findWidget("p_1dim_def_min")
		.getCell(0, 0)
		.clearValue();

	findWidget("p_1dim_def_min")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("-∞");

	findWidget("p_1dim_val")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("∞");

	findWidget("p_1dim_val")
		.getCell(0, 0)
		.clearValue();

	findWidget("p_1dim_val")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("0.00");

	findWidget("p_1dim_val")
		.getCell(0, 0)
		.click()
		.setValue("-Infinity");

	findWidget("p_1dim_val")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("-∞");
});
