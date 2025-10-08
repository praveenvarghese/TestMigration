/*!
 * @AIMMS_FILE=models/SidepanelExample/SidepanelExample.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"With StatusBar messages data updated, assert the styles of Status Bar Messages and on hover of them.",
	() => {
		loadPage("Main Project/Status Bar Messages");

		// Update StatusBar Messages data
		findWidget("Update StatusBar Data").click();

		// Assert the Styles of all Status Bar Messages on page load.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 1st Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveAccentBlue100.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 2nd Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(1)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 3rd Status Bar message. This is an inactive Status message.

		getStatusBar()
			.getStatusBarMessageDetails(2)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 4th Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(3)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 5th Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(4)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveAccentBlue100.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 6th Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(5)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveAccentBlue100.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);

		// Hover the 7th Status Bar message. This is an active Status message.

		getStatusBar()
			.getStatusBarMessageDetails(6)
			.hover(30, 5);

		// Assert the Styles of all Status Bar Messages now.

		getStatusBar()
			.getStatusBarMessageStyles()
			.should.beEqualTo([
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPureRed.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardMediumYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: null,
					IconColor: colors.colorNonStandardDarkBlue.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "default",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: null,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey100.clear.rgbaWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveGrey80.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
				{
					MessageBackground: colors.colorPrimitiveGrey5.rgbWithWhitespace,
					HeaderTextColor: colors.colorPrimitiveGrey40.rgbWithWhitespace,
					IconColor: colors.colorNonStandardOrangeYellow.rgbWithWhitespace,
					MessageTextColor: colors.colorPrimitiveAccentBlue100.rgbWithWhitespace,
					CursorStyle: "pointer",
				},
			]);
	}
);
