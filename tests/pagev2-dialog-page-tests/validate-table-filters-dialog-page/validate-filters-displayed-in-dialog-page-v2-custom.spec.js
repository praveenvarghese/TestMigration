/*!
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario(
	"Validate filter option is not displayed on an dialog page v2 or an open dialog v2",
	() => {
		loadPage("Main Project/home");

		findWidget("OpenDialogV2_cust").click();

		findWidget("TableFilterDialog_v2_cust")
			.getTableFilterButton()
			.should.be.eql("None");

		findWidget("TableFilterDialog_v2_cust")
			.isRowFilterOptionDisplayed(0)
			.should.be.equal(true);

		findWidget("TableFilterDialog_v2_cust").closePane();

		findWidget("TableFilterDialog_v2_cust")
			.isColFilterOptionDisplayed(0)
			.should.be.equal(true);

		findWidget("TableFilterDialog_v2_cust").closePane();

		findWidget("filterdialogpage_v2_cust").clickDialogPageButton("ok");

		getCurrentPage().should.be.equal("Main Project/home");

		openAppManager().getFlyoutMenu({
			pagePath: "Main Project/FilterDialogPage v2 cust",
		});

		getAppManager().navigateToPage("Main Project/FilterDialogPage v2 cust");

		findWidget("TableFilterDialog_v2_cust")
			.getTableFilterButton()
			.should.be.eql("None");

		findWidget("TableFilterDialog_v2_cust")
			.isRowFilterOptionDisplayed(0)
			.should.be.equal(true);

		findWidget("TableFilterDialog_v2_cust").closePane();

		findWidget("TableFilterDialog_v2_cust")
			.isColFilterOptionDisplayed(0)
			.should.be.equal(true);
	}
);
