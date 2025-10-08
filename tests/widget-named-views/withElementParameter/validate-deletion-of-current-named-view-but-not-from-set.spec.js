/*!
 * @AIMMS_FILE=models/NamedViewsModelWithEP/TransNet.aimms
 */

scenario(
	"Delete both current named view but not from Ep set, Validate the same in option editor and end user mode",
	() => {
		loadPage("Main Project/Cost Overview/Data");

		findWidget("CChart")
			.getNumberOfBars()
			.should.be.equal(31);

		//Delete the non current viewed named widget
		findWidget("CChart")
			.openNamedViewsOptionEditor()
			.deleteView("Named View 3");

		findWidget("CChart").closeOptionDialog();

		findWidget("CChart")
			.getNumberOfBars()
			.should.be.equal(31);

		findWidget("CChart")
			.getWidgetNamedViewButton()
			.click();

		findWidget("CChart")
			.getNamedViewDetails()
			.should.eql([
				{ title: "Named View 2", isSelected: "no" },
				{ title: "Named View 1", isSelected: "no" },
			]);
	}
);
