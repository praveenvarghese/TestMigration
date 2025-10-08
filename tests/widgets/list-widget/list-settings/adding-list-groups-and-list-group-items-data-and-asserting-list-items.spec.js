/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=long
 */

scenario(
	"Adding List-Groups and List-Group-Items data to a list widget and asserting the list items.",
	() => {
		loadPage("Main Project/Planes Info");

		closeAppManager();

		findWidget("Planes Audit Info").getEmptyWidgetMessage().should.exist;

		// Set "LW_GroupsData" identifier to "List Groups" option entry.
		// Set "LW_Planes_InsuranceData" identifier to "List Group Items" option entry.

		findWidget("Planes Audit Info")
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

		findWidget("Planes Audit Info").getEmptyWidgetMessage().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroupsCount()
			.should.be.equal(7);
		findWidget("Planes Audit Info")
			.getVisibleListGroupsCount()
			.should.be.equal(3);

		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getHeaderText()
			.should.contain("Boeing 747");
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Boeing 747 airplane");
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItemsCount()
			.should.be.equal(2);
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Total Flight hours: 1380 hrs.");
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane2").should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorNonStandardDarkGreen.rgb); //"rgb(0, 128, 0)"
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Total flight hours of Boeing 747");
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(1)
			.getDisplayText()
			.should.be.equal("Maintenance report");
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(1)
			.hasSpecifiedIcon("aimms-stars").should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(1)
			.getIconColour()
			.should.contain(colors.colorPureRed.rgb); //"rgb(255, 0, 0)""
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(1)
			.isAnActiveItem().should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(1)
			.getExternalLink().should.exist;
		findWidget("Planes Audit Info")
			.getListGroup(0)
			.getListItem(1)
			.getItem()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Last Maintenance report.");

		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getHeaderText()
			.should.contain("ATR-72");
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("ATR 50 airplane");
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItemsCount()
			.should.be.equal(2);
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("Total Flight hours: 940 hrs.");
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-airplane3").should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorNonStandardDarkGreen.rgb);
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(0)
			.isAnActiveItem().should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Total flight hours of Fokker F-50");
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(1)
			.getDisplayText()
			.should.be.equal("Maintenance report");
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(1)
			.hasSpecifiedIcon("aimms-stars").should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(1)
			.getIconColour()
			.should.contain(colors.colorTangerineYellow.rgb); //"rgb(255, 204, 0)"
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(1)
			.isAnActiveItem().should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(1)
			.getExternalLink().should.exist;
		findWidget("Planes Audit Info")
			.getListGroup(1)
			.getListItem(1)
			.getItem()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Last Maintenance report.");

		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getHeaderText()
			.should.contain("Fokker F-50");
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info").getTooltip().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("No updates!");
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-unlink3").should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorPureRed.rgb);
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroup(2)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Planes Audit Info").getTooltip().should.not.exist;

		findWidget("Planes Audit Info")
			.getListGroup(6)
			.getHeader()
			.scrollIntoView(true);

		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getHeaderText()
			.should.contain("Casa CN-235");
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Casa CN-235 airplane");
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItemsCount()
			.should.be.equal(1);
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItem(0)
			.getDisplayText()
			.should.be.equal("No updates!");
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItem(0)
			.hasSpecifiedIcon("aimms-unlink3").should.be.true;
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItem(0)
			.getIconColour()
			.should.contain(colors.colorPureRed.rgb);
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItem(0)
			.isAnActiveItem().should.be.false;
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItem(0)
			.getExternalLink().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroup(3)
			.getListItem(0)
			.getItem()
			.moveTo();
		findWidget("Planes Audit Info").getTooltip().should.not.exist;

		findWidget("Planes Audit Info")
			.getListGroup(4)
			.getHeaderText()
			.should.contain("Boeing 757");
		findWidget("Planes Audit Info")
			.getListGroup(4)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Boeing 757 airplane");
		findWidget("Planes Audit Info")
			.getListGroup(4)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Planes Audit Info")
			.getListGroup(5)
			.getHeaderText()
			.should.contain("Boeing 737");
		findWidget("Planes Audit Info")
			.getListGroup(5)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info").getTooltip().should.not.exist;
		findWidget("Planes Audit Info")
			.getListGroup(5)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Planes Audit Info")
			.getListGroup(6)
			.getHeaderText()
			.should.contain("Fokker F-100");
		findWidget("Planes Audit Info")
			.getListGroup(6)
			.getHeader()
			.scrollIntoView(true);
		findWidget("Planes Audit Info")
			.getListGroup(6)
			.getHeader()
			.moveTo();
		findWidget("Planes Audit Info")
			.getTooltip()
			.should.be.equal("Fokker F-100 airplane");
		findWidget("Planes Audit Info")
			.getListGroup(6)
			.getListItemsCount()
			.should.be.equal(0);
	}
);
