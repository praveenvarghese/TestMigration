/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */
scenario("when custom size made it to 0X0 it defaults to 1X1 ", () => {
	loadPage("Main Project/CustomDialogPageWithWidgets");

	findWidget("customdialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Large");

	findWidget("customdialogpagewithwidgets_1").selectSizeOfDialogPage("custom");

	findWidget("customdialogpagewithwidgets_1")
		.openMiscellaneousOptionEditor({ reuseExistingIfAlreadyOpened: true })
		.getMiscOption("maxrows")
		.setValue({
			value: "0",
		});

	findWidget("customdialogpagewithwidgets_1")
		.openMiscellaneousOptionEditor({ reuseExistingIfAlreadyOpened: true })
		.getMiscOption("maxcolumns")
		.setValue({
			value: "0",
		});

	findWidget("customdialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Custom");

	findWidget("customdialogpagewithwidgets_1")
		.getColumnSize()
		.should.be.equal("1");

	findWidget("customdialogpagewithwidgets_1")
		.getRowSize()
		.should.be.equal("1");

	getPageMenu().navigateToPage("Main Project/checkdialogpagev2withwidgets");

	findWidget("openCustomPageWithWidgets").click();

	findWidget("customdialogpagewithwidgets_1")
		.getColumnSize()
		.should.be.equal("1");

	findWidget("customdialogpagewithwidgets_1")
		.getRowSize()
		.should.be.equal("1");
});
