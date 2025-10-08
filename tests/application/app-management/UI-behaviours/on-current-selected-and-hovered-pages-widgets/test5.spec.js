/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"While we are navigated to different pages of Dialog page-type, asserting CSS properties of pages and widgets seen on App Manager.",
	() => {
		loadPage("Main Project/Dialog Pages/Help");

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
				{
					Name: "Widgets on page",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
			]);

		// Unfold widget container of "Main Project/Dialog Pages/Help" page
		getAppManager().unfoldWidgetContainers(["Main Project/Dialog Pages/Help"]);

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
				{
					Name: "Widgets on page",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "help_2-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "AllSidePanels",
					Slug: "AllSidePanels",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BookCoverImage",
					Slug: "BookCoverImage",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
			]);

		// Hover onto widgets container of Home page.
		getAppManager().hoverWidgetContainer({
			pagePath: "Main Project/Dialog Pages/Help",
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
				{
					Name: "Widgets on page",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "help_2-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "AllSidePanels",
					Slug: "AllSidePanels",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BookCoverImage",
					Slug: "BookCoverImage",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
			]);

		// Hover 'Dialog Pages/Help' page.
		getAppManager().hoverANode({
			pagePath: "Main Project/Dialog Pages/Help",
			widgetName: "AllSidePanels",
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
				{
					Name: "Widgets on page",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "help_2-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "AllSidePanels",
					Slug: "AllSidePanels",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BookCoverImage",
					Slug: "BookCoverImage",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
			]);

		// Hover 'Dialog Pages/Help' page.
		getAppManager().hoverANode({ pagePath: "Main Project/Dialog Pages" });

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
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "dialog_pages-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "Help",
					Slug: "help_2",
					NodeType: "Dialog",
					IsNodeSelected: true,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite40.rgbaWithWhitespace,
				},
				{
					Name: "Widgets on page",
					Slug: "help_2-widget-container",
					NodeType: "Container",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveTransparentWhite16.rgbaWithWhitespace,
				},
				{
					Name: "AllSidePanels",
					Slug: "AllSidePanels",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
				{
					Name: "BookCoverImage",
					Slug: "BookCoverImage",
					NodeType: "Widget",
					IsNodeSelected: false,
					ContentsColor: colors.colorPrimitiveWhite100.rgb,
					BackgroundColor: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
				},
			]);
	}
);
