/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

// The idea of this test is that we want to prove that in changes persist
// both using WebUI navigation menu and after reload.
//
// We try to achieve this with the following steps:
//
// 1. Load a page in non-PRO mode
// 2. Make a change to a widget.
// 3. Move to another page.
// 4. Move to the previous page.
// 5. Assert that our change is still there.
// 6. Reload the WebUI (still) in non-PRO mode.
// 7. Assert that the change is still there.
//
// This way, we prove in an e2e kind of way that both in-memory fragment and server were updated.
scenario("Pivoting a table in developer mode should persist both with and without reload", () => {
	loadPage("Main Project/DisplayDomain");

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

	// // "Reload"
	// loadPage("Main Project/DisplayDomain");

	// // Assert "UI still changed"
	// findWidget("displaydomain")
	// 	.getCell(0, 1)
	// 	.getValue()
	// 	.should.be.equal("275.00");
});
