/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to same area and validate the widgets in the standard layout dialogpage",
	() => {
		loadPage("Main Project/StandardDialogPageWithWidgets?_aimms_only_persistence.write=true");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["sidepanelFlag"] },
				{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["sidepanelFlag"] },
				{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);

		getPageConfigurator()
			.dragWidget("sidePanelOPenButton")
			.toArea("Area A");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["sidepanelFlag", "sidePanelOPenButton"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["sidepanelFlag", "sidePanelOPenButton"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);

		getPageConfigurator()
			.dragWidget("WrongDilaogPageId")
			.toArea("Area A");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["sidepanelFlag", "sidePanelOPenButton", "WrongDilaogPageId"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: ["sidepanelFlag", "sidePanelOPenButton", "WrongDilaogPageId"],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);

		getPageConfigurator()
			.dragWidget("downloadWidget")
			.toArea("Area A");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: [
						"sidepanelFlag",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: [
						"sidepanelFlag",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		closePageConfigurator();

		getPageMenu().navigateToPage("Main Project/home");

		openPageConfigurator().selectAppSection();

		openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: [
						"sidepanelFlag",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: [
						"sidepanelFlag",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: [
						"sidepanelFlag",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{
					areaName: "Area A",
					widgets: [
						"sidepanelFlag",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
