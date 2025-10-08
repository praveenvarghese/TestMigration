/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @DEVICE_TYPE=tablet
 */
scenario("Add a widget in custom layout page without the flag", () => {
	loadPage("Main Project/CustomLayout?ignore-grid-layout=true");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("customlayout_1")
		.getVisibleWidgets()
		.should.eql(["SmallDIalog_2", "MediumDIalog_2", "LargeDialog_2", "Flag_4", "SelectFlag"]);

	openWidgetManager().deleteWidget("SelectFlag");
	closeWidgetManager();

	findWidget("customlayout_1")
		.getVisibleWidgets()
		.should.eql(["SmallDIalog_2", "MediumDIalog_2", "LargeDialog_2", "Flag_4"]);
});
