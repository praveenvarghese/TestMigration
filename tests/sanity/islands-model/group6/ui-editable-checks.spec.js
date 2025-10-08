/*!
 * @AIMMS_FILE=models/Islands PageV2/Islands.aimms
 * @WEBUI_MODE=end_user
 */

/**
 * NOTE: (EN20221201)
 * 1. In end-user mode the optiondialog-nib is ALWAYS transferred to the widget menu, for any type of widget, 'headerless' or not
 * 2. When ui.editable is set to 0 (i.e. a non-editable ui), the optiondialog-nib isn't shown anywhere. Period.
 * This e2e used to differentiate between presence in (regular) headers and widget menus for some widget types, but it really shouldn't have done that...
 */

scenario("Verify the UI Editable functionality.", () => {
	// VerifyEditability("MakeUIEditable", true);
	loadPage("Main Project/DebugPage");
	findWidget("MakeUIEditable").click();

	findWidget("Getalletje")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("qqqqqqq")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("MakeUIEditable")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/home");
	findWidget("Plane Assignment Map")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("PlaneSelectionBox")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("AircraftData")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("Node")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/Second Page");
	findWidget("TotalCostPerPlane")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("TotalCostPerIsland")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("Widget Selector")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("TotalCostPerIslandLineChart")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("TotalCostPerIslandTreeMap")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("TheIslandLegend")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("Lab1")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("ExplanotaryText")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/THird Page");
	findWidget("UploadTheFile")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("DownloadTheFile")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);
	findWidget("TheUploadedFile")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/Gantt Page");
	findWidget("The Gantt Chart")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/Great Test Page");
	findWidget("CompactScalar")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/MapV2 Test Page");
	findWidget("MapV2Test")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	loadPage("Main Project/Combination Chart Page");
	findWidget("ColumnChart1")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(true);

	getPageHeader()
		.getButtons()
		.isApplicationSettingsButtonPresent()
		.should.eql(true);

	getPageHeader()
		.getButtons()
		.isPageSettingsButtonPresent()
		.should.eql(true);

	getPageHeader()
		.getButtons()
		.isWidgetManagerButtonPresent()
		.should.eql(true);

	getPageHeader()
		.getButtons()
		.isPageManagerButtonPresent()
		.should.eql(false);

	getPageHeader()
		.getButtons()
		.isPreviewButtonPresent()
		.should.eql(false);
});
