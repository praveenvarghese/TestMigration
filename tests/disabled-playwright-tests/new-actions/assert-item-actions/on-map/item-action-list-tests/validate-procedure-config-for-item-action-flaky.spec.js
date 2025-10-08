/*!
 * @AIMMS_FILE=models/Item Actions/Item Actions.aimms
 */

scenario("Test to verify procedure part of item action specification", () => {
	loadPage("Main Project/home");

	//Verify procedue can be run on click of item action of node
	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.click();

	getDialog().should.exist;

	findDialog()
		.findButton("OK")
		.click();

	//check when procedure is removed from specification
	findWidget("itemactiontable")
		.getCell(3, 2)
		.setValue(" ");

	findWidget("My_Map_with_Item_Actions")
		.getPoint("Boise")
		.rightClick()
		.getItemActionDetails(0)
		.click();

	getDialog().should.not.exist;

	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("No action specified");

	//Verify procedue can be run on click of item action of arc label
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.click();

	getDialog().should.exist;

	findDialog()
		.findButton("OK")
		.click();

	//Verify procedue can be run on click of item action of arc
	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.rightClick(45, 92)
		.getItemActionDetails(0)
		.click();

	getDialog().should.exist;

	findDialog()
		.findButton("OK")
		.click();

	//check when procedure is removed from specification
	findWidget("itemactiontable")
		.getCell(2, 2)
		.setValue(" ");

	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.getArcLabel()
		.rightClick()
		.getItemActionDetails(0)
		.click();

	getDialog().should.not.exist;

	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("No action specified");
	//check when procedure is removed from specification

	findWidget("My_Map_with_Item_Actions")
		.getArcSet(0)
		.getArc("Denver", "Detroit")
		.rightClick(45, 92)
		.getItemActionDetails(0)
		.click();

	getDialog().should.not.exist;

	getLogMessage()
		.getLastReportedLogMessage()
		.should.contain("No action specified");
});
