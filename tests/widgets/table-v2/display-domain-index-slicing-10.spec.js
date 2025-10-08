/*!
 * @AIMMS_FILE=models/DispDomIndexSlice/DispDomIndexSlice.aimms
 */

scenario(
	"Validate display domain index slicing is applied to the correspoding identifier in Table V2",
	() => {
		loadPage("Main Project/Page_10");

		findWidget("ddUCsec")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("ddUCsec")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("ddUCsec")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCsec")
			.getCell(0, 4)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCsec")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC0")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("UnitCostWsddUC0")
			.getNumColsInGridViewport()
			.should.be.equal(5);

		findWidget("UnitCostWsddUC0")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("3.30 kEuro/ton");

		findWidget("UnitCostWsddUC0")
			.getCell(1, 2)
			.getValue()
			.should.be.equal("13.90 kEuro/ton");

		findWidget("UnitCostWsddUC0")
			.getCell(2, 4)
			.getValue()
			.should.be.equal("2.80 kEuro/ton");

		findWidget("DDUCsfe")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("DDUCsfe")
			.getNumColsInGridViewport()
			.should.be.equal(1);

		findWidget("DDUCsfe")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUCsfe")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUCsfe")
			.getCell(2, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC")
			.getNumRowsInGridViewport()
			.should.be.equal(3);

		findWidget("UnitCostWsddUC")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("4.50 kEuro/ton");

		findWidget("UnitCostWsddUC")
			.getCell(1, 3)
			.getValue()
			.should.be.equal("5.40 kEuro/ton");

		findWidget("UnitCostWsddUC")
			.getCell(2, 5)
			.getValue()
			.should.be.equal("4.40 kEuro/ton");

		findWidget("SelectAFactory").select("London");

		findWidget("ddUCsec")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC0")
			.getNumColsInGridViewport()
			.should.be.equal(6);

		findWidget("UnitCostWsddUC0")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("5.30 kEuro/ton");

		findWidget("UnitCostWsddUC0")
			.getCell(2, 5)
			.getValue()
			.should.be.equal("4.40 kEuro/ton");

		findWidget("SelectAFactory").select("Zurich");

		findWidget("ddUCsec")
			.getCell(0, 9)
			.getValue()
			.should.be.equal("1.00");

		findWidget("UnitCostWsddUC0")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC0")
			.getCell(0, 6)
			.getValue()
			.should.be.equal("11.20 kEuro/ton");

		findWidget("UnitCostWsddUC0")
			.getCell(2, 9)
			.getValue()
			.should.be.equal("7.90 kEuro/ton");

		findWidget("SelectAFactory").select("Hamburg");

		findWidget("SelectACenter").select("Liege");

		findWidget("DDUCsfe")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC")
			.getNumRowsInGridViewport()
			.should.be.equal(2);

		findWidget("UnitCostWsddUC")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("13.90 kEuro/ton");

		findWidget("UnitCostWsddUC")
			.getCell(1, 3)
			.getValue()
			.should.be.equal("14.50 kEuro/ton");

		findWidget("SelectACenter").select("Vienna");

		findWidget("DDUCsfe")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("DDUCsfe")
			.getCell(1, 0)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWsddUC")
			.getNumRowsInGridViewport()
			.should.be.equal(1);

		findWidget("UnitCostWsddUC")
			.getNumColsInGridViewport()
			.should.be.equal(10);

		findWidget("UnitCostWsddUC")
			.getCell(0, 2)
			.getValue()
			.should.be.equal("6.40 kEuro/ton");
	}
);
