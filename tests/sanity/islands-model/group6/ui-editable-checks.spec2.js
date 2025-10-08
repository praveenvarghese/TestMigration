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
	// VerifyEditability("MakeUIUneditable", false);
	loadPage("Main Project/DebugPage");
	findWidget("MakeUIUneditable").click();

	findWidget("Getalletje")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("qqqqqqq")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("MakeUIEditable")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/home");
	findWidget("Plane Assignment Map")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("PlaneSelectionBox")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("AircraftData")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("Node")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/Second Page");
	findWidget("TotalCostPerPlane")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("TotalCostPerIsland")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("Widget Selector")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("TotalCostPerIslandLineChart")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("TotalCostPerIslandTreeMap")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("TheIslandLegend")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("Lab1")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("ExplanotaryText")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/THird Page");
	findWidget("UploadTheFile")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("DownloadTheFile")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);
	findWidget("TheUploadedFile")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/Gantt Page");
	findWidget("The Gantt Chart")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/Great Test Page");
	findWidget("CompactScalar")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/MapV2 Test Page");
	findWidget("MapV2Test")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	loadPage("Main Project/Combination Chart Page");
	findWidget("ColumnChart1")
		.isOptionDialogButtonPresentinWidgetMenu()
		.should.eql(false);

	getPageHeader()
		.getButtons()
		.isApplicationSettingsButtonPresent()
		.should.eql(false);

	getPageHeader()
		.getButtons()
		.isPageSettingsButtonPresent()
		.should.eql(false);

	getPageHeader()
		.getButtons()
		.isWidgetManagerButtonPresent()
		.should.eql(false);

	getPageHeader()
		.getButtons()
		.isPageManagerButtonPresent()
		.should.eql(false);

	getPageHeader()
		.getButtons()
		.isPreviewButtonPresent()
		.should.eql(false);
});
