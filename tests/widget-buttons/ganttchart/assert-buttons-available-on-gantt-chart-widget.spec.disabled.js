/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"Asserting buttons available on header section of Gantt Chart widget, when on&off focus, on task click.",
	() => {
		loadPage("Main Project/Gantt Page");

		// While Gantt Chart widget is not hovered yet, asserting the buttons available.
		findWidget("The Gantt Chart")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover the title of Gantt Chart widget. And asserting the buttons available.
		findWidget("The Gantt Chart").movePointerToWidget(70, 20);
		findWidget("The Gantt Chart")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from Gantt Chart widget. Hover another widget on the page.
		findWidget("The Selected Job").movePointerToWidget(10, 5);

		// While Gantt Chart widget is not hovered, again asserting the buttons available.
		findWidget("The Gantt Chart")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Hover on a task of the Gantt Chart widget. And asserting the buttons available.
		findWidget("The Gantt Chart").movePointerToWidget(500, 150);
		findWidget("The Gantt Chart")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);

		// Move focus away from Gantt Chart widget. Hover another widget on the page.
		findWidget("The Selected Job").movePointerToWidget(10, 5);

		// Click on a task of the Gantt Chart widget. And asserting the buttons available.
		findWidget("The Gantt Chart")
			.findResource(["Klaas"])
			.findJob("Spare Time")
			.click();
		findWidget("The Gantt Chart")
			.getButtons()
			.should.eql([
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_FULL_SCREEN,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_WIDGET_MENU,
				WIDGET_HEADER_BUTTONS.CHROME_BUTTON_OPTION_DIALOG,
			]);
	}
);
