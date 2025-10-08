/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Editing of text widget in a sidepanel Page", () => {
	loadPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Side Panels");

	findWidget("sidepanelText")
		.getText()
		.should.be.equal(
			"Sydney and Canberra will serve as the starting points of India's tour of Australia next month, after Cricket Australia and the New South Wales state government knitted together a deal for the touring team and Australian players returning from the IPL to quarantine in Sydney while also being granted access to nearby training facilities."
		);

	openAppManager().navigateToPage("Main Project/SidePanels");

	findWidget("sidepanelText")
		.getText()
		.should.be.equal(
			"Sydney and Canberra will serve as the starting points of India's tour of Australia next month, after Cricket Australia and the New South Wales state government knitted together a deal for the touring team and Australian players returning from the IPL to quarantine in Sydney while also being granted access to nearby training facilities."
		);

	findWidget("sidepanelText").isTextEditorDisplayed().should.be.false;

	findWidget("sidepanelText").isContentEditable().should.be.false;

	findWidget("sidepanelText").editMode();

	findWidget("sidepanelText").isTextEditorDisplayed().should.be.true;

	findWidget("sidepanelText").isContentEditable().should.be.true;

	findWidget("sidepanelText")
		.getText()
		.should.be.equal(
			"Sydney and Canberra will serve as the starting points of India's tour of Australia next month, after Cricket Australia and the New South Wales state government knitted together a deal for the touring team and Australian players returning from the IPL to quarantine in Sydney while also being granted access to nearby training facilities."
		);

	findWidget("sidepanelText")
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

	findWidget("sidepanelText").isTextEditorDisplayed().should.be.false;

	findWidget("sidepanelText").isContentEditable().should.be.false;

	findWidget("sidepanelText").editMode();

	findWidget("sidepanelText").edit("First Line Written");

	findWidget("sidepanelText")
		.getText()
		.should.be.equal("First Line Written");

	openAppManager().navigateToPage("Main Project/home");

	findWidget("home")
		.getSidepanels()
		.openSidepanelTab("Side Panels");

	findWidget("sidepanelText")
		.getText()
		.should.be.equal("First Line Written");
});
