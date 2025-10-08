/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Validate addition of show unit as per identifer option", () => {
	loadPage("Main Project/home");

	findWidget("Aircraft Properties")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("34.90");

	findWidget("Aircraft Properties")
		.openTableContentsOptionEditor()
		.modifyContents(
			0,
			null,
			null,
			null,
			{
				value: "ShowUnits",
				type: "identifier",
			},
			null
		);

	findWidget("Aircraft Properties").closeOptionDialog();

	findWidget("Aircraft Properties")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("34.90 m");

	findWidget("TableSettings").setValue("ShowUnits", false);

	findWidget("Aircraft Properties")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("34.90");
});
