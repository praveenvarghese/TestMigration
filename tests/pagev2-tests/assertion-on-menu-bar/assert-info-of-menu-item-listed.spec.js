/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Assert information of each of the page link listed in Page Menu.", () => {
	loadPage("Main Project/home");

	openAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project",
		})
		.clickOnAddPage()
		.enterName("New PageV2");

	getAppManager()
		.getFlyoutMenu({
			pagePath: "Main Project/New PageV2",
		})
		.clickOnAddPage()
		.enterName("Child PageV2");

	closeAppManager();

	findWidget("home")
		.getVisibleWidgets()
		.should.eql([
			"gfdgfd",
			"Groupie1",
			"but1",
			"but1_1",
			"but3",
			"but4",
			"but5",
			"yfhtye",
			"BOE",
			"ggggfhfgdh",
			"flagsonhome",
		]);

	getPageMenu()
		.getMenuLinksInfo()
		.should.beEqualTo([
			{
				DisplayName: "home",
				Slug: "home",
				PageType: "page",
				Link: "Main Project/home",
				IsSelected: true,
				HasChildren: false,
			},
			{
				DisplayName: "Another Page",
				Slug: "another_page",
				PageType: "page",
				Link: "Main Project/Another Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Button Page",
				Slug: "button_page",
				PageType: "page",
				Link: "Main Project/Button Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Book Corner",
				Slug: "wh_subpage",
				PageType: "page",
				Link: "Main Project/Book Corner",
				IsSelected: false,
				HasChildren: true,
			},
			{
				DisplayName: "WH",
				Slug: "mischapage_1",
				PageType: "page",
				Link: "Main Project/Book Corner/WH",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "JE",
				Slug: "je_1",
				PageType: "page",
				Link: "Main Project/Book Corner/JE",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "öβå",
				Slug: "oeva",
				PageType: "page",
				Link: "Main Project/Book Corner/öβå",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Test Page",
				Slug: "test_page",
				PageType: "pagev2-grid",
				Link: "Main Project/Test Page",
				IsSelected: false,
				HasChildren: true,
			},
			{
				DisplayName: "Custom Grid Page",
				Slug: "custom_grid_page",
				PageType: "pagev2-grid",
				Link: "Main Project/Test Page/Custom Grid Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Classic Layout Page",
				Slug: "classic_layout_page",
				PageType: "page",
				Link: "Main Project/Test Page/Classic Layout Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "New PageV2",
				Slug: "new_pagev2",
				PageType: "pagev2-grid",
				Link: "Main Project/New PageV2",
				IsSelected: false,
				HasChildren: true,
			},
			{
				DisplayName: "Child PageV2",
				Slug: "child_pagev2",
				PageType: "pagev2-grid",
				Link: "Main Project/New PageV2/Child PageV2",
				IsSelected: false,
				HasChildren: false,
			},
		]);

	// Navigate to above created Grid page
	getPageMenu().navigateToPage("Main Project/New PageV2/Child PageV2");

	getPageMenu()
		.getMenuLinksInfo()
		.should.beEqualTo([
			{
				DisplayName: "home",
				Slug: "home",
				PageType: "page",
				Link: "Main Project/home",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Another Page",
				Slug: "another_page",
				PageType: "page",
				Link: "Main Project/Another Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Button Page",
				Slug: "button_page",
				PageType: "page",
				Link: "Main Project/Button Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Book Corner",
				Slug: "wh_subpage",
				PageType: "page",
				Link: "Main Project/Book Corner",
				IsSelected: false,
				HasChildren: true,
			},
			{
				DisplayName: "WH",
				Slug: "mischapage_1",
				PageType: "page",
				Link: "Main Project/Book Corner/WH",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "JE",
				Slug: "je_1",
				PageType: "page",
				Link: "Main Project/Book Corner/JE",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "öβå",
				Slug: "oeva",
				PageType: "page",
				Link: "Main Project/Book Corner/öβå",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Test Page",
				Slug: "test_page",
				PageType: "pagev2-grid",
				Link: "Main Project/Test Page",
				IsSelected: false,
				HasChildren: true,
			},
			{
				DisplayName: "Custom Grid Page",
				Slug: "custom_grid_page",
				PageType: "pagev2-grid",
				Link: "Main Project/Test Page/Custom Grid Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "Classic Layout Page",
				Slug: "classic_layout_page",
				PageType: "page",
				Link: "Main Project/Test Page/Classic Layout Page",
				IsSelected: false,
				HasChildren: false,
			},
			{
				DisplayName: "New PageV2",
				Slug: "new_pagev2",
				PageType: "pagev2-grid",
				Link: "Main Project/New PageV2",
				IsSelected: false,
				HasChildren: true,
			},
			{
				DisplayName: "Child PageV2",
				Slug: "child_pagev2",
				PageType: "pagev2-grid",
				Link: "Main Project/New PageV2/Child PageV2",
				IsSelected: true,
				HasChildren: false,
			},
		]);
});
