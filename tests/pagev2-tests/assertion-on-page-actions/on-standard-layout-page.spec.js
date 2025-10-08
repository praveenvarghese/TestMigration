/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Assert Page Actions on a page with Standard Layout.", () => {
	// Navigate to 'Test Page' page, a page with 1 of our Standard layouts.
	loadPage("Main Project/Test Page");

	// Assert Primary page action exists.
	findWidget("test_page")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("test_page")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;

	// Click on Primary Page Action, and assert data being updated accordingly
	findWidget("test_page")
		.getPrimaryPageAction()
		.click();
	let expected_values = [[false, true, false, false, true, true]];
	findWidget("Flags")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Assert Secondary Page Actions
	findWidget("test_page")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	const secondaryPageActions = findWidget("test_page").getSecondaryPageActionDetails();
	secondaryPageActions.should.have.numberOfItems.equal(10);
	secondaryPageActions.should.beEqualTo([
		{ State: "Inactive", Icon: "aimms-home", DisplayText: "1st Action" },
		{
			State: "Active",
			Icon: "aimms-calculator",
			DisplayText: "2nd action",
		},
		{ State: "Inactive", Icon: "aimms-city", DisplayText: "3rd Action" },
		{
			State: "Inactive",
			Icon: "aimms-infinite",
			DisplayText: "4th Action",
		},
		{
			State: "Inactive",
			Icon: "aimms-equalizer2",
			DisplayText: "5th Action",
		},
		{ State: "Active", Icon: "aimms-bug", DisplayText: "6th action" },
		{
			State: "Inactive",
			Icon: "aimms-pie-chart7",
			DisplayText: "7th Action",
		},
		{
			State: "Inactive",
			Icon: "aimms-stats-growth",
			DisplayText: "8th Action",
		},
		{ State: "Inactive", Icon: "aimms-cup2", DisplayText: "9th Action" },
		{ State: "Active", Icon: "aimms-flower", DisplayText: "10th action" },
	]);

	// Click on a secondary page action and assert Primary page action state is now inactive
	findWidget("test_page")
		.getSecondaryPageActions()
		.getPageActionV2Details(7)
		.click();
	findWidget("test_page")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("test_page")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.false;

	// Click on Inactive Primary page action and assert no data manipulation happened
	findWidget("test_page")
		.getPrimaryPageAction()
		.click();
	expected_values = [[false, true, false, false, true, true]];
	findWidget("Flags")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Click on another secondary page action and assert Primary page action is now not available
	findWidget("test_page")
		.getSecondaryPageActions()
		.getPageActionV2Details(8)
		.click();
	findWidget("test_page")
		.getPrimaryPageAction()
		.getButton().should.not.exist;
});
