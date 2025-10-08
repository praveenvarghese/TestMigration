/*!
 * @AIMMS_FILE=models/Bugs/GLc3912-SmallExample/SmallExample.aimms
 */

scenario("This is e2e test for bugfix c3912-handling-erroneous-input", () => {
	loadPage("Main Project/home");

	findWidget("TimeTable")
		.getCell(0, 0)
		//.click()
		.setValue("09:00");

	findDialog()
		.findButton("Ok")
		.click();

	findWidget("TimeTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("");

	findWidget("TimeTable")
		.getCell(0, 0)
		//.click()
		.setValue("09:00:00");

	findWidget("TimeTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("09:00:00");
});
