/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario(
	"Check tooltips is displayed for table headers which has nested headers and validate tooltips when pivoted",
	() => {
		loadPage("Main Project/newFilterPage?table-v2=true");

		findWidget("filterDateTime")
			.getRowHeaderCell(1, 1)
			.getParentTooltip()
			.should.be.equal(
				"Custom HTML tooltip here <br><br><br> <!DOCTYPE html> <html><body><canvas id='myCanvas' width='200' height='100' style='border:1px solid #d3d3d3;'> Your browser does not support the HTML5 canvas tag.</canvas> <script>var c = document.getElementById('myCanvas');var ctx = c.getContext('2d');ctx.moveTo(0,0);ctx.lineTo(200,100);ctx.strokeStyle='white';ctx.stroke();var ctx1 = c.getContext('2d');ctx1.moveTo(200,0);ctx1.lineTo(0,100);ctx1.strokeStyle='green';ctx1.stroke();  </script>  </body> </html>  <br><br> Thanks Praveen."
			);

		findWidget("filterDateTime")
			.dragIndex("p")
			.dropIn("columns");

		findWidget("filterDateTime")
			.dragIndex("c")
			.dropIn("rows");

		findWidget("filterDateTime")
			.getColHeaderCell(0, 2)
			.getParentTooltip()
			.should.be.equal(
				"Custom HTML tooltip here <br><br><br> <!DOCTYPE html> <html><body><canvas id='myCanvas' width='200' height='100' style='border:1px solid #d3d3d3;'> Your browser does not support the HTML5 canvas tag.</canvas> <script>var c = document.getElementById('myCanvas');var ctx = c.getContext('2d');ctx.moveTo(0,0);ctx.lineTo(200,100);ctx.strokeStyle='white';ctx.stroke();var ctx1 = c.getContext('2d');ctx1.moveTo(200,0);ctx1.lineTo(0,100);ctx1.strokeStyle='green';ctx1.stroke();  </script>  </body> </html>  <br><br> Thanks Praveen."
			);

		findWidget("filterDateTime")
			.getColHeaderCell(0, 0)
			.getParentTooltip()
			.should.be.equal("Test");
	}
);
