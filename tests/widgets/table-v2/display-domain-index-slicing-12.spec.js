/*!
 * @AIMMS_FILE=models/DispDomIndexSlice/DispDomIndexSlice.aimms
 */

scenario(
	"Validate display domain index slicing is applied to the correspoding identifier in Table V2",
	() => {
		loadPage("Main Project/Page_12");

		findWidget("ddUCsec_1")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("ddUCsec_1")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("ddUCsec_1")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCsec_1")
			.getCell(0, 4)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCsec_1")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC0_1")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("UnitCostWsddUC0_1")
			.getNumColsInGridViewport()
			.should.be.equal(5);

		findWidget("UnitCostWsddUC0_1")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("3.30 kEuro/ton");

		findWidget("UnitCostWsddUC0_1")
			.getCell(1, 2)
			.getValue()
			.should.be.equal("13.90 kEuro/ton");

		findWidget("UnitCostWsddUC0_1")
			.getCell(2, 4)
			.getValue()
			.should.be.equal("2.80 kEuro/ton");

		findWidget("DDUCsfe_1")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("DDUCsfe_1")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		findWidget("DDUCsfe_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUCsfe_1")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUCsfe_1")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC_1")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("UnitCostWsddUC_1")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC_1")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("4.50 kEuro/ton");

		findWidget("UnitCostWsddUC_1")
			.getCell(1, 3)
			.getValue()
			.should.be.equal("5.40 kEuro/ton");

		findWidget("UnitCostWsddUC_1")
			.getCell(2, 5)
			.getValue()
			.should.be.equal("4.40 kEuro/ton");

		findWidget("SelAFactory_1").select("London");

		findWidget("ddUCsec_1")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC0_1")
			.getNumColsInGridViewport()
			.should.be.equal(6);

		findWidget("UnitCostWsddUC0_1")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("5.30 kEuro/ton");

		findWidget("UnitCostWsddUC0_1")
			.getCell(2, 5)
			.getValue()
			.should.be.equal("4.40 kEuro/ton");

		findWidget("SelAFactory_1").select("Zurich");

		findWidget("ddUCsec_1")
			.getCell(0, 9)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC0_1")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC0_1")
			.getCell(0, 6)
			.getValue()
			.should.be.equal("11.20 kEuro/ton");

		findWidget("UnitCostWsddUC0_1")
			.getCell(2, 9)
			.getValue()
			.should.be.equal("7.90 kEuro/ton");

		findWidget("SelAFactory_1").select("Hamburg");

		findWidget("SelACenter_1").select("Liege");

		findWidget("DDUCsfe_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC_1")
			.getNumRowsInGridViewport()
			.should.be.equal(2);

		findWidget("UnitCostWsddUC_1")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC_1")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("13.90 kEuro/ton");

		findWidget("UnitCostWsddUC_1")
			.getCell(1, 3)
			.getValue()
			.should.be.equal("14.50 kEuro/ton");

		findWidget("SelACenter_1").select("Vienna");

		findWidget("DDUCsfe_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("DDUCsfe_1")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC_1")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("UnitCostWsddUC_1")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC_1")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("6.40 kEuro/ton");

		findWidget("SelACountry_1").select("Denmark");

		findWidget("ddUCsec_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("ddUCsec_1")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("0.00");

		findWidget("ddUCsec_1")
			.getCell(0, 9)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC0_1").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWsddUC0_1")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");

		findWidget("DDUCsfe_1")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("DDUCsfe_1")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("DDUCsfe_1")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC_1").getEmptyWidgetMessage().should.exist;
		findWidget("UnitCostWsddUC_1")
			.getEmptyWidgetMessage()
			.getText()
			.should.be.equal("Empty TableContents contains no data");
	}
);
