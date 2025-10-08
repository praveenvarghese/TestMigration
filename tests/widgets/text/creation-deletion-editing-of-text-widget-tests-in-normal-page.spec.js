/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Creation ,Editing and deletion of text widget from scratch in a Normal Page", () => {
	// Model: MealRus
	loadPage("Main Project/home?_aimms_only_persistence.write=true");

	createWidget("text", "TextWidget");

	findWidget("home_1")
		.getVisibleWidgets()
		.should.eql(["TextWidget"]);

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

	openWidgetManager().deleteWidget("TextWidget");

	findWidget("home_1")
		.getVisibleWidgets()
		.should.eql([]);
});
