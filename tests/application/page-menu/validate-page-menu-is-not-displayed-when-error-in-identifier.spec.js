/*!
 * @AIMMS_FILE=models/PageMenuOptions/WNVTestModel.aimms
 */

scenario("Validate page menu links changes when status is changed", () => {
	loadPage("Main Project/Map Test");

	//Make Page link active to inactive
	findWidget("PageMenuTable")
		.getCell(1, 0)
		.setValue(" ");

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Menu configuration validation:",
				Message: 'The displayText field is empty for the menu item with pageId "home".',
				Icon: "icon-spam",
				Status: "Unread",
			},
		]);

	getPageHeader()
		.isPageMenuPresent()
		.should.eql(false);

	findWidget("PageMenuTable")
		.getCell(1, 0)
		.setValue("Home Page");

	getPageMenu()
		.getMenuLinksInfo()
		.should.beEqualTo([
			{
				DisplayName: "Network Page",
				Slug: "new_map_test_after_fix",
				Tooltip: "Map Widget",
				PageType: "pagev2-grid",
				Link: "Main Project/New Map Test After Fix",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Home Page",
				Slug: "home",
				Tooltip: "Home",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test",
				IsSelected: true,
				HasChildren: true,
				IsActive: true,
			},
			{
				DisplayName: "Child Page 1",
				Slug: "new_page_1",
				Tooltip: "Child Page 1",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test/new page (1)",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Child Page 2",
				Slug: "new_page_2",
				Tooltip: "Child Page 2",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test/new page (2)",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Child Page 3",
				Slug: "new_page_3",
				Tooltip: "Child Page 3",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test/new page (3)",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Charts Page",
				Slug: "highchart_page",
				Tooltip: "Charts",
				PageType: "pagev2-grid",
				Link: null,
				IsSelected: false,
				HasChildren: false,
				IsActive: false,
			},
			{
				DisplayName: "Multiple Widgets",
				Slug: "various_widgets",
				Tooltip: "All WIdgets",
				PageType: "pagev2-grid",
				Link: "Main Project/Various Widgets",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Demo Page",
				Slug: "demo_page",
				Tooltip: "Demo Widgets",
				PageType: "pagev2-grid",
				Link: "Main Project/Demo Page",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "4856",
				Slug: "ticket4856",
				Tooltip: "Bug 4856",
				PageType: "pagev2-grid",
				Link: "Main Project/Ticket4856",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "4849",
				Slug: "ticket4849",
				Tooltip: "Bug 4849",
				PageType: "pagev2-grid",
				Link: "Main Project/Ticket4849",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "4862",
				Slug: "ticket4862",
				Tooltip: "",
				PageType: "pagev2-grid",
				Link: null,
				IsSelected: false,
				HasChildren: false,
				IsActive: false,
			},
		]);

	getPageMenu().closeMenu();

	findWidget("PageMenuTable")
		.getCell(1, 1)
		.setValue("Home Page");

	getLogMessage()
		.openList()
		.getMessages()
		.should.eql([
			{
				Header: "Menu configuration validation:",
				Message: 'The pageId "Home Page" does not exist. & 1 more error.',
				Icon: "icon-spam",
				Status: "Unread",
			},
			{
				Header: "Menu configuration validation:",
				Message: 'The displayText field is empty for the menu item with pageId "home".',
				Icon: "icon-spam",
				Status: "Unread",
			},
		]);

	getPageHeader()
		.isPageMenuPresent()
		.should.eql(false);

	findWidget("PageMenuTable")
		.getCell(1, 1)
		.setValue("home");

	getPageMenu()
		.getMenuLinksInfo()
		.should.beEqualTo([
			{
				DisplayName: "Network Page",
				Slug: "new_map_test_after_fix",
				Tooltip: "Map Widget",
				PageType: "pagev2-grid",
				Link: "Main Project/New Map Test After Fix",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Home Page",
				Slug: "home",
				Tooltip: "Home",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test",
				IsSelected: true,
				HasChildren: true,
				IsActive: true,
			},
			{
				DisplayName: "Child Page 1",
				Slug: "new_page_1",
				Tooltip: "Child Page 1",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test/new page (1)",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Child Page 2",
				Slug: "new_page_2",
				Tooltip: "Child Page 2",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test/new page (2)",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Child Page 3",
				Slug: "new_page_3",
				Tooltip: "Child Page 3",
				PageType: "pagev2-grid",
				Link: "Main Project/Map Test/new page (3)",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Charts Page",
				Slug: "highchart_page",
				Tooltip: "Charts",
				PageType: "pagev2-grid",
				Link: null,
				IsSelected: false,
				HasChildren: false,
				IsActive: false,
			},
			{
				DisplayName: "Multiple Widgets",
				Slug: "various_widgets",
				Tooltip: "All WIdgets",
				PageType: "pagev2-grid",
				Link: "Main Project/Various Widgets",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "Demo Page",
				Slug: "demo_page",
				Tooltip: "Demo Widgets",
				PageType: "pagev2-grid",
				Link: "Main Project/Demo Page",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "4856",
				Slug: "ticket4856",
				Tooltip: "Bug 4856",
				PageType: "pagev2-grid",
				Link: "Main Project/Ticket4856",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "4849",
				Slug: "ticket4849",
				Tooltip: "Bug 4849",
				PageType: "pagev2-grid",
				Link: "Main Project/Ticket4849",
				IsSelected: false,
				HasChildren: false,
				IsActive: true,
			},
			{
				DisplayName: "4862",
				Slug: "ticket4862",
				Tooltip: "",
				PageType: "pagev2-grid",
				Link: null,
				IsSelected: false,
				HasChildren: false,
				IsActive: false,
			},
		]);
});
