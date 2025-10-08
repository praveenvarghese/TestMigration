/*!
 * @AIMMS_FILE=models/Islands with new table MapV2 Grid/Islands.aimms
 */

scenario("Add and use an identifier filter on a translated identifier name", () => {
	loadPage("Main Project/pagev2");

	findWidget("PC1").getRowHeaderFilter(1, 0);

	getFilter().addFilter({ rule: "is", itemsSearched: ["#Seats"], isHeaderRule: true });

	findDialog()
		.findButton("Apply and Close")
		.click();

	const expected_values = [["130.00", "50.00", "60.00"]];

	findWidget("PC1")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);
});
