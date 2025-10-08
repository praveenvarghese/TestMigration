/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario("Validate date validations in Gantt Chart V2", () => {
	loadPage("Main Project/InlineTextPage");

	findWidget("InlineTextGanttChart_1")
		.findResource("10")
		.findJob("03")
		.getInlineLabelText()
		.should.be.equal(
			`ಟೆಸ್ಟ್ ಲಾಂಗ್ ಟೆಸ್ಟ್ ಇದು ಗೋಚರಿಸುತ್ತದೆಯೇ ಅಥವಾ ಎಲಿಪ್ಸಸ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆಯೇ`
		);

	findWidget("InlineTextGanttChart_1")
		.findResource("09")
		.findJob("10")
		.getInlineLabelText()
		.should.be.equal(`Test Long Test is it Visible or Ellipses is displayed`);

	findWidget("InlineTextGanttChart_1")
		.findResource("01")
		.findJob("02")
		.getInlineLabelText()
		.should.be.equal(`V: 02, TR: 01`);
});
