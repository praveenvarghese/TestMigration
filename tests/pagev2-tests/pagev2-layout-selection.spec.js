/*!
 * @AIMMS_FILE=models/PageV2/ManyAreas/ManyAreas.aimms
 */

scenario(
	"Checking whether selecting layouts indeed have the desired effect (based on ticket #2356)",
	() => {
		loadPage("Main Project/home");

		// in the model, the home page has custom layout StandardLayoutC1 Copy selected
		// Open the page with a specific layout, which does not offer as much areas as the page was set up for.
		openPageConfigurator().selectLayout("Layout 7");

		findWidget("home")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["P3"] },
				{ areaName: "Area B", widgets: ["P1"] },
				{ areaName: "Area C", widgets: ["T8"] },
				{ areaName: "Area D", widgets: ["T7"] },
			]);

		// Change the layout and check the new state.
		openPageConfigurator().selectLayout("StandardLayoutC1 Copy", true);

		pageRefresh();

		findWidget("home")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Main", widgets: ["T10", "T6"] },
				{ areaName: "Area A", widgets: ["P3"] },
				{ areaName: "Area B", widgets: ["P1"] },
				{ areaName: "Area C", widgets: ["T8"] },
				{ areaName: "Area D", widgets: ["T7"] },
				{ areaName: "Area E", widgets: ["B1"] },
				{ areaName: "Area F", widgets: [] },
				{ areaName: "Area G", widgets: ["T3", "T4", "B3"] },
				{ areaName: "Area H", widgets: ["T5", "P2", "T9"] },
				{ areaName: "Area i", widgets: ["B2"] },
				{ areaName: "Area j", widgets: ["T1", "T2"] },
			]);

		// Next to the widget area allocation, do some checks on the positioning of widgets, to make absolutely sure that the custom layout is indeed working.
		findWidget("T3")
			.getPositionInfoRelativeTo("P1")
			.should.be.similar.to({
				alignment: ["right", "left"],
				relativePositioning: "this below other",
			});

		findWidget("P3")
			.getPositionInfoRelativeTo("P1")
			.should.be.similar.to({
				alignment: ["top", "bottom"],
				relativePositioning: "this left of other",
			});
	}
);
