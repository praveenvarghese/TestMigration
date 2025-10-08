/*!
 * @AIMMS_FILE=models/PageV2/DialogPagev2/DialogPagev2.aimms
 */

scenario(
	"Validate that changing from Grid to Classic does not break the layout and also widgets stay assigned",
	() => {
		loadPage("Main Project/StandardDialogPageWithWidgets");

		findWidget("standarddialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["sidepanelFlag"] },
				{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);

		openPageConfigurator().selectLayout("Layout: classic");

		findWidget("sidepanelFlag")
			.getValue()
			.should.be.equal(false);

		openPageConfigurator().selectLayout("Layout 7");

		findWidget("standarddialogpagewithwidgets_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["sidepanelFlag"] },
				{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);
	}
);
