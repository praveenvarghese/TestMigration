/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Bubble radius when multiple bubble charts are configured", () => {
	loadPage("Main Project/Charts/size_bubblechart");

	findWidget("procedure2").click();

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Lemon Rice)", radius: "79.06" },
			{ label: "(Sauteed Spinach)", radius: "79.06" },
			{ label: "(Grilled Salmon)", radius: "70.71" },
			{ label: "(Broccoli Salad)", radius: "70.71" },
			{ label: "(Chicken Taco)", radius: "61.24" },
			{ label: "(Fattoush Salad)", radius: "61.24" },
			{ label: "(Beef Stroganoff)", radius: "50" },
			{ label: "(Read Beans)", radius: "50" },
			{ label: "(Sweet Potatoes)", radius: "35.36" },
			{ label: "(Ribbon Pasta)", radius: "35.36" },
		]);

	findWidget("Bubble2")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(pasta)", radius: "79.06" },
			{ label: "(bacon)", radius: "70.71" },
			{ label: "(curry)", radius: "61.24" },
			{ label: "(biryani)", radius: "50" },
			{ label: "(sausages)", radius: "35.36" },
		]);

	findWidget("MaxReferenceValue").setValue("15");

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Lemon Rice)", radius: "64.55" },
			{ label: "(Sauteed Spinach)", radius: "64.55" },
			{ label: "(Grilled Salmon)", radius: "57.74" },
			{ label: "(Broccoli Salad)", radius: "57.74" },
			{ label: "(Chicken Taco)", radius: "50" },
			{ label: "(Fattoush Salad)", radius: "50" },
			{ label: "(Beef Stroganoff)", radius: "40.82" },
			{ label: "(Read Beans)", radius: "40.82" },
			{ label: "(Sweet Potatoes)", radius: "28.87" },
			{ label: "(Ribbon Pasta)", radius: "28.87" },
		]);

	findWidget("Bubble2")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(pasta)", radius: "79.06" },
			{ label: "(bacon)", radius: "70.71" },
			{ label: "(curry)", radius: "61.24" },
			{ label: "(biryani)", radius: "50" },
			{ label: "(sausages)", radius: "35.36" },
		]);

	openAppManager().navigateToPage("Main Project/Charts");

	openAppManager().navigateToPage("Main Project/Charts/size_bubblechart");

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Lemon Rice)", radius: "64.55" },
			{ label: "(Sauteed Spinach)", radius: "64.55" },
			{ label: "(Grilled Salmon)", radius: "57.74" },
			{ label: "(Broccoli Salad)", radius: "57.74" },
			{ label: "(Chicken Taco)", radius: "50" },
			{ label: "(Fattoush Salad)", radius: "50" },
			{ label: "(Beef Stroganoff)", radius: "40.82" },
			{ label: "(Read Beans)", radius: "40.82" },
			{ label: "(Sweet Potatoes)", radius: "28.87" },
			{ label: "(Ribbon Pasta)", radius: "28.87" },
		]);

	findWidget("Bubble2")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(pasta)", radius: "79.06" },
			{ label: "(bacon)", radius: "70.71" },
			{ label: "(curry)", radius: "61.24" },
			{ label: "(biryani)", radius: "50" },
			{ label: "(sausages)", radius: "35.36" },
		]);
});
