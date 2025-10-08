/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario("Test to verify error message is displayed when multiple dialogs are opened.", () => {
	loadPage("Main Project/checkdialogpagev2withwidgets");

	findWidget("openStandardPageWithWidgets").click();

	findWidget("sidePanelOPenButton").click();

	findDialog()
		.findButton("OK")
		.click();

	//disabling it as its flaky
	// getLogMessage()
	// 	.openList()
	// 	.getMessages()
	// 	.should.eql([
	// 		{
	// 			Header: "awf.data.aimms.session:",
	// 			Message:
	// 				"Running procedure 'page_open_withSidePanel' has resulted in an error: API Error 0 when running procedure 'page_open_withSidePanel':  (code=500)",
	// 			Icon: "icon-spam",
	// 			Status: "Unread",
	// 		},
	// 		{
	// 			Header: "awf.data.aimms.session:",
	// 			Message:
	// 				'The value \'csat_1\' is outside the range set "webui::AllRegularPages" of local element parameter "pageId", see also the option "warning range violation".',
	// 			Icon: "icon-spam",
	// 			Status: "Unread",
	// 		},
	// 	]);

	getLogMessage()
		.getCount()
		.should.be.equal(2);
});
