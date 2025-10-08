/*!
 * @AIMMS_FILE=models/PageV2/ListWidgetModel.aimms
 */

scenario("Various basic tests with switching layouts in Page V2", () => {
	loadPage("Main Project/home");

	/////////////////////////////////////////

	// page is a custom layout to begin with
	findWidget("aapppp").should.be.a.widgetOfType("table");
	findWidget("List Widget").should.be.a.widgetOfType("list");

	findWidget("aapppp")
		.getPositionInfoRelativeTo("List Widget")
		.should.be.similar.to({
			relativePositioning: "this left of other",
		});

	// home page has a custom layout
	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["aapppp"] },
			{ areaName: "Area B", widgets: ["List Widget"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	openPageConfigurator().selectLayout("Layout 6");

	findWidget("aapppp").should.be.a.widgetOfType("table");
	findWidget("List Widget").should.be.a.widgetOfType("list");

	findWidget("List Widget")
		.getPositionInfoRelativeTo("aapppp")
		.should.be.similar.to({
			alignment: ["top", "bottom"],
			relativePositioning: "this right of other",
		});

	// Switch to a different layout
	openPageConfigurator().selectLayout("Layout 4");

	findWidget("List Widget")
		.getPositionInfoRelativeTo("aapppp")
		.should.be.similar.to({
			alignment: "left",
			relativePositioning: "this below other",
		});
});
