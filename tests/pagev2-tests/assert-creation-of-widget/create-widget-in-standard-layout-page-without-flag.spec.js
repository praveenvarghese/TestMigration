/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */
scenario("Add a widget in standard layout page without the flag", () => {
	loadPage("Main Project/StandardLayout?ignore-grid-layout=true");

	createWidget("scalar", ["Flag"], "SelectFlag");

	findWidget("standardlayout_1")
		.getVisibleWidgets()
		.should.eql(["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3", "SelectFlag"]);

	openWidgetManager().deleteWidget("SelectFlag");
	closeWidgetManager();

	findWidget("standardlayout_1")
		.getVisibleWidgets()
		.should.eql(["SmallDialog_1", "MediumDialog_1", "LargeDialog_1", "Flag_3"]);
});
