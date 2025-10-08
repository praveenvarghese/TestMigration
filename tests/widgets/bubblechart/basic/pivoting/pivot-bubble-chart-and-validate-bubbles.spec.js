/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Pivoting functionality in bubble chart", () => {
	loadPage("Main Project/Charts/bubbleChart_pivot");

	//Validate bubble details before pivot
	findWidget("pivotChart")
		.findBubbles()
		.should.have.numberOfItems(100);

	//Validate bubble details after pivot
	findWidget("pivotChart")
		.dragIndex("mac")
		.dropIn("totals");

	findWidget("pivotChart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("pivotChart")
		.findBubble(["brand-07"])
		.click();

	findWidget("pivotChart")
		.findBubbles()
		.should.include.something.like({
			label: "(brand-07)",
			value: "x: 34.75, y: 192.76, size: 364.52",
		});

	//Validate bubble details after pivot
	findWidget("pivotChart")
		.dragIndex("mac")
		.dropIn("bubbles");

	findWidget("pivotChart")
		.dragIndex("b")
		.dropIn("totals");

	findWidget("pivotChart")
		.findBubbles()
		.should.have.numberOfItems(10);

	findWidget("pivotChart")
		.findBubble(["machine-10"])
		.click();

	findWidget("pivotChart")
		.findBubbles()
		.should.include.something.like({
			label: "(machine-10)",
			value: "x: 16.50, y: 173.34, size: 437.21",
		});
});
