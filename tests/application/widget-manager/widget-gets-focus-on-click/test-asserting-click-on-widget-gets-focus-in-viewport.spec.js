/*!
 * @AIMMS_FILE=models/IslandsModel/Islands.aimms
 */

scenario(
	"Test asserting click on the widget name in widget-manager, gets focus of the respective widget within the viewport.",
	() => {
		loadPage("Main Project/Charts");

		// Set MaxColumns of the page to 6, so that few of the widgets are outside viewport.
		findWidget("new_page")
			.openMiscellaneousOptionEditor()
			.getMiscOption("maxcolumns")
			.setValue({
				value: "6",
			});

		//Based on the viewport, verifying few widgets are seen within the viewport while others are not.
		findWidget("Barchart").isDisplayedInViewport().should.be.true;
		findWidget("GanttChart").isDisplayedInViewport().should.be.false;
		findWidget("SetValues").isDisplayedInViewport().should.be.false;

		openWidgetManager().OpenWidgetDetails("GanttChart");

		//Based on the viewport, verifying few widgets are seen within the viewport while others are not.
		findWidget("Barchart").isDisplayedInViewport().should.be.false;
		findWidget("GanttChart").isDisplayedInViewport().should.be.true;
		findWidget("SetValues").isDisplayedInViewport().should.be.true;

		openWidgetManager().OpenWidgetDetails("Treemap");

		//Based on the viewport, verifying few widgets are seen within the viewport while others are not.
		findWidget("Barchart").isDisplayedInViewport().should.be.false;
		findWidget("GanttChart").isDisplayedInViewport().should.be.true;
		findWidget("SetValues").isDisplayedInViewport().should.be.false;
	}
);
