/*!
 * @AIMMS_FILE=models/WebUIjsonTests/WebUIjsonTests.aimms
 */

scenario(
	"With dormant widgets details available on WebUI json file. On load of WEBUI, assert WebUI.json file cleanup is done.",
	() => {
		loadPage("Main Project/WebUI Json?_aimms_only_persistence.write=true");

		// load WebUI.json file contents onto "WebUIjson_Data" String parameter
		findWidget("Read WebUIjson").click();

		// Assert properties of dormant widgets are all cleaned up from WebUI.json data.
		findWidget("WebUI json data")
			.getValue()
			.should.not.contain(`"widgets/MKG_Dormant_Scalar_Widget_1": {`);
		findWidget("WebUI json data")
			.getValue()
			.should.not.contain(`"widgets/MKG_Dormant_Group1_Widget":`);
		findWidget("WebUI json data")
			.getValue()
			.should.not.contain(`"widgets/MKG_Dormant_Group1_Child_Btn1":`);
		findWidget("WebUI json data")
			.getValue()
			.should.not.contain(`"widgets/MKG_Dormant_Group1_Child_Btn2":`);
		findWidget("WebUI json data")
			.getValue()
			.should.not.contain(`"widgets/MKG_Dormant_Group1_Child_Btn3":`);
	}
);
