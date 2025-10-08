/*!
 * @AIMMS_FILE=models/GanttTests/GanttTests.aimms
 */

scenario("Assert Timezone Button on footer when idle, on-hover and on-click of it.", () => {
	loadPage("Main Project/TimeZone Tests");

	// Reset data
	findWidget("Reset Data").click();
	// Wait for background operations to complete and Busy message bar to go off
	waitForBackgroundActionToComplete();

	getFooter()
		.getTimezoneButton()
		.isHighlighted().should.be.false;
	getFooter()
		.getTimezoneButton()
		.hasIcon("icon-earth").should.be.true;
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("color")
		.should.be.equal(colors.colorPrimitiveGrey40.rgbWithWhitespace);
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace);

	getFooter()
		.getTimezoneButton()
		.hover();
	getFooter()
		.getTimezoneButton()
		.getTitle()
		.should.be.equal(
			"Selected Application Time Zone: (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
		);
	getFooter()
		.getTimezoneButton()
		.isHighlighted().should.be.false;
	getFooter()
		.getTimezoneButton()
		.hasIcon("icon-earth").should.be.true;
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("color")
		.should.be.equal(colors.colorPrimitiveAccentBlue100.rgbWithWhitespace);
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorPrimitiveGrey10.rgbWithWhitespace);

	//Click on Timezone button in footer
	getFooter()
		.getTimezoneButton()
		.click();
	getFooter()
		.getTimezoneButton()
		.isHighlighted().should.be.true;
	getFooter()
		.getTimezoneButton()
		.hasIcon("icon-earth").should.be.true;
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("color")
		.should.be.equal(colors.colorPrimitiveAccentBlue100.rgbWithWhitespace);

	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorPrimitiveGrey10.rgbWithWhitespace);

	// Select "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" time zone entry.
	findTimezonePanel().selectApplicationTimezone(
		`Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna`
	);
	getFooter()
		.getTimezoneButton()
		.isHighlighted().should.be.true;
	getFooter()
		.getTimezoneButton()
		.hasIcon("icon-earth").should.be.true;
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("color")
		.should.be.equal(colors.colorPrimitiveAccentBlue100.rgbWithWhitespace);
	getFooter()
		.getTimezoneButton()
		.getCSSStyleProperty("background-color")
		.should.be.equal(colors.colorPrimitiveGrey10.rgbWithWhitespace);

	getFooter()
		.getTimezoneButton()
		.hover();
	getFooter()
		.getTimezoneButton()
		.getTitle()
		.should.contain(":00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna");
});
