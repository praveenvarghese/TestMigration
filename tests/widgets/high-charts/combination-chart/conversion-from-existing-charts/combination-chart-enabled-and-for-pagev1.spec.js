/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Validate combination chart type is disabled when combination chart experiemental option is enabled and in classic page",
	() => {
		loadPage("Main Project//Item Actions/Charts/Line Chart Data");

		findWidget("LineChart_1_1")
			.openChangeWidgetTypeOptionEditor()
			.getDisabledWidgetTypeList()
			.should.eql(["Combination Chart"]);

		findWidget("LineChart_1_1")
			.openChangeWidgetTypeOptionEditor()
			.getTooltipText("combinationchart")
			.should.eql(
				"This option is available only for widgets on Grid Layout pages.\nPlease follow WebUI documentation on converting this page to Grid Layout."
			);
	}
);
