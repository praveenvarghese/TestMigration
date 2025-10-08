/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_GridLayout/ModelFromScratch2.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Create new page, create new widgets and assign created some widgets to different areas of standard layout",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true&table-v2=false");

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddPage()
			.enterName("Teams");

		getPageMenu().navigateToPage("Main Project/Teams");

		// Create 2 widgets
		createWidget("Table", ["Megapixels"], "Camera Bubbles");
		createWidget("Table", ["Megapixels"], "CameraTable");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["No widgets in this area"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["Camera Bubbles", "CameraTable"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: [] },
				{ areaName: "Area B", widgets: [] },
			]);

		getPageConfigurator()
			.dragWidget("Camera Bubbles")
			.toArea("Area A");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["CameraTable"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: [] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/Teams");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["CameraTable"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["CameraTable"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: [] },
			]);
	}
);
