/*!
 * @AIMMS_FILE=models/Bugs/GLc6223-MultiSelectWithSubsets/multiselect.aimms
 */

scenario("Assert that using the multiselect with a slicing works fine", () => {
	loadPage("Main Project/home");

	/* Verify the starting situation */
	findWidget("filter customer subset")
		.getSelectAllText()
		.should.eql("SELECT ALL (100)");

	findWidget("filter customer subset")
		.getDeselectText()
		.should.eql("DESELECT ALL (100)");

	/* Now make an actual selection and check the effect on both buttons */
	findWidget("filter customer subset").searchItem(["7"]);

	findWidget("filter customer subset")
		.getSelectAllText()
		.should.eql("SELECT (19)");

	findWidget("filter customer subset")
		.getDeselectText()
		.should.eql("DESELECT (19)");

	/* Select a few entries and deselect them; at that point the widget gave an error message before #6223 was fixed. */
	findWidget("filter customer subset").select(["c7", "c72", "c79"]);

	findWidget("filter customer subset").selectNone();

	getLogMessage()
		.getErrorCount()
		.should.be.equal(0);

	findWidget("filter customer subset")
		.getSelectAllText()
		.should.eql("SELECT (19)");

	findWidget("filter customer subset")
		.getDeselectText()
		.should.eql("DESELECT (19)");
});
