/*!
 * @AIMMS_FILE=models/SecondTablePerIdentifierSettings/TablePerIdentifierSettings.aimms
 */

scenario("Create a tablev2 widget from scratch", () => {
	loadPage("Main Project/FirstPage");

	openPageConfigurator()
		.getAddWidgetDialogForArea("Area B")
		.selectType("table")
		.enterName("newtablev2widget")
		.clickAddWidgetButton();

	closePageConfigurator();

	findWidget("newtablev2widget")
		.openTableContentsOptionEditor()
		.modifyContents(
			0,
			{
				value: "FuselageLength",
				type: "identifier",
			},
			{
				value: "1",
				type: "literal",
			},
			{
				value: "NumDecimalsFL",
				type: "identifier",
			},
			null,
			{
				value: "selectVisibiltyFL",
				type: "identifier",
			},
			null
		);

	findWidget("newtablev2widget")
		.getGridValues()
		.should.shallowDeepEqual([
			["35 m", "38 m", "64 m", "40 m", "76 m", "47 m", "36 m", "39 m"],
		]);
});
