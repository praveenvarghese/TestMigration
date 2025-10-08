/*!
 * @AIMMS_FILE=models/ItemActionsInTableHeader/ItemActionsInTableHeader.aimms
 */

scenario("Validate item actions in table header - test 2", () => {
	loadPage("Main Project/home");

	findWidget("TeamInfo")
		.getRowHeaderCell(0, 0)
		.rightClick()
		.getData()
		.should.beEqualTo([
			{ title: "Increase Info", icon: "aimms-plus2", state: "active" },
			{ title: "Decrease Info", icon: "aimms-minus2", state: "active" },
		]);
});
