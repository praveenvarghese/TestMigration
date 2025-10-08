/*!
 * @AIMMS_FILE=models/DispDomIndexSlice/DispDomIndexSlice.aimms
 */

scenario(
	"Validate display domain index slicing is applied to the correspoding identifier in Table V2",
	() => {
		loadPage("Main Project/Page_20");

		findWidget("DDUC")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUC")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("0.00");

		findWidget("DDUC")
			.getCell(1, 1)
			.getValue()
			.should.be.equal("1.00");

		findWidget("DDUC")
			.getCell(1, 2)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UCwDDUC")
			.getCell(0, 0)
			.getValue()
			.should.be.equal("21.00");

		findWidget("UCwDDUC")
			.getCell(0, 1)
			.getValue()
			.should.be.equal("");

		findWidget("UCwDDUC")
			.getCell(1, 1)
			.getValue()
			.should.be.equal("32.00");

		findWidget("UCwDDUC")
			.getCell(1, 2)
			.getValue()
			.should.be.equal("");

		findWidget("ddUCfc")
			.getCell(0, 4)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCfc")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("0.00");

		findWidget("ddUCfc")
			.getCell(1, 5)
			.getValue()
			.should.be.equal("1.00");

		findWidget("ddUCfc")
			.getCell(1, 6)
			.getValue()
			.should.be.equal("0.00");

		findWidget("UnitCostWddUC")
			.getCell(0, 4)
			.getValue()
			.should.be.equal("3.60 kEuro/ton");

		findWidget("UnitCostWddUC")
			.getCell(0, 5)
			.getValue()
			.should.be.equal("");

		findWidget("UnitCostWddUC")
			.getCell(1, 5)
			.getValue()
			.should.be.equal("5.80 kEuro/ton");

		findWidget("UnitCostWddUC")
			.getCell(1, 6)
			.getValue()
			.should.be.equal("");
	}
);
