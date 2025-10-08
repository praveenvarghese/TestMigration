/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @DURATION=medium
 */

scenario(
	"Delete List-Group-Items and List-Groups data on a list widget and assert the data shown.",
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

		// Clear value of "List Group Items" option entry.
		findWidget("Plane Info Tasks")
			.openListSettingsOptionEditor()
			.clearOptions([{ name: "List Group Items" }]);

		findWidget("Plane Info Tasks").getEmptyWidgetMessage().should.not.exist;
		findWidget("Plane Info Tasks")
			.getListGroupsCount()
			.should.be.equal(7);
		findWidget("Plane Info Tasks")
			.getVisibleListGroupsCount()
			.should.be.equal(7);

		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getHeaderText()
			.should.contain("Boeing 747");
		findWidget("Plane Info Tasks")
			.getListGroup(0)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getHeaderText()
			.should.contain("ATR-72");
		findWidget("Plane Info Tasks")
			.getListGroup(1)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getHeaderText()
			.should.contain("Fokker F-50");
		findWidget("Plane Info Tasks")
			.getListGroup(2)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getHeaderText()
			.should.contain("Casa CN-235");
		findWidget("Plane Info Tasks")
			.getListGroup(3)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getHeaderText()
			.should.contain("Boeing 757");
		findWidget("Plane Info Tasks")
			.getListGroup(4)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getHeaderText()
			.should.contain("Boeing 737");
		findWidget("Plane Info Tasks")
			.getListGroup(5)
			.getListItemsCount()
			.should.be.equal(0);

		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getHeaderText()
			.should.contain("Fokker F-100");
		findWidget("Plane Info Tasks")
			.getListGroup(6)
			.getListItemsCount()
			.should.be.equal(0);

		// Clear value of "List Groups" option entry.
		findWidget("Plane Info Tasks")
			.openListSettingsOptionEditor()
			.clearOptions([{ name: "List Groups" }]);

		// Assert there are no data on list widget.
		findWidget("Plane Info Tasks").getEmptyWidgetMessage().should.exist;
	}
);
