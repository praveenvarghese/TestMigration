/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"On deleting a section of SidePanels and Dialog pages, assert all these pages, their reference and their widget details are all deleted from WebUI.json file.",
	() => {
		loadPage("Main Project/WebUI Json?_aimms_only_persistence.write=true");

		let webuiJson = getCachedWebuiJson().load();

		// Assert properties of "Sp1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/sp1_1", "widgets/Tf1"]).should.be.true;
		webuiJson.getWidgetsOfAPage("sp1_1").should.include.something.like([{ uri: "Tf1" }]);

		// Assert properties of "Sp1.1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/sp_1_1", "widgets/Flag1_1"]).should.be.true;
		webuiJson.getWidgetsOfAPage("sp_1_1").should.include.something.like([{ uri: "Flag1_1" }]);

		// Assert properties of "SP2" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/sp2_1"]).should.be.false;

		// Assert properties of "Dp1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/dp1_1", "widgets/TF1_1"]).should.be.true;
		webuiJson.getWidgetsOfAPage("dp1_1").should.include.something.like([{ uri: "TF1_1" }]);

		// Assert properties of "Dp1.1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/dp_1_1", "widgets/F1"]).should.be.true;
		webuiJson.getWidgetsOfAPage("dp_1_1").should.include.something.like([{ uri: "F1" }]);

		// Assert properties of "Dp2" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/dp2_1"]).should.be.false;

		// Delete "SPs and DPs" page.
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/SPs and DPs",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Refresh the page
		pageRefresh();

		// Get the current WebUI.json context
		webuiJson = getCachedWebuiJson().load();

		// Assert properties of "Sp1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/sp1_1", "widgets/Tf1"]).should.be.false;

		/* Uncomment this when bug #3339 is fixed
		// Assert properties of "Sp1.1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/sp_1_1", "widgets/Flag1_1"]).should.be.false;
		*/

		// Assert properties of "SP2" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/sp2_1"]).should.be.false;

		// Assert properties of "Dp1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/dp1_1", "widgets/TF1_1"]).should.be.false;

		/* Uncomment this when bug #3339 is fixed
		// Assert properties of "Dp1.1" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/dp_1_1", "widgets/F1"]).should.be.false;
		*/

		// Assert properties of "Dp2" sidepanel page and their widgets are available on WebUI.json data.
		webuiJson.containFragments(["pages/dp2_1"]).should.be.false;
	}
);
