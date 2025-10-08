/*!
 * @AIMMS_FILE=models/TemplateModel/TransNet.aimms
 * @WEBUI_MODE=end_user
 */

scenario("Validate Templates are not disp[layed for end user", () => {
	loadPage("Main Project/Weather History");

	findWidget("tableWidget_3")
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

	findWidget("tableWidget_3")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_3")
		.getNamedViewDetails()
		.should.eql([
			{ title: "Basic View", isSelected: "yes" },
			{ title: "View With Contents Change", isSelected: "no" },
			{ title: "View With Change Widget Type", isSelected: "no" },
			{ title: "View With Pivot Change", isSelected: "no" },
			{ title: "View With Identifier Settings Change", isSelected: "no" },
			{ title: "View With Widget Extensions", isSelected: "no" },
			{ title: "View With Miscellaneous", isSelected: "no" },
		]);

	findWidget("tableWidget_3")
		.getNamedViewItem(6)
		.click();

	findWidget("tableWidget_3")
		.getGridValues()
		.should.be.shallowDeepEqual([
			["7"],
			["5"],
			["4"],
			["5"],
			["5"],
			["3"],
			["7"],
			["3"],
			["6"],
			["6"],
			["5"],
			["5"],
			["3"],
			["7"],
			["3"],
		]);

	findWidget("tableWidget_3")
		.getWidgetNamedViewButton()
		.click();

	findWidget("tableWidget_3")
		.getNamedViewItem(0)
		.click();

	findWidget("tableWidget_3")
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
