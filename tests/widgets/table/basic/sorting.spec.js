/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("Table with sorted data", () => {
	loadPage("Main Project/table/render?table-v2=true");

	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(false);

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Beef Stroganoff");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("3.00 $/meal");
	//-----------------------------------

	openWidgetManager().setWidgetSize("RenderTable", { width: 7, height: 4 });

	findWidget("RenderTable").sortRow(0, "increase");
	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(false);

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("3.00 $/meal");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("Beef Stroganoff");
	//-----------------------------------

	findWidget("RenderTable").sortRow(0, "decrease");
	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal("Beef Stroganoff");

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("3.00 $/meal");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal(false);

	//---------------------------------------------------------------------

	findWidget("RenderTable").sortRow(0, "default");
	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(false);

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Beef Stroganoff");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("3.00 $/meal");

	//---------------------------------------------------------------------

	findWidget("RenderTable").sortColumn(2, "increase");
	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(true);

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Chicken Taco");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("2.40 $/meal");

	//---------------------------------------------------------------------

	findWidget("RenderTable").sortColumn(1, "decrease");
	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(true);

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Grilled Salmon");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("4.60 $/meal");

	//---------------------------------------------------------------------

	findWidget("RenderTable").sortColumn(1, "default");
	findWidget("RenderTable")
		.getCell(0, 0)
		.getValue()
		.should.be.equal(false);

	findWidget("RenderTable")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Beef Stroganoff");

	findWidget("RenderTable")
		.getCell(0, 2)
		.getValue()
		.should.be.equal("3.00 $/meal");

	//---------------------------------------------------------------------

	openWidgetManager().setWidgetSize("RenderTableRight", { width: 7, height: 4 });
	findWidget("RenderTableRight").sortColumn(1, "decrease");

	findWidget("RenderTableRight")
		.getCell(0, 1)
		.getValue()
		.should.be.equal("Grilled Salmon");
});
