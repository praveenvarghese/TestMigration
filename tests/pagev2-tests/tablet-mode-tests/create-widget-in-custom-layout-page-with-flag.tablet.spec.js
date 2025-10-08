/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */
scenario("Add a widget in custom layout page without the flag", () => {
	loadPage("Main Project/CustomLayout");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("customlayout_1")
		.getVisibleWidgets()
		.should.eql(["LargeDialog_2", "SmallDIalog_2", "MediumDIalog_2", "Flag_4"]);

	openWidgetManager().deleteWidget("SelectFlag");
	closeWidgetManager();

	findWidget("customlayout_1")
		.getVisibleWidgets()
		.should.eql(["LargeDialog_2", "SmallDIalog_2", "MediumDIalog_2", "Flag_4"]);
});
