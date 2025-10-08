/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate addition of literal decimal point  as per identifer option", () => {
	loadPage("Main Project/home");

	findWidget("Aircraft Properties")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("70,900.00");

	findWidget("Aircraft Properties")
		.openTableContentsOptionEditor()
		.modifyContents(
			2,
			null,
			null,
			{
				value: "3",
				type: "literal",
			},
			null,
			null
		);

	findWidget("Aircraft Properties").closeOptionDialog();

	findWidget("Aircraft Properties")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("70,900.000");
});
