/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 */

scenario(
	"While adding a new rule on data headers, assert the focus is on the recent filter rule-operator input.",
	() => {
		loadPage("Main Project/Filters");

		// Get the filter dialog for "Cities" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 0);

		// Assert the 1st filter rule-operator input is focused
		getFilter().isRuleFocused(0).should.be.true;

		// Adding a "is" rule on "Cities" data header
		getFilter().addFilter({ rule: "is", itemsSearched: ["City 01"], isHeaderRule: true });

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the filter dialog for "Products" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(1, 1);

		// Assert the 2nd filter rule-operator input is focused
		getFilter().isRuleFocused(1).should.be.true;

		// Adding another "is not" rule on "Products" data header
		getFilter().addFilter({
			rule: "is not",
			itemsSearched: ["Product 01", "Product 02"],
			isHeaderRule: true,
		});

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the filter dialog for "Profit_Margin" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(2, 1);

		// Assert the 3rd filter rule-operator input is focused
		getFilter().isRuleFocused(2).should.be.true;

		// Adding another "contains" rule on "Profit_Margin" data header
		getFilter().addFilter({ rule: "contains", value: "20", isHeaderRule: true });

		// Apply the filter rules and get the dialog closed
		findDialog()
			.findButton("Apply and Close")
			.click();

		// Get the filter dialog for "Discounts" data header
		findWidget("ProfitWithDiscountsGiven").getDataHeaderFilter(3, 1);

		// Assert the 4th filter rule-operator input is focused
		getFilter().isRuleFocused(3).should.be.true;
	}
);
