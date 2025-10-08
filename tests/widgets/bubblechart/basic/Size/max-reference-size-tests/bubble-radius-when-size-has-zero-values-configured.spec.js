/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Bubble radius when size is having both negative and possitive values ", () => {
	loadPage("Main Project/Charts/size_bubblechart");

	findWidget("procrdure3").click();

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Sauteed Spinach)", radius: "79.06" },
			{ label: "(Grilled Salmon)", radius: "70.71" },
			{ label: "(Chicken Taco)", radius: "61.24" },
			{ label: "(Fattoush Salad)", radius: "61.24" },
			{ label: "(Beef Stroganoff)", radius: "50" },
			{ label: "(Read Beans)", radius: "50" },
			{ label: "(Sweet Potatoes)", radius: "35.36" },
			{ label: "(Ribbon Pasta)", radius: "35.36" },
			{ label: "(Lemon Rice)", radius: null },
			{ label: "(Broccoli Salad)", radius: null },
		]);

	findWidget("MaxReferenceValue").setValue("15");

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Sauteed Spinach)", radius: "64.55" },
			{ label: "(Grilled Salmon)", radius: "57.74" },
			{ label: "(Chicken Taco)", radius: "50" },
			{ label: "(Fattoush Salad)", radius: "50" },
			{ label: "(Beef Stroganoff)", radius: "40.82" },
			{ label: "(Read Beans)", radius: "40.82" },
			{ label: "(Sweet Potatoes)", radius: "28.87" },
			{ label: "(Ribbon Pasta)", radius: "28.87" },
			{ label: "(Lemon Rice)", radius: null },
			{ label: "(Broccoli Salad)", radius: null },
		]);
});
