/*!
 * @AIMMS_FILE=models/TemplateModelWithEP/TransNet.aimms
 */

scenario(
	"Overide a value in the view then the template changes for that option will not be reflected.",
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
				value: "3",
			});

		findWidget("tableWidget").closeOptionDialog();

		findWidget("tableWidget")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["7.000", "6.000", "5.000"],
				["5.000", "4.000", "7.000"],
				["4.000", "4.000", "5.000"],
				["5.000", "4.000", "3.000"],
				["5.000", "4.000", "7.000"],
				["3.000", "4.000", "6.000"],
				["7.000", "7.000", "7.000"],
				["3.000", "3.000", "3.000"],
				["6.000", "3.000", "6.000"],
				["6.000", "5.000", "5.000"],
				["5.000", "3.000", "4.000"],
				["5.000", "4.000", "4.000"],
				["3.000", "6.000", "6.000"],
				["7.000", "4.000", "3.000"],
				["3.000", "4.000", "5.000"],
			]);

		findWidget("tableWidget")
			.openNamedViewsOptionEditor()
			.setCurrentViewFromOptionEditor("Temp-1");

		findWidget("tableWidget")
			.openMiscellaneousOptionEditor()
			.getMiscOption("Decimal Places")
			.setValue({
				value: "2",
			});

		findWidget("tableWidget").closeOptionDialog();

		findWidget("tableWidget")
			.getWidgetNamedViewButton()
			.click();

		findWidget("tableWidget")
			.getNamedViewItem(0)
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
			.getNamedViewItem(3)
			.click();

		findWidget("tableWidget")
			.getGridValues()
			.should.be.shallowDeepEqual([
				["7.000", "6.000", "5.000"],
				["5.000", "4.000", "7.000"],
				["4.000", "4.000", "5.000"],
				["5.000", "4.000", "3.000"],
				["5.000", "4.000", "7.000"],
				["3.000", "4.000", "6.000"],
				["7.000", "7.000", "7.000"],
				["3.000", "3.000", "3.000"],
				["6.000", "3.000", "6.000"],
				["6.000", "5.000", "5.000"],
				["5.000", "3.000", "4.000"],
				["5.000", "4.000", "4.000"],
				["3.000", "6.000", "6.000"],
				["7.000", "4.000", "3.000"],
				["3.000", "4.000", "5.000"],
			]);
	}
);
