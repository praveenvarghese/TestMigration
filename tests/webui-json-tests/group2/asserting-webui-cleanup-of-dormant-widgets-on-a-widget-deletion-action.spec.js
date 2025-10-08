/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"With dormant widgets details available on WebUI json file. On deleting a widget, assert WebUI.json file cleanup is done.",
	() => {
		loadPage("Main Project/WebUI Json?_aimms_only_persistence.write=true");

		// Delete a widget
		openWidgetManager().deleteWidget("Dummy Button");

		// Reload WebUI.json file contents onto "WebUIjson_Data" String parameter
		findWidget("Read WebUIjson").click();

		// Scalar widget is loaded with "WebUIjson_Data" String parameter data. Get the value of this string parameter.
		const webuijson = findWidget("WebUI json data").getValue();

		// Assert properties of dormant widgets are all cleaned up from WebUI.json data.
		webuijson.should.not.contain(`"widgets/MKG_Dormant_Scalar_Widget_1": {`);
		webuijson.should.not.contain(`"widgets/MKG_Dormant_Group1_Widget":`);
		webuijson.should.not.contain(`"widgets/MKG_Dormant_Group1_Child_Btn1":`);
		webuijson.should.not.contain(`"widgets/MKG_Dormant_Group1_Child_Btn2":`);
		webuijson.should.not.contain(`"widgets/MKG_Dormant_Group1_Child_Btn3":`);
	}
);
