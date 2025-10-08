/*!
 * @AIMMS_FILE=models/Bugs/GL846-ActiveTab/active tab.aimms
 */

scenario(
	"Validate error message is not displayed when changing the state and doing the switch in the same procedure",
	() => {
		loadPage("Main Project/home");

		findWidget("button 1").click();

		findWidget("tabs")
			.getTabbedPagesInfo()
			.should.eql([
				{ Name: "Tab1", Slug: "tab1", State: "active", CurrentTab: "Yes" },
				{ Name: "Tab2", Slug: "tab2", State: "inactive", CurrentTab: "No" },
				{ Name: "Tab3", Slug: "tab3", State: "inactive", CurrentTab: "No" },
				{ Name: "Tab4", Slug: "tab4", State: "inactive", CurrentTab: "No" },
				{ Name: "Tab5", Slug: "tab5", State: "inactive", CurrentTab: "No" },
				{ Name: "Tab6", Slug: "tab6", State: "inactive", CurrentTab: "No" },
				{ Name: "Tab7", Slug: "tab7", State: "inactive", CurrentTab: "No" },
			]);

		findWidget("button 3").click();

		findWidget("tabs")
			.getTabbedPagesInfo()
			.should.eql([
				{ Name: "Tab1", Slug: "tab1", State: "active", CurrentTab: "No" },
				{ Name: "Tab2", Slug: "tab2", State: "active", CurrentTab: "No" },
				{ Name: "Tab3", Slug: "tab3", State: "active", CurrentTab: "No" },
				{ Name: "Tab4", Slug: "tab4", State: "active", CurrentTab: "No" },
				{ Name: "Tab5", Slug: "tab5", State: "active", CurrentTab: "No" },
				{ Name: "Tab6", Slug: "tab6", State: "active", CurrentTab: "No" },
				{ Name: "Tab7", Slug: "tab7", State: "active", CurrentTab: "Yes" },
			]);

		getLogMessage().openList();

		getLogMessage()
			.getCount()
			.should.be.equal(0);
	}
);
