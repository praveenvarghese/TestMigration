/*!
 * @AIMMS_FILE=models/Bugs/GL3302-button-page-links-list-issue/PageTestModel.aimms
 */

scenario(
	"GL3302 - The list displayed when specifying a PageLink on a button did not show all pages.",
	() => {
		loadPage("Main Project/home");

		findWidget("TheButton")
			.openButtonSettingsOptionEditor()
			.getButtonSetting("Value")
			.getPageLinkList()
			.should.eql([
				"&lt;none selected&gt;",
				"Home",
				"SubPage1",
				"MainPage1",
				"MainPage2",
				"Hdhgf",
			]);
	}
);
