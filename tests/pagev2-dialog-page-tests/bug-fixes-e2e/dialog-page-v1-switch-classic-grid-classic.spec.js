/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario(
	"Validate that changing from Classic to Grid to Classic does not break the layout and also widgets stay on dialog page",
	() => {
		loadPage("Main Project/classicDPwithWidgets");

		findWidget("classicdpwithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		findWidget("scalarFlagV2")
			.getValue()
			.should.be.equal(false);

		openPageConfigurator().selectLayout("Layout 1");

		findWidget("classicdpwithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		openPageConfigurator().selectLayout("Layout: classic");

		findWidget("classicdpwithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		findWidget("scalarFlagV2")
			.getValue()
			.should.be.equal(false);
	}
);
