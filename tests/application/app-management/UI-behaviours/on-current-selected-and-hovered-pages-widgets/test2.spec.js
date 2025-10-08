/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"While we are navigated to different pages of Regular page-type, asserting CSS properties of pages and widgets seen on App Manager.",
	() => {
		loadPage("Main Project/Book Corner");

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
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
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

		// Unfold widget container of "Book Corner/JE" page
		getAppManager().unfoldWidgetContainers(["Main Project/Book Corner/JE"]);

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
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "wh_subpage-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "WH",
					Slug: "mischapage_1",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "JE",
					Slug: "je_1",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "je_1-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Header",
					Slug: "Header",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Excerpt",
					Slug: "Excerpt",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Scene",
					Slug: "Scene",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "öβå",
					Slug: "oeva",
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

		// Navigate to 'Book Corner/JE' page.
		getAppManager().navigateToPage("Main Project/Book Corner/JE");

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
					Name: "Widgets on page",
					Slug: "wh_subpage-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "WH",
					Slug: "mischapage_1",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "JE",
					Slug: "je_1",
					NodeType: "Page",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "je_1-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Header",
					Slug: "Header",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Excerpt",
					Slug: "Excerpt",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Scene",
					Slug: "Scene",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "öβå",
					Slug: "oeva",
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

		// Hover 'Book Corner/öβå' page.
		getAppManager().hoverANode({ pagePath: "Main Project/Book Corner/öβå" });

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
					Name: "Widgets on page",
					Slug: "wh_subpage-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "WH",
					Slug: "mischapage_1",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "JE",
					Slug: "je_1",
					NodeType: "Page",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "je_1-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Header",
					Slug: "Header",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Excerpt",
					Slug: "Excerpt",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Scene",
					Slug: "Scene",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "öβå",
					Slug: "oeva",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
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

		// Hover widget 'Header' of 'header'Book Corner/JE' page.
		getAppManager().hoverANode({
			pagePath: "Main Project/Book Corner/JE",
			widgetName: "Header",
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
					Name: "Widgets on page",
					Slug: "wh_subpage-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "WH",
					Slug: "mischapage_1",
					NodeType: "Page",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "JE",
					Slug: "je_1",
					NodeType: "Page",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "je_1-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Header",
					Slug: "Header",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Excerpt",
					Slug: "Excerpt",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "Scene",
					Slug: "Scene",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "öβå",
					Slug: "oeva",
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
