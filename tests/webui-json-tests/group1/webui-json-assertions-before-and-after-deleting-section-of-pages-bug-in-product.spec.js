/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"On deleting a section of pages, assert all the pages and its widgets, and their references and properties are all deleted from WebUI.json file.",
	() => {
		loadPage("Main Project/WebUI Json?_aimms_only_persistence.write=true");

		//Disabled for bbug in the product #3339

		let webuiJson = getCachedWebuiJson().load();

		// Assert properties of "parent_page" page and its widgets
		webuiJson.containVisibilityInfo("page.parent_page.visible").should.be.true;
		webuiJson
			.getWidgetsOfAPage("parent_page")
			.should.include.something.like([{ uri: "PP_Flag1" }, { uri: "group" }]);
		webuiJson
			.getWidgetsOfAGroupWidget("group")
			.should.include.something.like([
				{ uri: "PP_Gp_Btn1" },
				{ uri: "PP_Gp_Btn2" },
				{ uri: "PP_Gp_Btn3" },
			]);
		webuiJson.containFragments([
			"pages/parent_page",
			"widgets/PP_Flag1",
			"widgets/group",
			"widgets/PP_Gp_Btn1",
			"widgets/PP_Gp_Btn2",
			"widgets/PP_Gp_Btn3",
		]).should.be.true;

		// Assert properties of "child1_page" page and its widgets
		webuiJson
			.getWidgetsOfAPage("child1_page")
			.should.include.something.like([{ uri: "C1P_Flags" }, { uri: "C1P_Gp" }]);
		webuiJson
			.getWidgetsOfAGroupWidget("C1P_Gp")
			.should.include.something.like([
				{ uri: "C1P_Gp_Btn1" },
				{ uri: "C1P_Gp_Btn2" },
				{ uri: "C1P_Gp_Btn3" },
			]);
		webuiJson.containFragments([
			"pages/child1_page",
			"widgets/C1P_Flags",
			"widgets/C1P_Gp",
			"widgets/C1P_Gp_Btn1",
			"widgets/C1P_Gp_Btn2",
			"widgets/C1P_Gp_Btn3",
		]).should.be.true;

		// Assert properties of "gchild_1_1_page" page and its widgets
		webuiJson.containVisibilityInfo("page.gchild_1_1_page.visible").should.be.true;
		webuiJson
			.getWidgetsOfAPage("gchild_1_1_page")
			.should.include.something.like([{ uri: "GC1P_Btn" }, { uri: "GC1P_Grp" }]);
		webuiJson
			.getWidgetsOfAGroupWidget("GC1P_Grp")
			.should.include.something.like([
				{ uri: "GC1P_GP_btn1" },
				{ uri: "GC1P_GP_Tbl" },
				{ uri: "GC1P_GP_Flag4" },
			]);
		webuiJson.containFragments([
			"pages/gchild_1_1_page",
			"widgets/GC1P_Btn",
			"widgets/GC1P_Grp",
			"widgets/GC1P_GP_btn1",
			"widgets/GC1P_GP_Tbl",
			"widgets/GC1P_GP_Flag4",
		]).should.be.true;

		// Assert properties of "gchild_1_2_page" page and its widgets
		webuiJson.containVisibilityInfo("page.gchild_1_2_page.visible").should.be.true;
		webuiJson.getWidgetsOfAPage("gchild_1_2_page").should.be.eql([]);
		webuiJson.containFragments(["pages/gchild_1_2_page"]).should.be.true;

		// Assert properties of "child2_page" page and its widgets
		webuiJson.containVisibilityInfo("page.child2_page.visible").should.be.true;
		webuiJson
			.getWidgetsOfAPage("child2_page")
			.should.include.something.like([{ uri: "C2P_Btn" }, { uri: "C2P_Gp" }]);
		webuiJson
			.getWidgetsOfAGroupWidget("C2P_Gp")
			.should.include.something.like([
				{ uri: "C2P_Gp_Flag1" },
				{ uri: "C2P_Gp_Flag2" },
				{ uri: "C2P_Gp_Flag3" },
			]);
		webuiJson.containFragments([
			"pages/child2_page",
			"widgets/C2P_Btn",
			"widgets/C2P_Gp",
			"widgets/C2P_Gp_Flag1",
			"widgets/C2P_Gp_Flag2",
			"widgets/C2P_Gp_Flag3",
		]).should.be.true;

		// Assert properties of "gchils_2_1_page" page and its widgets
		webuiJson.containVisibilityInfo("page.gchils_2_1_page.visible").should.be.true;
		webuiJson
			.getWidgetsOfAPage("gchils_2_1_page")
			.should.include.something.like([{ uri: "GC2P_Flags" }, { uri: "GC2P_GP" }]);
		webuiJson
			.getWidgetsOfAGroupWidget("GC2P_GP")
			.should.include.something.like([
				{ uri: "GC2P_GP_btn1" },
				{ uri: "GC2P_GP_scalar" },
				{ uri: "GC2P_GP_Scalar2" },
			]);
		webuiJson.containFragments([
			"pages/gchils_2_1_page",
			"widgets/GC2P_Flags",
			"widgets/GC2P_GP",
			"widgets/GC2P_GP_btn1",
			"widgets/GC2P_GP_scalar",
			"widgets/GC2P_GP_Scalar2",
		]).should.be.true;

		// Assert properties of "child3_page" page and its widgets
		webuiJson
			.getWidgetsOfAPage("child3_page")
			.should.include.something.like([{ uri: "C23_Table" }, { uri: "group_1" }]);
		webuiJson
			.getWidgetsOfAGroupWidget("group_1")
			.should.include.something.like([
				{ uri: "C2P_Gp_Flag1_1" },
				{ uri: "C2P_Gp_Flags" },
				{ uri: "C2P_Gp_Btn" },
			]);
		webuiJson.containFragments([
			"pages/child3_page",
			"widgets/C23_Table",
			"widgets/group_1",
			"widgets/C2P_Gp_Flag1_1",
			"widgets/C2P_Gp_Flags",
			"widgets/C2P_Gp_Btn",
		]).should.be.true;

		// Assert properties of "child4_page" page and its widgets
		webuiJson.containVisibilityInfo("page.child4_page.visible").should.be.true;
		webuiJson.getWidgetsOfAPage("child4_page").should.be.eql([]);
		webuiJson.containFragments(["pages/child4_page"]).should.be.true;

		// Delete "Parent page" page.
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Parent page",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		//Page refresh
		pageRefresh();

		// Get the current WebUI.json context
		webuiJson = getCachedWebuiJson().load();

		// Assert properties of "parent_page" page and its widgets
		// webuiJson.containVisibilityInfo("page.parent_page.visible").should.be.true;
		webuiJson.containFragments([
			"pages/parent_page",
			"widgets/PP_Flag1",
			"widgets/group",
			"widgets/PP_Gp_Btn1",
			"widgets/PP_Gp_Btn2",
			"widgets/PP_Gp_Btn3",
		]).should.be.false;

		// Assert properties of "child1_page" page and its widgets
		webuiJson.containFragments([
			"pages/child1_page",
			"widgets/C1P_Flags",
			"widgets/C1P_Gp",
			"widgets/C1P_Gp_Btn1",
			"widgets/C1P_Gp_Btn2",
			"widgets/C1P_Gp_Btn3",
		]).should.be.false;

		// Assert properties of "gchild_1_1_page" page and its widgets
		webuiJson.containFragments([
			"pages/gchild_1_1_page",
			"widgets/GC1P_Btn",
			"widgets/GC1P_Grp",
			"widgets/GC1P_GP_btn1",
			"widgets/GC1P_GP_Tbl",
			"widgets/GC1P_GP_Flag4",
		]).should.be.false;

		// Assert properties of "gchild_1_2_page" page and its widgets
		webuiJson.containFragments(["pages/gchild_1_2_page"]).should.be.false;

		// Assert properties of "child2_page" page and its widgets
		webuiJson.containFragments([
			"pages/child2_page",
			"widgets/C2P_Btn",
			"widgets/C2P_Gp",
			"widgets/C2P_Gp_Flag1",
			"widgets/C2P_Gp_Flag2",
			"widgets/C2P_Gp_Flag3",
		]).should.be.false;

		// Assert properties of "gchils_2_1_page" page and its widgets
		webuiJson.containFragments([
			"pages/gchils_2_1_page",
			"widgets/GC2P_Flags",
			"widgets/GC2P_GP",
			"widgets/GC2P_GP_btn1",
			"widgets/GC2P_GP_scalar",
			"widgets/GC2P_GP_Scalar2",
		]).should.be.false;

		// Assert properties of "child3_page" page and its widgets
		webuiJson.containFragments([
			"pages/child3_page",
			"widgets/C23_Table",
			"widgets/group_1",
			"widgets/C2P_Gp_Flag1_1",
			"widgets/C2P_Gp_Flags",
			"widgets/C2P_Gp_Btn",
		]).should.be.false;

		// Assert properties of "child4_page" page and its widgets
		webuiJson.containFragments(["pages/child4_page"]).should.be.false;
	}
);
