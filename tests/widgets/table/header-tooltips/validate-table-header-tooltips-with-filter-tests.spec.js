/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario(
	"Check tooltips is displayed for set in table headers and validate when filters are removed",
	() => {
		loadPage("Main Project/home");

		findWidget("PepperData")
			.getRowHeaderCell(0, 0)
			.mouseHover();

		findWidget("PepperData")
			.getRowHeaderCell(0, 0)
			.getParentTooltip()
			.should.be.equal("Test");

		findWidget("PepperData")
			.getRowHeaderCell(1, 0)
			.mouseHover();

		findWidget("PepperData")
			.getRowHeaderCell(1, 0)
			.getParentTooltip()
			.should.be.equal(
				"Custom HTML tooltip here <br><br><br> <!DOCTYPE html> <html><body><canvas id='myCanvas' width='200' height='100' style='border:1px solid #d3d3d3;'> Your browser does not support the HTML5 canvas tag.</canvas> <script>var c = document.getElementById('myCanvas');var ctx = c.getContext('2d');ctx.moveTo(0,0);ctx.lineTo(200,100);ctx.strokeStyle='white';ctx.stroke();var ctx1 = c.getContext('2d');ctx1.moveTo(200,0);ctx1.lineTo(0,100);ctx1.strokeStyle='green';ctx1.stroke();  </script>  </body> </html>  <br><br> Thanks Praveen."
			);

		findWidget("PepperData")
			.getTableFilterButton()
			.click();

		getFilter().clearAllFilters();

		findWidget("PepperData")
			.getRowHeaderCell(0, 0)
			.mouseHover();

		findWidget("PepperData")
			.getRowHeaderCell(0, 0)
			.getParentTooltip()
			.should.be.equal("Test");

		findWidget("PepperData")
			.getRowHeaderCell(2, 0)
			.mouseHover();

		findWidget("PepperData")
			.getRowHeaderCell(2, 0)
			.getParentTooltip()
			.should.be.equal(
				"Custom HTML tooltip here <br><br><br> <!DOCTYPE html> <html><body><canvas id='myCanvas' width='200' height='100' style='border:1px solid #d3d3d3;'> Your browser does not support the HTML5 canvas tag.</canvas> <script>var c = document.getElementById('myCanvas');var ctx = c.getContext('2d');ctx.moveTo(0,0);ctx.lineTo(200,100);ctx.strokeStyle='white';ctx.stroke();var ctx1 = c.getContext('2d');ctx1.moveTo(200,0);ctx1.lineTo(0,100);ctx1.strokeStyle='green';ctx1.stroke();  </script>  </body> </html>  <br><br> Thanks Praveen."
			);
	}
);
