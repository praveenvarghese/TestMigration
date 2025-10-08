/*!
 * @AIMMS_FILE=models/PageMenuOptions/WNVTestModel.aimms
 */

scenario(
	"Assert information when EP is removed and reverts back to legacy, When Page Hide is toggled to see if the page Menu is hidden.",
	() => {
		loadPage("Main Project/Map Test");

		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.getOptions()
			.should.include.something.like([
				{
					Name: "Menu Bar",
					NewOptionType: true,
					Value: "pageMenuSP(webui::indexListGroupOrder, webui::indexMenuBarSpec)",
					Index: 0,
				},
				{
					Name: "Menu Hidden",
					NewOptionType: true,
					Value: "false",
					Index: 1,
				},
			]);

		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.clearOptions([
				{
					name: "Menu Bar",
				},
			]);

		getPageMenu()
			.getMenuLinksInfo()
			.should.beEqualTo([
				{
					DisplayName: "Map Test",
					Slug: "home",
					Tooltip: "Map Test",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test",
					IsSelected: true,
					HasChildren: true,
					IsActive: true,
				},
				{
					DisplayName: "new page",
					Slug: "new_page",
					Tooltip: "new page",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (1)",
					Slug: "new_page_1",
					Tooltip: "new page (1)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (1)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (2)",
					Slug: "new_page_2",
					Tooltip: "new page (2)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (2)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (3)",
					Slug: "new_page_3",
					Tooltip: "new page (3)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (3)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (4)",
					Slug: "new_page_4",
					Tooltip: "new page (4)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (4)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (5)",
					Slug: "new_page_5",
					Tooltip: "new page (5)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (5)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (6)",
					Slug: "new_page_6",
					Tooltip: "new page (6)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (6)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (7)",
					Slug: "new_page_7",
					Tooltip: "new page (7)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (7)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (8)",
					Slug: "new_page_8",
					Tooltip: "new page (8)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (8)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (9)",
					Slug: "new_page_9",
					Tooltip: "new page (9)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (9)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (10)",
					Slug: "new_page_10",
					Tooltip: "new page (10)",
					PageType: "pagev2-grid",
					Link: "Main Project/Map Test/new page (10)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "Highchart Page",
					Slug: "highchart_page",
					Tooltip: "Highchart Page",
					PageType: "pagev2-grid",
					Link: "Main Project/Highchart Page",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "New Map Test After Fix",
					Slug: "new_map_test_after_fix",
					Tooltip: "New Map Test After Fix",
					PageType: "pagev2-grid",
					Link: "Main Project/New Map Test After Fix",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "Various Widgets",
					Slug: "various_widgets",
					Tooltip: "Various Widgets",
					PageType: "pagev2-grid",
					Link: "Main Project/Various Widgets",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "Demo Page",
					Slug: "demo_page",
					Tooltip: "Demo Page",
					PageType: "pagev2-grid",
					Link: "Main Project/Demo Page",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "Ticket4856",
					Slug: "ticket4856",
					Tooltip: "Ticket4856",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4856",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "Ticket4862",
					Slug: "ticket4862",
					Tooltip: "Ticket4862",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4862",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "Ticket4849",
					Slug: "ticket4849",
					Tooltip: "Ticket4849",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4849",
					IsSelected: false,
					HasChildren: true,
					IsActive: true,
				},
				{
					DisplayName: "new page",
					Slug: "new_page_11",
					Tooltip: "new page",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4849/new page",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (1)",
					Slug: "new_page_1_1",
					Tooltip: "new page (1)",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4849/new page (1)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (2)",
					Slug: "new_page_2_1",
					Tooltip: "new page (2)",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4849/new page (2)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (3)",
					Slug: "new_page_3_1",
					Tooltip: "new page (3)",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4849/new page (3)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
				{
					DisplayName: "new page (4)",
					Slug: "new_page_4_1",
					Tooltip: "new page (4)",
					PageType: "pagev2-grid",
					Link: "Main Project/Ticket4849/new page (4)",
					IsSelected: false,
					HasChildren: false,
					IsActive: true,
				},
			]);

		getPageMenu().closeMenu();

		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.setOptions([
				{
					name: "Menu Bar",
					value: "pageMenuSP",
					valueType: "IDENTIFIER",
					optionEditorType: "IDENTIFIER",
					sliceInfo: null,
				},
			]);

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

		findWidget("application")
			.openApplicationMenuSettingsOptionEditor()
			.setOptions([
				{
					name: "Menu Hidden",
					value: "TRUE",
					valueType: "LITERAL",
					optionEditorType: "BOOLEAN",
					sliceInfo: null,
				},
			]);

		getPageHeader()
			.isPageMenuPresent()
			.should.eql(false);
	}
);
