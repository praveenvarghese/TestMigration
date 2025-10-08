/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario(
	"Change 1 option per view. Make sure these changes are reflected when switching between views",
	() => {
		loadPage("Main Project/SecondHome?table-v2=false");

		findWidget("tableWidget")
			.getWidgetNamedViewButton()
			.click();

		findWidget("tableWidget")
			.getNamedViewItem(3)
			.click();

		findWidget("tableWidget")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Decimal Places")
			.setValue({
				value: "2",
			});

		findWidget("tableWidget").closeOptionDialog();

		findWidget("tableWidget")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["7.00", "6.00", "5.00"],
				["5.00", "4.00", "7.00"],
				["4.00", "4.00", "5.00"],
				["5.00", "4.00", "3.00"],
				["5.00", "4.00", "7.00"],
				["3.00", "4.00", "6.00"],
				["7.00", "7.00", "7.00"],
				["3.00", "3.00", "3.00"],
				["6.00", "3.00", "6.00"],
				["6.00", "5.00", "5.00"],
				["5.00", "3.00", "4.00"],
				["5.00", "4.00", "4.00"],
				["3.00", "6.00", "6.00"],
				["7.00", "4.00", "3.00"],
				["3.00", "4.00", "5.00"],
			]);

		findWidget("tableWidget")
			.getWidgetNamedViewButton()
			.click();

		findWidget("tableWidget")
			.getNamedViewItem(0)
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
				["7.00", "6.00", "5.00"],
				["5.00", "4.00", "7.00"],
				["4.00", "4.00", "5.00"],
				["5.00", "4.00", "3.00"],
				["5.00", "4.00", "7.00"],
				["3.00", "4.00", "6.00"],
				["7.00", "7.00", "7.00"],
				["3.00", "3.00", "3.00"],
				["6.00", "3.00", "6.00"],
				["6.00", "5.00", "5.00"],
				["5.00", "3.00", "4.00"],
				["5.00", "4.00", "4.00"],
				["3.00", "6.00", "6.00"],
				["7.00", "4.00", "3.00"],
				["3.00", "4.00", "5.00"],
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
	}
);
