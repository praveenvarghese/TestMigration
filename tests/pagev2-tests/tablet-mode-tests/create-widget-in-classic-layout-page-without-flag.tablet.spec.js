/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */
scenario("Add a widget in classic layout page without the flag", () => {
	loadPage("Main Project/dialog button test");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("dialog_button_test")
		.getVisibleWidgets()
		.should.eql(["SmallDialog", "MediumDialog", "LargeDialog", "flag_2", "SelectFlag"]);

	openWidgetManager().deleteWidget("SelectFlag");
	closeWidgetManager();

	findWidget("dialog_button_test")
		.getVisibleWidgets()
		.should.eql(["SmallDialog", "MediumDialog", "LargeDialog", "flag_2"]);
});
