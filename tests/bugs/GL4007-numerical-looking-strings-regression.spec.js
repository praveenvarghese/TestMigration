/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario(
	"Strings looking numerical (like '1234' were formatted as if they were actually a number, leading to regression bug #4007",
	() => {
		loadPage("Main Project/home/FormattingTest");

		// Double-click on several values and assert that they are as expected. In the buggy AIMMS-version (4.79.3.10), thousand separators were suddenly introduced in some of these values.
		findWidget("NumScalar").doubleClickCell("NormalString");
		findWidget("NumScalar")
			.getValue("NormalString")
			.should.be.equal("Normal string");

		findWidget("NumScalar").doubleClickCell("NumericalString3");
		findWidget("NumScalar")
			.getValue("NumericalString3")
			.should.be.equal("12345");

		findWidget("NumScalar").doubleClickCell("NumericalString1");
		findWidget("NumScalar")
			.getValue("NumericalString1")
			.should.be.equal("1");

		findWidget("NumScalar").doubleClickCell("NumericalString2");
		findWidget("NumScalar")
			.getValue("NumericalString2")
			.should.be.equal("100e7");

		findWidget("NumScalar").doubleClickCell("NumericalString3");
		findWidget("NumScalar")
			.getValue("NumericalString3")
			.should.be.equal("12345");

		// Change some values the normal way (without a doubleclick), such that some of the the strings will be "numerical"
		findWidget("NumScalar").setValue("NormalString", "Still normal");
		findWidget("NumScalar")
			.getValue("NormalString")
			.should.be.equal("Still normal");

		findWidget("NumScalar").setValue("NumericalString1", "1000");
		findWidget("NumScalar")
			.getValue("NumericalString1")
			.should.be.equal("1000");

		findWidget("NumScalar").setValue("NumericalString2", "100e7");
		findWidget("NumScalar")
			.getValue("NumericalString2")
			.should.be.equal("100e7");

		findWidget("NumScalar").setValue("NumericalString3", "123456");
		findWidget("NumScalar")
			.getValue("NumericalString3")
			.should.be.equal("123456");

		findWidget("ResetValues").click();

		// Perform a similar scenario for the Table widget
		findWidget("NumTable")
			.doubleClickCell(0, 0)
			.getValue()
			.should.eql("Normal string again");

		findWidget("NumTable")
			.doubleClickCell(0, 1)
			.getValue()
			.should.eql("1");

		findWidget("NumTable")
			.doubleClickCell(0, 2)
			.getValue()
			.should.eql("100e5");

		findWidget("NumTable")
			.doubleClickCell(0, 3)
			.getValue()
			.should.eql("12345");

		// Verify the number formatting in a tooltip on the treemap and the piechart. First with the default number of decimals of 2.
		findWidget("NumTree").findRectangleWithTooltip("1984");
		let tooltip = findWidget("NumTree").getTooltip();
		tooltip.should.eql("(Chapters, 1984) : 24.00 (7%)");

		findWidget("NumPie").findWedgeWithTooltip("Wuthering Heights");
		tooltip = findWidget("NumPie").getTooltip();
		tooltip.should.eql("(Chapters,Wuthering Heights) : 32.00 (9%)");

		// Change the number of decimals to 5 and verify the effect.
		findWidget("DecimalPointsScalar").setValue("5.00");

		findWidget("NumTree").findRectangleWithTooltip("1984");
		tooltip = findWidget("NumTree").getTooltip();
		tooltip.should.eql("(Chapters, 1984) : 24.00000 (7%)");

		findWidget("NumPie").findWedgeWithTooltip("Wuthering Heights");
		tooltip = findWidget("NumPie").getTooltip();
		tooltip.should.eql("(Chapters,Wuthering Heights) : 32.00000 (9%)");
	}
);
