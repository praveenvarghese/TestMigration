/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 */

scenario(
	"Test to verify opening of side panel when side panel open procedure is triggered also check other actions can also be triggered with the same procedure",
	() => {
		loadPage("Main Project/home");

		//Verify on click on button of a new page is opened

		findWidget("flag")
			.getValue()
			.should.be.equal(false);

		findWidget("sidepanel_open_button").click();

		findWidget("sprint_reliability")
			.getVisibleWidgets()
			.should.eql(["selectedPage", "selectedTable"]);

		findWidget("flag")
			.getValue()
			.should.be.equal(true);

		findWidget("sidepanel_open_button").click();

		findWidget("sprint_reliability")
			.getVisibleWidgets()
			.should.eql(["selectedPage", "selectedTable"]);

		findWidget("flag")
			.getValue()
			.should.be.equal(false);
	}
);
