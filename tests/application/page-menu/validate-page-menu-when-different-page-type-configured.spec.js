/*!
 * @AIMMS_FILE=models/PageMenuOptions/WNVTestModel.aimms
 */

scenario(
	"Validate page menu behaviour when classic,sidepanel and dialog page is configured",
	() => {
		loadPage("Main Project/Map Test");

		findWidget("PageMenuTable")
			.getCell(0, 1)
			.setValue("classicpage");

		getPageMenu()
			.getMenuLinksInfo()
			.should.beEqualTo([
				{
					DisplayName: "Network Page",
					Slug: "classicpage",
					Tooltip: "Map Widget",
					PageType: "page",
					Link: "Main Project/classicpage",
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
			.getCell(0, 1)
			.setValue("sidepanelpage");

		getLogMessage()
			.openList()
			.getMessages()
			.should.eql([
				{
					Header: "Menu configuration validation:",
					Message:
						'The pageId "sidepanelpage" is not a valid type. Only "page" or "pagev2-grid" are valid page types for a menu item.',
					Icon: "icon-spam",
					Status: "Unread",
				},
			]);

		getPageHeader()
			.isPageMenuPresent()
			.should.eql(false);

		findWidget("PageMenuTable")
			.getCell(0, 1)
			.setValue("dialogpage");

		getLogMessage()
			.openList()
			.getMessages()
			.should.eql([
				{
					Header: "Menu configuration validation:",
					Message:
						'The pageId "dialogpage" is not a valid type. Only "page" or "pagev2-grid" are valid page types for a menu item.',
					Icon: "icon-spam",
					Status: "Unread",
				},
				{
					Header: "Menu configuration validation:",
					Message:
						'The pageId "sidepanelpage" is not a valid type. Only "page" or "pagev2-grid" are valid page types for a menu item.',
					Icon: "icon-spam",
					Status: "Unread",
				},
			]);

		getPageHeader()
			.isPageMenuPresent()
			.should.eql(false);
	}
);
