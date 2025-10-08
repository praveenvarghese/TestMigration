/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @DEVICE_TYPE=tablet
 */

scenario("Assert Page Actions on a page with Classic Layout.", () => {
	// Navigate to Home page, a page with classic layout.
	loadPage("Main Project/home");

	// Assert Primary page action exists.
	findWidget("home")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("home")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.true;

	// Click on Primary Page Action, and assert data being updated accordingly
	findWidget("home")
		.getPrimaryPageAction()
		.click();
	let expected_values = [[false, true, true, true, true, true]];
	findWidget("flagsonhome")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Assert Secondary Page Actions
	findWidget("home")
		.getSecondaryPageActions()
		.clickHamburgerButton();
	const secondaryPageActions = findWidget("home").getSecondaryPageActionDetails();
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
	findWidget("home")
		.getSecondaryPageActions()
		.getPageActionV2Details(7)
		.click();
	findWidget("home")
		.getPrimaryPageAction()
		.getButton().should.exist;
	findWidget("home")
		.getPrimaryPageAction()
		.isAnActiveAction().should.be.false;

	// Click on Inactive Primary page action and assert no data manipulation happened
	findWidget("home")
		.getPrimaryPageAction()
		.click();
	expected_values = [[false, true, true, true, true, true]];
	findWidget("flagsonhome")
		.getGridValues()
		.should.be.shallowDeepEqual(expected_values);

	// Click on another secondary page action and assert Primary page action is now not available
	findWidget("home")
		.getSecondaryPageActions()
		.getPageActionV2Details(8)
		.click();
	findWidget("home")
		.getPrimaryPageAction()
		.getButton().should.not.exist;
});
