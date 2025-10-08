/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Switching from Page V2 to V1 and back to V2", () => {
	loadPage("Main Project/Book Corner");

	// this model normally applies Layout 1 to this page. And has 3 widgets assigned to non-existent areas

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["Book Table", "Book Bars"] },
			{ areaName: "Area B", widgets: ["Selected Book Set", "Book Legend"] },
			{
				areaName: "Unassigned widgets",
				widgets: ["Second Book Bars", "Book Cover", "Author Portrait"],
			},
		]);

	// Layout 6 has Area A to E
	openPageConfigurator().selectLayout("Layout 6");

	findWidget("Book Legend")
		.getPositionInfoRelativeTo("Book Table")
		.should.be.similar.to({
			relativePositioning: "this right of other",
		});

	findWidget("Book Legend")
		.getPositionInfoRelativeTo("Second Book Bars")
		.should.be.similar.to({
			relativePositioning: ["this left of other", "this above other"],
		});

	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["Book Table", "Book Bars"] },
			{ areaName: "Area B", widgets: ["Selected Book Set", "Book Legend"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["Book Cover", "Author Portrait"] },
			{ areaName: "Area E", widgets: ["Second Book Bars"] },
			{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
		]);

	// Layout 7 has Area A to D, so Second Book Bars is off the page...now using Author Portrait
	openPageConfigurator().selectLayout("Layout 7");

	findWidget("Book Legend")
		.getPositionInfoRelativeTo("Selected Book Set")
		.should.be.similar.to({
			alignment: ["right", "left"],
			relativePositioning: "this below other",
		});

	findWidget("Book Legend")
		.getPositionInfoRelativeTo("Author Portrait")
		.should.be.similar.to({
			relativePositioning: "this above other",
		});

	findWidget("Author Portrait")
		.getPositionInfoRelativeTo("Book Cover")
		.should.be.similar.to({
			alignment: ["top", "bottom"],
			relativePositioning: "this right of other",
		});

	findWidget("Book Legend")
		.getPositionInfoRelativeTo("Book Table")
		.should.be.similar.to({
			relativePositioning: "this right of other",
		});

	// Verify the widgets in the widget area
	openPageConfigurator()
		.getWidgetAreas()
		.should.include.something.like([
			{ areaName: "Area A", widgets: ["Book Table", "Book Bars"] },
			{ areaName: "Area B", widgets: ["Selected Book Set", "Book Legend"] },
			{ areaName: "Area C", widgets: ["No widgets in this area"] },
			{ areaName: "Area D", widgets: ["Book Cover", "Author Portrait"] },
			{ areaName: "Unassigned widgets", widgets: ["Second Book Bars"] },
		]);

	// COMMENTED CODE BELOW WILL NO LONGER VBE VALID AFTER #2463 (renaming of areas). POSITIONS WILL DIFFER

	// // Now switch to no layout, meaning a Page V1 in practice.
	// openPageConfigurator().selectLayout("Layout: classic");

	// findWidget("Book Legend")
	// 	.getPositionInfoRelativeTo("Book Table")
	// 	.should.be.similar.to({
	// 		alignment: ["top", "bottom"],
	// 		relativePositioning: "this left of other",
	// 	});

	// findWidget("Book Legend")
	// 	.getPositionInfoRelativeTo("Second Book Bars")
	// 	.should.be.similar.to({
	// 		relativePositioning: "this left of other",
	// 	});

	// And back to a Page V2 layout again
	// openPageConfigurator().selectLayout("Layout 6");

	// findWidget("Book Legend")
	// .getPositionInfoRelativeTo("Book Table")
	// .should.be.similar.to({
	// relativePositioning: ["this left of other", "this below other"],
	// });

	// findWidget("Book Legend")
	// .getPositionInfoRelativeTo("Second Book Bars")
	// .should.be.similar.to({
	// alignment: ["top", "bottom"],
	// relativePositioning: "this left of other",
	// });
});
