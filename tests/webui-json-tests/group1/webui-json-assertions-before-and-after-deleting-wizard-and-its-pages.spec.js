/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"On deleting a section containing a wizard and its pages, assert all these pages, their reference and their widget details are all deleted from WebUI.json file.",
	() => {
		loadPage("Main Project/WebUI Json?_aimms_only_persistence.write=true");

		let webuiJson = getCachedWebuiJson().load();

		/* ToDo Assert Wizard declaration
		// Assert properties of Wizard and its pages, procedures and widgets are available on WebUI.json data.
		webuijson.should.contain(`"name":"WizardHome","type":"wizard","slug":"wizard_home",`);
		webuijson.should.contain(`"wizard":{`);
		webuijson.should.contain(`"name":"WizardHome","slug":"wizard_home"`);
		webuijson.should.contain(`"name":"Page1","type":"page","slug":"page1_1","children":[]`);
		webuijson.should.contain(`"name":"Page2","type":"page","slug":"page2_1","children":[]`);
		webuijson.should.contain(`"name":"Page3","type":"page","slug":"page3_1","children":[]`);
		webuijson.should.contain(
			`"name":"Resultpage","type":"page","slug":"result_page","children":[]`
		);
		webuijson.should.contain(
			`"wizard":{"pages":[{"page":{"name":"WizardHome","slug":"wizard_home"`
		);
		webuijson.should.contain(
			`"page":{"name":"Page1","slug":"page1_1","type":"wizard"},"end":"Toggle_Flag1`
		);
		webuijson.should.contain(`"page":{"name":"Page2","slug":"page2_1"},"end":"Toggle_Flag2"`);
		webuijson.should.contain(`"page":{"name":"Page3","slug":"page3_1"},"end":"Toggle_Flag3"`);
		webuijson.should.contain(`"cancelProcedure":false,"resultPage":"home_1","lockdown":true`);
*/

		webuiJson.containFragments(["pages/wizard_home", "widgets/Flags"]).should.be.true;
		webuiJson
			.getWidgetsOfAPage("wizard_home")
			.should.include.something.like([{ uri: "Flags" }]);

		webuiJson.containFragments(["pages/page1_1", "widgets/Flag1"]).should.be.true;
		webuiJson.getWidgetsOfAPage("page1_1").should.include.something.like([{ uri: "Flag1" }]);

		webuiJson.containFragments(["pages/page2_1", "widgets/Flag2"]).should.be.true;
		webuiJson.getWidgetsOfAPage("page2_1").should.include.something.like([{ uri: "Flag2" }]);

		webuiJson.containFragments(["pages/page3_1", "widgets/Flag3"]).should.be.true;
		webuiJson.getWidgetsOfAPage("page3_1").should.include.something.like([{ uri: "Flag3" }]);

		webuiJson.containFragments(["pages/result_page", "widgets/Flags_1"]).should.be.true;
		webuiJson
			.getWidgetsOfAPage("result_page")
			.should.include.something.like([{ uri: "Flags_1" }]);

		// Delete "Wizard Home" page.
		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Wizard Home",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		// Refresh the page
		pageRefresh();

		/* ToDo
		Assert Wizard declarations are all removed from WebUI.json
		*/

		// Get the current WebUI.json context
		webuiJson = getCachedWebuiJson().load();

		webuiJson.containFragments(["pages/wizard_home", "widgets/Flags"]).should.be.false;
		webuiJson.containFragments(["pages/page1_1", "widgets/Flag1"]).should.be.false;
		webuiJson.containFragments(["pages/page2_1", "widgets/Flag2"]).should.be.false;
		webuiJson.containFragments(["pages/page3_1", "widgets/Flag3"]).should.be.false;
		webuiJson.containFragments(["pages/result_page", "widgets/Flags_1"]).should.be.false;
	}
);
