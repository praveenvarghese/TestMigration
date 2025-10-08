/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario("Add a widget in classic,standard and custom layout page", () => {
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
