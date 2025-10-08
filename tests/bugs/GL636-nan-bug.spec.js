/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"GL636 The X-axis labels of a Bubble Chart suddenly displayed 'NaN' instead of numbers > 1000",
	() => {
		loadPage("Main Project/Charts");

		// Check the Bubble Chart X and Y axis annotations
		findWidget("Bubblechart")
			.getXAxisElements()
			.should.have.numberOfItems.equal(7);

		findWidget("Bubblechart")
			.getXAxisElements()
			.should.eql(["0", "200", "400", "600", "800", "1k", "1.2k"]);

		findWidget("Bubblechart")
			.getYAxisElements()
			.should.have.numberOfItems.equal(8);

		findWidget("Bubblechart")
			.getYAxisElements()
			.should.eql(["0", "10", "20", "30", "40", "50", "60", "70"]);

		// As the Bar Chart also shows Axis annotations, check these too
		findWidget("Barchart")
			.getXAxisElements()
			.should.have.numberOfItems.equal(7);

		findWidget("Barchart")
			.getXAxisElements()
			.should.eql([
				"Isla de La Palma",
				"Isla de Tenerife",
				"Isla de Gran Canaria",
				"Isla de Lanzarote",
				"Isla de Fuerteventura",
				"Isla de La Gomera",
				"Isla Del Hierro",
			]);

		findWidget("Barchart")
			.getYAxisElements()
			.should.have.numberOfItems.equal(12);

		findWidget("Barchart")
			.getYAxisElements()
			.should.eql([
				"0",
				"10,000",
				"20,000",
				"30,000",
				"40,000",
				"50,000",
				"60,000",
				"70,000",
				"80,000",
				"90,000",
				"100,000",
				"110,000",
			]);

		// And do the same for the Line Chart too
		findWidget("Linechart")
			.getXAxisElements()
			.should.have.numberOfItems.equal(7);

		findWidget("Linechart")
			.getXAxisElements()
			.should.eql([
				"Isla de La Palma",
				"Isla de Tenerife",
				"Isla de Gran Canaria",
				"Isla de Lanzarote",
				"Isla de Fuerteventura",
				"Isla de La Gomera",
				"Isla Del Hierro",
			]);

		findWidget("Linechart")
			.getYAxisElements()
			.should.have.numberOfItems.equal(12);

		findWidget("Linechart")
			.getYAxisElements()
			.should.eql([
				"0",
				"10,000",
				"20,000",
				"30,000",
				"40,000",
				"50,000",
				"60,000",
				"70,000",
				"80,000",
				"90,000",
				"100,000",
				"110,000",
			]);
	}
);
