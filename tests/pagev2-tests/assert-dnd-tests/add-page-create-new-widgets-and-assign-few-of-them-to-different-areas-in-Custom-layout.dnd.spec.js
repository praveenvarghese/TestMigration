/*!
 * @AIMMS_FILE=models/ModelFromScratch/HomePage_Of_ClassicLayout/ModelFromScratch1.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Create new page, create new widgets and assign created some widgets to different areas of custom layout",
	() => {
		loadPage("Main Project/home?_aimms_only_persistence.write=true&table-v2=false");

		openAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project",
			})
			.clickOnAddPage()
			.enterName("Teams")
			.pressKeys([SPECIAL_KEYS.enter]);

		getPageMenu().navigateToPage("Main Project/Teams");

		openPageConfigurator().cloneLayout("Layout 1", "standard");

		const newLayoutName = "Custom324";

		// const newLayoutName = "Custom324";
		getCustomLayoutDialog().edit({
			layoutName: newLayoutName,
		});

		getCustomLayoutDialog().save();

		// Create a bubble chart
		createWidget("Table", ["Megapixels"], "Camera Bubbles");

		// Create a table
		createWidget("Table", ["Megapixels"], "CameraTable");

		openPageConfigurator().selectLayout("Custom324", true);

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
