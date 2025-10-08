/*!
 * @AIMMS_FILE=models/Bugs/GL1026-error-upon-change/66073.aimms
 */

scenario(
	"Check upon page load procedure is loaded once 1s when its configured in tabbed pages",
	() => {
		loadPage("Main Project/Page with active tab element");

		findWidget("TestIncrement")
			.getValue()
			.should.be.equal("1.00");

		findWidget("new_page_tabbed_pages").navigateToTabbedPage("Second tabbed page");

		findWidget("TestIncrement")
			.getValue()
			.should.be.equal("2.00");

		findWidget("new_page_tabbed_pages").navigateToTabbedPage("First tabbed page");

		findWidget("TestIncrement")
			.getValue()
			.should.be.equal("3.00");
	}
);
