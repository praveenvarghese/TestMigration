/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario("Check the positioning of widgets after setting the 'maxcolumns' page settings.", () => {
	loadPage("Main Project/home");

	// On home page, assert the behaviour and positioning of widgets with default 'maxcolumns' page settings.
	findWidget("DailyPassengers")
		.getNumColsInGridViewport()
		.should.be.equal(7);

	// Verify the page has 14 columns page layout
	findWidget("home_1").hasPageColumns(14).should.be.true;

	// Verify "Plane Data" and "PlaneImage" widget is visible within the viewport
	findWidget("Plane Data").isDisplayedInViewport().should.be.true;
	findWidget("PlaneImage").isDisplayedInViewport().should.be.true;

	// Update the maxcolumns setting of the page
	findWidget("home_1")
		.openMiscellaneousOptionEditor()
		.getMiscOption("maxcolumns")
		.setValue({
			value: "2",
		});

	// Verify the page has 2 columns page layout
	findWidget("home_1").hasPageColumns(2).should.be.true;

	// Verify "DailyPassengers" widget is NOT visible within the viewport
	findWidget("DailyPassengers").isDisplayedInViewport().should.be.false;

	//Set the 'maxcolumns' page settings to an identifier that has value 9.
	//Assert the behaviour and positioning of widgets with 'maxcolumns' page settings of 9.
	findWidget("home_1")
		.openMiscellaneousOptionEditor()
		.getMiscOption("maxcolumns")
		.setValue({
			value: "PageMaxColumnsOf9",
			valueType: "identifier",
		});

	// Verify the page has 9 columns page layout
	findWidget("home_1").hasPageColumns(9).should.be.true;

	// Verify "DailyPassengers" widget is now visible within the viewport
	findWidget("DailyPassengers")
		.getNumColsInGridViewport()
		.should.be.equal(7);
	findWidget("DailyPassengers").isDisplayedInViewport().should.be.true;
});
