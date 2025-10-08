/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */
scenario("set custom size using custom option in custom dialog pages ", () => {
	loadPage("Main Project/CustomDialogPageWithWidgets");

	findWidget("customdialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Large");

	findWidget("customdialogpagewithwidgets_1").selectSizeOfDialogPage("custom");

	findWidget("customdialogpagewithwidgets_1")
		.openMiscellaneousOptionEditor({ reuseExistingIfAlreadyOpened: true })
		.getMiscOption("maxrows")
		.setValue({
			value: "3",
		});

	findWidget("customdialogpagewithwidgets_1")
		.openMiscellaneousOptionEditor({ reuseExistingIfAlreadyOpened: true })
		.getMiscOption("maxcolumns")
		.setValue({
			value: "13",
		});

	findWidget("customdialogpagewithwidgets_1")
		.getSelectedDialogPageSize()
		.should.eql("Custom");

	findWidget("customdialogpagewithwidgets_1")
		.getRowColumnSize()
		.should.eql({ MaxRows: "3", MaxColumns: "13" });

	getPageMenu().navigateToPage("Main Project/checkdialogpagev2withwidgets");

	findWidget("openCustomPageWithWidgets").click();

	findWidget("customdialogpagewithwidgets_1")
		.getRowColumnSize()
		.should.eql({ MaxRows: "3", MaxColumns: "13" });
});
