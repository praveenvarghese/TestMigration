/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 * @WEBUI_MODE=end_user
 */

// The idea of this test is that we want to prove that in PRO changes still persist.
// But only locally, so no server is updated.
//
// We try to achieve this with the following steps:
//
// 1. Put the WebUI in server (PRO) mode
// 2. Make a change to a widget.
// 3. Move to another page.
// 4. Move to the previous page.
// 5. Assert that our change is still there.
// 6. Reload the WebUI with local storage cleared
// 7. Assert that the change is gone -> back original state
//
// This way, we prove in an e2e kind of way that nothing was updated on the server.
scenario("Pivoting a table in PRO should only persist without reload in PRO", () => {
	loadPage("Main Project/DisplayDomain?_aimms_only_persistence.write=true");

	// Assert start condition.
	findWidget("displaydomain")
		.getCell(9, 0)
		.getValue()
		.should.be.equal("740.00");

	// "Change UI"
	findWidget("displaydomain")
		.dragIndex("i1")
		.dropAfter("<IDENTIFIER-SET>");

	// Assert "UI changed"
	findWidget("displaydomain")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("275.00");

	// "Navigate away"
	getPageMenu().navigateToPage("Main Project/Charts");

	// "Wait until page has loaded"
	findWidget("Linechart").should.be.a.widgetOfType("linechart");

	// "Navigate back"
	getPageMenu().navigateToPage("Main Project/DisplayDomain");

	// Assert "UI still changed"
	findWidget("displaydomain")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("275.00");

	loadPage("Main Project/DisplayDomain?localStorage=clear");

	// Assert "UI unchanged"
	findWidget("displaydomain")
		.getCell(9, 0)
		.getValue()
		.should.be.equal("740.00");
});
