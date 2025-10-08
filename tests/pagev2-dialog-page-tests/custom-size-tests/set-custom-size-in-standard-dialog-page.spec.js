/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */
scenario("set custom size using custom option in standard dialog pages ", () => {
	loadPage("Main Project/StandardDialogPageWithWidgets");

	findWidget("standarddialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Medium");

	findWidget("standarddialogpagewithwidgets_1").selectSizeOfDialogPage("custom");

	findWidget("standarddialogpagewithwidgets_1")
		.openMiscellaneousOptionEditor({ reuseExistingIfAlreadyOpened: true })
		.getMiscOption("maxrows")
		.setValue({
			value: "3",
		});

	findWidget("standarddialogpagewithwidgets_1")
		.openMiscellaneousOptionEditor({ reuseExistingIfAlreadyOpened: true })
		.getMiscOption("maxcolumns")
		.setValue({
			value: "10",
		});

	findWidget("standarddialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Custom");

	findWidget("standarddialogpagewithwidgets_1")
		.getColumnSize()
		.should.be.equal("10");

	findWidget("standarddialogpagewithwidgets_1")
		.getRowSize()
		.should.be.equal("3");

	getPageMenu().navigateToPage("Main Project/checkdialogpagev2withwidgets");

	findWidget("openStandardPageWithWidgets").click();

	findWidget("standarddialogpagewithwidgets_1")
		.getColumnSize()
		.should.be.equal("10");

	findWidget("standarddialogpagewithwidgets_1")
		.getRowSize()
		.should.be.equal("3");
});
