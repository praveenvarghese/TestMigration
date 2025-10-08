/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Change the order of widgets within the area that they are already in in standard layout page",
	() => {
		loadPage("Main Project/Another Page?_aimms_only_persistence.write=true");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["ImportTable", "CalendarTableNowWorkingReally"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("another_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["ImportTable", "CalendarTableNowWorkingReally"] },
			]);

		getPageConfigurator()
			.dragWidget("CalendarTableNowWorkingReally")
			.dropBefore("ImportTable");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["CalendarTableNowWorkingReally", "ImportTable"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("another_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["CalendarTableNowWorkingReally", "ImportTable"] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/Another Page");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["CalendarTableNowWorkingReally", "ImportTable"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("another_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["CalendarTableNowWorkingReally", "ImportTable"] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Area C", widgets: ["No widgets in this area"] },
				{ areaName: "Area D", widgets: ["CalendarTableNowWorkingReally", "ImportTable"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("another_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Selected Country"] },
				{ areaName: "Area B", widgets: [] },
				{ areaName: "Area C", widgets: [] },
				{ areaName: "Area D", widgets: ["CalendarTableNowWorkingReally", "ImportTable"] },
			]);
	}
);
