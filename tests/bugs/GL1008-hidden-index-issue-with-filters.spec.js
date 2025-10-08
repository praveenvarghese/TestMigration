/*!
 * @AIMMS_FILE=models/Bugs/GL1008-FilterHiddenIndexIssue/MarksSpencerSortingBug.aimms
 */

scenario(
	"GL1008 issue where applying filters to column, row or identifier headers showed incorrect filter information when adjacent headers with certain indices were hidden.",
	() => {
		loadPage("Main Project/home");

		findWidget("Titles").getRowHeaderFilter(0, 1);

		getFilter()
			.getFiltersData()
			.should.beEqualTo([{ type: "column", field: "Titles", rule: "is", value: [] }]);

		findDialog()
			.findButton("Apply and Close")
			.click();

		findWidget("Titles").getRowHeaderFilter(0, 0);

		getFilter()
			.getFiltersData()
			.should.beEqualTo([{ type: "column", field: "Years", rule: "is", value: [] }]);
	}
);
