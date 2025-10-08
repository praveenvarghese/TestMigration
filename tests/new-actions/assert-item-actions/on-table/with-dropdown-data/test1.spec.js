/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"On a table with dropdown data. Right click on the data cells and assert item actions are shown. Update the data on the cells. Assert again right-click item actions are shown",
	() => {
		loadPage("Main Project/Shipping Schedules?_aimms_only_table_itemactions=true");

		// Close the Page Manager
		closeAppManager();

		findWidget("Shipping Departure DateTime")
			.getCell(4, 3)
			.rightClick(10, 10)
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Select next available slot as per Calendar.",
					icon: "aimms-calendar5",
					state: "active",
				},
				{
					title: "Other tasks on this Date",
					icon: "aimms-question",
					state: "active",
				},
				{
					title: "Add a reminder",
					icon: "aimms-mail",
					state: "active",
				},
				{
					title: "Reset Date",
					icon: "aimms-history",
					state: "inactive",
				},
				{
					title: "Clear Date",
					icon: "aimms-eraser2",
					state: "active",
				},
			]);

		// Right click on cell(0,0)

		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.rightClick()
			.getItemActions()
			.should.beEqualTo([
				{
					title: "Select next available slot as per Calendar.",
					icon: "aimms-calendar5",
					state: "active",
				},
				{ title: "Other tasks on this Date", icon: "aimms-question", state: "active" },
				{
					title: "Add a reminder",
					icon: "aimms-mail",
					state: "active",
				},
				{
					title: "Reset Date",
					icon: "aimms-history",
					state: "inactive",
				},
				{
					title: "Clear Date",
					icon: "aimms-eraser2",
					state: "active",
				},
			]);

		// Assert StoreFocus entries are updated for above action
		findWidget("Store Focus")
			.getValue("SelectedIdentifier")
			.should.be.equal("ShippingDepartureDateTime");
		findWidget("Store Focus")
			.getValue("SelectedIsland1")
			.should.be.equal("Isla de La Palma");
		findWidget("Store Focus")
			.getValue("SelectedIsland2")
			.should.be.equal("Isla de La Palma");
	}
);
