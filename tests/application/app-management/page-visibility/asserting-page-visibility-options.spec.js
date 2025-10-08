/*!
 * @AIMMS_FILE=models/PageV2/InvisibleWidgets/InvisibleWidgets.aimms
 */

scenario(
	"For few pages having Visibility option set to literal and identifier. Asserting information on Page Visibility Option-Editor.",
	() => {
		loadPage("Main Project/Factories");

		// Reset the test data
		findWidget("Set Flag False").click();

		// Open App Manager
		openAppManager();

		// Check for Visibility options on Home page
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/home",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "true", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: home", Index: 1 },
			]);

		// Check for Visibility options on Regular pages
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/North America",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "true", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: North America", Index: 1 },
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/South America",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "Flag", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: South America", Index: 1 },
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/South America/Brazil",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "Flag", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: Brazil", Index: 1 },
			]);

		// Check for Visibility options on Grid-Layout pages
		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/Asia",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "true", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: Asia", Index: 1 },
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/Asia/India",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "true", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: India", Index: 1 },
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/Asia/UAE",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "false", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: UAE", Index: 1 },
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Factories/Asia/China",
			})
			.clickOnVisibility()
			.getOptionsInfo()
			.should.eql([
				{ Name: "visible", NewOptionType: false, Value: "Flag", Index: 0 },
				{ Name: "Title", NewOptionType: true, Value: "Page: China", Index: 1 },
			]);
	}
);
