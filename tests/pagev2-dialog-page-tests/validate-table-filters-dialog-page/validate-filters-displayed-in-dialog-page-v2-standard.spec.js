/*!no
 * @AIMMS_FILE=models/PageV2/FastEditingTestv2/FastEditingTest.aimms
 */

scenario(
	"Validate filter option is not displayed on an dialog page v2 or an open dialog v2",
	() => {
		loadPage("Main Project/home");

		findWidget("OpenDialogV2").click();

		findWidget("TableFilterDialog_v2")
			.getTableFilterButton()
			.should.be.eql("None");

		findWidget("TableFilterDialog_v2")
			.isRowFilterOptionDisplayed(0)
			.should.be.equal(true);

		findWidget("TableFilterDialog_v2").closePane();

		findWidget("TableFilterDialog_v2")
			.isColFilterOptionDisplayed(0)
			.should.be.equal(true);

		findWidget("TableFilterDialog_v2").closePane();

		findWidget("filterdialogpage_v2").clickDialogPageButton("ok");

		getCurrentPage().should.be.equal("Main Project/home");

		openAppManager().getFlyoutMenu({
			pagePath: "Main Project/FilterDialogPage v2",
		});

		getAppManager().navigateToPage("Main Project/FilterDialogPage v2");

		findWidget("TableFilterDialog_v2")
			.getTableFilterButton()
			.should.be.eql("None");

		findWidget("TableFilterDialog_v2")
			.isRowFilterOptionDisplayed(0)
			.should.be.equal(true);

		findWidget("TableFilterDialog_v2").closePane();

		findWidget("TableFilterDialog_v2")
			.isColFilterOptionDisplayed(0)
			.should.be.equal(true);
	}
);
