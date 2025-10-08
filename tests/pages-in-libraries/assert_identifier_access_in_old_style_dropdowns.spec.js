/*!
 * @AIMMS_FILE=models/IdentifierListTest/IdentifierListTest.aimms
 */

scenario(
	"Assert that only accessible procedures are displayed in the old-style (dropdown) identifier selector for the application settings.",
	() => {
		loadPage("Main Project/home");

		findWidget("application")
			.openMiscellaneousOptionEditor()
			.getMiscOption("UI Editable")
			.getPossibleValues()
			.should.include.something.like(["UI_EDITABLELIB2 (in l2)"]);

		findWidget("application")
			.openMiscellaneousOptionEditor()
			.getMiscOption("UI Editable")
			.getPossibleValues()
			.should.not.include.something.like(["UI_EDITABLELIB2_PRIVATE (in l2)"]);
	}
);
