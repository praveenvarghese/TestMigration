/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Bubble chart bubble radius when it has negative values", () => {
	loadPage("Main Project/Charts/Bubblechart");

	findWidget("Bubblechart")
		.findBubbles()
		.should.have.numberOfItems(10);

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

	findWidget("sizeTable")
		.getCell(0, 0)
		.setValue("-20");

	findWidget("Bubblechart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("Bubblechart")
		.getBubblesRadius()
		.should.beEqualTo([
			{ label: "(Beef Stroganoff)", radius: "31.62" },
			{ label: "(Grilled Salmon)", radius: "31.62" },
			{ label: "(Chicken Taco)", radius: "22.36" },
			{ label: "(Fattoush Salad)", radius: "14.14" },
			{ label: "(Broccoli Salad)", radius: "12.25" },
			{ label: "(Sauteed Spinach)", radius: "12.25" },
			{ label: "(Sweet Potatoes)", radius: "10" },
			{ label: "(Lemon Rice)", radius: "10" },
			{ label: "(Read Beans)", radius: "10" },
			{ label: "(Ribbon Pasta)", radius: "7.07" },
		]);
});
