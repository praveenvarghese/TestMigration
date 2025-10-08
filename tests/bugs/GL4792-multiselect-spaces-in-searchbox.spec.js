/*!
 * @AIMMS_FILE=models/Bugs/GLc6223-MultiSelectWithSubsets/multiselect.aimms
 */

scenario(
	"Assert that only typing spaces in the search box does not make the searchbox disappear",
	() => {
		loadPage("Main Project/home");

		/* Verify the starting situation */
		findWidget("filter customer subset").getSearchBox().should.exist;

		findWidget("filter customer subset").searchItem(["   "]);

		findWidget("filter customer subset").getSearchBox().should.exist;
	}
);
