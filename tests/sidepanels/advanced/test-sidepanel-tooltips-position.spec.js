/*!
 * @AIMMS_FILE=models/SelectionBoxTooltips/SelectionBoxTooltips.aimms
 */

scenario(
	"Check that a tooltip displayed on a widget on a sidebar is not overlapped by the side panel itself.",
	() => {
		loadPage("Main Project/home");

		findWidget("home")
			.getSidepanels()
			.openSidepanelTab("Poet Bar");

		findWidget("Poetsbar").mouseHoverOverBar("Emily Dickinson");

		// When hidden by the side panel, the tooltip is overlapped by the blue text of the side panel tab name. When this test works OK,
		// the colour should be the grey of the tooltip instead.
		findWidget("Poetsbar")
			.pickColor(-27, 36)
			.should.beSameColorAs([
				colors.colorPrimitiveGrey80.r,
				colors.colorPrimitiveGrey80.g,
				colors.colorPrimitiveGrey80.b,
			]); // "Tooltip grey"
	}
);
