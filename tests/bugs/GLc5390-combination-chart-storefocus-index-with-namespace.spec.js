/*!
 * @AIMMS_FILE=models/Bugs/GLc5390-IndexWithNamespace/IndexWithNamespace.aimms
 */

scenario("Store Focus for Column Chart with index with namespace", () => {
	loadPage("Main Project/home");

	findWidget("SelectedColorScalar")
		.getValue()
		.should.eql("");

	findWidget("SelectedPersonInLibrary")
		.getValue()
		.should.eql("");

	findWidget("CCW")
		.getNthPointForMultipleContents({ content: 3, point: 1 })
		.click();

	findWidget("SelectedColorScalar")
		.getValue()
		.should.eql("red");

	findWidget("SelectedPersonInLibrary")
		.getValue()
		.should.eql("harish");

	findWidget("CCW")
		.getNthPointForMultipleContents({ content: 2, point: 4 })
		.click();

	findWidget("SelectedColorScalar")
		.getValue()
		.should.eql("blue");

	findWidget("SelectedPersonInLibrary")
		.getValue()
		.should.eql("jp");
});
