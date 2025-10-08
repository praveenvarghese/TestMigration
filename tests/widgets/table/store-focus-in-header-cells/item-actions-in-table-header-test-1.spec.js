/*!
 * @AIMMS_FILE=models/ItemActionsInTableHeader/ItemActionsInTableHeader.aimms
 */

scenario("Validate item actions in table header - test 1", () => {
	loadPage("Main Project/home?table-v2=true");

	/*
	findWidget("TeamInfo")
		.getColHeaderCell(0, 0)
		.rightClick()
		.getItemActions().should.exist;
	*/

	findWidget("TeamInfo")
		.getColHeaderCell(0, 0)
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Increase Story Points", icon: "aimms-plus2", state: "active" },
			{ title: "Decrease Story Points", icon: "aimms-minus2", state: "active" },
		]);
});
