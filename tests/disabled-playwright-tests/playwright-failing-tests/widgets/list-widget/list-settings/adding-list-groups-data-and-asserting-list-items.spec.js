/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Adding List-Groups data to a list widget and asserting the list items.", () => {
	loadPage("Main Project/Planes Info");

	closeAppManager();

	findWidget("List").getEmptyWidgetMessage().should.exist;

	// Set "LW_GroupsData" identifier to "List Groups" option entry.
	findWidget("List")
		.openListSettingsOptionEditor()
		.setOptions([
			{
				name: "List Groups",
				value: "LW_GroupsData",
				valueType: "IDENTIFIER",
				sliceInfo: null,
			},
		]);

	findWidget("List").getEmptyWidgetMessage().should.not.exist;
	findWidget("List")
		.getListGroupsCount()
		.should.be.equal(7);
	findWidget("List")
		.getVisibleListGroupsCount()
		.should.be.equal(7);

	findWidget("List")
		.getListGroup(0)
		.getHeaderText()
		.should.contain("Boeing 747");
	findWidget("List")
		.getListGroup(0)
		.getListItemsCount()
		.should.be.equal(0);
	findWidget("List")
		.getListGroup(1)
		.getHeaderText()
		.should.contain("ATR-72");
	findWidget("List")
		.getListGroup(1)
		.getListItemsCount()
		.should.be.equal(0);
	findWidget("List")
		.getListGroup(2)
		.getHeaderText()
		.should.contain("Fokker F-50");
	findWidget("List")
		.getListGroup(2)
		.getListItemsCount()
		.should.be.equal(0);
	findWidget("List")
		.getListGroup(3)
		.getHeaderText()
		.should.contain("Casa CN-235");
	findWidget("List")
		.getListGroup(3)
		.getListItemsCount()
		.should.be.equal(0);
	findWidget("List")
		.getListGroup(4)
		.getHeaderText()
		.should.contain("Boeing 757");
	findWidget("List")
		.getListGroup(4)
		.getListItemsCount()
		.should.be.equal(0);
	findWidget("List")
		.getListGroup(5)
		.getHeaderText()
		.should.contain("Boeing 737");
	findWidget("List")
		.getListGroup(5)
		.getListItemsCount()
		.should.be.equal(0);
	findWidget("List")
		.getListGroup(6)
		.getHeaderText()
		.should.contain("Fokker F-100");
	findWidget("List")
		.getListGroup(6)
		.getListItemsCount()
		.should.be.equal(0);

	// Navigate to another page and come back
	getPageMenu().navigateToPage("Main Project/Planes Info/Tasks");
	getPageMenu().navigateToPage("Main Project/Planes Info");

	findWidget("List").getEmptyWidgetMessage().should.not.exist;
	findWidget("List")
		.getListGroupsCount()
		.should.be.equal(7);
	findWidget("List")
		.getVisibleListGroupsCount()
		.should.be.equal(7);

	findWidget("List")
		.getListGroup(0)
		.getHeaderText()
		.should.contain("Boeing 747");
	findWidget("List")
		.getListGroup(0)
		.getHeader()
		.moveTo();
	findWidget("List")
		.getTooltip()
		.should.be.equal("Boeing 747 airplane");
	findWidget("List")
		.getListGroup(0)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List")
		.getListGroup(1)
		.getHeaderText()
		.should.contain("ATR-72");
	findWidget("List")
		.getListGroup(1)
		.getHeader()
		.moveTo();
	findWidget("List")
		.getTooltip()
		.should.be.equal("ATR 50 airplane");
	findWidget("List")
		.getListGroup(1)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List")
		.getListGroup(2)
		.getHeaderText()
		.should.contain("Fokker F-50");
	findWidget("List")
		.getListGroup(2)
		.getHeader()
		.moveTo();
	findWidget("List").getTooltip().should.not.exist;
	findWidget("List")
		.getListGroup(2)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List")
		.getListGroup(3)
		.getHeaderText()
		.should.contain("Casa CN-235");
	findWidget("List")
		.getListGroup(3)
		.getHeader()
		.moveTo();
	findWidget("List")
		.getTooltip()
		.should.be.equal("Casa CN-235 airplane");
	findWidget("List")
		.getListGroup(3)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List")
		.getListGroup(4)
		.getHeaderText()
		.should.contain("Boeing 757");
	findWidget("List")
		.getListGroup(4)
		.getHeader()
		.moveTo();
	findWidget("List")
		.getTooltip()
		.should.be.equal("Boeing 757 airplane");
	findWidget("List")
		.getListGroup(4)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List")
		.getListGroup(5)
		.getHeaderText()
		.should.contain("Boeing 737");
	findWidget("List")
		.getListGroup(5)
		.getHeader()
		.moveTo();
	findWidget("List").getTooltip().should.not.exist;
	findWidget("List")
		.getListGroup(5)
		.getListItemsCount()
		.should.be.equal(0);

	findWidget("List")
		.getListGroup(6)
		.getHeaderText()
		.should.contain("Fokker F-100");
	findWidget("List")
		.getListGroup(6)
		.getHeader()
		.scrollIntoView(true);
	findWidget("List")
		.getListGroup(6)
		.getHeader()
		.moveTo();
	findWidget("List")
		.getTooltip()
		.should.be.equal("Fokker F-100 airplane");
	findWidget("List")
		.getListGroup(6)
		.getListItemsCount()
		.should.be.equal(0);
});
