/*!
 * @AIMMS_FILE=models/Bugs/GL2846-LineasIBP/LineasIBP.aimms
 */

scenario("Select element parameter value in selection box and check it is displayed", () => {
	loadPage("Main Project/Startup");

	findWidget("SB_MonthSelectionTest").select("'06-M1");

	findWidget("SB_MonthSelectionTest")
		.getValue()
		.should.be.equal("'06-M1");

	findWidget("SB_MonthSelectionTest").select("'06-M2");

	findWidget("SB_MonthSelectionTest")
		.getValue()
		.should.be.equal("'06-M2");
});
