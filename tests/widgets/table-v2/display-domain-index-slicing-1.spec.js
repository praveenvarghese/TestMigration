/*!
 * @AIMMS_FILE=models/DispDomIndexSlice/DispDomIndexSlice.aimms
 * @DURATION=medium
 */

scenario(
	"Validate display domain index slicing is applied to the correspoding identifier in Table V2",
	() => {
		loadPage("Main Project/Page_1");

		findWidget("ddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.20 kEuro/ton");

		findWidget("ddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.20 kEuro/ton");

		findWidget("ddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.10 kEuro/ton");

		findWidget("ddUCs2_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs2_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.10 kEuro/ton");

		findWidget("SelACountry").select("Denmark");

		findWidget("ddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUCs_1").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWddUCs_1")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");

		loadPage("Main Project/Page_1");

		findWidget("SelAFactory").select("Zurich");

		findWidget("ddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("6.20 kEuro/ton");

		findWidget("ddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("6.20 kEuro/ton");

		loadPage("Main Project/Page_1");

		findWidget("SelACenter").select("Frankfurt");

		findWidget("ddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("3.60 kEuro/ton");

		findWidget("ddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("3.60 kEuro/ton");

		findWidget("ddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("9.00 kEuro/ton");

		findWidget("ddUCs2_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs2_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("9.00 kEuro/ton");

		findWidget("SelACenter").select("Liege");

		findWidget("ddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUCs").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWddUCs")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");

		findWidget("ddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUCs_1").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWddUCs_1")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");

		findWidget("ddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("ddUCs2_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUCs2_1").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWddUCs2_1")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");

		findWidget("SelACenter").select("Vienna");

		findWidget("ddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUCs2").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWddUCs2")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");

		loadPage("Main Project/Page_1");

		findWidget("SelAFactory").select("London");

		findWidget("SelACenter").select("Liege");

		findWidget("ddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("ddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("ddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWddUCs2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("ddUCs2_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUCs2_1").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWddUCs2_1")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");
	}
);
