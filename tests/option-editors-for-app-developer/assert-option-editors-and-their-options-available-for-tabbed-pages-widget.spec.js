/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate the options available on the Option Editor for Tabbed Pages Widget", () => {
	loadPage("Main Project/SplineChart");

	// Click on TabbedPages Widget Settings, and assert the info on Option Editor.
	findWidget("NewTabbedWidget")
		.openOptionDialog()
		.getOptionEditorDetails()
		.should.eql(tabbedPagesWidgetOptions());

	// For the Tabbed Pages Widget Settings Option Editor, assert the header and default opened tab title.
	findWidget("NewTabbedWidget")
		.openOptionDialog()
		.getOptionEditorHeaderDetails()
		.should.eql({
			"OptionDialog Header": "NewTabbedWidget",
			"OptionEditorTab Title": "Contents",
		});

	findWidget("NewTabbedWidget")
		.openTabbedPagesOptionEditor()
		.getOptions()
		.should.include.something.like([
			{
				Name: "Tabs",
				NewOptionType: true,
				Value: "tabbedPagesFirst(webui::indexListGroupOrder, webui::indexSidePanelSpec)",
				Index: 0,
			},
			{
				Name: "Hide Tab Headers",
				NewOptionType: true,
				Value: "false",
				Index: 1,
			},
			{
				Name: "Active Tab",
				NewOptionType: true,
				Value: "",
				Index: 2,
			},
		]);

	// Assert options available on "Miscellaneous" option editor and their data
	findWidget("NewTabbedWidget")
		.openMiscellaneousOptionEditor()
		.getOptions()
		.should.include.something.like([
			{
				Name: "Visible",
				NewOptionType: false,
				Value: "",
				Index: 0,
			},
		]);
});
