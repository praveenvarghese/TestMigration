/*!
 * @AIMMS_FILE=models/DialogMayhem/DialogMayhem.aimms
 */

scenario("Clicking a button should show a dialog", () => {
	loadPage("Main Project/home");

	// Clicking the button calls requestPerformWebUIDialog from the model.
	findWidget("Do Not Push Me").click();

	findDialog()
		.getTitle()
		.should.equal("Mayhem");
	findDialog()
		.getMessage()
		.should.equal("Poof!");
	findDialog()
		.getButtons()
		.should.shallowDeepEqual(["Yes", "No"]);

	// Clicking 'Yes' instructs the model to show more dialogs
	// (and proves that the answer was sent to the model in the first place)
	findDialog()
		.findButton("Yes")
		.click();

	findDialog()
		.getTitle()
		.should.equal("Mayhem");
	findDialog()
		.getMessage()
		.should.equal("You wanted mayhem, you got it!");
	findDialog()
		.getButtons()
		.should.shallowDeepEqual(["Ok"]);
});
