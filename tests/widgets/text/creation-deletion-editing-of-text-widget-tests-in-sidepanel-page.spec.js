/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Creation ,Editing and deletion of text widget from scratch in a Sidepanel Page", () => {
	// Model: MealRus
	loadPage("Main Project/Charts/sidepanel_page?_aimms_only_persistence.write=true");

	createWidget("text", "TextWidget");

	findWidget("sidepanel_page_1")
		.getVisibleWidgets()
		.should.eql(["bubbleCHartSidePanelPage", "TextWidget"]);

	closeWidgetManager();

	findWidget("TextWidget")
		.getAllEditorOptions()
		.should.beEqualTo([
			"Size",
			"H1",
			"H2",
			"H3",
			"H4",
			"H5",
			"H6",
			"Bold",
			"Italic",
			"Underline",
			"Strikethrough",
			"Text Color",
			"Background Color",
			"Link",
			"Image",
			"Blockquote",
			"Code Block",
			"List",
			"Bullet",
			"Check List",
			"Text Alignment",
			"Left Indent",
			"Right Indent",
			"Sub",
			"Super",
			"Save",
		]);

	findWidget("TextWidget").isTextEditorDisplayed().should.be.true;

	findWidget("TextWidget").isContentEditable().should.be.true;

	pageRefresh();

	findWidget("TextWidget").isTextEditorDisplayed().should.be.true;

	findWidget("TextWidget").isContentEditable().should.be.true;

	findWidget("TextWidget").closeToolbar();

	findWidget("TextWidget").editMode();

	findWidget("TextWidget").edit("First Line Written");

	findWidget("TextWidget")
		.getText()
		.should.be.equal("First Line Written");

	findWidget("TextWidget").isTextEditorDisplayed().should.be.false;

	findWidget("TextWidget").isContentEditable().should.be.false;

	findWidget("TextWidget").editMode();

	findWidget("TextWidget")
		.getText()
		.should.be.equal("First Line Written");

	findWidget("TextWidget").isTextEditorDisplayed().should.be.true;

	findWidget("TextWidget").isContentEditable().should.be.true;

	findWidget("TextWidget").closeToolbar();

	getPageMenu().navigateToPage("Main Project/Charts/Bubblechart");

	findWidget("bubblechart_1")
		.getSidepanels()
		.openSidepanelTab("Bubble Chart");

	findWidget("sidepanel_page_1")
		.getVisibleWidgets()
		.should.eql(["bubbleCHartSidePanelPage", "TextWidget"]);

	findWidget("TextWidget")
		.getText()
		.should.be.equal("First Line Written");

	openAppManager().navigateToPage("Main Project/Charts/sidepanel_page");

	openWidgetManager().deleteWidget("TextWidget");

	findWidget("sidepanel_page_1")
		.getVisibleWidgets()
		.should.eql(["bubbleCHartSidePanelPage"]);

	getPageMenu().navigateToPage("Main Project/Charts/Bubblechart");

	findWidget("bubblechart_1")
		.getSidepanels()
		.openSidepanelTab("Bubble Chart");

	findWidget("sidepanel_page_1")
		.getVisibleWidgets()
		.should.eql(["bubbleCHartSidePanelPage"]);
});
