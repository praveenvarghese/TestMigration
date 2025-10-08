/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario("Creating a new List widget, adding in contents and asserting the data shown.", () => {
	loadPage("Main Project/Planes Info");

	createWidget("list", [], "MyListWidget");
	openWidgetManager().setWidgetSize("MyListWidget", { width: 3, height: 2 });

	closeWidgetManager();

	findWidget("MyListWidget").mouseHover();
	findWidget("MyListWidget").getEmptyWidgetMessage().should.exist;

	// Set "LW_GroupsData" identifier to "List Groups" option entry.
	// Set "LW_Planes_InsuranceData" identifier to "List Group Items" option entry.

	findWidget("MyListWidget")
		.openListSettingsOptionEditor()
		.setOptions([
			{
				name: "List Groups",
				value: "LW_GroupsData",
				valueType: "IDENTIFIER",
				sliceInfo: null,
			},
			{
				name: "List Group Items",
				value: "LW_GroupItemsData",
				valueType: "IDENTIFIER",
				sliceInfo: null,
			},
		]);
	findWidget("MyListWidget").closeOptionDialog();

	findWidget("MyListWidget").getEmptyWidgetMessage().should.not.exist;
	findWidget("MyListWidget")
		.getListGroupsCount()
		.should.be.equal(7);
	findWidget("MyListWidget")
		.getVisibleListGroupsCount()
		.should.be.equal(3);

	findWidget("MyListWidget")
		.getListGroup(0)
		.getHeaderText()
		.should.contain("Boeing 747");
	findWidget("MyListWidget")
		.getListGroup(0)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Boeing 747 airplane");
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItemsCount()
		.should.be.equal(2);
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Total Flight hours: 1380 hrs.");
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgb); //"rgb(0, 128, 0)"
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Total flight hours of Boeing 747");
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(1)
		.getDisplayText()
		.should.be.equal("Maintenance report");
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-stars").should.be.true;
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb);
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(1)
		.isAnActiveItem().should.be.true;
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(1)
		.getExternalLink().should.exist;
	findWidget("MyListWidget")
		.getListGroup(0)
		.getListItem(1)
		.getItem()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Last Maintenance report.");

	findWidget("MyListWidget")
		.getListGroup(1)
		.getHeaderText()
		.should.contain("ATR-72");
	findWidget("MyListWidget")
		.getListGroup(1)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("ATR 50 airplane");
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItemsCount()
		.should.be.equal(2);
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Total Flight hours: 940 hrs.");
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane3").should.be.true;
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgb);
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(0)
		.isAnActiveItem().should.be.true;
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Total flight hours of Fokker F-50");
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(1)
		.getDisplayText()
		.should.be.equal("Maintenance report");
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(1)
		.hasSpecifiedIcon("aimms-stars").should.be.true;
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(1)
		.getIconColour()
		.should.contain(colors.colorTangerineYellow.rgb); //rgb(255, 204, 0)
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(1)
		.isAnActiveItem().should.be.true;
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(1)
		.getExternalLink().should.exist;
	findWidget("MyListWidget")
		.getListGroup(1)
		.getListItem(1)
		.getItem()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Last Maintenance report.");

	findWidget("MyListWidget")
		.getListGroup(2)
		.getHeaderText()
		.should.contain("Fokker F-50");
	findWidget("MyListWidget")
		.getListGroup(2)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget").getTooltip().should.not.exist;
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("No updates!");
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-unlink3").should.be.true;
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb);
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("MyListWidget")
		.getListGroup(2)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("MyListWidget").getTooltip().should.not.exist;

	findWidget("MyListWidget")
		.getListGroup(6)
		.getHeader()
		.scrollIntoView(true);

	findWidget("MyListWidget")
		.getListGroup(3)
		.getHeaderText()
		.should.contain("Casa CN-235");
	findWidget("MyListWidget")
		.getListGroup(3)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Casa CN-235 airplane");
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("No updates!");
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-unlink3").should.be.true;
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb); //"rgb(255, 0, 0)"
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("MyListWidget")
		.getListGroup(3)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("MyListWidget").getTooltip().should.not.exist;

	findWidget("MyListWidget")
		.getListGroup(4)
		.getHeaderText()
		.should.contain("Boeing 757");
	findWidget("MyListWidget")
		.getListGroup(4)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Boeing 757 airplane");
	findWidget("MyListWidget")
		.getListGroup(4)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("MyListWidget")
		.getListGroup(5)
		.getHeaderText()
		.should.contain("Boeing 737");
	findWidget("MyListWidget")
		.getListGroup(5)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget").getTooltip().should.not.exist;
	findWidget("MyListWidget")
		.getListGroup(5)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("MyListWidget")
		.getListGroup(6)
		.getHeaderText()
		.should.contain("Fokker F-100");
	findWidget("MyListWidget")
		.getListGroup(6)
		.getHeader()
		.scrollIntoView(true);
	findWidget("MyListWidget")
		.getListGroup(6)
		.getHeader()
		.moveTo();
	findWidget("MyListWidget")
		.getTooltip()
		.should.be.equal("Fokker F-100 airplane");
	findWidget("MyListWidget")
		.getListGroup(6)
		.getListItemsCount()
		.should.be.equal(0);
});
