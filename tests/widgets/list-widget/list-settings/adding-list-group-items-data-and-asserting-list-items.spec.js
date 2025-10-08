/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario("Adding List-Group-Items data to a list widget and asserting the list items.", () => {
	loadPage("Main Project/Planes Info");

	closeAppManager();

	findWidget("Planes Insurance Info").getEmptyWidgetMessage().should.exist;

	// Set "LW_Planes_InsuranceData" identifier to "List Group Items" option entry.
	findWidget("Planes Insurance Info")
		.openListSettingsOptionEditor()
		.setOptions([
			{
				name: "List Group Items",
				value: "LW_Planes_InsuranceData",
				valueType: "IDENTIFIER",
				sliceInfo: null,
			},
		]);

	findWidget("Planes Insurance Info").getEmptyWidgetMessage().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroupsCount()
		.should.be.equal(7);
	findWidget("Planes Insurance Info")
		.getVisibleListGroupsCount()
		.should.be.equal(7);

	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Boeing 747 insurance expires this month.");
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorPureRed.rgb); //"rgb(255, 0, 0)"
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItem(0)
		.getExternalLink().should.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(0)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info")
		.getTooltip()
		.should.be.equal("Insurance report of Boeing 747");

	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("ATR-72 insurance expires next month.");
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItem(0)
		.getIconColour()
		.should.contain("orange");
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItem(0)
		.isAnActiveItem().should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItem(0)
		.getExternalLink().should.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(1)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info")
		.getTooltip()
		.should.be.equal("Insurance report of ATR-72");

	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Fokker F-50 insurance expires in 6 months.");
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItem(0)
		.getIconColour()
		.should.contain("orange");
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItem(0)
		.getExternalLink().should.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(2)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info")
		.getTooltip()
		.should.be.equal("Insurance report of Fokker F-50");

	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Casa CN-235 insurance expires in 10 months.");
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane2").should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorNonStandardDarkGreen.rgb); //"rgb(0, 128, 0)"
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItem(0)
		.getExternalLink().should.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(3)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info")
		.getTooltip()
		.should.be.equal("Insurance report of Casa CN-235");

	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Boeing 757 insurance expires next month.");
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane3").should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItem(0)
		.getIconColour()
		.should.contain(colors.colorBlueMagenta.rgb); //"rgb(153, 0, 255)"
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(4)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info")
		.getTooltip()
		.should.be.equal("Insurance report of Boeing 757");

	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Boeing 737 insurance has expired last month.");
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItem(0)
		.hasSpecifiedIcon("aimms-airplane3").should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItem(0)
		.getIconColour()
		.should.contain("");
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItem(0)
		.isAnActiveItem().should.be.true;
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(5)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info").getTooltip().should.not.exist;

	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getHeader().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItemsCount()
		.should.be.equal(1);
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItem(0)
		.getDisplayText()
		.should.be.equal("Fokker F-100 insurance expires in 9 months.");
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItem(0)
		.getIcon().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItem(0)
		.isAnActiveItem().should.be.false;
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItem(0)
		.getExternalLink().should.not.exist;
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItem(0)
		.getItem()
		.scrollIntoView(true);
	findWidget("Planes Insurance Info")
		.getListGroup(6)
		.getListItem(0)
		.getItem()
		.moveTo();
	findWidget("Planes Insurance Info")
		.getTooltip()
		.should.be.equal("Insurance report of Fokker F-100");
});
