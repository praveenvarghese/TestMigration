/*!
 * @AIMMS_FILE=models/FastEditingTest/FastEditingTest.aimms
 */

scenario(
	"Validate add widget option is available for all the areas including unassigned and Plus button should not be available at the bottom of the page",
	() => {
		loadPage("Main Project/WidgetCreationPage");

		openPageConfigurator().assertAddWidgetButton().should.be.false;

		getPageConfigurator()
			.assertAddWidgetmenu("Area A")
			.should.eql("Add new widget");

		getPageConfigurator()
			.assertAddWidgetmenu("Area B")
			.should.eql("Add new widget");

		getPageConfigurator()
			.assertAddWidgetmenu("Area C")
			.should.eql("Add new widget");

		getPageConfigurator()
			.assertAddWidgetmenu("Area D")
			.should.eql("Add new widget");

		getPageConfigurator()
			.assertAddWidgetmenu("Unassigned widgets")
			.should.eql("Add new widget");

		//Assert for custom layout also add widget option is present

		getPageConfigurator().selectCustomLayoutsSection();

		getPageConfigurator().assertAddWidgetButton().should.be.false;

		getPageConfigurator().addACustomLayout();

		findDialog()
			.findButton("Save")
			.click();

		getPageConfigurator()
			.assertAddWidgetmenu("Area A")
			.should.eql("Add new widget");

		getPageConfigurator()
			.assertAddWidgetmenu("Unassigned widgets")
			.should.eql("Add new widget");
	}
);
