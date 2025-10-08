/*!
 * @AIMMS_FILE=models/IdentifierListTest/IdentifierListTest.aimms
 */

scenario(
	"Assert that only accessible procedures are displayed in the identifier selector for page enter/page leave procedures in a global page.",
	() => {
		loadPage("Main Project/home");

		// Check the page enter procedures of Main Project/home
		findWidget("home")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			//.clickToGetIdentifierSelectionDialog("pageleave")
			.clearSearch()
			.getIdentifierList("enter")
			.should.include.something.like(["MainEnter", "l1::Lib1Enter", "l2::Lib2Enter"]);

		findWidget("home")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clickOnCancel();

		findWidget("home")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clearSearch()
			.getIdentifierList("enter")
			.should.not.include.something.like(["l1::Lib1EnterPrivate", "l2::Lib2EnterPrivate"]);

		findWidget("home")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clickOnCancel();

		// Check the page leave procedures of Main Project/home
		findWidget("home")
			.openActionUponLeaveOptionEditor()
			.clickToGetIdentifierSelectionDialog("pageleave")
			.clearSearch()
			.getIdentifierList("leave")
			.should.include.something.like(["MainLeave", "l1::Lib1Leave", "l2::Lib2Leave"]);

		findWidget("home")
			.openActionUponLeaveOptionEditor()
			.clickToGetIdentifierSelectionDialog("pageleave")
			.clickOnCancel();

		findWidget("home")
			.openActionUponLeaveOptionEditor()
			.clickToGetIdentifierSelectionDialog("pageleave")
			.clearSearch()
			.getIdentifierList("leave")
			.should.not.include.something.like(["l1::Lib1LeavePrivate", "l2::Lib2LeavePrivate"]);
	}
);
