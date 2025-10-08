/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario(
	"Updating List-Group-Items data on a list widget and asserting the list items shown.",
	() => {
		loadPage("Main Project/Planes Info/Tasks");

		closeAppManager();

		findWidget("Plane Info Tasks").getEmptyWidgetMessage().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroupsCount()
			.should.be.equal(7);
		findWidget("Plane Info Tasks")
			.getVisibleListGroupsCount()
			.should.be.equal(3);

		// Set "LW_Planes_InsuranceData" identifier to "List Group Items" option entry.
		findWidget("Plane Info Tasks")
			.openListSettingsOptionEditor()
			.setOptions([
				{
					name: "List Group Items",
					value: "LW_Planes_InsuranceData",
					valueType: "IDENTIFIER",
					sliceInfo: null,
				},
			]);

		findWidget("Plane Info Tasks").getEmptyWidgetMessage().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroupsCount()
			.should.be.equal(7);
		findWidget("Plane Info Tasks")
			.getVisibleListGroupsCount()
			.should.be.equal(4);

		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getHeaderText()
			.should.contain("Boeing 747");
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Boeing 747 airplane");
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Boeing 747 insurance expires this month.");
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane2").should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorPureRed.rgb); //"rgb(255, 0, 0)"
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItem(0)
			.getExternalLink().should.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Insurance report of Boeing 747");

		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getHeaderText()
			.should.contain("ATR-72");
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("ATR 50 airplane");
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("ATR-72 insurance expires next month.");
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane2").should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItem(0)
			.getIconColour()
			.should.contain("orange");
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItem(0)
			.isAnActiveItem().should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItem(0)
			.getExternalLink().should.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Insurance report of ATR-72");

		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getHeaderText()
			.should.contain("Fokker F-50");
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks").getTooltip().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Fokker F-50 insurance expires in 6 months.");
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane2").should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItem(0)
			.getIconColour()
			.should.contain("orange");
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItem(0)
			.getExternalLink().should.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Insurance report of Fokker F-50");

		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getHeaderText()
			.should.contain("Casa CN-235");
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Casa CN-235 airplane");
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Casa CN-235 insurance expires in 10 months.");
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane2").should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorNonStandardDarkGreen.rgb); //"rgb(0, 128, 0)"
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItem(0)
			.getExternalLink().should.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Insurance report of Casa CN-235");

		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.getItem()
			.scrollIntoView(true);

		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getHeaderText()
			.should.contain("Boeing 757");
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Boeing 757 airplane");
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Boeing 757 insurance expires next month.");
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane3").should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorBlueMagenta.rgb); // "rgb(153, 0, 255)");
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Insurance report of Boeing 757");

		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getHeaderText()
			.should.contain("Boeing 737");
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks").getTooltip().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Boeing 737 insurance has expired last month.");
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane3").should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItem(0)
			.getIconColour()
			.should.contain("");
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItem(0)
			.isAnActiveItem().should.be.true;
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks").getTooltip().should.not.exist;

		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getHeaderText()
			.should.contain("Fokker F-100");
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getHeader()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Fokker F-100 airplane");
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Fokker F-100 insurance expires in 9 months.");
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.getIcon().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.getItem()
			.scrollIntoView(true);
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Plane Info Tasks")
			.getTooltip()
			.should.be.equal("Insurance report of Fokker F-100");
	}
);
