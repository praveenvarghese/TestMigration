/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Test asserting interaction on the table and value set through store focus", () => {
	// We start from Home page.
	loadPage("Main Project/home");

	findWidget("PlaneSelectionBox").selectAll();

	// Navigate to "Main Project/Switch Page" page
	openAppManager().navigateToPage("Main Project/Switch Page");

	// Interactions on the Islands table
	findWidget("Islands")
		.getCell(0, 6)
		.setValue("Isla de La Palma");
	findWidget("Islands")
		.getCell(3, 6)
		.setValue("Isla de Tenerife");
	findWidget("Islands")
		.getCell(6, 3)
		.setValue("Isla Del Hierro");

	// Asserting 'BiggestSelectedFrom' and 'BiggestSelectedTo' value set through store focus
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedFrom")
		.should.be.equal("Isla Del Hierro");
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedTo")
		.should.be.equal("Isla de Lanzarote");

	// Moving across Islands table using keyboard arrows
	findWidget("Islands").pressKeys([
		SPECIAL_KEYS.arrow_up,
		SPECIAL_KEYS.arrow_up,
		SPECIAL_KEYS.arrow_up,
		SPECIAL_KEYS.arrow_up,
	]);
	// Selecting "Isla de La Palma" value through keyboard movement
	findWidget("Islands").openDropdown();
	findWidget("Islands").pressKeys([SPECIAL_KEYS.arrow_down, SPECIAL_KEYS.enter]);
	//findWidget("Islands").pressKeys([SPECIAL_KEYS.arrow_up]); -> not needed anymore since the new behaviour of the dropdown. After selecting
	//                                                  from it, it automatically remains on the same cell, whereas previously
	//                                                  it went one cell down.

	// Asserting "Isla de La Palma" value is set
	findWidget("Islands")
		.getCell(2, 3)
		.getValue()
		.should.be.equal("Isla de La Gomera");

	// Asserting 'BiggestSelectedFrom' and 'BiggestSelectedTo' value set through store focus
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedFrom")
		.should.be.equal("Isla de Gran Canaria");
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedTo")
		.should.be.equal("Isla de Lanzarote");

	// Moving across Islands table using keyboard arrows
	findWidget("Islands").pressKeys([
		SPECIAL_KEYS.arrow_down,
		SPECIAL_KEYS.arrow_left,
		SPECIAL_KEYS.arrow_left,
	]);
	// Asserting focus is on (3,1) cell
	findWidget("Islands")
		.getFocusedCellPosition()
		.should.be.shallowDeepEqual([3, 1]);

	// Selecting "Isla de Gran Canaria" value through keyboard movement
	findWidget("Islands").openDropdown();
	findWidget("Islands").pressKeys([
		SPECIAL_KEYS.arrow_down,
		SPECIAL_KEYS.arrow_down,
		SPECIAL_KEYS.arrow_down,
		SPECIAL_KEYS.enter,
	]);
	//findWidget("Islands").pressKeys([SPECIAL_KEYS.arrow_up]); -> same reason of removal as described above

	// Asserting "Isla de Gran Canaria" value is set
	findWidget("Islands")
		.getCell(3, 1)
		.getValue()
		.should.be.equal("Isla de Gran Canaria");

	// Asserting 'BiggestSelectedFrom' and 'BiggestSelectedTo' value set through store focus
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedFrom")
		.should.be.equal("Isla de Lanzarote");
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedTo")
		.should.be.equal("Isla de Tenerife");

	// Moving across Islands table using keyboard arrows
	findWidget("Islands").pressKeys([
		SPECIAL_KEYS.arrow_left,
		SPECIAL_KEYS.arrow_up,
		SPECIAL_KEYS.arrow_up,
	]);

	// Asserting 'BiggestSelectedFrom' and 'BiggestSelectedTo' value set through store focus
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedFrom")
		.should.be.equal("Isla de Tenerife");
	findWidget("BiggestFrom")
		.getValue("BiggestSelectedTo")
		.should.be.equal("Isla de La Palma");
});
