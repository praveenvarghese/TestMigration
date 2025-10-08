/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario("Test to verify opening of page when page open procedure is triggered", () => {
	loadPage("Main Project/page open test");

	//Verify on click on button of a new page is opened
	findWidget("pageopenbutton").click();

	findWidget("child_page")
		.getVisibleWidgets()
		.should.eql(["childpagebutton"]);
});
