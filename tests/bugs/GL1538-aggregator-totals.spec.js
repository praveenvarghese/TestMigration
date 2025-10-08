/*!
 * @AIMMS_FILE=models/Bugs/GL1538-TotalAggregators/TotalAggregators.aimms
 */

scenario(
	"GL1538 - Total aggregators feature (sum vs. total sum, count vs. total count, etc.)",
	() => {
		loadPage("Main Project/home");

		// Check that all the totals are as expected upon opening the model
		findWidget("AnimalData")
			.getCell(6, 0)
			.getValue()
			.should.be.equal("14,715.0 g");

		findWidget("AnimalData")
			.getCell(7, 0)
			.getValue()
			.should.be.equal("14,715.0 g");

		findWidget("AnimalData")
			.getCell(8, 0)
			.getValue()
			.should.be.equal("2,452.5 g");

		findWidget("AnimalData")
			.getCell(9, 0)
			.getValue()
			.should.be.equal("2,452.5 g");

		findWidget("AnimalData")
			.getCell(10, 0)
			.getValue()
			.should.be.equal("6.0");

		findWidget("AnimalData")
			.getCell(11, 0)
			.getValue()
			.should.be.equal("6.0");

		findWidget("AnimalData")
			.getCell(12, 0)
			.getValue()
			.should.be.equal("5.0 g");

		findWidget("AnimalData")
			.getCell(13, 0)
			.getValue()
			.should.be.equal("5.0 g");

		findWidget("AnimalData")
			.getCell(14, 0)
			.getValue()
			.should.be.equal("9,000.0 g");

		findWidget("AnimalData")
			.getCell(15, 0)
			.getValue()
			.should.be.equal("9,000.0 g");

		// All as expected. Now make some clever changes in the display domain.
		findWidget("DisplayDomainTable")
			.getCell(1, 0)
			.setValue(false); // The heavy dog

		findWidget("DisplayDomainTable")
			.getCell(3, 0)
			.setValue(false); // The snake with 0 legs

		findWidget("DisplayDomainTable")
			.getCell(4, 0)
			.setValue(false); // The spider with 8 legs and the lowest weight

		// Check the consequences of these changes.
		findWidget("AnimalData")
			.getCell(3, 0)
			.getValue()
			.should.be.equal("4,210.0 g");

		findWidget("AnimalData")
			.getCell(3, 1)
			.getValue()
			.should.be.equal("12.0");

		findWidget("AnimalData")
			.getCell(4, 0)
			.getValue()
			.should.be.equal("14,715.0 g");

		findWidget("AnimalData")
			.getCell(4, 1)
			.getValue()
			.should.be.equal("24.0");

		findWidget("AnimalData")
			.getCell(5, 0)
			.getValue()
			.should.be.equal("1,403.3 g");

		findWidget("AnimalData")
			.getCell(5, 1)
			.getValue()
			.should.be.equal("4.0");

		findWidget("AnimalData")
			.getCell(6, 0)
			.getValue()
			.should.be.equal("2,452.5 g");

		findWidget("AnimalData")
			.getCell(6, 1)
			.getValue()
			.should.be.equal("4.0");

		findWidget("AnimalData")
			.getCell(7, 0)
			.getValue()
			.should.be.equal("3.0");

		findWidget("AnimalData")
			.getCell(7, 1)
			.getValue()
			.should.be.equal("3.0");

		findWidget("AnimalData")
			.getCell(8, 0)
			.getValue()
			.should.be.equal("6.0");

		findWidget("AnimalData")
			.getCell(8, 1)
			.getValue()
			.should.be.equal("6.0");

		findWidget("AnimalData")
			.getCell(9, 0)
			.getValue()
			.should.be.equal("10.0 g");

		findWidget("AnimalData")
			.getCell(9, 1)
			.getValue()
			.should.be.equal("2.0");

		findWidget("AnimalData")
			.getCell(10, 0)
			.getValue()
			.should.be.equal("5.0 g");

		findWidget("AnimalData")
			.getCell(10, 1)
			.getValue()
			.should.be.equal("0.0");

		findWidget("AnimalData")
			.getCell(11, 0)
			.getValue()
			.should.be.equal("4,000.0 g");

		findWidget("AnimalData")
			.getCell(11, 1)
			.getValue()
			.should.be.equal("6.0");

		findWidget("AnimalData")
			.getCell(12, 0)
			.getValue()
			.should.be.equal("9,000.0 g");

		findWidget("AnimalData")
			.getCell(12, 1)
			.getValue()
			.should.be.equal("8.0");
	}
);
