/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

const enabledItemActionRegular = {
	itemActionBackgroundColor: colors.colorPrimitiveWhite100.clear.rgbaWithWhitespace, // background color is not explicitly set, so it resolves to 'clear'
	iconColor: colors.colorPrimitiveGrey100.rgbWithWhitespace,
	displayTextColor: colors.colorPrimitiveGrey100.rgbWithWhitespace,
	cursorStyle: "pointer",
};

const enabledItemActionHover = {
	itemActionBackgroundColor: colors.colorPrimitiveTransparentBlack4.rgbaWithWhitespace,
	iconColor: colors.colorPrimitiveGrey100.rgbWithWhitespace,
	displayTextColor: colors.colorPrimitiveGrey100.rgbWithWhitespace,
	cursorStyle: "pointer",
};

const disabledItemActionRegular = {
	itemActionBackgroundColor: colors.colorPrimitiveWhite100.clear.rgbaWithWhitespace, // background color is not explicitly set, so it resolves to 'clear'
	iconColor: colors.colorPrimitiveTransparentBlack16.rgbaWithWhitespace,
	displayTextColor: colors.colorPrimitiveTransparentBlack16.rgbaWithWhitespace,
	cursorStyle: "not-allowed",
};

const disabledItemActionHover = {
	itemActionBackgroundColor: colors.colorPrimitiveWhite100.rgbWithWhitespace,
	iconColor: colors.colorPrimitiveTransparentBlack16.rgbaWithWhitespace,
	displayTextColor: colors.colorPrimitiveTransparentBlack16.rgbaWithWhitespace,
	cursorStyle: "not-allowed",
};

scenario(
	"Assert the display styles of item actions. And that on hover of an active and inactive item action.",
	() => {
		loadPage("Main Project/Shipping Schedules?_aimms_only_table_itemactions=true");

		// Close Page Manager
		closeAppManager();

		// Right click on cell (0,0).
		const itemActionsContextMenu = findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.rightClick();

		// Assert the styles of the item actions shown
		itemActionsContextMenu
			.getItemActionsStyles()
			.should.beEqualTo([
				enabledItemActionRegular,
				enabledItemActionRegular,
				enabledItemActionRegular,
				disabledItemActionRegular,
				enabledItemActionRegular,
			]);

		// Hover the 1st item action. It is an active item action.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getItemActions()
			.getItemActionDetails(0)
			.hover();

		// On hover of an active item action. Assert the styles of it.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getItemActions()
			.getItemActionsStyles()
			.should.beEqualTo([
				enabledItemActionHover,
				enabledItemActionRegular,
				enabledItemActionRegular,
				disabledItemActionRegular,
				enabledItemActionRegular,
			]);

		// Hover the 4th item action. It is an inactive item action.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getItemActions()
			.getItemActionDetails(3)
			.hover();

		// On hover of an inactive item action. Assert the styles of it.
		findWidget("Shipping Departure DateTime")
			.getCell(0, 0)
			.getItemActions()
			.getItemActionsStyles()
			.should.beEqualTo([
				enabledItemActionRegular,
				enabledItemActionRegular,
				enabledItemActionRegular,
				disabledItemActionHover,
				enabledItemActionRegular,
			]);
	}
);
