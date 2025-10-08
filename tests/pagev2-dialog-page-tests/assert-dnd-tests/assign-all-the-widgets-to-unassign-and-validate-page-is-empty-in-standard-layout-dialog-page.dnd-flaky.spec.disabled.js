/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Assign all the widgets to un assign and validate page is empty in standard layout",
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
			.dragWidget("sidepanelFlag")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
				{ areaName: "Unassigned widgets", widgets: ["sidepanelFlag"] },
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: ["sidePanelOPenButton"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);

		getPageConfigurator()
			.dragWidget("sidePanelOPenButton")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
				{
					areaName: "Unassigned widgets",
					widgets: ["sidepanelFlag", "sidePanelOPenButton"],
				},
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: ["WrongDilaogPageId"] },
				{ areaName: "Area D", widgets: ["downloadWidget"] },
			]);

		getPageConfigurator()
			.dragWidget("WrongDilaogPageId")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.dragWidget("downloadWidget")
			.toArea("Unassigned widgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["No widgets in this area"] },
				{
					areaName: "Unassigned widgets",
					widgets: [
						"downloadWidget",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		closePageConfigurator();

		getPageMenu().navigateToPage("Main Project/home");

		openPageConfigurator().selectAppSection();

		openAppManager().navigateToPage("Main Project/StandardDialogPageWithWidgets");

		getPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["No widgets in this area"] },
				{
					areaName: "Unassigned widgets",
					widgets: [
						"downloadWidget",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["No widgets in this area"] },
				{
					areaName: "Unassigned widgets",
					widgets: [
						"downloadWidget",
						"sidePanelOPenButton",
						"WrongDilaogPageId",
						"downloadWidget",
					],
				},
			]);

		findWidget("standarddialogpagewithwidgets_1")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: [] },
			]);
	}
);
