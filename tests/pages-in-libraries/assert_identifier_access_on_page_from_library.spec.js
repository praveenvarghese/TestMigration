/*!
 * @AIMMS_FILE=models/IdentifierListTest/IdentifierListTest.aimms
 */

scenario(
	"Assert that only accessible identifiers are displayed in the identifier selector for widgets in a page from a library.",
	() => {
		loadPage("Main Project/home");

		// The widget on the main project page should show both global identifiers plus the identifiers from
		// Lib1 and Lib2 which are present in their respective interfaces.
		findWidget("MyCombi")
			.openIndexOptionEditor()
			.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
			.clearSearch()
			.getIdentifierList()
			.should.include.something.like(["Global1", "Global2", "l1::EpL1", "l2::EpL2"]);

		// It should NOT include the private identifiers of both Lib1 and Lib2
		findWidget("MyCombi")
			.openIndexOptionEditor()
			.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
			.clearSearch()
			.getIdentifierList()
			.should.not.include.something.like(["l1::EpL1_private", "l2::EpL2_private"]);

		// The widget on the Lib1 page should show both global identifiers plus the identifier from
		// Lib2 which is present in its interface plus Lib1's local identifiers.
		loadPage("Lib1/Lib1Page");
		findWidget("l1::L1Combi")
			.openIndexOptionEditor()
			.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
			.clearSearch()
			.getIdentifierList()
			.should.include.something.like([
				"Global1",
				"Global2",
				"l1::EpL1",
				"l1::EpL1_private",
				"l2::EpL2",
			]);

		// Furthermore, it should NOT include the private identifier of Lib2.
		findWidget("l1::L1Combi")
			.openIndexOptionEditor()
			.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
			.clearSearch()
			.getIdentifierList()
			.should.not.include.something.like(["l2::EpL2_private"]);

		// The widget on the Lib2 page should show both global identifiers plus the identifier from
		// Lib1 which is present in its interface plus Lib2's local identifiers.
		loadPage("Lib2/Lib2Page");
		findWidget("l2::L2Combi")
			.openIndexOptionEditor()
			.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
			.clearSearch()
			.getIdentifierList()
			.should.include.something.like([
				"Global1",
				"Global2",
				"l2::EpL2",
				"l2::EpL2_private",
				"l1::EpL1",
			]);

		// Furthermore, it should NOT include the private identifier of Lib1.
		findWidget("l2::L2Combi")
			.openIndexOptionEditor()
			.clickToGetIdentifierSelectionDialogWithIndex("0", "storefocus")
			.clearSearch()
			.getIdentifierList()
			.should.not.include.something.like(["l1::EpL1_private"]);
	}
);
