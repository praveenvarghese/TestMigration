/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"On deleting a page, assert page's reference, its properties and widgets are all deleted from WebUI.json file.",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true");

		let webuiJson = getCachedWebuiJson().load();

		// Assert properties of "MKG Child1 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child1_page",`);
		webuiJson.containVisibilityInfo("page.mkg_child1_page.visible").should.be.true;
		webuiJson.containFragments([
			"pages/mkg_child1_page",
			"widgets/mkg_child1_page_Flags",
			"widgets/mkg_child1_page_Gp",
			"widgets/mkg_child1_page_Gp_Btn1",
			"widgets/mkg_child1_page_Gp_Btn2",
			"widgets/mkg_child1_page_Gp_Btn3",
		]).should.be.true;
		webuiJson
			.getWidgetsOfAPage("mkg_child1_page")
			.should.include.something.like([
				{ uri: "mkg_child1_page_Flags" },
				{ uri: "mkg_child1_page_Gp" },
			]);
		webuiJson
			.getWidgetsOfAGroupWidget("mkg_child1_page_Gp")
			.should.include.something.like([
				{ uri: "mkg_child1_page_Gp_Btn1" },
				{ uri: "mkg_child1_page_Gp_Btn2" },
				{ uri: "mkg_child1_page_Gp_Btn3" },
			]);

		// Assert properties of "MKG Child2 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child2_page",`);
		webuiJson.containVisibilityInfo("page.mkg_child2_page.visible").should.be.true;
		webuiJson.containFragments("pages/mkg_child2_page").should.be.false;

		// Assert properties of "MKG Child3 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child3_page"`);
		webuiJson.containFragments([
			"pages/mkg_child3_page",
			"widgets/mkg_child3_page_Flags",
			"widgets/mkg_child3_page_Gp",
			"widgets/mkg_child3_page_Gp_Btn1",
			"widgets/mkg_child3_page_Gp_Btn2",
			"widgets/mkg_child3_page_Gp_Btn3",
		]).should.be.true;
		webuiJson
			.getWidgetsOfAPage("mkg_child3_page")
			.should.include.something.like([
				{ uri: "mkg_child3_page_Flags" },
				{ uri: "mkg_child3_page_Gp" },
			]);
		webuiJson
			.getWidgetsOfAGroupWidget("mkg_child3_page_Gp")
			.should.include.something.like([
				{ uri: "mkg_child3_page_Gp_Btn1" },
				{ uri: "mkg_child3_page_Gp_Btn2" },
				{ uri: "mkg_child3_page_Gp_Btn3" },
			]);

		// Assert properties of "MKG Child4 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child4_page",`);
		webuiJson.containFragments("pages/mkg_child4_page").should.be.false;

		// Delete "MKG Child1 Page", "MKG Child2 Page", "MKG Child3 Page" and "MKG Child4 Page" pages.
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG Tests/MKG Child1 Page",
			})
			.clickOnDelete()
			.actionYes()
			.click();
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG Tests/MKG Child2 Page",
			})
			.clickOnDelete()
			.actionYes()
			.click();
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG Tests/MKG Child3 Page",
			})
			.clickOnDelete()
			.actionYes()
			.click();
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/MKG Tests/MKG Child4 Page",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Navigate to "WebUI Json" page
		openAppManager().navigateToPage("Main Project/WebUI Json");

		// Get the current WebUI.json context
		webuiJson = getCachedWebuiJson().load();

		// Assert properties of "MKG Child1 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child1_page",`);
		/* Bug in Product
webuiJson.containVisibilityInfo("page.mkg_child1_page.visible").should.be.false; */

		webuiJson.containFragments([
			"pages/mkg_child1_page",
			"widgets/mkg_child1_page_Flags",
			"widgets/mkg_child1_page_Gp",
			"widgets/mkg_child1_page_Gp_Btn1",
			"widgets/mkg_child1_page_Gp_Btn2",
			"widgets/mkg_child1_page_Gp_Btn3",
		]).should.be.false;

		// Assert properties of "MKG Child2 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child2_page",`);
		/* Bug in Product
	webuiJson.containVisibilityInfo("page.mkg_child2_page.visible").should.be.false; */

		webuiJson.containFragments("pages/mkg_child2_page").should.be.false;

		// Assert properties of "MKG Child3 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child3_page"`);
		webuiJson.containFragments([
			"pages/mkg_child3_page",
			"widgets/mkg_child3_page_Flags",
			"widgets/mkg_child3_page_Gp",
			"widgets/mkg_child3_page_Gp_Btn1",
			"widgets/mkg_child3_page_Gp_Btn2",
			"widgets/mkg_child3_page_Gp_Btn3",
		]).should.be.false;

		// Assert properties of "MKG Child4 Page" page and its widgets are available on WebUI.json data.
		//webuiJson.should.contain(`"slug": "mkg_child4_page",`);
		webuiJson.containFragments("pages/mkg_child4_page").should.be.false;
	}
);
