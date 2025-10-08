/*!
 * @AIMMS_FILE=models/Bugs/GL1212-ChangeNotPickedUp/change number.aimms
 */

scenario("Customer Ticket 3275 - Data in WebUI Scalar is now not modified after Esc key", () => {
	loadPage("Main Project/c3275");

	// Assert data shown on Scalar widget
	findWidget("TestDataOnScalar")
		.getValue()
		.should.be.equal("-46.32876");

	// Set Decimal Points identifier value to 3.
	findWidget("DecimalPoints").setValue("3");

	// Assert data shown on Scalar widget
	findWidget("TestDataOnScalar")
		.getValue()
		.should.be.equal("-46.329");

	// Double Click on scalar cell and press Escape key
	findWidget("TestDataOnScalar")
		.getScalarCell()
		.doubleClick()
		.pressKeys([SPECIAL_KEYS.escape]);

	// Assert data shown on Scalar widget
	findWidget("TestDataOnScalar")
		.getValue()
		.should.be.equal("-46.329");

	// Set Decimal Points identifier value to 5.
	findWidget("DecimalPoints").setValue("5");

	// Assert data shown on Scalar widget
	findWidget("TestDataOnScalar")
		.getValue()
		.should.be.equal("-46.32876");
});
