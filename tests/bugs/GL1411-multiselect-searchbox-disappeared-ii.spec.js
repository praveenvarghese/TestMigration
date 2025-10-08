/*!
 * @AIMMS_FILE=models/Bugs/GL1411-MultiSelectSearchBoxDisappearedII/Multiselect.aimms
 */

scenario(
	"GL1411 - In some scenarios the search box of the MultiSelect widget disappeared (real client case as opposed to GL1320).",
	() => {
		loadPage("Main Project/home");

		// Start with nothing selected
		findWidget("Multiselect_ItemGroup").selectNone();

		// Select the item names 'group-1'
		findWidget("Multiselect_ItemGroup").select(["group-1"]);

		// This should lead to the population of the other multiselect, including the appearance of a search box
		findWidget("Multiselect_ItemSubGroup").getSearchBox().should.exist;

		// Just to be sure, also check whether the search box does not disappear again after using it (also tested by the GL1320 spec)
		findWidget("Multiselect_ItemSubGroup")
			.getSearchBox()
			.click()
			.keys("g");

		findWidget("Multiselect_ItemSubGroup").getSearchBox().should.exist;
	}
);
