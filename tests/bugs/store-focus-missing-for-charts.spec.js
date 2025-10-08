/*!
 * @AIMMS_FILE=models/Bugs/store-focus-tab-missing-for-charts/store-focus-tab-missing-for-charts.aimms
 */

scenario(
	"After implementing the Indexes tab, the Store Focus tab was missing for all chart types.",
	() => {
		loadPage("Main Project/home");

		// Check whether the store focus tab is present for all chart types. Only for the Cobination Chart, the new Indexes tab should be there instead
		// of the Store Focus tab.
		const widgets = ["Bar", "BarLine", "Bubble", "Gantt", "Line", "Pie", "Tree"];

		for (const widget of widgets) {
			findWidget(widget)
				.openOptionDialog()
				.getOptionEditorDetails()
				.should.include.something.like([
					{
						Name: "Store Focus",
						Tooltip: "Store Focus",
					},
				]);
		}

		findWidget("Combination")
			.openOptionDialog()
			.getOptionEditorDetails()
			.should.include.something.like([
				{
					Name: "Index Settings",
					Tooltip: "Index Settings",
				},
			]);
	}
);
