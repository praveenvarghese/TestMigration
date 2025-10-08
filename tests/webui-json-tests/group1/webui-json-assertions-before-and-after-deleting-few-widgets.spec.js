/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"On deleting few widgets, assert widget's reference and its properties are all deleted from WebUI.json file.",
	() => {
		loadPage("Main Project/WebUI Json?_aimms_only_persistence.write=true");

		let webuiJson = getCachedWebuiJson().load();

		// Assert properties of 'widgets_page_Btn' and 'widgets_page_Grp' widgets on "widgets_page" page.
		webuiJson.containFragments([
			"pages/widgets_page",
			"widgets/widgets_page_Btn",
			"widgets/widgets_page_Grp",
			"widgets/widgets_page_GP_btn1",
			"widgets/widgets_page_GP_Tbl",
			"widgets/widgets_page_GP_Flag4",
		]).should.be.true;
		webuiJson
			.getWidgetsOfAPage("widgets_page")
			.should.include.something.like([
				{ uri: "widgets_page_Btn" },
				{ uri: "widgets_page_Grp" },
			]);
		webuiJson
			.getWidgetsOfAGroupWidget("widgets_page_Grp")
			.should.include.something.like([
				{ uri: "widgets_page_GP_btn1" },
				{ uri: "widgets_page_GP_Tbl" },
				{ uri: "widgets_page_GP_Flag4" },
			]);

		// Navigate to "Widgets Page" page.
		openAppManager().navigateToPage("Main Project/Widgets Page");

		// Delete 'widgets_page_Btn' and 'widgets_page_Grp' widgets.
		openWidgetManager()
			.deleteWidget("widgets_page_Btn")
			.deleteWidget("widgets_page_Grp");

		/// Refresh the page
		pageRefresh();

		// Get the current WebUI.json context
		webuiJson = getCachedWebuiJson().load();

		// Assert properties of 'widgets_page_Btn' and 'widgets_page_Grp' widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/widgets_page"]).should.be.true;
		webuiJson.containFragments([
			"widgets/widgets_page_Btn",
			"widgets/widgets_page_Grp",
			"widgets/widgets_page_GP_btn1",
			"widgets/widgets_page_GP_Tbl",
			"widgets/widgets_page_GP_Flag4",
		]).should.be.false;
		webuiJson.getWidgetsOfAPage("widgets_page").should.eql([]);
	}
);
