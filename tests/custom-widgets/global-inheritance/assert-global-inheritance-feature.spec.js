/*!
 * @AIMMS_FILE=models/CustomWidgets/OptionValueInheritance/OptionValueInheritance.aimms
 */

scenario(
	"Assert when value is at widget level,widget default level and at the application level",
	() => {
		loadPage("Main Project/Global Inheritance Page");

		findWidget("widget1")
			.getWidgetValue()
			.should.eql("5");

		findWidget("widget2")
			.getWidgetValue()
			.should.eql("8");

		findWidget("widget3")
			.getWidgetValue()
			.should.eql("7");
	}
);
