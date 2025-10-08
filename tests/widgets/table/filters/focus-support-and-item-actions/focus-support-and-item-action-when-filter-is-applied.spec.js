/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table focus support and Item action behaviour when filter is enabled", () => {
	loadPage("Main Project/table/filter-focus-support?table-v2=false");

	findWidget("filterTable")
		.getTableFilterButton()
		.should.not.be.eql("None");

	findWidget("filterTable")
		.getColHeaderCell(0, 0)
		.hasFlags(["filtered"])
		.should.be.equal(true);

	findWidget("focusSupportScalar")
		.getValue()
		.should.be.equal("");

	findWidget("filterTable")
		.getCell(0, 0)
		.isFocused()
		.should.be.equal(true);

	findWidget("filterTable")
		.getCell(1, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("focusSupportScalar")
		.getValue()
		.should.be.equal("i-2");

	findWidget("filterTable")
		.getCell(3, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("focusSupportScalar")
		.getValue()
		.should.be.equal("i-10");

	findWidget("filterTable")
		.getCell(1, 0)
		.click()
		.isFocused()
		.should.be.equal(true);

	findWidget("focusSupportScalar")
		.getValue()
		.should.be.equal("i-2");

	findWidget("focusSupportScalar").movePointerToWidget();

	findWidget("filterTable")
		.hasNavigationControls()
		.should.be.equal(true);

	findWidget("filterTable")
		.getCell(2, 0)
		.rightClick(12, 0)
		.getItemActions().should.exist;

	findWidget("filterTable")
		.getCell(2, 0)
		.rightClick(12, 0)
		.getData()
		.should.beEqualTo([
			{ title: "Factory Details", icon: "aimms-info", state: "active" },
			{ title: "View existing orders", icon: "aimms-cart", state: "active" },
		]);

	findWidget("focusSupportScalar")
		.getValue()
		.should.be.equal("i-7");
});
