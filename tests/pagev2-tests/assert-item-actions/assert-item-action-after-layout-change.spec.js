/*!
 * @AIMMS_FILE=models/PageV2/AnotherNewModel/AnotherNewModel.aimms
 */

scenario(
	"Procedure run from item actions should still work after layout change on a PageV2 page (ticket #3249)",
	() => {
		loadPage("Main Project/home");

		// Make sure we start at layout 6
		openPageConfigurator().selectLayout("Layout 6");

		// Right click on a bar to show the item action.
		findWidget("Reading Chart")
			.findBar("NovelsRead,Sylvia Plath")
			.rightClick();

		findWidget("Reading Chart")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		findWidget("TheVal")
			.getValue()
			.should.eql("1");

		// Change the layout of the page and repeat the item action. The value of the scalar should go back to 0.
		openPageConfigurator().selectLayout("Layout 7");

		findWidget("Reading Chart")
			.findBar("NovelsRead,Sylvia Plath")
			.rightClick();

		findWidget("Reading Chart")
			.getItemActions()
			.getItemActionDetails(0)
			.click();

		findWidget("TheVal")
			.getValue()
			.should.eql("0");
	}
);
