/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"While we are navigated to different pages of grid-layout page-type, asserting CSS properties of pages and widgets seen on App Manager.",
	() => {
		loadPage("Main Project/Test Page/Custom Grid Page");

		// Open the App Manager.
		openAppManager();

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Another Page",
					Slug: "another_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Button Page",
					Slug: "button_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Book Corner",
					Slug: "wh_subpage",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Test Page",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Classic Layout Page",
					Slug: "classic_layout_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "A Grid Page But Hidden",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "SidePanels",
					Slug: "sidepanels_1",
					NodeType: "Sidepanel",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Dialog Pages",
					Slug: "dialog_pages",
					NodeType: "Dialog",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
			]);

		// Unfold widget container of "Test Page/Custom Grid Pag" page
		getAppManager().unfoldWidgetContainers(["Main Project/Test Page/Custom Grid Page"]);

		// Move cursor away from the page. Move Cursor to "App" header
		getAppManager()
			.getAppNavigatorTab()
			.moveTo();

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Another Page",
					Slug: "another_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Button Page",
					Slug: "button_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Book Corner",
					Slug: "wh_subpage",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Test Page",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "custom_grid_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Aantal Hoofdstukken",
					Slug: "Aantal Hoofdstukken",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BC AantalWoorden",
					Slug: "BC AantalWoorden",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "PC AantalHoofdstukken",
					Slug: "PC AantalHoofdstukken",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Booksdata",
					Slug: "Booksdata",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Flags",
					Slug: "Flags",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Classic Layout Page",
					Slug: "classic_layout_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "A Grid Page But Hidden",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "SidePanels",
					Slug: "sidepanels_1",
					NodeType: "Sidepanel",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Dialog Pages",
					Slug: "dialog_pages",
					NodeType: "Dialog",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
			]);

		// Hover onto widgets container of Home page.
		getAppManager().hoverWidgetContainer({
			pagePath: "Main Project/Test Page/Custom Grid Page",
		});

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Another Page",
					Slug: "another_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Button Page",
					Slug: "button_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Book Corner",
					Slug: "wh_subpage",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Test Page",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "custom_grid_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Aantal Hoofdstukken",
					Slug: "Aantal Hoofdstukken",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BC AantalWoorden",
					Slug: "BC AantalWoorden",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "PC AantalHoofdstukken",
					Slug: "PC AantalHoofdstukken",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Booksdata",
					Slug: "Booksdata",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Flags",
					Slug: "Flags",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Classic Layout Page",
					Slug: "classic_layout_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "A Grid Page But Hidden",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "SidePanels",
					Slug: "sidepanels_1",
					NodeType: "Sidepanel",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Dialog Pages",
					Slug: "dialog_pages",
					NodeType: "Dialog",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
			]);

		// Hover onto widget under current selected Home page.
		getAppManager().hoverANode({
			pagePath: "Main Project/Test Page/Custom Grid Page",
			widgetName: "Flags",
		});

		// Assert the Styles of App Manager Tree.
		getAppManager()
			.getAppManagerStylesInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveGrey100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite80.rgbaWithWhitespace,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Another Page",
					Slug: "another_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Button Page",
					Slug: "button_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Book Corner",
					Slug: "wh_subpage",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Test Page",
					Slug: "test_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "test_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Custom Grid Page",
					Slug: "custom_grid_page",
					NodeType: "Pagev2-grid",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "custom_grid_page-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Aantal Hoofdstukken",
					Slug: "Aantal Hoofdstukken",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BC AantalWoorden",
					Slug: "BC AantalWoorden",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "PC AantalHoofdstukken",
					Slug: "PC AantalHoofdstukken",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Booksdata",
					Slug: "Booksdata",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Flags",
					Slug: "Flags",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Classic Layout Page",
					Slug: "classic_layout_page",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "A Grid Page But Hidden",
					Slug: "a_grid_page_but_hidden",
					NodeType: "Pagev2-grid",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "SidePanels",
					Slug: "sidepanels_1",
					NodeType: "Sidepanel",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Dialog Pages",
					Slug: "dialog_pages",
					NodeType: "Dialog",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
			]);
	}
);
