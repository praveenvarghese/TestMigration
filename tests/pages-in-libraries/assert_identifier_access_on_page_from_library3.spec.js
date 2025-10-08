/*!
 * @AIMMS_FILE=models/IdentifierListTest/IdentifierListTest.aimms
 */

scenario(
	"Assert that only accessible procedures are displayed in the identifier selector for page enter/page leave procedures in a library page.",
	() => {
		loadPage("Lib1/Lib1Page");

		// Check the page enter procedures of Main Project/home
		findWidget("l1::lib_1_page")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clearSearch()
			.getIdentifierList("enter")
			.should.include.something.like([
				"MainEnter",
				"l1::Lib1Enter",
				"l1::Lib1EnterPrivate",
				"l2::Lib2Enter",
			]);

		findWidget("l1::lib_1_page")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clickOnCancel();

		findWidget("l1::lib_1_page")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clearSearch()
			.getIdentifierList("enter")
			.should.not.include.something.like(["l2::Lib2EnterPrivate"]);

		findWidget("l1::lib_1_page")
			.openActionUponLoadOptionEditor()
			.clickToGetIdentifierSelectionDialog("onload")
			.clickOnCancel();

		// Check the page leave procedures of Main Project/home
		findWidget("l1::lib_1_page")
			.openActionUponLeaveOptionEditor()
			.clickToGetIdentifierSelectionDialog("pageleave")
			.clearSearch()
			.getIdentifierList("leave")
			.should.include.something.like([
				"MainLeave",
				"l1::Lib1Leave",
				"l2::Lib2Leave",
				"l1::Lib1LeavePrivate",
			]);

		findWidget("l1::lib_1_page")
			.openActionUponLeaveOptionEditor()
			.clickToGetIdentifierSelectionDialog("pageleave")
			.clickOnCancel();

		findWidget("l1::lib_1_page")
			.openActionUponLeaveOptionEditor()
			.clickToGetIdentifierSelectionDialog("pageleave")
			.clearSearch()
			.getIdentifierList("leave")
			.should.not.include.something.like(["l2::Lib2LeavePrivate"]);
	}
);
