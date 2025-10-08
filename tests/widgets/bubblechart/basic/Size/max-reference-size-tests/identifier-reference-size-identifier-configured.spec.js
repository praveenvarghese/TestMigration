/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario(
	"Bubble radius before and after configuring reference size for bubble chart using Identifier ",
	() => {
		loadPage("Main Project/Charts/Bubblechart");

		findWidget("Bubblechart")
			.getBubblesRadius()
			.should.beEqualTo([
				{ label: "(Grilled Salmon)", radius: "31.62" },
				{ label: "(Beef Stroganoff)", radius: "27.39" },
				{ label: "(Chicken Taco)", radius: "22.36" },
				{ label: "(Fattoush Salad)", radius: "14.14" },
				{ label: "(Broccoli Salad)", radius: "12.25" },
				{ label: "(Sauteed Spinach)", radius: "12.25" },
				{ label: "(Sweet Potatoes)", radius: "10" },
				{ label: "(Lemon Rice)", radius: "10" },
				{ label: "(Read Beans)", radius: "10" },
				{ label: "(Ribbon Pasta)", radius: "7.07" },
			]);

		findWidget("Bubblechart")
			.openBubbleChartSettingsOptionEditor()
			.getBubbleChartSetting("Maximum Reference Size")
			.setValue({
				value: "p_referenceSize",
				valueType: "IDENTIFIER",
			});

		findWidget("Bubblechart")
			.getBubblesRadius()
			.should.beEqualTo([
				{ label: "(Grilled Salmon)", radius: "70.71" },
				{ label: "(Beef Stroganoff)", radius: "61.24" },
				{ label: "(Chicken Taco)", radius: "50" },
				{ label: "(Fattoush Salad)", radius: "31.62" },
				{ label: "(Broccoli Salad)", radius: "27.39" },
				{ label: "(Sauteed Spinach)", radius: "27.39" },
				{ label: "(Sweet Potatoes)", radius: "22.36" },
				{ label: "(Lemon Rice)", radius: "22.36" },
				{ label: "(Read Beans)", radius: "22.36" },
				{ label: "(Ribbon Pasta)", radius: "15.81" },
			]);

		openAppManager().navigateToPage("Main Project/Charts/Piechart");

		openAppManager().navigateToPage("Main Project/Charts/Bubblechart");

		findWidget("Bubblechart")
			.getBubblesRadius()
			.should.beEqualTo([
				{ label: "(Grilled Salmon)", radius: "70.71" },
				{ label: "(Beef Stroganoff)", radius: "61.24" },
				{ label: "(Chicken Taco)", radius: "50" },
				{ label: "(Fattoush Salad)", radius: "31.62" },
				{ label: "(Broccoli Salad)", radius: "27.39" },
				{ label: "(Sauteed Spinach)", radius: "27.39" },
				{ label: "(Sweet Potatoes)", radius: "22.36" },
				{ label: "(Lemon Rice)", radius: "22.36" },
				{ label: "(Read Beans)", radius: "22.36" },
				{ label: "(Ribbon Pasta)", radius: "15.81" },
			]);

		findWidget("Bubblechart")
			.openBubbleChartSettingsOptionEditor()
			.getBubbleChartSetting("Maximum Reference Size")
			.clearValue();

		findWidget("Bubblechart")
			.getBubblesRadius()
			.should.beEqualTo([
				{ label: "(Grilled Salmon)", radius: "31.62" },
				{ label: "(Beef Stroganoff)", radius: "27.39" },
				{ label: "(Chicken Taco)", radius: "22.36" },
				{ label: "(Fattoush Salad)", radius: "14.14" },
				{ label: "(Broccoli Salad)", radius: "12.25" },
				{ label: "(Sauteed Spinach)", radius: "12.25" },
				{ label: "(Sweet Potatoes)", radius: "10" },
				{ label: "(Lemon Rice)", radius: "10" },
				{ label: "(Read Beans)", radius: "10" },
				{ label: "(Ribbon Pasta)", radius: "7.07" },
			]);

		openAppManager().navigateToPage("Main Project/Charts/Piechart");

		openAppManager().navigateToPage("Main Project/Charts/Bubblechart");

		findWidget("Bubblechart")
			.getBubblesRadius()
			.should.beEqualTo([
				{ label: "(Grilled Salmon)", radius: "31.62" },
				{ label: "(Beef Stroganoff)", radius: "27.39" },
				{ label: "(Chicken Taco)", radius: "22.36" },
				{ label: "(Fattoush Salad)", radius: "14.14" },
				{ label: "(Broccoli Salad)", radius: "12.25" },
				{ label: "(Sauteed Spinach)", radius: "12.25" },
				{ label: "(Sweet Potatoes)", radius: "10" },
				{ label: "(Lemon Rice)", radius: "10" },
				{ label: "(Read Beans)", radius: "10" },
				{ label: "(Ribbon Pasta)", radius: "7.07" },
			]);
	}
);
