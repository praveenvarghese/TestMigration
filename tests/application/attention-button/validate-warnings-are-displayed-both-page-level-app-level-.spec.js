/*!
 * @AIMMS_FILE=models/TableSortingDialog/TableFilteringTest.aimms
 */

scenario("Validate warnings are dispalyed at both page level and application level.", () => {
	loadPage("Main Project/home");

	getPageHeader()
		.getButtons()
		.getAttentionButton().should.be.exist;

	getPageHeader()
		.getButtons()
		.getAttentionButton()
		.click();

	findDialog()
		.getAttentionDialogDetails()
		.should.beEqualTo({
			application: {
				heading: "Application Level Issues",
				issues: [
					{
						title: "Issue with Table Sorting Configuration",
						description:
							'The page "Sorted Table" contains one or more tables with saved sorting configurations that may lead to incorrect row or column sorting. Please navigate to the page to review and resolve the page-level issues highlighted in the dialog.',
						buttonText: "Navigate to Page",
					},
					{
						title: "Issue with Table Sorting Configuration",
						description:
							'The page "SP_Table" contains one or more tables with saved sorting configurations that may lead to incorrect row or column sorting. Please navigate to the page to review and resolve the page-level issues highlighted in the dialog.',
						buttonText: "Navigate to Page",
					},
				],
			},
		});

	findDialog()
		.findButton("Close")
		.click();

	getPageMenu().navigateToPage("Main Project/Sorting/Sorted Table");

	getPageHeader()
		.getButtons()
		.getAttentionButton()
		.click();

	findDialog()
		.getAttentionDialogDetails()
		.should.beEqualTo({
			page: {
				heading: "Page Level Issues",
				issues: [
					{
						title: "Table Sorting Configuration Needs Correction",
						description: `The table "Sorted_Table_1" has a saved sorting configuration that may result in incorrect row or column sorting—especially when some rows or columns are hidden using the "Visibility" feature. Click 'Resolve' to fix this.`,
						buttonText: "Resolve",
					},
					{
						title: "Table Sorting Configuration Needs Correction",
						description: `The table "Sorted_Table_2" has a saved sorting configuration that may result in incorrect row or column sorting—especially when some rows or columns are hidden using the "Visibility" feature. Click 'Resolve' to fix this.`,
						buttonText: "Resolve",
					},
				],
			},
			application: {
				heading: "Application Level Issues",
				issues: [
					{
						title: "Issue with Table Sorting Configuration",
						description:
							'The page "Sorted Table" contains one or more tables with saved sorting configurations that may lead to incorrect row or column sorting. Please navigate to the page to review and resolve the page-level issues highlighted in the dialog.',
						buttonText: "Navigate to Page",
					},
					{
						title: "Issue with Table Sorting Configuration",
						description:
							'The page "SP_Table" contains one or more tables with saved sorting configurations that may lead to incorrect row or column sorting. Please navigate to the page to review and resolve the page-level issues highlighted in the dialog.',
						buttonText: "Navigate to Page",
					},
				],
			},
		});
});
