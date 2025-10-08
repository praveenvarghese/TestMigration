/*!
 * @AIMMS_FILE=models/filter_identifiers/filter_identifiers.aimms
 */

scenario(
	"Validate identifier name is displayed in filters according to the Element text Identifer configured",
	() => {
		loadPage("Main Project/home");

		findWidget("table_widget").getRowFilter(0);

		getFilter()
			.getFiltersData()
			.should.beEqualTo([
				{ type: "column", field: "Customers", rule: "is not", value: ["1"] },
				{ type: "column", field: "Locations", rule: "is", value: ["1"] },
				{ type: "row", field: "2 - 1", rule: "is equal to (=)", value: [""] },
			]);
	}
);
