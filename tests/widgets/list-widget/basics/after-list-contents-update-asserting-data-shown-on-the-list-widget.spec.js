/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario("Post list widget data update, asserting data shown on a list widget.", () => {
	loadPage("Main Project/Second Page");

	closeAppManager();

	// Through procedure update list contents.
	findWidget("Fetch latest Planes Info").click();

	// Assert list details
	findWidget("List Widget").getEmptyWidgetMessage().should.not.exist;
	findWidget("List Widget")
		.getListGroupsCount()
		.should.be.equal(5);
	findWidget("List Widget")
		.getVisibleListGroupsCount()
		.should.be.equal(2);

	findWidget("List Widget")
		.getListGroup(0)
		.getHeaderText()
		.should.contain("Boeing 747");
	findWidget("List Widget")
		.getListGroup(0)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Boeing 747 airplane details");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItemsCount()
		.should.be.equal(3);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Total Flight hours: 1660 hrs.");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane3").should.be.true;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getExternalLink().should.exist;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Total flight hours of Boeing 747");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getDisplayText()
		.should.be.equal("Maintenance report - 0 major & 4 minor observations.");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-stats-bars").should.be.true;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorTangerineYellow.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.isAnActiveItem().should.be.true;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getExternalLink().should.exist;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getItem()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Latest Maintenance report.");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveAccentBlue100.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.getDisplayText()
		.should.be.equal("Last maintenance report with 26 observations.");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.hasSpecifiedIcon("aimms-bubble-paperclip").should.be.true;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.getIconColour()
		.should.contain(colors.colorDarkBlue.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.getExternalLink().should.exist;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.getItem()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(2)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);

	findWidget("List Widget")
		.getListGroup(1)
		.getHeaderText()
		.should.contain("ATR-72");
	findWidget("List Widget")
		.getListGroup(1)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("ATR 50 airplane details");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItemsCount()
		.should.be.equal(3);
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Total Flight hours: 940 hrs.");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.isAnActiveItem().should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Total flight hours of Fokker F-50");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getDisplayText()
		.should.be.equal("Maintenance report - No observations.");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-stats-bars").should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.isAnActiveItem().should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getExternalLink().should.exist;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getItem()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Latest Maintenance report.");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.getDisplayText()
		.should.be.equal("Last maintenance report with 13 observations.");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.hasSpecifiedIcon("aimms-bubble-paperclip").should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.getIconColour()
		.should.contain(colors.colorDarkBlue.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.getExternalLink().should.exist;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.getItem()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(2)
		.getCSSStyleProperty("color")
		.should.contain(colors.colorPrimitiveGrey80.rgbWithWhitespace);

	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.getItem()
		.scrollIntoView(true);

	findWidget("List Widget")
		.getListGroup(2)
		.getHeaderText()
		.should.contain("Boeing 757 & 737");
	findWidget("List Widget")
		.getListGroup(2)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Boeing 757 & 737 airplane details");
	findWidget("List Widget")
		.getListGroup(2)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Airplanes under decommission.");
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-thumbs-down").should.be.true;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getExternalLink().should.exist;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Boeing 757 & 737 are planned to be decommissioned soon.");

	findWidget("List Widget")
		.getListGroup(3)
		.getHeaderText()
		.should.contain("Fokker F-100");
	findWidget("List Widget")
		.getListGroup(3)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Fokker F-100 airplane details");
	findWidget("List Widget")
		.getListGroup(3)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Airplanes under decommission.");
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-thumbs-down").should.be.true;
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;

	findWidget("List Widget")
		.getListGroup(4)
		.getHeader().should.not.exist;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItemsCount()
		.should.be.equal(2);
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("No updates on Fokker F-50");
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-unlink3").should.be.true;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.getDisplayText()
		.should.be.equal("No updates on Casa CN-235");
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-unlink3").should.be.true;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgbWithWhitespace);
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.getExternalLink().should.not.exist;
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.getItem()
		.scrollIntoView(true);
	findWidget("List Widget")
		.getListGroup(4)
		.getListItem(1)
		.getItem()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;
});
