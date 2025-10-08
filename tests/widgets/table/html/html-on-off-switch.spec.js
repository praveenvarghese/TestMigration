/*!
 * @AIMMS_FILE=models/HTMLInHeaders/HTMLInHeaders.aimms
 */

scenario("Verify that HTML switch is working properly", () => {
	loadPage("Main Project/home");

	// Switch off the HTML option
	findWidget("AirlineCountryData")
		.openMiscellaneousOptionEditor()
		.getMiscOption("Show Html in Headers")
		.setValue({
			value: "false",
			valueType: "LITERAL",
			optionEditorType: "BOOLEAN",
			sliceInfo: null,
		});

	findWidget("AirlineCountryData").closeOptionDialog();

	// A green bar in a cell should still be there, as the option does not switch off HTML in cells (only in the row/colum headers).
	findWidget("AirlineCountryData")
		.pickColor(490, 448)
		.should.beSameColorAs([57, 130, 61]);

	// Verify the row/column header
	findWidget("AirlineCountryData")
		.getRowsHeaderValues()
		.should.eql([
			["Nederland"],
			["Duitsland"],
			["Oostenrijk"],
			["Ierland"],
			["Zwitserland"],
			["Frankrijk"],
			["Spanje"],
		]);

	findWidget("AirlineCountryData")
		.getColumnsHeaderValues()
		.should.eql([["KLM", "Transavia", "Iberia", "Aer Lingus", "British Airways"]]);
});
