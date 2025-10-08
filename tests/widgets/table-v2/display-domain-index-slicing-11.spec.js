/*!
 * @AIMMS_FILE=models/DispDomIndexSlice/DispDomIndexSlice.aimms
 */

scenario(
	"Validate display domain index slicing is applied to the correspoding identifier in Table V2",
	() => {
		loadPage("Main Project/Page_11");

		findWidget("ddUCsec_2")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("ddUCsec_2")
			.getNumColsInGridViewport()
			.should.be.equal(6);

		findWidget("ddUCsec_2")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCsec_2")
			.getCell(0, 4)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCsec_2")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC0_2")
			.getNumRowsInGridViewport()
			.should.be.equal(2);

		findWidget("UnitCostWsddUC0_2")
			.getNumColsInGridViewport()
			.should.be.equal(5);

		findWidget("UnitCostWsddUC0_2")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("3.30 kEuro/ton");

		findWidget("UnitCostWsddUC0_2")
			.getCell(1, 2)
			.getValue()
			.should.be.equal("13.90 kEuro/ton");

		findWidget("UnitCostWsddUC0_2")
			.getCell(1, 4)
			.getValue()
			.should.be.equal("9.00 kEuro/ton");

		findWidget("SelectAFactory_1").select("London");

		findWidget("ddUCsec_2")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC0_2")
			.getNumColsInGridViewport()
			.should.be.equal(6);

		findWidget("UnitCostWsddUC0_2")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("5.30 kEuro/ton");

		findWidget("UnitCostWsddUC0_2")
			.getCell(1, 5)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("DDUCsfe_2")
			.getNumRowsInGridViewport()
			.should.be.equal(2);

		findWidget("DDUCsfe_2")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		findWidget("DDUCsfe_2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUCsfe_2")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC_2")
			.getNumRowsInGridViewport()
			.should.be.equal(2);

		findWidget("UnitCostWsddUC_2")
			.getNumColsInGridViewport()
			.should.be.equal(6);

		findWidget("UnitCostWsddUC_2")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("4.50 kEuro/ton");

		findWidget("UnitCostWsddUC_2")
			.getCell(1, 3)
			.getValue()
			.should.be.equal("5.40 kEuro/ton");

		findWidget("UnitCostWsddUC_2")
			.getCell(1, 5)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("SelectACenter_1").select("Liege");

		findWidget("DDUCsfe_2")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC_2")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("UnitCostWsddUC_2")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("13.90 kEuro/ton");

		findWidget("UnitCostWsddUC_2")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");
	}
);
