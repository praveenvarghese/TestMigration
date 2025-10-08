/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate addition of identifier decimal point as per identifer option", () => {
	loadPage("Main Project/home");

	findWidget("Aircraft Properties")
		.openTableContentsOptionEditor()
		.modifyContents(
			2,
			null,
			null,
			{
				value: "NumDecimalsMTOW",
				type: "identifier",
			},
			null,
			null
		);

	findWidget("Aircraft Properties").closeOptionDialog();

	findWidget("Aircraft Properties")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("35.10");

	findWidget("Aircraft Properties")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("70,900");

	findWidget("TableSettings").setValue("NumDecimalsMTOW", "4");

	findWidget("Aircraft Properties")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("70,900.0000");

	findWidget("Aircraft Properties")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("35.10");
});
