/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Bubble radius when size is greater then 50 ", () => {
	loadPage("Main Project/Charts/size_bubblechart");

	findWidget("procedur1").click();

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Sauteed Spinach)", radius: "158.11" },
			{ label: "(Broccoli Salad)", radius: "150" },
			{ label: "(Beef Stroganoff)", radius: "141.42" },
			{ label: "(Fattoush Salad)", radius: "132.29" },
			{ label: "(Read Beans)", radius: "122.47" },
			{ label: "(Chicken Taco)", radius: "111.8" },
			{ label: "(Ribbon Pasta)", radius: "100" },
			{ label: "(Lemon Rice)", radius: "86.6" },
			{ label: "(Sweet Potatoes)", radius: "70.71" },
			{ label: "(Grilled Salmon)", radius: "50" },
		]);

	findWidget("MaxReferenceValue").setValue("15");

	findWidget("bubble")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Sauteed Spinach)", radius: "129.1" },
			{ label: "(Broccoli Salad)", radius: "122.47" },
			{ label: "(Beef Stroganoff)", radius: "115.47" },
			{ label: "(Fattoush Salad)", radius: "108.01" },
			{ label: "(Read Beans)", radius: "100" },
			{ label: "(Chicken Taco)", radius: "91.29" },
			{ label: "(Ribbon Pasta)", radius: "81.65" },
			{ label: "(Lemon Rice)", radius: "70.71" },
			{ label: "(Sweet Potatoes)", radius: "57.74" },
			{ label: "(Grilled Salmon)", radius: "40.82" },
		]);
});
