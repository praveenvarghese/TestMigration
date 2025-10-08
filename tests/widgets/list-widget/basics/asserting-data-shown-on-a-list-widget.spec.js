/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario("Asserting data shown on a list widget.", () => {
	loadPage("Main Project/Second Page");

	closeAppManager();

	findWidget("List Widget").mouseHover();
	findWidget("List Widget")
		.getTitle()
		.should.be.equal("Planes Info");

	findWidget("List Widget").getEmptyWidgetMessage().should.not.exist;
	findWidget("List Widget")
		.getListGroupsCount()
		.should.be.equal(7);
	findWidget("List Widget")
		.getVisibleListGroupsCount()
		.should.be.equal(3);

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
		.should.be.equal("Boeing 747 airplane");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItemsCount()
		.should.be.equal(2);
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Total Flight hours: 1380 hrs.");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgb); //"rgb(0, 128, 0)"
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(0)
		.getExternalLink().should.not.exist;
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
		.getListItem(1)
		.getDisplayText()
		.should.be.equal("Maintenance report");
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-stars").should.be.true;
	findWidget("List Widget")
		.getListGroup(0)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb); //"rgb(255, 0, 0)"
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
		.getItem()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Last Maintenance report.");

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
		.should.be.equal("ATR 50 airplane");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItemsCount()
		.should.be.equal(2);
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Total Flight hours: 940 hrs.");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane3").should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgb);
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
		.should.be.equal("Maintenance report");
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-stars").should.be.true;
	findWidget("List Widget")
		.getListGroup(1)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorTangerineYellow.rgb); //"rgb(255, 204, 0)"
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
		.should.be.equal("Last Maintenance report.");

	findWidget("List Widget")
		.getListGroup(2)
		.getHeaderText()
		.should.contain("Fokker F-50");
	findWidget("List Widget")
		.getListGroup(2)
		.getHeader()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("No updates!");
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-unlink3").should.be.true;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb);
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("List Widget")
		.getListGroup(2)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;

	findWidget("List Widget")
		.getListGroup(6)
		.getHeader()
		.scrollIntoView(true);

	findWidget("List Widget")
		.getListGroup(3)
		.getHeaderText()
		.should.contain("Casa CN-235");
	findWidget("List Widget")
		.getListGroup(3)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Casa CN-235 airplane");
	findWidget("List Widget")
		.getListGroup(3)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("No updates!");
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-unlink3").should.be.true;
	findWidget("List Widget")
		.getListGroup(3)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb);
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
		.getHeaderText()
		.should.contain("Boeing 757");
	findWidget("List Widget")
		.getListGroup(4)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Boeing 757 airplane");
	findWidget("List Widget")
		.getListGroup(4)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List Widget")
		.getListGroup(5)
		.getHeaderText()
		.should.contain("Boeing 737");
	findWidget("List Widget")
		.getListGroup(5)
		.getHeader()
		.moveTo();
	findWidget("List Widget").getTooltip().should.not.exist;
	findWidget("List Widget")
		.getListGroup(5)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List Widget")
		.getListGroup(6)
		.getHeaderText()
		.should.contain("Fokker F-100");
	findWidget("List Widget")
		.getListGroup(6)
		.getHeader()
		.scrollIntoView(true);
	findWidget("List Widget")
		.getListGroup(6)
		.getHeader()
		.moveTo();
	findWidget("List Widget")
		.getTooltip()
		.should.be.equal("Fokker F-100 airplane");
	findWidget("List Widget")
		.getListGroup(6)
		.getListItemsCount()
		.should.be.equal(0);
});
