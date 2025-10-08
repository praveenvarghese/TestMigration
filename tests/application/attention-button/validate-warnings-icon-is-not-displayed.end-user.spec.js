/*!
 * @AIMMS_FILE=models/TableSortingDialog/TableFilteringTest.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validate warnings button are displayed for end user.", () => {
	loadPage("Main Project/home");

	getPageHeader()
		.getButtons()
		.isAttentionButtonPresent()
		.should.eql(false);
});
