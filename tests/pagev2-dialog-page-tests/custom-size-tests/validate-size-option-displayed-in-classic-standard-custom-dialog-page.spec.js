/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario("Validate size options in classic,standard and custom dialog pages ", () => {
	loadPage("Main Project/classicDialogPageWithWidgets");

	findWidget("classicdialogpagewithwidgets_1")
		.getDialogPageSizes()
		.should.eql(["small", "medium", "large"]);

	openAppManager().navigateToPage("Main Project/CustomDialogPageWithWidgets");

	findWidget("customdialogpagewithwidgets_1")
		.getDialogPageSizes()
		.should.eql(["small", "medium", "large", "custom"]);

	openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

	findWidget("standarddialogpagewithwidgets_1")
		.getDialogPageSizes()
		.should.eql(["small", "medium", "large", "custom"]);
});
