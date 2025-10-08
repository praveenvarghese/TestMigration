/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario("Validate the table widget when multiple views are configured with template", () => {
	loadPage("Main Project/SecondHome");

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["7", "6", "5"],
			["5", "4", "7"],
			["4", "4", "5"],
			["5", "4", "3"],
			["5", "4", "7"],
			["3", "4", "6"],
			["7", "7", "7"],
			["3", "3", "3"],
			["6", "3", "6"],
			["6", "5", "5"],
			["5", "3", "4"],
			["5", "4", "4"],
			["3", "6", "6"],
			["7", "4", "3"],
			["3", "4", "5"],
		]);

	findWidget("tableWidget")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget")
		.getNamedViewItem(1)
		.click();

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			[
				"16.32 ton",
				"11.73 ton",
				"11.23 ton",
				"16.26 ton",
				"10.36 ton",
				"16.87 ton",
				"10.67 ton",
				"10.11 ton",
				"19.29 ton",
				"14.93 ton",
			],
		]);

	findWidget("tableWidget")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget")
		.getNamedViewItem(3)
		.click();

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["7", "6", "5"],
			["5", "4", "7"],
			["4", "4", "5"],
			["5", "4", "3"],
			["5", "4", "7"],
			["3", "4", "6"],
			["7", "7", "7"],
			["3", "3", "3"],
			["6", "3", "6"],
			["6", "5", "5"],
			["5", "3", "4"],
			["5", "4", "4"],
			["3", "6", "6"],
			["7", "4", "3"],
			["3", "4", "5"],
		]);

	findWidget("tableWidget")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget")
		.getNamedViewItem(6)
		.click();

	findWidget("tableWidget")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["7", "6", "5"],
			["5", "4", "7"],
			["4", "4", "5"],
			["5", "4", "3"],
			["5", "4", "7"],
			["3", "4", "6"],
			["7", "7", "7"],
			["3", "3", "3"],
			["6", "3", "6"],
			["6", "5", "5"],
			["5", "3", "4"],
			["5", "4", "4"],
			["3", "6", "6"],
			["7", "4", "3"],
			["3", "4", "5"],
		]);
});
