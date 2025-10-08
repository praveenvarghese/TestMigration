/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario(
	"Validate combination chart type is disabled when combination chart experiemental option is disabled and in classic page",
	() => {
		loadPage("Main Project/Charts/Barchart");

		findWidget("Barchart")
			.openChangeWidgetTypeOptionEditor()
			.getDisabledWidgetTypeList()
			.should.eql(["Combination Chart"]);

		findWidget("Barchart")
			.openChangeWidgetTypeOptionEditor()
			.getTooltipText("combinationchart")
			.should.eql(
				"This option is available only for widgets on Grid Layout pages.\nPlease follow WebUI documentation on converting this page to Grid Layout."
			);
	}
);
