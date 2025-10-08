/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Editing of text widget in a Normal Page", () => {
	loadPage("Main Project/home");

	findWidget("TextWidget")
		.getText()
		.should.be.equal(
			"Sydney and Canberra will serve as the starting points of India's tour of Australia next month, after Cricket Australia and the New South Wales state government knitted together a deal for the touring team and Australian players returning from the IPL to quarantine in Sydney while also being granted access to nearby training facilities."
		);

	findWidget("TextWidget").isTextEditorDisplayed().should.be.false;

	findWidget("TextWidget").isContentEditable().should.be.false;

	findWidget("TextWidget").editMode();

	findWidget("TextWidget").isTextEditorDisplayed().should.be.true;

	findWidget("TextWidget").isContentEditable().should.be.true;

	findWidget("TextWidget")
		.getText()
		.should.be.equal(
			"Sydney and Canberra will serve as the starting points of India's tour of Australia next month, after Cricket Australia and the New South Wales state government knitted together a deal for the touring team and Australian players returning from the IPL to quarantine in Sydney while also being granted access to nearby training facilities."
		);

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

	pageRefresh();

	findWidget("TextWidget").isTextEditorDisplayed().should.be.false;

	findWidget("TextWidget").isContentEditable().should.be.false;

	findWidget("TextWidget").editMode();

	findWidget("TextWidget").edit("First Line Written");

	findWidget("TextWidget")
		.getText()
		.should.be.equal("First Line Written");
});
