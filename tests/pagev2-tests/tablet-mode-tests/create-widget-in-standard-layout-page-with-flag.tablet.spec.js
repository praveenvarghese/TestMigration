/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */
scenario("Add a widget in standard layout page without the flag", () => {
	loadPage("Main Project/StandardLayout");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("standardlayout_1")
		.getVisibleWidgets()
		.should.eql(["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"]);

	openWidgetManager().deleteWidget("SelectFlag");
	closeWidgetManager();

	findWidget("standardlayout_1")
		.getVisibleWidgets()
		.should.eql(["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"]);
});
