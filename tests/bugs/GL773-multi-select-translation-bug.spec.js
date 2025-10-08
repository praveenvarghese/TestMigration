/*!
 * @AIMMS_FILE=models/Bugs/GL733-multiselectTranlationBug/GL3993-multiselectBug.aimms
 */

scenario("GL733 validate translation can be done for select all and select none text", () => {
	loadPage("Main Project/home");

	findWidget("Cuisines")
		.getButtonsText()
		.should.eql(["ಎಲ್ಲವನ್ನು ಆರಿಸು (9)", "ಎಲ್ಲವನ್ನು ಅನಿರ್ದೇಶಿತಗೊಳಿಸಿ (9)"]);

	findWidget("cricketTeams")
		.getButtonsText()
		.should.eql(["ಎಲ್ಲವನ್ನು ಆರಿಸು (7)", "ಎಲ್ಲವನ್ನು ಅನಿರ್ದೇಶಿತಗೊಳಿಸಿ (7)"]);

	findWidget("authors")
		.getButtonsText()
		.should.eql(["ಎಲ್ಲವನ್ನು ಆರಿಸು (8)", "ಎಲ್ಲವನ್ನು ಅನಿರ್ದೇಶಿತಗೊಳಿಸಿ (8)"]);
});
