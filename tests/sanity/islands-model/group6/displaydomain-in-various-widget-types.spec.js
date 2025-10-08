/*!
 * @AIMMS_FILE=models/Vliegtuigjes/Vliegtuigjes.aimms
 */

scenario("Verify the display domain behaviour in various widget types.", () => {
	loadPage("Main Project/Book Corner");

	// Verify bar chart state before applying the display domain
	findWidget("Book Bars")
		.getNumberOfBars()
		.should.be.equal(9);

	findWidget("Book Bars")
		.getXAxisElements()
		.should.eql([
			"1984",
			"Wuthering Heights",
			"Jane Eyre",
			"Lord of the Flies",
			"Pride and Prejudice",
			"Agnes Grey",
			"The Time Machine",
			"The Tenant of Wildfell Hall",
			"Middlemarch",
		]);

	// Apply the display domain
	findWidget("Book Bars").setDisplayDomain({
		AantalHoofdstukken: "BookDomain",
	});

	// And check the expected result
	findWidget("Book Bars")
		.getNumberOfBars()
		.should.be.equal(5);

	findWidget("Book Bars")
		.getXAxisElements()
		.should.eql([
			"Jane Eyre",
			"Lord of the Flies",
			"Pride and Prejudice",
			"Agnes Grey",
			"The Tenant of Wildfell Hall",
		]);

	// Verify the Pie chart
	loadPage("Main Project/Test Page/Custom Grid Page");

	findWidget("PC AantalHoofdstukken")
		.findWedges()
		.should.have.numberOfItems(10);

	findWidget("PC AantalHoofdstukken").setDisplayDomain({
		AantalHoofdstukken: "BookDomain",
	});

	findWidget("PC AantalHoofdstukken")
		.findWedges()
		.should.have.numberOfItems(6);

	loadPage("Main Project/Test Page/DisplayDomainPage");

	findWidget("BookBubble")
		.getBubblesCount()
		.should.eql(9);

	findWidget("BookBubble").setDisplayDomain({
		AantalHoofdstukken: "BookDomain",
	});

	findWidget("BookBubble")
		.getBubblesCount()
		.should.eql(5);

	findWidget("BookLines")
		.getXAxisElements()
		.should.eql([
			"1984",
			"Wuthering Heights",
			"Jane Eyre",
			"Lord of the Flies",
			"Pride and Prejudice",
			"Agnes Grey",
			"The Time Machine",
			"The Tenant of Wildfell Hall",
			"Middlemarch",
		]);

	findWidget("BookLines").setDisplayDomain({
		AantalHoofdstukken: "BookDomain",
	});

	findWidget("BookLines")
		.getXAxisElements()
		.should.eql([
			"Jane Eyre",
			"Lord of the Flies",
			"Pride and Prejudice",
			"Agnes Grey",
			"The Tenant of Wildfell Hall",
		]);

	findWidget("BookBarLine")
		.getXAxisElements()
		.should.eql([
			"1984",
			"Wuthering Heights",
			"Jane Eyre",
			"Lord of the Flies",
			"Pride and Prejudice",
			"Agnes Grey",
			"The Time Machine",
			"The Tenant of Wildfell Hall",
			"Middlemarch",
		]);

	findWidget("BookBarLine").setDisplayDomain({
		AantalHoofdstukken: "BookDomain",
		AantalWoorden: "BookDomain",
	});

	findWidget("BookBarLine")
		.getXAxisElements()
		.should.eql([
			"Jane Eyre",
			"Lord of the Flies",
			"Pride and Prejudice",
			"Agnes Grey",
			"The Tenant of Wildfell Hall",
		]);
});
