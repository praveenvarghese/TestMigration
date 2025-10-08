/*!
 * @AIMMS_FILE=models/TabbedPages/TransNet.aimms
 */

scenario("Validate tab navigation and widgets displayed in tabbed pages widget", () => {
	loadPage("Main Project/Grid_Page_Custom_Layout");

	findWidget("TotalCosts_scalar")
		.getValue()
		.should.eql("en-US");
});
