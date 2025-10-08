/*!
 * @AIMMS_FILE=models/Bugs/GLc4118-ItemActionProc/ItemActionProc.aimms
 */

scenario(
	"Run item action on home page. Switch to page-2, then back to home. Run again item action on home page.",
	() => {
		loadPage("Main Project/home?_aimms_only_table_itemactions=true");

		findWidget("scalarPar1")
			.getValue()
			.should.be.equal("0.00");

		findWidget("Table1")
			.getCell(0, 0)
			.rightClick()
			.getItemActionDetails(0)
			.click();

		findWidget("scalarPar1")
			.getValue()
			.should.be.equal("1.00");

		getPageMenu().navigateToPage("Main Project/page_2");

		findWidget("scalarPar2")
			.getValue()
			.should.be.equal("0.00");

		getPageMenu().navigateToPage("Main Project/home");

		findWidget("scalarPar1")
			.getValue()
			.should.be.equal("1.00");

		findWidget("Table1")
			.getCell(0, 0)
			.rightClick()
			.getItemActionDetails(0)
			.click();

		findWidget("scalarPar1")
			.getValue()
			.should.be.equal("0.00");
	}
);
