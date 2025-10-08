/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_GridLayout/ModelFromScratch2.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Create new page, create new widgets and assign created widgets to different areas of standard layout",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true&table-v2=false");

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddPage()
			.enterName("Teams");

		getPageMenu().navigateToPage("Main Project/Teams");

		// Create a bubble chart
		createWidget("Table", ["Megapixels"], "Camera Bubbles");

		// Create a table
		createWidget("Table", ["Megapixels"], "CameraTable");

		openPageConfigurator().selectLayout("Layout 1");

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

		getPageConfigurator()
			.dragWidget("CameraTable")
			.toArea("Area B");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["CameraTable"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["CameraTable"] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/Teams");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["CameraTable"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["CameraTable"] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["CameraTable"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("teams")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Camera Bubbles"] },
				{ areaName: "Area B", widgets: ["CameraTable"] },
			]);
	}
);
